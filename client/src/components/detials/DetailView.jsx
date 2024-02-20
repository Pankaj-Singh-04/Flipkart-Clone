import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from '../../service/api';
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Typography, styled, Grid } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))
// const RightContainer = styled(Grid)`
// margin-top:55px;
// margin-left:20px;
// background:#ffffff;
// `;
const RightContainer = styled(Grid)`
    padding-left:10px;
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
    @media (max-width:899px){
        padding :20px 40px;
    }
`;


const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
function DetailView() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);
    // console.log("loading", loading);
    // console.log("product", product);
    // console.log(loading, product);
    useEffect(() => {
        if (product && id !== product.id)
            dispatch(getProductDetails(id))
    }, [dispatch, id, loading, product]);

    return (
        <Box style={{ background: '#f2f2f2',marginTop:'55px' }}>
            {/* <div>Hello</div>
        <div>Hi</div> */}
        { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }
        </Box>
    );
}

export default DetailView;
