import prisma from "@/lib/prisma";
import { HttpStatusCode } from "axios";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const donationGoal = await prisma.donationGoal.findFirst();

    if (!donationGoal) {
      return Response.json(
        { message: "Donation goal not found" },
        { status: HttpStatusCode.NotFound }
      );
    }

    return Response.json(donationGoal);
  } catch (error) {
    console.log(error);
    return Response.json(
      { message: "Server error" },
      { status: HttpStatusCode.InternalServerError }
    );
  }
}
