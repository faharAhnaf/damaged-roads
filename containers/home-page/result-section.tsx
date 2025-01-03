"use client";

import HeaderOne from "@/components/core/HeaderOne";
import AccurationResult from "@/components/ResultAccuration";
import LocationResult from "@/components/ResultLocation";
import { Separator } from "@/components/ui/separator";
import { useImageUrl } from "@/stores/image-url-store";
import { useLoadingApi } from "@/stores/loading-api-store";
import BoundingBoxResult from "@/components/ResultBoundingBox";

export default function ResultSection() {
  const { url } = useImageUrl();
  const { loading } = useLoadingApi();
  return (
    <section className="pt-10 grid grid-cols-3 ">
      {url && !loading && (
        <>
          {[
            { title: "akurasi", section: <AccurationResult /> },
            { title: "bounding box", section: <BoundingBoxResult /> },
            { title: "lokasi", section: <LocationResult /> },
          ].map((item, index) => (
            <span key={index} className="space-y-5 mx-5">
              <div className="flex flex-col justify-center items-center ">
                <HeaderOne key={index}>
                  {item.title.slice(0, 1).toUpperCase() + item.title.slice(1)}
                </HeaderOne>
                <Separator />
              </div>
              <div>{item.section}</div>
            </span>
          ))}
        </>
      )}
    </section>
  );
}
