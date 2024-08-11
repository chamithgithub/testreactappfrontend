import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const UserForm = ({ addUser,updateUser, submitted,data,isEdit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    if (!submitted) {
      setId(0);
      setName("");
    }
  }, [submitted]);

 
  useEffect(() => {
    if(data?.id && data.id !== 0){
      setId(data.id);
      setName(data.name);
      
    }
  },[data]);

  return (
    <Grid
      container
      spacing={2}
      sx={{
        // backgroundColor: "red",
        marginBottom: "30px",
        display: "block",
      }}
    >
      <Grid item xs={12}>
        <Typography component={"h1"} sx={{ color: "white" }}>
          User Form
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            fontSize: "10px",
            display: "block",
            marginRight: "10px",
            width: "100px",
          }}
        >
          ID
        </Typography>
        <input
          sx={{ width: "300px" }}
          type="number"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
        <Typography
          component={"label"}
          htmlFor="id"
          sx={{
            color: "#000000",
            fontSize: "10px",
            display: "block",
            marginRight: "10px",
            width: "100px",
          }}
        >
          Name
        </Typography>
        <input
          sx={{ width: "300px" }}
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Button
        sx={{
          width: "100px",
          height: "30px",
          margine: "auto",
          margineBottom: "20px",
          margineTop: "20px",
          margineLeft: "15px",
          color: "black",
          backgroundColor: "#00c6e6",
          // display: "block",
          "&:hover": {
            opcacity: "0.7",
            backgroundColor: "#00c6e6",
          },
        }}
        onClick={() =>{isEdit?updateUser({ id, name }): addUser({ id, name })}}
      >
        {isEdit ? "Update" : "Add"}
      </Button>
    </Grid>
  );
};
export default UserForm;
