import Heading from "../GeneralComponents/Heading";
import GradientParagraph from "../WhatIsGPT/GradientParagraph";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    title: "Become the tended active",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Message or am nothing",
    text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    title: "Really boy law county",
    text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..",
  },
];

const Future = () => {
  return (
    <div className="bg-colorBg w-full py-32 ">
      <div className="container flex flex-col md:flex-row text-white  justify-center ">
        <div>
          <Heading
            heading={
              "The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen."
            }
            textSize={"text-3xl lg:text-4xl text-center md:text-start"}
          />
          <Heading
            textSize={" mt-5 mb-5 md:mb-0 text-center md:text-start"}
            heading={"Request Early Access to Get Started"}
          />
        </div>
        <div className="flex flex-col gap-12 w-full">
          {featuresData.map((data, index) => (
            <GradientParagraph key={index} par={data.text} title={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Future;
