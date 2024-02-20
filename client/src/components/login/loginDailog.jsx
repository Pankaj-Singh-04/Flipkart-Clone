import { Dialog, Box, TextField, Typography, Button, styled } from "@mui/material";
import { useState, useContext } from "react";
// import AuthenticateSignup from "../../service/api";
import { authenticateSignup,authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
// import Toaster from "../toaster/Toaster";
import {toast } from 'react-toastify';


const Component = styled(Box)`
                width:90vh;
                height:78vh;
                `;
const Image = styled(Box)`
            background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
            width:40%;
            padding: 45px 35px;
            ${'' /* height:100%; */}
            color:#ffffff;
            &>p{
            font-weight:600;
            }
            `;
const Wrapper = styled(Box)`
            display:flex;
            flex:1;
            flex-direction:column;
            padding: 20px 35px;
            & > div,& >button,&>p{
                margin-top:20px;
            }
            `;
const LoginButton = styled(Button)`
            background:#FB641B;
            text-transform: none;
            color:#fff;
            border-radius:2px;
            height:48px;
            &:hover {
            background: #FF7F4F;
            }
            `;
const RequestOTP = styled(Button)`
            background:#fff;
            text-transform: none;
            color:#2874f0;
            border-radius:2px;
            height:48px;
            box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
            `;
const Text = styled(Typography)`
            font-size:12px;
            color:#878787;
            `;
const CreateAccount = styled(Typography)`
            font-size:14px;
            color:#2874f0;
            text-align:center;
            font-weight:600;
            cursor:pointer;
            `;
const Error = styled(Typography)`
            font-size:10px;
            color:#ff6161;
            line-height:0;
            margin-top:10px;
            font-weight:600;
            `;
// const accountInitialValues={
//     login:{
//         view:'login'
//     },
//     signup:{
//         view:'signup'
//     }
// }

const LoginDailog = ({ open, setOpen }) => {

    const signupInitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''
    }
    const loginInitialValues = {
        username: '',
        password: '',
    }

    const [account, toggleAccount] = useState('login');
    const [subheading, setSubheading] = useState('Login');

    const [signup, setSignup] = useState(signupInitialValues);
    const [login,setLogin]=useState(loginInitialValues);

    const [error,setError]=useState(false);

    const [accountName, setAccountName] = useContext(DataContext);

    // const {setAccount}

    const handleclose = () => {
        setOpen(false);
        toggleAccount('login');
        setSubheading("Login");
        setError(false);
        // setAccountName(signup.firstname);
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        // console.log(signup);
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        // console.log(signup);
    }
    // const signupUser = async () => {
    //     // console.log(signup);
    //     if (!signup.firstname){ alert("Please enter Firstname"); return;}
    //     if (!signup.lastname){ alert("Please enter Lastname"); return;}
    //     if (!signup.username){ alert("Please enter username"); return;}
    //     if (!signup.email){ alert("Please enter email"); return;}
    //     if (!signup.password){ alert("Please enter password"); return;}
    //     if (!signup.phone){ alert("Please enter phone number"); return;}
    //     let response=await authenticateSignup(signup);
    //     if(!response){
    //         alert("Some issues occurred during registration. 😞");
    //         console.log(response);
    //         handleclose();
    //         return;
    //     } 
    //     handleclose();
    // }

    const signupUser = async () => {
        // Check if all the required fields are filled
        if (signup.firstname && signup.lastname && signup.username && signup.email && signup.password && signup.phone) {
            // All fields are filled, proceed with signup
            try {
                let response = await authenticateSignup(signup);
                if (!response) {
                    toast.error("Some issues occurred during registration.")
                    // alert("Some issues occurred during registration. 😞");
                    // console.log(response);
                } else {
                    setAccountName(signup.firstname);
                    toast.info("Signup Successfully")
                    // alert("Successfully signup 👍");
                    handleclose();
                }
            } catch (error) {
                // Handle specific error cases (e.g., display a user-friendly message for 401)
                if (error.response && error.response.status === 401) {
                    toast.error("Please check your credentials.")
                    // alert("Please check your credentials.");
                } else {
                    toast.error("An error occurred during registration.")
                    // alert("An error occurred during registration.");
                    // console.error(error);
                }
            }
        } else {
            // Notify the user that all fields are required
            toast.error("Please fill in all fields.");
        }
    };
    const loginUser=async()=>{
        let response= await authenticateLogin(login);
        // console.log(response);
        if(response.status===200){
            handleclose();
            setAccountName(response.data.data.firstname);
            toast.info("Login Successfully")
        }
        else{
            toast.error("Error")
            setError(true);
        }
    }

    return (
        <Dialog open={open} onClose={handleclose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component style={{ display: "flex" }}>
                <Image>
                    {/* <img src={imageUrl} alt=""/> */}
                    <Typography variant="h5">{subheading}</Typography>
                    <Typography style={{ marginTop: "20px" }}>Get access to your orders, wishlist and recommendations</Typography>
                </Image>
                {account === 'login' ?
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter username" required />
                        {
                            error && <Error>Please enter valid username and password.</Error> 
                        }
                        <TextField variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" required />
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                        <Typography style={{ textAlign: 'center' }}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={() => { toggleAccount('signup'); setSubheading("Looks like you're new here!") }}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="firstname" label="Enter Firstname" required />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="lastname" label="Enter Lastname" required />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="username" label="Enter Username" required />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="email" label="Enter Email" required />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="password" label="Enter Password" required />
                        <TextField variant="standard" onChange={(e) => onInputChange(e)} name="phone" label="Enter Phone number" required />
                        <LoginButton onClick={signupUser}>Continue</LoginButton>
                        <CreateAccount onClick={() => { toggleAccount('login'); setSubheading("Login") }}>Existing User? Log in</CreateAccount>

                    </Wrapper>
                }
            </Component>
        </Dialog>
    )
}

export default LoginDailog;