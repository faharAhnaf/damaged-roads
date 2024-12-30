"use client";
import LoadingImage from "@/components/core/LoadingImage";
import { useLoadingApi } from "@/stores/loading-api-store";
// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
import { useImage } from "@/stores/image-store";
import Image from "next/image";
// import { useUploadButton } from "@/stores/upload-button-store";
// import { useImage } from "@/stores/image-store";
import { useEffect, useState } from "react";
export default function ImageSection() {
  const { image, setImage } = useImage();
  // const { toast } = useToast();
  // const setOpenUploadButton = useUploadButton((s) => s.setOpen);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { loading, setLoading } = useLoadingApi();

  useEffect(() => {
    const imageURL = localStorage.getItem("imageFile");
    setImage(true);
    setLoading(false);
    setImageURL(imageURL);
  }, [setImage, setLoading]);

  useEffect(() => {
    const loadImages = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
    };

    loadImages();
  }, []);

  // const splitImageURL = image?.split(",")[1];
  // const decodedImageURL = atob(splitImageURL as string);
  // console.log(decodedImageURL);

  return (
    <section className="pt-10 grid mx-auto px-96 space-y-5">
      {imageURL && loading && image && <LoadingImage imageURL={imageURL} />}
      {imageURL && !loading && image && (
        <>
          <Image
            src={imageURL}
            alt="road"
            width={1000}
            height={1000}
            className="rounded-xl"
          ></Image>
          {/* <div className="grid mx-auto gap-3 grid-cols-2">
            <Button variant={"outline"}>Generate Gambar ✨</Button>
            <Button
              variant={"outline"}
              onClick={() => {
                localStorage.removeItem("imageFile");
                toast({
                  title: "Gambar Berhasil Dihapus",
                });
                setOpenUploadButton(true);
                setImage(false);
              }}
            >
              Batalkan
            </Button>
          </div> */}
        </>
      )}
    </section>
  );
}
