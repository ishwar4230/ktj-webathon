import "./style.css";

// const Post = () => {
//   return (
//     <div className="form">
//       <div className="form-body">
//         <div className="title">
//           <input
//             name="title"
//             className="form__input"
//             type="text"
//             id="ptitle"
//             placeholder="Enter the title"
//             required
//           />
//         </div>

//         <div className="detail">
//           <input
//             name="detail"
//             className="form__input"
//             type="text"
//             id="detail"
//             placeholder="Enter details of the post"
//             required
//           />
//         </div>

//         <div className="url">
//           <input
//             name="url"
//             className="form__input"
//             type="url"
//             id="url"
//             placeholder="Enter url of the post"
//             required
//           />
//         </div>
//         <div className="member">
//           <input
//             name="member"
//             className="form__input"
//             type="number"
//             id="member"
//             placeholder="Enter number of members"
//             required
//           />
//         </div>
//       </div>
//       <div class="footer">
//         <button type="submit" class="btn">
//           Add Post
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Post;
import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const Post = () => {
  return (
    <div className="form">
      <div className="form-body">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            fullWidth
            placeholder="Enter Post Title"
            name="title"
            required
            id="title"
            type="text"
            className="form__input"
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            fullWidth
            placeholder="Enter Post Detail"
            name="detail"
            required
            id="detail"
            type="text"
            className="form__input"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            fullWidth
            placeholder="Enter URL"
            name="url"
            required
            id="url"
            type="url"
            className="form__input"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            fullWidth
            placeholder="Enter Required Members"
            name="members"
            required
            id="members"
            type="number"
            className="form__input"
          />
        </Box>
      </div>
      <div className="footer">
        <button type="submit" className="button">
          Add Post
        </button>
      </div>
    </div>
  );
};
export default Post;
