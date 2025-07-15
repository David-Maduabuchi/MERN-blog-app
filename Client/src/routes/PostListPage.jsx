import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import SinglePostPage from "./SinglePostPage";

const PostListPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl"> Development Blog</h1>
      <button
        className="bg-blue-800 md:hidden text-sm text-white mb-4 px-4 py-2 rounded-2xl"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse md:flex-row  gap-8  ">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
