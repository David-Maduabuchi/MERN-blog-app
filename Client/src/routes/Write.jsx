import { useUser } from "@clerk/clerk-react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return "Loading...";

  if (isLoaded && !isSignedIn) return <div className="">You should login!</div>;

  return (
    <div className="md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6  ">
      <h1 className="text-xl font-light ">Create a New Post</h1>
      <form className="flex flex-col gap-6  flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
          {" "}
          Add a cover image{" "}
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="outline-none bg-transparent  text-4xl font-semibold"
        />
        <div className="flex items-center gap-4 ">
          <label htmlFor="" className="text-sm">
            {" "}
            Choose a category
          </label>
          <select
            name="cat"
            id=""
            className="p-2 rounded-xl bg-white shadow-md "
          >
            <option value="general">General</option>
            <option value="Development">Web Design</option>
            <option value="development">Development</option>
            <option value="wen-design">Web design</option>
            <option value="marketing">Marketing</option>
            <option value="databases">Databases</option>
            <option value="seo ">Search Engines</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md "
          name="desc"
          id="desc"
          placeholder="A short description"
        />
        <ReactQuill
          theme="snow"
          className="flex-1 rounded-xl bg-white shadow-md "
        />
        <button className="bg-blue-800 p-2 text-white font-medium rounded-xl mt-4 w-36">Send</button>
      </form>
    </div>
  );
};

export default Write;
