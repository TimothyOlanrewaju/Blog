import { Link } from "react-router-dom";
import PageNav from "./PageNav";
import Footer from "./Footer";

const Home = ({ posts }) => {
  return (
    <div className="relative">
      <PageNav className="absolute top-0" />
      <div className="text-center leading-loose h-[32rem]">
        <h1 className="text-3xl font-extrabold mb-2">Blog Posts</h1>
        {posts.length !== 0 ? (
          <ul className="inline-block mx-auto">
            {posts.map((post) => (
              <li key={post.id} className="post">
                <h2 className="font-extrabold">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </h2>
              </li>
            ))}
            <br />
          </ul>
        ) : (
          <h1>There are no posts available right now ❗❗</h1>
        )}
      </div>
      <Footer className="absolute -bottom-10" />
    </div>
  );
};

export default Home;
