import Post from "./components/myposts/Post";
import CreateUser from "./components/createuser/CreateUser";
import Homepage from "./components/homepage/Homepage";
import Nav from "./components/Nav";
import AccRej from "./components/acceptreject/AccRej";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>

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
          <Route path="/yourpost" element={<AccRej />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
