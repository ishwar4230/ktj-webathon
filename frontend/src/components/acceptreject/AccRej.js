import React from "react";
import "./ar.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const AccRej = (props) => {
  console.log("hhbxdhbxbxbbxbbxbxbbxbxbbxbxbxbxb");
  console.log(props);
  return (
    <div>
      <div className="arbody">
        <div className="arperson">
          <div className="arleft">
            <h3>njvjnfs jfn fsjcbfvvvn </h3>
            <p>njvjnfs jfn fsjcbfvvvn </p>
          </div>
          <div className="arright">
            {" "}
            <div className="accept">
              <CheckIcon />
            </div>
            <div className="reject">
              <CloseIcon />
            </div>
          </div>
        </div>
        <div className="arperson">
          <div className="arleft">
            <h3>njvjnfs jfn fsjcbfvvvn </h3>

            <p>njvjnfs jfn fsjcbfvvvn </p>
          </div>
          <div className="arright">
            {" "}
            <div className="accept">
              <CheckIcon />
            </div>
            <div className="reject">
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccRej;
