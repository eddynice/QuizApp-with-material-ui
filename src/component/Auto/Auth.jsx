import React,{useState} from 'react';
import {Container, Paper, Avatar,Typography, Icon} from '@material-ui/core';
import useStyle from "./style"
import { LockOutlined} from '@material-ui/icons';
import { Grid ,Button} from '@material-ui/core';
//import { GoogleLogin } from "react-google-login";
import Input from "./Input";
import {signin , signup} from "../../action/auth"
import { useDispatch }  from 'react-redux';
import { useHistory } from 'react-router-dom';

const initial = {firstName:'', lastName:'',email:'',password:'',}

export default function Auth() {
        const classes  = useStyle();
        const [ShowPass, setShowPass] = useState(false)
        const [isSignup, setisSignup] = useState(false);
         const [formData, setFormData] = useState(initial)
         const dispatch = useDispatch();
         const history = useHistory()

       const handleShowPassword=()=>{
           setShowPass((prevShowPassword)=> !prevShowPassword)
       }
        const handleChange = (e)=>{
            setFormData({ ...formData, [e.target.name]:e.target.value})

        }
        const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(formData);

            if(isSignup){
               dispatch(signup(formData, history))
            }else{
                dispatch(signin(formData , history))
            }

        }
        const SwitchMode =()=>{
            setisSignup((prevIsSign)=>!prevIsSign);
            setShowPass(false)

        }

        const googleSucess = async (res) =>{
            const result = res?.profileObj;
            const token = res?.tokenId;
            try {
                dispatch({ type: 'AUTH', data:{result, token}})
            } catch (error) {
                console.log(error)
                
            }
        }

 
        const googleFailure = (error)=>{
            console.log(error);
        }
    return (
<Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevator={3}>
            <Avatar className={classes.avatar}>
                <LockOutlined/>

            </Avatar>
            <Typography variant="h5" > {isSignup ? 'SIgn up': 'Sign in'}

            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={12}>
                    {isSignup && (
                            <>
                           
                                <Input name='firstName' handleChange={handleChange} label='First Name' autoFocus half/>
                                <Input name='lastName' handleChange={handleChange} label='Last Name' autoFocus half/>
                                </>
                      
                        )}
                    <Input name="email" label="Email Adress" handleChange={handleChange} type="email" />
                    <Input name="password" label="password" handleChange={handleChange} type={ShowPass ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                {isSignup && <Input name="confirmPassword" label="Repeat password" handleChange={handleChange}  type="password"/>}
                </Grid>
        {/**      <GoogleLogin 
             clientId="Google Id" render={(renderProps)=>(
                 <Button className={classes.googleButton} 
                 color="primary" fullWidth
                  onClick={renderProps.onClick}
                   disabled={renderProps.disabled}
                    variant="contained"
                  startIcon={<Icon/>}> GOOGLE SIGN IN</Button>
             )}
             />
             */}
<Button type="submit" fullWidth variant="contained" color="primary" >
    { isSignup ? 'sign Up':'Sign In'}
</Button>
<Grid container justify="flex-end">
    <Grid item>
        <Button onClick={SwitchMode}>
            {isSignup ? "Already have an Account ? sign in": 'DOnt have an Account' } </Button>
    </Grid>
</Grid>
            </form>
        </Paper>
    </Container>

    )
}
 