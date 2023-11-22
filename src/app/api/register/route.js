import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
export async function POST(req) {
  try {
    const { name, email, password, image } = await req.json();
    await connectMongoDB();
    if (!password?.length || password.length < 6) {
      return NextResponse.json({ message: "An error." }, { status: 500 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hashedPassword, image });
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "An error." }, { status: 500 });
  }
}
