import {
  TextField,
  Button,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Input,
} from "@mui/material";
import { useState } from "react";
import "./user.css";
const User = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="user-page">
      <div className="profile-header"></div>
      <div className="container">
        <div className="">
          <div className="row profile-card">
            <div className="col-md-4 profile-picture">
              <CardMedia
                component="img"
                image={""}
                height="200"
                alt="Profile -Picture"
              />
            </div>
            <div className="col-md-7 profile-detail">
              <TextField
                id="input"
                label="Name"
                className="w-50 mt-4 mb-3"
                defaultValue="User Name"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <br />
              <TextField
                id="input"
                label="Gender"
                className="w-50 mb-3"
                defaultValue="male/female"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <br />
              <TextField
                id="input"
                label="Email"
                className="w-50 mb-3"
                defaultValue="email@gmail.com"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <br />
              <TextField
                id="input"
                label="Address"
                multiline
                maxRows={2}
                className="w-50 mb-3"
                defaultValue="User Address ff"
                InputProps={{
                  readOnly: true,
                }}
                variant="standard"
              />
              <br />
              <Button
                className="w-50 mb-3"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Edit Profile
              </Button>

              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Profile</DialogTitle>
                <DialogContent>
                  <DialogContentText>Update your Profile</DialogContentText>
                  <Input id="profilePicture" variant="standard" type="file" />
                  <br />
                  <TextField
                    className="mb-2"
                    margin="dense"
                    id="name"
                    label="Name"
                    type="userName"
                    variant="standard"
                  />
                  <br />

                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    label="Gender"
                    aria-label="gender"
                    defaultValue="male"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>

                  <TextField
                    className="md-2"
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    variant="standard"
                  />
                  <br />
                  <TextField
                    id="input"
                    label="Address"
                    multiline
                    type="address"
                    className="md-2"
                    defaultValue=""
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button variant="outlined" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleClose}>
                    Update
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
