import React from 'react';
import { Box, Grid, Typography, Button, styled } from "@mui/material";
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCard';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';

const Component = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    padding: '15px 0'
  }
}));
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;
const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('sm')]: {
    marginBottom: 15
  }
}));
const BottomWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;


const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);

  // Making payment

  const buyNow = async () => {
    // toast.info("working on it");
    const stripe = await loadStripe("pk_test_51Ou9GBSJNwVoAu8JgeZu1X1KtapLMfVCQEPaFtAwxesqfGWnVgbo1ZEncp8tnuJQhheAuC2x5DkhWe5ocx51GZfE00M3GLGG5V");

    // prepare the request body with cart items
    const body = {
      products: cartItems,
    }
    const headers = {
      "Content-Type": "application/json"
    }
    try {
      const response = await fetch("http://localhost:8000/api/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
      })
      // Parse the response to get the session ID
      const session = await response.json();

      // Redirect to checkout using the session ID
      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId // Ensure correct property name
      });

      // Handle any errors during redirection
      if (result.error) {
        console.error(result.error);
        toast.info("Payment failed");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      toast.error("Error creating checkout session");
    }
  }

return (
  <Box>
    {cartItems.length ? (
      <Component container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          <Header>
            <Typography>My Cart ({cartItems.length})</Typography>
          </Header>
          {
            cartItems.map(item => (
              <CartItem item={item} />
            ))
          }
          <BottomWrapper>
            <StyledButton onClick={() => buyNow()} variant="contained">Place Order</StyledButton>
          </BottomWrapper>
        </LeftComponent>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <TotalView cartItems={cartItems} />
        </Grid>
      </Component>
    ) :
      <EmptyCart />}
  </Box>
);
}

export default Cart;
