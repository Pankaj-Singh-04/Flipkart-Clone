import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom'


const SearchContainer = styled(Box)`
                        background-color: white;
                        width: 40%;
                        margin-left:20px;
                        border-radius : 2px;
                        display: flex;
                        `;
const inputBaseStyle = {
    height: "30px",
    width: "100%",
    paddingLeft: "0",
    marginLeft: "20px",
    fontSize: "14px",
    fontFamily: "Roboto,Arial,sansSerif"
}
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const searchIconCSS = {
    color: "blue",
    marginTop: "4px"
}

const Search = () => {
    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const inputValue = (str) => {
        setText(str);
        // console.log(text);
    }

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <SearchContainer>
            <InputBase style={inputBaseStyle} placeholder="Search for products and more" onChange={(e) => inputValue(e.target.value)} value={text}/>
            <Box style={searchIconCSS}>
                <SearchIcon  />
            </Box>
            {
                text &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                            <ListItem key={product.id} >
                                <Link to={`/product/${product.id}`} style={{textDecoration:'none',color:'inherit'}} onClick={()=>{setText('')}}>
                                    {product.title.longTitle}
                                </Link>

                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;