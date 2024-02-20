import { useState, useContext } from "react";
import { Box, Button, Typography, styled ,Badge} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'

// components
import LoginDailog from "../login/loginDailog";

import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";


const Wrapper = styled(Box)`
                display : flex;
                margin : 0 3% 0 auto;
                align-items: center;
                & > button, & > p, & >div{
                    margin-right : 40px;
                    font-size : 14px;
                }
                @media (max-width: 768px) {
                display: block;
                }
                `;
const LoginButton = styled(Button)`
                color : #2874f0;
                background-color:#fff;
                text-tranform: none;
                margin-left:10px;
                padding : 5px 40px;
                border-shadow: none;
                body-weight: 600;
                height : 30px;
                &:hover {
                background-color: #e0e0e0;
                }
                @media (max-width: 768px) {
                margin:auto;
                }
                `;
const LoginUser = styled(Typography)`
                color : #fff;
                background-color:#2874f0;
                text-tranform: none;
                margin-left:10px;
                margin-top: 15px;
                padding : 5px 40px;
                border-shadow: none;
                body-weight: 600;
                height : 30px;
                ${'' /* &:hover {
                background-color: #e0e0e0;
                } */}
                `;

const CustomButtons = () => {
    const cartDetails=useSelector(state=>state.cart);
    const {cartItems}=cartDetails;
    const [account,setAccount] = useContext(DataContext);
    const [open, setOpen] = useState(false);
    // const account = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <div>
            <Wrapper>
            {/* <Profile username="vk"/> */}
                {account ? (
                    <>
                        <Profile account={account} setAccount={setAccount}/>
                    </>
                ) : (
                    <LoginButton onClick={() => openDialog()} variant="contained">
                        Login
                    </LoginButton>
                )}


                {/* <LoginButton onClick={() => openDialog()} variant="contained">Login</LoginButton> */}

                <Typography style={{ width: "140px", marginTop: "6px",fontSize:'14' }}>Became a Seller</Typography>
                <Typography style={{ marginTop: "6px" }}>More</Typography>
                <Wrapper style={{ marginTop: "6px" }}>
                    <Link to='/cart' style={{textDecoration:'none',color:'inherit',display:'flex'}}>
                    <Badge badgeContent={cartItems?.length} color='secondary'><ShoppingCartIcon /></Badge>
                    <Typography  style={{ fontSize: "14px" }}>Cart</Typography>
                    </Link>
                </Wrapper>
                <LoginDailog open={open} setOpen={setOpen} />
            </Wrapper>
        </div>
    )
}

export default CustomButtons;