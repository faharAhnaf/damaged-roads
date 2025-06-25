import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

export default function AccurationResult() {
	const { data } = useData();

	return (
		<>
			{data.prediction_confidance.length > 0 &&
			data.similarity_score.length > 0 ? (
				<div className="grid lg:grid-cols-2 justify-between mx-auto gap-3 w-full">
					<div className="w-full space-y-3">
						<div className="border rounded-xl shadow flex flex-col items-center">
							<div className="border border-b-2 w-full flex items-center justify-center">
								<HeaderTwo>Jenis Kerusakan</HeaderTwo>
							</div>
							<div className="space-y-2 w-full p-4 ">
								{data.prediction_confidance.map((predict, i) => {
									const resultKeys = Object.keys(predict);

									return (
										<div key={i}>
											{resultKeys.map((key) => {
												// const resultValues = predict[key][j];
												// const maxValue = Math.max(...resultValues);

												// const percentage = maxValue * 100;
												const index = parseInt(key.split("-")[1], 10);
												const label = data.prediction_labeling;

												const formattedKey = key.replace(
													/^.*-(\d+)$/,
													(_match, num) => {
														return `Kerusakan ${parseInt(num) + 1}`;
													}
												);

												return (
													<div
														key={key}
														className="flex items-center justify-between">
														<p className=" font-medium">
															{formattedKey}: {label[index]}
														</p>
														{/* <p className="font-bold text-blue-600">
															{percentage.toFixed(2)}%
														</p> */}
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						</div>
					</div>

					<div className="w-full space-y-3">
						<div className="border rounded-xl shadow flex flex-col items-center">
							<div className="border border-b-2 w-full flex items-center justify-center">
								<HeaderTwo>Tingkat Kerusakan</HeaderTwo>
							</div>
							<div className="space-y-2 w-full p-4">
								{data.similarity_score.map((similar, i) => {
									const resultKeys = Object.keys(similar);

									return (
										<div key={i}>
											{resultKeys.map((key) => {
												const resultObject = similar[key];
												const maxValue = Math.max(
													...Object.values(resultObject)
												);
												const keyObject =
													Object.keys(resultObject)[
														Object.values(resultObject).indexOf(maxValue)
													];
												// const percentage = maxValue * 100;

												const formattedKey = key.replace(
													/^.*-(\d+)$/,
													(_match, num) => {
														return `Kerusakan ${parseInt(num) + 1}`;
													}
												);

												return (
													<div
														key={key}
														className="flex items-center justify-between">
														<p className="font-medium">
															{formattedKey}: {keyObject}
														</p>
														{/* <p className="font-bold text-blue-600">
															{percentage.toFixed(2)}%
														</p> */}
													</div>
												);
											})}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-center justify-center">
					<HeaderTwo>Tidak Terdapat Kerusakan Jalan</HeaderTwo>
				</div>
			)}
		</>
	);
}
