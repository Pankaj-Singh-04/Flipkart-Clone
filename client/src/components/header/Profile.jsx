import { Box, Menu,MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { toast } from "react-toastify";

const Profile = ({ account,setAccount }) => {
    
    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
      setOpen(event.currentTarget);
    }
    const handleClose=()=>{
      setOpen(false);
    }
    const logoutuser=()=>{
      setAccount('');
      toast.info("Log Out Successfully")
    }
    return (
      <>
      <Box onClick={handleClick}><Typography style={{marginTop:"2px",marginLeft:"100px",cursor:"pointer"}}>{account}</Typography></Box>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose} >
        <MenuItem style={{marginTop:"5px",marginLeft:"20px"}} onClick={()=>{handleClose();logoutuser()}}>
         <PowerSettingsNewIcon color="primary" fontSize="small"/>
         <Typography >Logout</Typography>
        </MenuItem>
      </Menu>
      </>
    );
  };
  
  export default Profile;
  