import { useState } from "react";
import userData from "./User-Data";

function Posts() {
  const [stateData, setStateData] = useState(userData);


  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {
          stateData.map((item, index) => (
            <div key={index} class="post-item">
              <div class="post-header">
                <h2>Post {item.title} #{item.id}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">
              {item.content}
              </p>
              <div class="post-actions">
                <button class="like-button">Like</button>
                <button class="dislike-button">Dislike</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Posts;
