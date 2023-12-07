import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Api.css";

const Post = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  }, []);

  return (
    <div className="api-main ">
      <table className="users-table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Comments</th>
        </tr>
        {comments.map((item) => {
          return (
            <tr>
              <td>{item.name} </td>
              <td>{item.email}</td>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Post;
