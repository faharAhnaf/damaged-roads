import NavbarSection from "@/containers/navbar-section";
import UploadSection from "@/containers/home-page/upload-section";
import ImageSection from "@/containers/home-page/image-section";
import { Toaster } from "@/components/ui/toaster";

export default function HomePage() {
  return (
    <main className="relative">
      <NavbarSection />
      <UploadSection />
      <ImageSection />
      <Toaster />
    </main>
  );
}
