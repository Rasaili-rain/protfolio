import { readdir } from "fs/promises";
import { join } from "path";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const folderPath = searchParams.get("path");

  if (!folderPath) {
    return NextResponse.json({ error: "Path parameter is required" }, { status: 400 });
  }

  try {
    const publicPath = join(process.cwd(), "public", folderPath);
    const files = await readdir(publicPath);

    const imageFiles = files
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort()
      .map((file) => `${folderPath}/${file}`);

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error("Error reading directory:", error);
    return NextResponse.json({ error: "Failed to read directory" }, { status: 500 });
  }
}
