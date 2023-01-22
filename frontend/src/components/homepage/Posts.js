import React from "react";

const Posts = (props) => {
  console.log("cbhbdhbcbsdbcjbdjbcjbsd");
  console.log(props);
  return (
    <div>
      <div className="posts">
        <h2>{props.obj.title}</h2>
        <p>{props.obj.detail}</p>
        <br />
        <p>{props.obj.url}</p>
        <h4>{props.obj.createdBy}</h4>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default Posts;
