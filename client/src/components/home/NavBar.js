import { Box ,Typography,styled} from '@mui/material';
import { navData } from '../../constants/data';

const BoxWrapper=styled(Box)(({theme})=>({
  display:'flex',
  margin: '55px 130px 0px 130px',
  justifyContent:'space-between',
  overflow:'hidden',
  [theme.breakpoints.down('lg')]:{
    margin:0,
  }
}));
const Container=styled(Box)`
                 text-align:centre;
                 padding:12px 8px;
                 display:flex;
                 flex-direction:column;
                 `;
const Text=styled(Typography)`
            font-size:14px;
            margin:auto;
            font-weight:600;
            font-family:inherit;        
           `;
const NavBar = () => {
  return (
    <BoxWrapper>
      {navData.map((data) => (
        <Container>
          <img style={{margin:"auto" ,width:"60px"}} src={data.url} alt='nav items' />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </BoxWrapper>
  );
};

export default NavBar;
