import { getServerSession } from "next-auth";
import { connectMongoDB } from "../../../libs/mongodb";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
export async function PUT(req) {
  try {
    await connectMongoDB();
    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    console.log({ session, data });
    if ("name" in data) {
      //update user name
    }
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "An error." }, { status: 500 });
  }
}
