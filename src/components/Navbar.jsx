
import {Badge, Pets, Mail, Notifications }from "@mui/icons-material";
import { AppBar, Toolbar, Typography, styled, InputBase, Avatar , Menu, MenuItem} from "@mui/material";
import React, { useState } from "react";
 
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius
}));

const Icons = styled("Box")(({ theme }) => ({
    display:"none", 
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
    
}));

const UserBox = styled("Box")(({ theme }) => ({
    display:"flex", 
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));


const Navbar = () =>{
    const[open, setOpen] = useState(false) 
    return(
        <AppBar position="sticky"> 
        <StyledToolbar>
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"}}}>
                LAMA DEV
            </Typography>
            <Pets sx={{ display: { xs: "block", sm: "none"}}} />
            <Search>
                <InputBase placeholder="Search.." />
            </Search>
            <Icons>
                <Badge badgeContent={5} color="error">
                    <Notifications />
                    <Mail />
                </Badge>
                <Avatar 
                sx={{ width: 30, height: 30}}
                src="data:image/jpeg;base64,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"
                onClick={e=>setOpen(true)}
                />
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
                <Avatar 
                sx={{ width: 30, height: 30}}
                src="data:image/jpeg;base64,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" />
                <Typography varient="span">
                     khush-Rem
                </Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    );
};
export default Navbar