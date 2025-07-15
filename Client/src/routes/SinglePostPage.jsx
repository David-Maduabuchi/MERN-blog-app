import { Link } from "react-router-dom";
import Img from "../components/Img";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            omnis ipsa eius incidunt sint tenetur quasi iure aliquid, nostrum
            aspernatur quidem? Debitis cumque quo alias sequi repellat vel
            recusandae corporis.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Img src={"postImg.jpeg"} w={600} className={"rounded-2xl "} />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure
            veritatis, mollitia eum dignissimos et, cum sint adipisci minus hic
            voluptatibus iusto reiciendis iste quis inventore libero repudiandae
            numquam ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At hic ab eaque quaerat, voluptatibus magni accusamus dolore iusto
            repudiandae delectus tempore suscipit tenetur, nihil itaque quos ex
            perspiciatis vero similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae, explicabo assumenda. Magni voluptate sint
            reiciendis assumenda repellendus id delectus ullam, eos molestiae
            fugit quod ipsa unde cumque officia repudiandae ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure
            veritatis, mollitia eum dignissimos et, cum sint adipisci minus hic
            voluptatibus iusto reiciendis iste quis inventore libero repudiandae
            numquam ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At hic ab eaque quaerat, voluptatibus magni accusamus dolore iusto
            repudiandae delectus tempore suscipit tenetur, nihil itaque quos ex
            perspiciatis vero similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae, explicabo assumenda. Magni voluptate sint
            reiciendis assumenda repellendus id delectus ullam, eos molestiae
            fugit quod ipsa unde cumque officia repudiandae ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure
            veritatis, mollitia eum dignissimos et, cum sint adipisci minus hic
            voluptatibus iusto reiciendis iste quis inventore libero repudiandae
            numquam ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At hic ab eaque quaerat, voluptatibus magni accusamus dolore iusto
            repudiandae delectus tempore suscipit tenetur, nihil itaque quos ex
            perspiciatis vero similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae, explicabo assumenda. Magni voluptate sint
            reiciendis assumenda repellendus id delectus ullam, eos molestiae
            fugit quod ipsa unde cumque officia repudiandae ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure
            veritatis, mollitia eum dignissimos et, cum sint adipisci minus hic
            voluptatibus iusto reiciendis iste quis inventore libero repudiandae
            numquam ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At hic ab eaque quaerat, voluptatibus magni accusamus dolore iusto
            repudiandae delectus tempore suscipit tenetur, nihil itaque quos ex
            perspiciatis vero similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae, explicabo assumenda. Magni voluptate sint
            reiciendis assumenda repellendus id delectus ullam, eos molestiae
            fugit quod ipsa unde cumque officia repudiandae ab.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure
            veritatis, mollitia eum dignissimos et, cum sint adipisci minus hic
            voluptatibus iusto reiciendis iste quis inventore libero repudiandae
            numquam ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            At hic ab eaque quaerat, voluptatibus magni accusamus dolore iusto
            repudiandae delectus tempore suscipit tenetur, nihil itaque quos ex
            perspiciatis vero similique? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Beatae, explicabo assumenda. Magni voluptate sint
            reiciendis assumenda repellendus id delectus ullam, eos molestiae
            fugit quod ipsa unde cumque officia repudiandae ab.
          </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Img
                src={"userImg.jpeg"}
                className={"w-12 h-12 rounded-full object-cover"}
                w={48}
                h={48}
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <Img src={"facebook.svg"} />
              </Link>
              <Link>
                <Img src={"instagram.svg"} />
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1>Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      {/*Comments */}
      <Comments />
    </div>
  );
};

export default SinglePostPage;
