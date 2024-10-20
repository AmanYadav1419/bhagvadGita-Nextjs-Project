import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Backbtn from "@/components/custom/backbtn";

const Detailpage = async ({ params }) => {
  const { chapter } = params;
  // console.log(chapter)

  const data = await fetch(
    `https://vedicscriptures.github.io/chapter/${chapter}`
  );

  const chapterDetail = await data.json();
  const listofLinks = [];

  for (let i = 0; i < chapterDetail.verses_count; i++) {
    listofLinks.push(
      <PaginationItem>
        {/* dyanmic routing proided as the chapter and their index start from 1 for that i + 1 */}
        <PaginationLink href={`/${chapter}/${i + 1}`}>{i + 1}</PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* this is backbtn for navigating back  */}
      <Backbtn />

      {/* this div for showing all the information */}
      <div className="flex flex-col gap-3">
        <div className="text-3xl text-center">
          Chapter number - {chapterDetail.chapter_number}
        </div>

        <div>Total verses - {chapterDetail.verses_count}</div>

        <div>Translation - {chapterDetail.translation}</div>

        <div>Transliteration - {chapterDetail.transliteration}</div>

        <div>
          meaning -<div>English - {chapterDetail.meaning.en}</div>
          <div>Hindi - {chapterDetail.meaning.hi}</div>
        </div>

        <div>
          summary -<div>English - {chapterDetail.summary.en}</div>
          <br />
          <div>Hindi - {chapterDetail.summary.hi}</div>
        </div>
      </div>

      {/* this div for showing list of verses having links to them  */}
      <div>
        <h2 className="text-3xl text-center">List of Verses</h2>

        <Pagination>
          <PaginationContent>
            <div className="flex flex-wrap gap-1 mt-2">{...listofLinks}</div>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Detailpage;
