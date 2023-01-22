// import "./userdropdown.css";

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Userdropdown() {
//   const [user, setUser] = useState([]);

//   const [selectedState, setSelectedState] = useState("");

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/user/all-users")
//       .then(({ data }) => {
//         console.log("dncjbhbchbhdbscbbsdcb");
//         console.log(data);
//         setUser(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <select
//         onChange={(e) => {
//           setSelectedState(e.target.value);
//         }}
//       >
//         {user.map((user) => {
//           return <option>{user.username}</option>;
//         })}
//       </select>
//     </div>
//   );
// }

// export default Userdropdown;
