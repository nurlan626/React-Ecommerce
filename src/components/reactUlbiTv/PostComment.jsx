import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PostComment = () => {
  const { id } = useParams();
  const [comment, setComment] = useState();

  const fetch = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      setComment(response.data);
    } catch (e) {
    } finally {
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <button onClick={() => fetch()}></button>
      List of Comments
      {comment && (
        <div>
          <div>
            user id:{" "}
            {comment.map((c) => {
              return (
                <div>
                  <div>postId {c.postId}</div>
                  <div>name {c.name}</div>
                  <div>email {c.email}</div>
                  <div>body {c.body}</div>
                  <hr></hr>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostComment;
