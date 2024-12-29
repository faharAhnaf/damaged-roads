import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../core/messages/ErrorMessage";

const schema = z.object({
  longitude: z.number().min(-180).max(180),
  latitude: z.number().min(-90).max(90),
  pictureName: z.string().nonempty("File name is required"),
});

type FormData = z.infer<typeof schema>;

export default function FormDialog() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
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
            <Label htmlFor="picture">Picture</Label>
            <Input
              id="picture"
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  setValue("pictureName", file.name);
                } else {
                  setValue("pictureName", "");
                }
              }}
            />
            {errors.pictureName && (
              <ErrorMessage message={errors.pictureName.message} />
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
