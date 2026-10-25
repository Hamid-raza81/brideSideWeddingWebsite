import { ImageResponse } from "next/og";
import { weddingData } from "@/data/wedding";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Generate the browser icon from the couple initials in weddingData.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background: "#243A2D",
          color: "#F2DFAA",
          border: "3px solid #C8A459",
          fontFamily: "Georgia, serif",
          fontSize: 20,
          letterSpacing: -1,
        }}
      >
        {weddingData.monogram.replaceAll(" ", "")}
      </div>
    ),
    size,
  );
}
