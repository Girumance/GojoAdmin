import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {useDispatch} from "react-redux"
import {Adduserdata,Login} from "../../action"
import {ADDSNAKBARDATA} from "./../../action"
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from 'src/icons/Facebook';
import GoogleIcon from 'src/icons/Google';
import Page from 'src/components/Page';
import Axios from 'axios';
import SnakBar from "./../../layouts/DashboardLayout/SnakBar"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const getInput= ()=> {
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value

    
      const data = {
        username:email,
        password:password
    }

    localStorage.setItem("username",email)
    localStorage.setItem("password",password)
    onLogin(data);
    
  }
  

  const onLogin= (data)=>{
   

    const url=process.env.REACT_APP_IP+"login"

    Axios.post(url,data).then( res =>{
      if(res.data.type=="ADMIN" || res.data.type=="SUPERADMIN" ){
        dispatch(Adduserdata(res.data))
        dispatch(Login())
      navigate('/app/dashboard', { replace: true });
      let message="";
        let type="";
            message="Wellcome back "+res.data.firstName+"!"
            type="success"
      const dataa={
        message,
        type,
        open:true
    }

   
  
      dispatch(ADDSNAKBARDATA(dataa))
    }else{
      let message="";
        let type="";
            message="Invalid username and Pssword!!"
            type="error"
      const dataa={
        message,
        type,
        open:true
    }
  
      dispatch(ADDSNAKBARDATA(dataa))
    }
    }
    )


  }


  if(localStorage.getItem("username")!="none"){

    const data = {
      username:localStorage.getItem("username"),
      password:localStorage.getItem("password")
  }

  onLogin(data)


  }


  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <SnakBar/>
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: 'haramaya@gmail.com',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              getInput()
            }}
          >

            
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  mt={3}
                  mb={1}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                  id="email"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                  id="password"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    //disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                    
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default  LoginView;
