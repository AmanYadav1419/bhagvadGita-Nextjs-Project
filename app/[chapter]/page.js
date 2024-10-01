import React from "react";

const Detailpage = async ({ params }) => {
  const { chapter } = params;
  // console.log(chapter)

  const data = await fetch(
    `https://vedicscriptures.github.io/chapter/${chapter}`
  );

  const chapterDetail = await data.json();

  // console.log(chapterDetail);

  // sample or understanding purpose for creating

  // {
  //   chapter_number: 7,
  //   verses_count: 30,
  //   name: 'ज्ञानविज्ञानयोग',
  //   translation: 'Gyaan Vigyana Yoga',
  //   transliteration: 'Jñāna Vijñāna Yog',
  //   meaning: { en: 'Self-Knowledge and Enlightenment', hi: 'भगवद्ज्ञान' },
  //   summary: {
  //     en: "The seventh chapter of the Bhagavad Gita is Gyaan Vigyana Yoga . In this chapter, Krishna reveals that he
  // is the Supreme Truth, the principal cause and the sustaining force of everything. He reveals his illusionary energy in this material world called Maya, which is very difficult to overcome but those who surrender their minds unto Him attain Him easily. He also describes the four types of people who surrender to Him in devotion and the four kinds that don't. Krishna confirms that He is the Ultimate Reality and those who realize this Truth reach the pinnacle
  // of spiritual realization and unite with the Lord.",
  //     hi: 'भगवद गीता का सातवा अध्याय ज्ञानविज्ञानयोग है। इस अध्याय में कृष्ण बताते हैं कि वह सर्वोच्च सत्य हैं एवं हर
  //  चीज़ के मुख्य कारण हैं। वे इस भौतिक संसार में अपनी भ्रामक ऊर्जा - योगमाया के बारे में बताते हैं अथवा प्रकट करते हैं
  //  कि इस ऊर्जा पर काबू पाना साधारण मनुष्य के लिए कितना कठिन है परन्तु जो मनुष्य अपने मन को परमात्मा में लीन कर लेते ह
  // ैं वे इस माया को जीत लेते हैं और उन्हे आसानी से प्राप्त कर लेते हैं। वे उन चार प्रकार के लोगों का भी वर्णन करते हैं
  //  जो भक्ति में लीन होकर उनको आत्मसमर्पण करते हैं अथवा वे चार प्रकार जो नहीं करते। कृष्ण पुष्टि करते हैं कि वे ही परम
  //  सत्य हैं। जो लोग इस सत्य को समझ लेते हैं, वे आध्यात्मिक प्राप्ति के शिखर पर पहुंच जाते हैं और भगवान को प्राप्त कर
  // लेते हैं।'
  //   }
  // }

  return (
    <div className="flex flex-col gap-5">
      {/* this div for showing all the information */}
      <div className="flex flex-col gap-3">
        <div className="text-3xl text-center">
          Chapter number - {chapterDetail.chapter_number}
        </div>

        <div>
          Total verses - {chapterDetail.verses_count}
        </div>

        <div>
          Translation - {chapterDetail.translation}
        </div>

        <div>
          Transliteration - {chapterDetail.transliteration}
        </div>

        <div>
          meaning -
          <div>
            English - {chapterDetail.meaning.en}
          </div>

          <div>
            Hindi - {chapterDetail.meaning.hi}
          </div>

        </div>

        <div>
          summary -
          <div>
            English - {chapterDetail.summary.en}
          </div>
          <br />
          
          <div>
            Hindi - {chapterDetail.summary.hi}
          </div>
        
        </div>
      
      </div>

      {/* this div for showing list of verses having links to them  */}
      <div>
        <h2 className="text-3xl text-center">List of Verses</h2>
      </div>
    </div>
  );
};

export default Detailpage;
