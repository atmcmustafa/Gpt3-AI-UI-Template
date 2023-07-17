import myApps from "../../assets/possibility.png";
import Paragraph from "../GeneralComponents/Paragraph";
const GetStarted = () => {
  return (
    <div id="caseStudies" className="bg-colorBg text-white">
      <div className="container flex flex-col lg:flex-row">
        <div className="w-full">
          <img src={myApps} />
        </div>
        <div className="w-full flex flex-col justify-end gap-6">
          <Paragraph
            textSize={"text-lg"}
            paragraphText={"Request Early Access to Get Started"}
          />
          <Paragraph
            textSize={"text-lg gradient-text font-bold text-[24px] "}
            paragraphText={"The possibilities are  beyond your imagination"}
          />
          <Paragraph
            textSize={"text-lg"}
            paragraphText={
              "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of"
            }
          />
          <Paragraph
            textSize={"text-sm gradient-text font-bold"}
            paragraphText={"Request Early Access to Get Started"}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
