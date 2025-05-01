import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="bg-transparent h-screen  w-full  flex flex-wrap justify-between items-center px-8 ">
       
      <div>
        <Image
          src="/recycling-304974_1280.png"
          width={300}
          height={300}
          alt="Picture of the logo"
        />
      </div>

      <div className="text-green-600 text-6xl font-bold">
        Recycle today for a better tomorrow.
      </div>
    </div>
  );
}
