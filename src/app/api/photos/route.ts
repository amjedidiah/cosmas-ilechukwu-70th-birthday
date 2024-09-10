import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOLDER_NAME = "dr-cosmas-at-70";

export async function GET() {
  try {
    const { resources } = await cloudinary.search
      .expression(`folder:${FOLDER_NAME} AND resource_type:image`)
      .sort_by("created_at", "desc")
      .max_results(100)
      .execute();

    return NextResponse.json({
      mediaItems: resources.map((resource: any) => ({
        id: resource.public_id,
        src: resource.secure_url,
        width: resource.width,
        height: resource.height,
        alt: resource.filename,
      })),
    });
  } catch (response) {
    const error = (response as any)?.error;
    console.error("Error fetching photos:", error);

    return NextResponse.json(
      {
        error: `Error fetching photos: ${
          error?.message ?? "An unknown error occurred"
        }`,
      },
      { status: 500 }
    );
  }
}
