import React from "react";

function PostList({ posts }) {
  // se limita a mostrar 10 posts y lo recorre con map
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.slice(0, 10).map((post) => (
        <li
          key={post.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default PostList;