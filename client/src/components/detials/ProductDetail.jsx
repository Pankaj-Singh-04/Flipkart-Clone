import { Box, Typography, Button, styled, Table, TableBody, TableCell, TableRow } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
const SmallText = styled(Box)`
vertical-align:baseline;
& >p{
    font-size:14px;
    margin-top:10px;
}
`;
const Badge = styled(LocalOfferIcon)`
    margin-right:10px;
    color:green;
    font-size:15px;
`;
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        margin-top: 10px;
    }
`
const ProductDetail=({ product })=> {
    const date=new Date(new Date().getTime()+(3*24*60*60*1000));
    return (
        <>
            {/* <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ marginTop: '5px', color: '#878787', fontSize: 14 }}>
                9 Ratings & 1 Reviews
                <Box component="span"><img src={fassured} style={{ width: 80, marginLeft: 20 }} /></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{ fontSize: '16px', fontWeight: 'bold' }}>₹{product.price.cost}</Box>
                <Box component="span" style={{ marginLeft: '5px', fontSize: '12px' }}><strike>₹{product.price.mrp}</strike></Box>
                <Box component="span" style={{ marginLeft: '5px' }}>₹{product.price.discount}</Box>
            </Typography> */}
            <Box>
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><Badge />10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and aboveT&C</Typography>
                <Typography><Badge />10% off on OneCard Credit Card and EMI Transactions, up to ₹500 on orders of ₹2,000 and aboveT&C</Typography>
                <Typography><Badge />Buy 2 items save 5%; Buy 3 or more save 7%</Typography>
                <Typography><Badge />Get extra 21% off (price inclusive of cashback/coupon)</Typography>
                <Typography><Badge />Buy for 2000 get ₹500 off your Next BuyT&C</Typography>
                <Typography><Badge />5% Cashback on Flipkart Axis Bank CardT&C</Typography>
            </SmallText>
            <Table >
                <TableBody>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Delivery to</TableCell>
                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell style={{fontWeight:600}}>No Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>

                </TableBody>
            </Table>
            </Box>

        </>
    )
}

export default ProductDetail;