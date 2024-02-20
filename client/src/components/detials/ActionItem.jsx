import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/cartAction';
import {useState} from 'react';
import { toast } from "react-toastify";

const LeftComponent =styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))
const Image = styled('img')`
width:90%;
padding:15px;
                    `;
const StyledButton = styled(Button)`
                    width: 46%;
                    border-radius: 2px;
                    height: 50px;
                `;
                

function ActionItem({ product }) {

    const [quantity,Setquantity]=useState(1);
    const {id}=product;
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const addItemToCart=()=>{
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    function buyNow(){
        toast.info("Currently this feature unavilable");
        }

    return (
        <LeftComponent>
            {/* <div>ActionItem</div> */}
            <Box style={{ padding: '15px 20px', border: ' #f0f0f0',marginBottom:5 }}>
                <Image src={product.detailUrl} alt="product-img" />
            </Box>
            <StyledButton variant="contained" style={{ background: 'orange' }} onClick={()=>addItemToCart()}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{ marginLeft: '5px', background: '#fb541b' }} onClick={()=>buyNow()}><FlashOnIcon />Buy now</StyledButton>

        </LeftComponent>

    )
}

export default ActionItem