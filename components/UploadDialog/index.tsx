"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUploadDialog } from "@/stores/upload-dialog-store";

export default function UploadDialog() {
  const { open, setOpen } = useUploadDialog();

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Gambar</DialogTitle>
          <DialogDescription>
            <Button>Upload Gambar</Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
