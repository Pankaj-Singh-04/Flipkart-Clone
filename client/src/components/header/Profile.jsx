import { Box, Menu,MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { toast } from "react-toastify";

const Profile = ({ userName,setUserName }) => {
    
    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
      setOpen(event.currentTarget);
    }
    const handleClose=()=>{
      setOpen(false);
    }
    const logoutuser=()=>{
      localStorage.removeItem("userData");
      setUserName('');
      toast.info("Log Out Successfully")
    }
    return (
      <>
      <Box onClick={handleClick}><Typography style={{marginTop:"2px",marginLeft:"10px",cursor:"pointer"}}>{userName}</Typography></Box>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose} >
        <MenuItem style={{margin:"0px 0px",backgroundColor:'white'}} onClick={()=>{handleClose();logoutuser()}}>
         <PowerSettingsNewIcon color="primary" fontSize="small"/>
         <Typography >Logout</Typography>
        </MenuItem>
      </Menu>
      </>
    );
  };
  
  export default Profile;
  