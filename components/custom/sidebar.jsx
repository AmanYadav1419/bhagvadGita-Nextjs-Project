import Link from "next/link";
import React from "react";

const Sidebar = async () => {
  const chapters = await fetch("https://vedicscriptures.github.io/chapters");
  const chaptersData = await chapters.json();
//   console.log(chaptersData);

  return (
    <div className="flex flex-col gap-3 p-5">
      <h2 className="text-3xl">Chapters</h2>

      {chaptersData.map((chapter, index) => (
        <div key={index}>
          <Link href={`/${index + 1}`}>
            {index + 1}. {chapter.translation}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
