"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../core/messages/ErrorMessage";
// import { useImage } from "@/stores/image-store";
import { useState } from "react";
// import { addDataPicture } from "@/services/stream";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const schema = z.object({
  longitude: z.number().min(-180).max(180),
  latitude: z.number().min(-90).max(90),
  image: z
    .any()
    .refine(
      (file) => file?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg & .jpeg & .png formats are supported."
    ),
});

type FormData = z.infer<typeof schema>;

export default function FormDialog() {
  // const { setImage } = useImage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [file, setFile] = useState<File | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          localStorage.setItem("imageFile", reader.result as string);
        };
        // setImage(reader.result as string);
        reader.readAsDataURL(file);
      }

      console.log(data);
      // const formData = new FormData();

      // formData.append("longitude", data.longitude.toString());
      // formData.append("latitude", data.latitude.toString());
      // if (data.image[0]) {
      //   formData.append("image", data.image[0]);
      // }

      // const res = await addDataPicture(formData);

      // console.log(res);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="grid gap-4">
        <li>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              type="text"
              id="longitude"
              placeholder="Input Longitude..."
              {...register("longitude", { valueAsNumber: true })}
              onChange={(e) => {
                e.target.value = e.target.value.replace(",", ".");
              }}
            />
            {errors.longitude && (
              <ErrorMessage message={errors.longitude.message} />
            )}
          </div>
        </li>
        <li>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              type="text"
              id="latitude"
              placeholder="Input Latitude..."
              {...register("latitude", { valueAsNumber: true })}
              onChange={(e) => {
                e.target.value = e.target.value.replace(",", ".");
              }}
            />
            {errors.latitude && (
              <ErrorMessage message={errors.latitude.message} />
            )}
          </div>
        </li>
        <li>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="image">Gambar</Label>
            <Input
              id="image"
              type="file"
              {...register("image")}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (!e.target.files) return;
                setFile(e.target.files?.[0]);
              }}
            />
            {errors.image && (
              <ErrorMessage message={errors.image.message as string} />
            )}
          </div>
        </li>
        <li className="flex w-full justify-end">
          <Button variant={"outline"} type="submit">
            Submit
          </Button>
        </li>
      </ul>
    </form>
  );
}
