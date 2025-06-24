"use client";

import HeaderOne from "@/components/core/HeaderOne";
import AccurationResult from "@/components/ResultAccuration";
import LocationResult from "@/components/ResultLocation";
import { Separator } from "@/components/ui/separator";
import { useImageUrl } from "@/stores/image-url-store";
import { useLoadingApi } from "@/stores/loading-api-store";
import BoundingBoxResult from "@/components/ResultBoundingBox";
import Image from "next/image";

export default function ResultSection() {
	const { url } = useImageUrl();
	const { loading } = useLoadingApi();
	return (
		<>
			{url && !loading && (
				<>
					<section className="pt-10 grid lg:grid-cols-2 mb-20">
						{[
							{
								title: "Gambar Jalan",
								section: (
									<Image
										src={url}
										alt="road"
										width={500}
										height={500}
										className="rounded-xl "></Image>
								),
							},
							{ title: "Akurasi", section: <AccurationResult /> },
							{
								title: "Reteksi Kerusakan Jalan",
								section: <BoundingBoxResult />,
							},
							{
								title: "Letak Titik Lokasi Kerusakan Jalan Pada Peta",
								section: <LocationResult />,
							},
						].map((item, index) => (
							<span key={index} className="space-y-5 mx-5 my-5 lg:my-0 pb-5">
								<div className="flex flex-col justify-center items-center ">
									<HeaderOne key={index}>
										{item.title.slice(0, 1).toUpperCase() + item.title.slice(1)}
									</HeaderOne>
									<Separator />
								</div>
								<div className="mx-auto grid place-items-center">
									{item.section}
								</div>
							</span>
						))}
					</section>
				</>
			)}
		</>
	);
}
