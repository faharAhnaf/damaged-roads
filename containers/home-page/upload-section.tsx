"use client";

import { useUploadDialog } from "@/stores/upload-dialog-store";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import UploadDialog from "@/components/UploadDialog";

export default function UploadSection() {
  const setUploadDialogModal = useUploadDialog((s) => s.setOpen);

  return (
    <section className="pt-20 grid mx-auto px-96 text-center space-y-5">
      <p className="font-black text-7xl">Jalan Rusak? Cek Keparahannya!</p>
      <p className="text-xl">
        Melihat tingkat kerusakan jalan dan menilai dampaknya, untuk kenyamanan
        dan keselamatan berkendara.
      </p>

      <Button
        onClick={() => setUploadDialogModal(true)}
        variant={"outline"}
        className="mx-auto flex w-44 grid-cols-2"
      >
        <Upload />
        Upload Gambar ✨
      </Button>

      <UploadDialog />
    </section>
  );
}
