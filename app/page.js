import Image from "next/image";

const headingText = "ShrimadBhagvad Gita";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-5xl text-center">{headingText}</h1>
      <Image
        src={"/krishna-arjun.jpg"}
        alt="BhagvadGita Image"
        width={300}
        height={300}
        className="mx-auto rounded-full shadow-md dark:shadow-blue-400"
      />

      <ul className="flex flex-col w-8/12 mx-auto">
        <li>Click on any chapter in the menu to read.</li>

        <li>
          Inside every chapter there are some verses. Click on any verse to read
          in detail with explanation by various authors (Hindi, English,
          Sanskrit).
        </li>

      </ul>
    </div>
  );
}
