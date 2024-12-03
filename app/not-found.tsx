import Header from "@/components/ui/Header";

export default function NotFound() {
  return (
    <>
      <div className="p-4">
        <Header />
      </div>
      <div className="place-items-center grid w-full h-full">
        <span className="text-2xl">
          404 - The page you're looking for does not exist (ó﹏ò｡)
        </span>
      </div>
    </>
  );
}
