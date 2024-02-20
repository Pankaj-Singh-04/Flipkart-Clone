import { Box,styled } from "@mui/material";
import Slide from "./Slide";

const Wrapper=styled('Box')`
            display:flex;
            `;
const LeftComponent=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width:'100%'
    }
}));
const Add=styled(Box)(({theme})=>({
    background:'#ffffff',
    padding:'5px',
    marginTop:'10px',
    marginLeft:'10px',
    marginRight:'0px',
    width:'17%',
    textAlign:'center',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}));
const Image=styled('img')`
            width:100%;
            height:300px;
            `;

const MidSlide = ({ products,title,timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Wrapper >
            <LeftComponent >
                <Slide products={products} title={title} timer={timer} />
            </LeftComponent>
            <Add>
                <Image src={adURL} alt="addImage"/>
            </Add>
        </Wrapper>

    )
}

export default MidSlide;
