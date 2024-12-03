import crypto from "crypto";
import prisma from "@/lib/prisma"; 
import { LEMONSQUEEZY_WEBHOOK_EVENT } from "@/types";
import { HttpStatusCode } from "axios";

export async function POST(req: Request) {
  try {
    const clonedReq = req.clone();
    const eventType = req.headers.get("X-Event-Name");
    const body = await req.json();

    const secret: string = process.env.LEMONSQUEEZY_WEBHOOK_SIGNATURE!;
    const hmac = crypto.createHmac("sha256", secret);
    const digest = Buffer.from(
      hmac.update(await clonedReq.text()).digest("hex"),
      "utf-8"
    );
    const signature = Buffer.from(
      req.headers.get("X-Signature") || "",
      "utf-8"
    );

    if (!crypto.timingSafeEqual(digest, signature)) {
      throw new Error("Invalid signature");
    }

    if (eventType === LEMONSQUEEZY_WEBHOOK_EVENT.ORDER_CREATED) {
      const userId = body.meta.custom_data.user_id;
      const isSuccess = body.data.attributes.status === "paid";
      
      if (isSuccess) {
        const amountPaid = body.data.attributes.total_usd;

        await prisma.donationGoal.updateMany({
          data: {
            current_amount: {
              increment: amountPaid
            }
          }
        });

        await prisma.donors.upsert({
          where: {
            user_id: userId
          },
          create: {
            user_id: userId,
            amount: amountPaid
          },
          update: {
            amount: {
              increment: amountPaid
            }
          }
        });
      }
    }

    return Response.json({ message: "Webhook received" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Server error" }, { status: HttpStatusCode.InternalServerError });
  }
}