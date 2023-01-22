import Nav from "../Nav";
import "./homepage.css";
import Posts from "./Posts";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  const [comp, setComp] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/post/all-posts")
      .then(({ data }) => {
        console.log(data);
        setComp(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return comp.map((res, i) => {
      return <Posts obj={res} key={i} />;
    });
  };

  return (
    <div>
      <div>
        <div className="homebody">{DataTable()}</div>
      </div>
    </div>
  );
};

export default Homepage;
