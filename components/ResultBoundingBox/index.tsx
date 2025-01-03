import { useData } from "@/stores/data-store";
import Image from "next/image";
import HeaderTwo from "../core/HeaderTwo";

export default function BoundingBoxResult() {
  const { data } = useData();
  const splitImage = data.bounding_boxes.pop();

  return (
    <div className="flex justify-center items-center">
      {splitImage ? (
        <Image
          src={splitImage as string}
          width={300}
          height={300}
          className="rounded-xl"
          alt="Split Image"
        ></Image>
      ) : (
        <HeaderTwo>Tidak ada bounding box</HeaderTwo>
      )}
    </div>
  );
}
