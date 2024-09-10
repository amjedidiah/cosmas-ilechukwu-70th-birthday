"use client";
import { CldPhoto } from "@/lib/types";
import { useState, useEffect, useCallback } from "react";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PhotoGallery() {
  const [photos, setPhotos] = useState<CldPhoto[]>();
  const [index, setIndex] = useState(-1);

  const fetchPhotos = useCallback(async () => {
    const response = await fetch("/api/photos");
    const data = await response.json();
    setPhotos(data.mediaItems);
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  if (!photos) return null;

  return (
    <div className="container">
      <PhotoAlbum
        layout="masonry"
        skeleton
        spacing={0}
        columns={(containerWidth) => {
          if (containerWidth < 480) return 2;
          if (containerWidth < 768) return 3;
          if (containerWidth < 1024) return 4;
          if (containerWidth < 1280) return 5;
          return 6;
        }}
        photos={photos}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}
