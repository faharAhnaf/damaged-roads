import NavbarSection from "@/containers/navbar-section";
import UploadSection from "@/containers/home-page/upload-section";
import ImageSection from "@/containers/home-page/image-section";

export default function HomePage() {
  return (
    <main className="relative">
      <NavbarSection />
      <UploadSection />
      <ImageSection />
    </main>
  );
}
