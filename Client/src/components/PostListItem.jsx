import Img from "./Img";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Img src={"postImg.jpeg"} className={"rounded-2xl object-cover"} w="735" />
      </div>
      {/* Detail */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={"/test"} className="text-4xl font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad
          veritatis volu.
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          incidunt praesentium similique consequuntur error quibusdam quasi ad
          qui nisi, modi ex consequatur tempore aliquam quia suscipit inventore,
          velit dolore at.
        </p>
        <Link to={"/test"} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
