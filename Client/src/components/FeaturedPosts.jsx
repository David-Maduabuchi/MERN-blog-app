import Img from "./Img";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <Img
          src={"featured1.jpeg"}
          className={"rounded-3xl object-cover"}
          w={895}
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="font-semibold lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* Title */}
        <Link
          to={"/test"}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4 ">
        {/* Second */}
        <div className="lg:h-1/3 flex justify-between gap-5">
          <div className="w-1/3 aspect-video">
            <Img
              w={298}
              src={"featured2.jpeg"}
              className={"rounded-3xl object-cover w-full h-full aspect-video"}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">0.2</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm"> 2 days ago</span>
            </div>
            {/* title */}
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* Third */}
        <div className="lg:h-1/3 flex justify-between gap-5">
          <div className="w-1/3 aspect-video">
            <Img
              w={298}
              src={"featured2.jpeg"}
              className={"rounded-3xl object-cover w-full h-full aspect-video"}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">0.2</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm"> 2 days ago</span>
            </div>
            {/* title */}
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
        {/* Fourth */}
        <div className="lg:h-1/3 flex justify-between gap-5">
          <div className="w-1/3 aspect-video">
            <Img
              w={298}
              src={"featured4.jpeg"}
              className={"rounded-3xl object-cover w-full h-full aspect-video"}
            />
          </div>
          {/* details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">0.2</h1>
              <Link className="text-blue-800">Web Design</Link>
              <span className="text-gray-500 text-sm"> 2 days ago</span>
            </div>
            {/* title */}
            <Link className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
