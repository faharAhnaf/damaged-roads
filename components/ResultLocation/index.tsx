import { useData } from "@/stores/data-store";

export default function LocationResult() {
  const { data } = useData();

  if (!data.lat || !data.long) {
  }

  return (
    <div className="flex flex-col items-center h-72">
      <iframe
        className="rounded-xl w-full h-full"
        style={{ border: 0 }}
        scrolling="no"
        src={`https://maps.google.com/maps?q=${data.lat},${data.long}&hl=us&z=14&output=embed`}
        title="Google Map"
      ></iframe>
    </div>
  );
}
