import { lemonSqueezyApiInstance } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const reqData = await req.json();

    if (!reqData.productId) {
      return NextResponse.json(
        { message: "productId is required" },
        { status: HttpStatusCode.BadRequest }
      );
    }

    if (!reqData.userId) {
      return NextResponse.json(
        { message: "userId is required" },
        { status: HttpStatusCode.BadRequest }
      );
    }

    const response = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        attributes: {
          checkout_data: {
            custom: {
              user_id: reqData.userId.toString(),
            },
          },
        },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMONSQUEEZY_STORE_ID?.toString(),
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occurred" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
