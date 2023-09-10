export interface BannerData {
  message: string;
  state: "success" | "error";
}

export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✅" : "❌";
  return (
    <p
      className={`p-2 mb-4 rounded-lg text-center ${
        isSuccess ? "bg-green-300" : "bg-red-300"
      }`}
    >{`${icon} ${message}`}</p>
  );
}
