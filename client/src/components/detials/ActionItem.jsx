import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/actions/cartAction';
import { useState } from 'react';
import { toast } from "react-toastify";
import {loadStripe} from '@stripe/stripe-js';

const LeftComponent = styled(Box)(({ theme }) => ({
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

    const [quantity, Setquantity] = useState(1);
    const { id } = product;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }
    const buyNow = () =>{
        toast.info("Add to cart and then buy");
    }
    // const buyNow = async () => {
    //     // toast.info("working on it");
    //     const stripe = await loadStripe("pk_test_51Ou9GBSJNwVoAu8JgeZu1X1KtapLMfVCQEPaFtAwxesqfGWnVgbo1ZEncp8tnuJQhheAuC2x5DkhWe5ocx51GZfE00M3GLGG5V");
    
    //     // prepare the request body with cart items
    //     const body = {
    //       products: product,
    //     }
    //     const headers = {
    //       "Content-Type": "application/json"
    //     }
    //     try {
    //       const response = await fetch("http://localhost:8000/api/create-checkout-session", {
    //         method: "POST",
    //         headers: headers,
    //         body: JSON.stringify(body)
    //       })
    //       // Parse the response to get the session ID
    //       const session = await response.json();
    
    //       // Redirect to checkout using the session ID
    //       const result = await stripe.redirectToCheckout({
    //         sessionId: session.sessionId // Ensure correct property name
    //       });
    
    //       // Handle any errors during redirection
    //       if (result.error) {
    //         console.error(result.error);
    //         toast.info("Payment failed");
    //       }
    //     } catch (error) {
    //       console.error("Error creating checkout session:", error);
    //       toast.error("Error creating checkout session");
    //     }
    //   }

    return (
        <LeftComponent>
            {/* <div>ActionItem</div> */}
            <Box style={{ padding: '15px 20px', border: ' #f0f0f0', marginBottom: 5 }}>
                <Image src={product.detailUrl} alt="product-img" />
            </Box>
            <StyledButton variant="contained" style={{ background: 'orange' }} onClick={() => addItemToCart()}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{ marginLeft: '5px', background: '#fb541b' }} onClick={() => buyNow()}><FlashOnIcon />Buy now</StyledButton>

        </LeftComponent>

    )
}

export default ActionItem