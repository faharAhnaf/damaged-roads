import React from "react";
import Image from "next/image";

const LoadingImage = ({ imageURL }: { imageURL: string }) => {
  return (
    <div className="relative flex items-center justify-center h-64 w-full">
      <Image
        src={imageURL}
        alt="Loading"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 filter blur-lg"
      />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500 mb-4"></div>
        <h1 className="text-xl font-bold text-white animate-pulse">
          Generating...
        </h1>
      </div>
    </div>
  );
};

export default LoadingImage;
