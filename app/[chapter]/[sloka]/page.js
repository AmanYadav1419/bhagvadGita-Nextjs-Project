import Backbtn from "@/components/custom/backbtn";
import React from "react";

const SlokaDetail = async ({ params }) => {
  const { chapter: ch, sloka } = params;
  // console.log(chapter, sloka);

  const data = await fetch(
    `https://vedicscriptures.github.io/slok/${ch}/${sloka}`
  );
  const slokaresponse = await data.json();
  // console.log(slokaresponse)

  const { _id, chapter, verse, slok, transliteration, ...authors } =
    slokaresponse;
  const listofAuthors = Object.values(authors);
  // console.log(listofAuthors);

  const modifiedData = {
    _id,
    chapter,
    verse,
    slok,
    transliteration,
    listofAuthors,
  };

  // console.log(modifiedData);

  // different different translations named as follows:
  
  // ht: hindi translation
  // hc: hindi commentry
  // et: english translation
  // ec: english commentry
  // sc: sanskrit commentry

  return (
    <div className="flex flex-col gap-5">
      {/* added btn for back navigation */}
      <Backbtn />
      <div>
        <p className="text-lg font-semibold">id: {modifiedData._id}</p>
      </div>

      <div>
        <p className="text-lg font-semibold">chapter: {modifiedData.chapter}</p>
      </div>

      <div>
        <p className="text-lg font-semibold">verse: {modifiedData.verse}</p>
      </div>

      <div>
        <p className="text-lg font-semibold">slok: {modifiedData.slok}</p>
      </div>

      <div>
        <p className="text-lg font-semibold">transliteration:</p>
        <p>{modifiedData.transliteration}</p>
      </div>

      <p className="text-3xl text-center">Authors</p>
      <div className="flex flex-col gap-5">
        {modifiedData.listofAuthors.map((author, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 border-2 p-3 rounded-xl hover:shadow-xl"
          >
            <h2 className="text-lg font-semibold">{author.author}</h2>
            {author?.sc && <div>Sanskrit Commentry : {author.sc}</div>}
            {author?.et && <div>Sanskrit Commentry : {author.et}</div>}
            {author?.ec && <div>Sanskrit Commentry : {author.ec}</div>}
            {author?.ht && <div>Sanskrit Commentry : {author.ht}</div>}
            {author?.hc && <div>Sanskrit Commentry : {author.hc}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlokaDetail;
