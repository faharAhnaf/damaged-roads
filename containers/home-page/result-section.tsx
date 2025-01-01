import HeaderOne from "@/components/core/HeaderOne";
import AccurationResult from "@/components/ResultAccuration";
import DescriptionResult from "@/components/ResultDescription";
import LocationResult from "@/components/ResultLocation";
import { Separator } from "@/components/ui/separator";

export default function ResultSection() {
  return (
    <section className="pt-10 grid grid-cols-3 ">
      {[
        { title: "akurasi", section: <AccurationResult /> },
        { title: "deskripsi", section: <DescriptionResult /> },
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
    </section>
  );
}
