import { create } from "zustand";

interface ImageStore {
  image: string | null;
  setImage: (image: string) => void;
}

export const useImage = create<ImageStore>((set) => ({
  image: "",
  setImage: (image) => set({ image }),
}));
