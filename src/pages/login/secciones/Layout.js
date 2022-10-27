import React from 'react'
import Slider from '@mui/material/Slider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom'
const Layout = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
      <div id="home" className="header-hero bg_cover d-lg-flex align-items-center">
            
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            
            <div className="container mt-md-5 pt-md-5">
                <div className="row align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-lg-7 col-md-10">
                        <div className="header-hero-content">
                            <div className='d-flex justify-content-between align-items-center'>
                            <h3 className="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s"><span>Iniciar</span> Sesión</h3>
                            <h3 className="header-title wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.2s"> 
                            <Link to="/">
                              <IconButton aria-label="Vovler al Inicio" size="large">
                                                          <HomeIcon></HomeIcon>
                              </IconButton>
                            </Link>
                            
                            </h3>
                            {/* <h3 className="header-title wow fadeInRighttBig" data-wow-duration="1.3s" data-wow-delay="0.2s">hola</h3> */}
                            </div>
                            {/* <p className="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">Please, purchase the full version of template get all pages, features, elements, documentation, commercial license and permission to remove footer credit.</p> */}
                            
                            <br></br>

                            <div className="single-services services-color-1 text-center mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div className="d-flex align-items-center justify-content-around">
                                <Button variant="contained" size="large" style={{backgroundColor:"#3B579D"}} startIcon={<TwitterIcon></TwitterIcon>}>    Facebook
        </Button>
        <Button variant="contained" size="large" startIcon={<FacebookIcon></FacebookIcon>}>
          Twitter
        </Button>
        <Button variant="contained" className='font-bold' style={{backgroundColor:"#dd493c"}} size="large" startIcon={<GoogleIcon></GoogleIcon>}>
          Google
        </Button>
                                   
                                </div>
                                <div className="services-content">
                                    
                                    <p className="text mt-0">O ingresa con tu correo electrónico</p>
                                    <br></br>
                                   
                                    <TextField id="filled-basic" fullWidth type='email' label="Correo Electronico" variant="filled" />
                                  <br></br>
                                  <br></br>
                                  <TextField id="filled-basic" fullWidth type='password' label="Contraseña" variant="filled" />
                                  <br></br>
                                  <br></br>
                                   <div>
                                   <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Recuerdame" />
                                    
                                    </FormGroup>
                                   </div>
                                   <br></br>
                               
                                       

                                           <Button style={{backgroundColor:"#FF9800"}} variant="contained"  fullWidth endIcon={<SendIcon />}>
 Ingresar
</Button>                         
                                  
                                </div>
                            </div> 
                            {/* <ul className="d-flex">
                                <li><a href="https://rebrand.ly/appland-ud" rel="nofollow" className="main-btn wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.8s">Purchase Now</a></li>
                            </ul> */}
                        </div> 
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-10">
                        <div className="header-image">
                            <img src="images/header-app.png" alt="app" className="image wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s"/>
                            <div className="image-shape wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                                <img src="images/download-shape.svg" alt="shape"/>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div> 
            
            <div className="header-shape-1"></div> 
            <div className="header-shape-2">
                <img src="images/header-shape-2.svg" alt="shape"/>
            </div> 
        </div> 
    </div>
  )
}

export default Layout
