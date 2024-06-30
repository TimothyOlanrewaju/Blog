import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import PostDetail from "./PostDetail";
import Admin from "./Admin";

const App = () => {
  const [posts, setPosts] = useState([]);

  const handleaddPost = (post) => {
    setPosts([...posts, post]);
  };

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<PostDetail posts={posts} />} />
          <Route
            path="/admin"
            element={
              <Admin
                onaddPost={handleaddPost}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
