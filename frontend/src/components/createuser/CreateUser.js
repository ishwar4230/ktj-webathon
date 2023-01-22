import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import "./style.css";

const CreateUser = () => {
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
            placeholder="Enter Your Name"
            name="name"
            required
            id="name"
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
            placeholder="Enter Unique Username"
            name="username"
            required
            id="username"
            type="text"
            className="form__input"
          />
        </Box>

        {/* <Box
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
        </Box> */}
      </div>
      <div className="footer">
        <button type="submit" className="button">
          Create New User
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
