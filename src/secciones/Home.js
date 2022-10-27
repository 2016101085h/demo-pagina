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
import {Link} from 'react-router-dom' 
const Home = () => {
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
                    <div className="col-lg-6 col-md-10">
                        <div className="header-hero-content">
                            <h3 className="header-title wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.2s"><span>Consigue</span> Tu prestamo en Línea</h3>
                            {/* <p className="text wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.6s">Please, purchase the full version of template get all pages, features, elements, documentation, commercial license and permission to remove footer credit.</p> */}
                            
                            <br></br>

                            <div className="single-services services-color-1 text-center mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                                <div className="services-icon d-flex align-items-center justify-content-center">
                                <i className="lni lni-amazon-pay"></i>
                                    {/* <IconButton >
                                    <PaymentIcon />
                                </IconButton> */}
                                </div>
                                <div className="services-content">
                                    <h4 className="services-title pb-0 mb-0"><a href="#">Simula tu Préstamo</a></h4>
                                    <p className="text mt-0">¿Cuánto necesitas?</p>
                                    <br></br>
                                    <Slider defaultValue={30} step={10} marks min={10} max={110} valueLabelDisplay="auto" color='info'/>
                                   <div className='d-flex justify-content-between'>
                                        <span >S/. 40.00</span>
                                        <span >S/. 80.00</span>
                                   </div>
                                   <br></br>
                                   <div>
                                   <Box className='pt-3' sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">N° Cuotas</InputLabel>
                                                                    <Select
                                                                            labelId="demo-simple-select-label"
                                                                            id="demo-simple-select"
                                                                            value={age}
                                                                            label="asasas"
                                                                            onChange={handleChange}
                                                                            >
                                                                            <MenuItem value={10}>Dos cuotas</MenuItem>
                                                                            <MenuItem value={20}>Diez cuotas</MenuItem>
                                                                            <MenuItem value={30}>Veinte cuotas</MenuItem>
                                                                            </Select>
                                                                            </FormControl>
                                        </Box>
                                   </div>
                                   <br></br>
                                   <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#C6CAD3", color:"#fff"}}>
                                        <CardContent>
                                        
                                            <Typography variant="body2">
                                           Por quincena vas a pagar
                                           <br></br>
                                            S/. 15.00
                                            </Typography>
                                        </CardContent>
                                        
                                        </Card>
                                        <br></br>
                                        <Link to="/login" >

                                           <Button variant="contained" color='secondary' fullWidth endIcon={<SendIcon />}>
 ¡Lo quiero ya!
</Button>                         
                                        </Link>
                                  
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

export default Home
