import { useState } from "react";
import PageNav from "./PageNav";
import Footer from "./Footer";

const NewPost = ({ onaddPost, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update the existing post
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === editId ? { ...post, title, body, author } : post
        )
      );
      setIsEditing(false);
      setEditId(null);
      // alert("Post edited Successfully");
    } else {
      // Add a new post
      // alert("Post created Successfully");
      onaddPost({ title, body, author, id: Date.now() });
    }
    // Clear the form fields
    setTitle("");
    setBody("");
    setAuthor("");
  };

  const handleEditPost = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setAuthor(post.author);
    setIsEditing(true);
    setEditId(post.id);
  };

  const handleDeletePost = (id) => {
    let confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      setPosts((posts) => posts.filter((post) => post.id !== id));
    }
    // Clear the form fields
    setTitle("");
    setBody("");
    setAuthor("");
  };

  const handleClearPosts = () => {
    let confirmed = window.confirm("Are you sure you want to clear all Posts?");
    if (confirmed) {
      setPosts([]);
    }
  };

  return (
    <div>
      <PageNav />
      <div className="flex justify-center gap-20 mt-6 mb-[12rem] leading-loose">
        <div className="bg-gray-300 pl-2 pr-2 rounded-lg h-[15rem]">
          <h1 className="text-2xl text-center font-extrabold pb-2">
            {isEditing ? "Edit Post" : "Create New Post"}
          </h1>
          <form onSubmit={handleSubmit} className="">
            <div className="mb-1">
              <label>Title: </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Content: </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-1">
              <label>Author: </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="mx-auto bg-blue-600 text-white px-2 py-1 ml-20 rounded-lg"
            >
              {isEditing ? "Save" : "Add Post"}
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-2xl font-extrabold">Posts Actions</h1>
          {posts.length !== 0 ? (
            posts.map((post) => (
              <div id="post_actions" key={post.id}>
                <h2 className="font-bold uppercase">{post.title}</h2>
                <p>{post.body}</p>
                <p className="font-bold">-{post.author}</p>
                <button id="edit" onClick={() => handleEditPost(post)}>
                  Edit
                </button>
                <button id="delete" onClick={() => handleDeletePost(post.id)}>
                  Delete
                </button>
              </div>
            ))
          ) : (
            <h1>There are no posts available right now!</h1>
          )}
        </div>
        <div>
          {posts.length !== 0 ? (
            <button
              onClick={() => handleClearPosts()}
              className="bg-red-700 text-white px-3 py-2 rounded-lg"
            >
              Clear Posts
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewPost;
