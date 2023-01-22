import Post from "./components/myposts/Post";
import CreateUser from "./components/createuser/CreateUser";
import Homepage from "./components/homepage/Homepage";
import Nav from "./components/Nav";
import AccRej from "./components/acceptreject/AccRej";
import "./components/userdropdown.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import Userdropdown from "./components/Userdropdown";
function App() {
  const [user, setUser] = useState([]);

  const [curuserpost, setCuruserpost] = useState([]);

  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/all-users")
      .then(({ data }) => {
        console.log("dncjbhbchbhdbscbbsdcb");
        console.log(data);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <div>
          <select
            onChange={(e) => {
              setSelectedState(e.target.value);
            }}
          >
            {user.map((user) => {
              return <option>{user.username}</option>;
            })}
          </select>
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/createuser" element={<CreateUser />} />
        </Routes>
        <Routes>
          <Route path="/createpost" element={<Post />} />
        </Routes>
        <Routes>
          <Route path="/yourpost" element={<AccRej {...selectedState} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
