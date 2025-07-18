import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Item from "@/lib/models/Item";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  await dbConnect();

  const data = await req.formData();

  const name = data.get("name");
  const description = data.get("description");
  const category = data.get("category");
  const pricePerKg = data.get("pricePerKg");
  const image = data.get("image");

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadPath = path.join(process.cwd(), "public/uploads", image.name);
  await writeFile(uploadPath, buffer);

  const item = await Item.create({
    name,
    description,
    category,
    pricePerKg,
    imageUrl: `/uploads/${image.name}`,
  });

  return NextResponse.json({ message: "Item added", item });
}
// app/api/items/route.js
import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Item from "@/lib/models/Item";
import fs from "fs";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  await dbConnect();

  const data = await req.formData();

  const name = data.get("name");
  const description = data.get("description");
  const category = data.get("category");
  const pricePerKg = data.get("pricePerKg");
  const image = data.get("image");

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadPath = path.join(process.cwd(), "public/uploads", image.name);
  await writeFile(uploadPath, buffer);

  const item = await Item.create({
    name,
    description,
    category,
    pricePerKg,
    imageUrl: `/uploads/${image.name}`,
  });

  return NextResponse.json({ message: "Item added", item });
}
