import { Box, Typography, Button, Divider, styled } from '@mui/material'
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


const Component = styled('Box')`
        margin-top:10px;
        background:#ffffff;
        `;
const Deal = styled('Box')`
        padding: 15px 20px;
        display:flex;
        ${'' /* margin-left:10px; */}
        `;
const Timer = styled('Box')`
        display:flex;
        margin-left:10px;
        align-items:center;
        color:#7f7f7f;
        `;
const DealText = styled('Typography')`
        font-size:22px;
        font-weight:600;
        margin-right:20px;
        line-height:32px;
        `;
const ViewButton = styled('Button')`
        margin-left:auto;
        background-color:#3a8bff;
        border-radius:2px;
        font-size:13px;
        font-weight:600;
        `;
const Image = styled('img')`
        width:auto;
        height:150px;
        `;

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


const Slide = ({ products,title,timer }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return;
        } else {
            return <span>{hours}:{minutes}:{seconds} Left</span>;
        }
    };

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                { timer && <Timer>
                    <img src={timerURL} alt="timer" width={20} />
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                </Timer>}
                <ViewButton variant="contained" color="primary">view all</ViewButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                slidesToSlide={1}
            >
                {
                    products.map(product => (
                        <Link to={`/product/${product.id}`} style={{textDecoration:'none'}}>
                        <Box textAlign="center" style={{ padding: "25px 15px" }}>
                            <Image src={product.url} alt="productImg" />
                            <Typography style={{fontSize:"14px",marginTop:"5px",fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Typography>
                            <Typography style={{fontSize:"14px",marginTop:"5px",color:"green"}}>{product.discount}</Typography>
                            <Typography style={{fontSize:"14px",marginTop:"5px",color:"#212121",opacity:0.6}}>{product.tagline}</Typography>
                        </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Component>
    );
};

export default Slide;
