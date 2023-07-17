import React from "react";
import BlogCard from "./BlogCard";
import { blog1, blog2, blog3, blog4, blog5 } from "./Image";
const Blogging = () => {
  return (
    <div id="library" className="bg-colorBg w-full py-24">
      <div className="container w-full text-white">
        <h2 className="gradient-text text-4xl font-bold mb-12 text-center md:text-start">
          A lot is happening, <br /> We are blogging about it.
        </h2>
        <div className="flex md:flex-row flex-col gap-12 flex-wrap w-full flex-1">
          <BlogCard
            titleSize={"md:text-xl"}
            date={"26 Sep, 2023"}
            img={blog1}
            title={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            basis={"basis-56"}
          />

          <div className="flex gap-12 flex-wrap w-full flex-1">
            <BlogCard
              date={"26 Sep, 2023"}
              img={blog2}
              title={
                "GPT-3 and Open  AI is the future. Let us exlore how it is?"
              }
              basis={"basis-56"}
            />
            <BlogCard
              date={"26 Sep, 2023"}
              img={blog3}
              title={
                "GPT-3 and Open  AI is the future. Let us exlore how it is?"
              }
              basis={"basis-56"}
            />
            <BlogCard
              date={"26 Sep, 2023"}
              img={blog4}
              title={
                "GPT-3 and Open  AI is the future. Let us exlore how it is?"
              }
              basis={"basis-56"}
            />
            <BlogCard
              date={"26 Sep, 2023"}
              img={blog5}
              title={
                "GPT-3 and Open  AI is the future. Let us exlore how it is?"
              }
              basis={"basis-56"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogging;
