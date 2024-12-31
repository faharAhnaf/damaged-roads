"use client";
import LoadingImage from "@/components/core/LoadingImage";
import { useLoadingApi } from "@/stores/loading-api-store";
// import { useToast } from "@/hooks/use-toast";
// import { Button } from "@/components/ui/button";
// import { useImage } from "@/stores/image-store";
import Image from "next/image";
// import { useUploadButton } from "@/stores/upload-button-store";
// import { useImage } from "@/stores/image-store";
import { useEffect } from "react";
import { useImageUrl } from "@/stores/image-url-store";
// import { set } from "react-hook-form";
export default function ImageSection() {
  // const { image, setImage } = useImage();
  // const { toast } = useToast();
  // const setOpenUploadButton = useUploadButton((s) => s.setOpen);
  // const [imageURL, setImageURL] = useState<string | null>(null);
  const { loading, setLoading } = useLoadingApi();
  const { url, setUrl } = useImageUrl();

  useEffect(() => {
    const imageURL = localStorage.getItem("imageFile");
    // setImage(true);
    setLoading(false);
    setUrl(imageURL as string);
  }, [setLoading, setUrl]);

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
    <section className="grid mx-auto w-96 pt-10">
      {url && loading && <LoadingImage imageURL={url} />}
      {url && !loading && (
        <>
          <Image
            src={url}
            alt="road"
            width={500}
            height={500}
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
