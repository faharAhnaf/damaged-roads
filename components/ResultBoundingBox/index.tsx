import { useData } from "@/stores/data-store";
import Image from "next/image";
import HeaderTwo from "../core/HeaderTwo";

export default function BoundingBoxResult() {
	const { data } = useData();

	return (
		<>
			{data.bounding_boxes.length > 0 ? (
				<div
					className={`grid ${
						data.bounding_boxes.length > 1 && "grid-cols-2"
					}  w-full`}>
					{data.bounding_boxes.map((base64Url, i) => (
						<div
							key={i}
							className="border rounded-xl shadow flex flex-col items-center mx-5 mb-10">
							<div className="border border-b-2 w-full flex items-center justify-center ">
								<HeaderTwo>Kerusakan jalan - {i + 1}</HeaderTwo>
							</div>
							<div className="flex items-center justify-center h-full p-4">
								<Image
									src={base64Url}
									width={150}
									height={150}
									alt={`Kerusakan jalan ${i}`}
									className="rounded-xl"
								/>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="flex flex-col items-center justify-center">
					<HeaderTwo>Tidak Terdapat Kerusakan Jalan</HeaderTwo>
				</div>
			)}
		</>
	);
}
