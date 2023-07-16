const BlogCard = ({ basis, img, date, titleSize, title }) => {
  return (
    <div
      className={`${basis} flex-1 w-full flex flex-col shadow-2xl text-white bg-colorBlog cursor-pointer`}
    >
      <img className="w-full " src={img} />
      <div className="p-4 h-full flex flex-col justify-between">
        <div>
          <span className="text-sm text-colorText my-3 inline-block">
            {date}
          </span>
          <h2 className={`font-bold ${titleSize} `}>{title}</h2>
        </div>
        <div className=" text-sm flex items-end cursor-pointer mt-16">
          Read Full Article
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
