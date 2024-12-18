import { useState } from "react";
import userData from "./User-Data";

function Posts() {
  const [stateData, setStateData] = useState(userData);

  function addLikes(index) {
  //  event.preventDefault();
    const newUserData = [...stateData];
    newUserData[index].likes +=1;
    setStateData(newUserData);
  }

  function dislike(index) {
    const newUserData = [...stateData];
    if (newUserData[index].likes >0 ) { 
    newUserData[index].likes -=1;
    setStateData(newUserData);
    }
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {
          stateData.map((item, index) => (
            <div key={index} className="post-item">
              <div className="post-header">
                <h2>Post {item.title} #{item.id}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">
              {item.content}
              </p>
              <div className="post-actions">
                <button className="like-button" onClick={() => (addLikes(index))}>Like</button>
                <button className="dislike-button" onClick={() => (dislike(index))}>Dislike</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Posts;
