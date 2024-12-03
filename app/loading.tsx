import Header from "@/components/ui/Header";

export default function Loading() {
  return (
    <>
      <div className="p-4">
        <Header />
      </div>
      <div className="place-items-center grid w-full h-full">
        <span className="loading loading-lg loading-spinner"></span>
      </div>
    </>
  );
}
