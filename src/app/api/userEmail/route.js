import { connectMongoDB } from "@/libs/mongodb";
import { NextResponse } from "next/server";
import UserEmail from "../../../models/UserEmail";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await UserEmail.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
