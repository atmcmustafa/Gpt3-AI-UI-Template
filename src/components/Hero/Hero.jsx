import React from "react";
import heroPhoto from "../../assets/ai.png";
import Peoples from "../../assets/people.png";
import Heading from "../GeneralComponents/Heading";
import InputGroup from "./InputGroup";
import Paragraph from "../GeneralComponents/Paragraph";

const Hero = () => {
  return (
    <div id="home" className="bg-colorBg ">
      <div className="container flex gap-12 flex-col md:flex-row items-center justify-between">
        <div className="w-full flex flex-col gap-5">
          <Heading
            textSize={"text-4xl xl:text-5xl"}
            heading={"Let's Build Something amazing with GPT-3 OpenAI"}
          />
          <Paragraph
            textSize={"text-lg"}
            paragraphText={
              "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of."
            }
          />
          <InputGroup />
          <div className="flex flex-col md:flex-row items-center gap-2">
            <img src={Peoples} />
            <p className="text-white">
              1,600 people requested access a visit in last 24 hours
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end ">
          <img src={heroPhoto} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
