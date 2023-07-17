import React from "react";
import Paragraph from "../GeneralComponents/Paragraph";
import Heading from "../GeneralComponents/Heading";
import GradientBorder from "./GradientBorder";
import GradientParagraph from "./GradientParagraph";

const WhatIsGPT = () => {
  return (
    <div id="whatIsGPT" className="bg-colorBg w-full">
      <div className="container text-white bg-colorBlog p-8">
        <div className="flex justify-between flex-wrap lg:flex-nowrap">
          <GradientBorder title={"What is GPT-3"} />
          <Paragraph
            textSize={"text-sm"}
            paragraphText={
              "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
            }
          />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-between w-full my-24">
          <Heading
            textSize={"text-4xl"}
            heading={"The possibilities are beyond your imagination"}
          />
          <Heading
            textSize={"text-start lg:text-end lg:mt-0 mt-4"}
            heading={"Explore the Library"}
          />
        </div>
        <div className=" flex flex-wrap lg:flex-nowrap justify-between gap-24">
          <GradientParagraph
            textSize={"text-sm"}
            par={
              "We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            }
            title={"Chatbots"}
          />
          <GradientParagraph
            textSize={"text-sm"}
            par={
              "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
            }
            title={"Knowledgebase"}
          />
          <GradientParagraph
            textSize={"text-sm"}
            par={
              "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
            }
            title={"Education"}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatIsGPT;
