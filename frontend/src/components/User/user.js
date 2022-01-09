import { TextField, Button, CardMedia } from "@mui/material";
import "./user.css";
const User = () => {
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
              <Button className="w-50 mb-3" variant="outlined">
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;
