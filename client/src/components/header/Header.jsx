
import { AppBar, Toolbar, styled, Box, Typography,IconButton, Drawer, List, ListItem } from '@mui/material';
import abc from "../../images/flipkart_logo.png"
import subURL from "../../images/plusImg.png"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

//components import
import Search from './Search';
import CustomButtons from './CustomBottons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
                     background-color: #2874f0;
                     height: 55px;
                     `;
const Component = styled(Link)`
                  margin-left:12%;
                  line-height: 0;
                  text-decoration:none;
                  color:inherit;
                  `;
const SubHeading = styled(Typography)`
                   font-size:10px;
                   font-style:italic;
                   `;
const CustomButtonWrapper = styled(Box)(({ theme }) => ({
                    margin: '0 5% 0 auto',
                    [theme.breakpoints.down('md')]: {
                        display:'none',
                
                    }
                }));
const MenuButton = styled(IconButton)(({ theme }) => ({
                    display:'none',
                    [theme.breakpoints.down('md')]: {
                        display:'block',
                
                    }
                }));
                

const pluscss = {
    textDecoration: "none",
    color: "inherit",
    border: "none",
    outline: "none",
    height: "10px",
    marginLeft: "2px"
}

const Header = () => {
    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(true);
    }
    const handleClose=()=>{
        setOpen(false);
    }
    const list = () => (
        <Box style={{ width: 180 }} onClick={handleClose}>
            {/* <div>Hello</div> */}
            <List>
                <ListItem button>
                    <CustomButtons />
                </ListItem>
            </List>
        </Box>
    );
    
    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: "55px" }}>
            <MenuButton color="inherit" onClick={handleOpen}>
                <MenuIcon/>
            </MenuButton>
            <Drawer open={open} onclose={handleClose} >
            {list()}
            </Drawer>
                <Component to='/'>
                    <img src={abc} alt="Flipkart" style={{ width: '75px' }} />
                    {/* Box is same as div in material ui  */}
                    <Box>
                        <SubHeading>
                            Explore
                            <Box component="span" style={{ color: '#ffe500' }}> Plus</Box>
                            <img src={subURL} alt='Plus' style={pluscss} />
                        </SubHeading>
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;