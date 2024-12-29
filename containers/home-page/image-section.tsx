"use client";

// import { useImage } from "@/stores/image-store";
import { useUploadDialog } from "@/stores/upload-dialog-store";
import Image from "next/image";
export default function ImageSection() {
  // const { image } = useImage();
  const { open } = useUploadDialog();

  const image = localStorage.getItem("imageFile");
  // const splitImageURL = image?.split(",")[1];
  // const decodedImageURL = atob(splitImageURL as string);
  // console.log(decodedImageURL);

  return (
    <section className="pt-10 grid mx-auto px-96 space-y-5">
      {image && !open && (
        <Image src={image} alt="road" width={1000} height={1000}></Image>
      )}
    </section>
  );
}
