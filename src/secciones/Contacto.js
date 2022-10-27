import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
const Contacto = () => {
  return (
    <div>
      <section id="about" className=" pt-30 pb-120">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6">
                    <div className="about-content wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="section-title">
                            <h3 className="title">¡Conversemos!</h3>
                            <p className="text">Si tienes dudas o consultas sobre Yevo puedes contactarnos completando el siguiente formulario o escríbenos a:</p>
                        </div> 
                       <br></br>
                       <div className="single-services services-color-4 text-center mt-30 wow fadeInUpBig pt-1" data-wow-duration="1.3s" data-wow-delay="0.8s">
                        
                        <div className="services-content">
                            <h3 className='py-2' style={{color:"#a3e635"}}>Contacto</h3>
                          <div className='row'>
                          <div className='col-md-6'>
                            <TextField id="standard-basic" label="Nombres" variant="standard" fullWidth/>
                            </div>
                            <div className='col-md-6'>
                            <TextField id="standard-basic" label="Apellidos" variant="standard" fullWidth/>
                            </div>
                          </div>
                          <TextField id="standard-basic" label="Correo Electrónico" variant="standard" className='mt-3' fullWidth/>
                          <div className='row mt-3'>
                            <div className='col-md-6 mt-2'>
                                <TextField id="standard-basic" type='number' label="DNI" variant="standard" fullWidth/>
                                </div>
                                <div className='col-md-6'>
                                    <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="demo-simple-select-standard-label">Seleccione el Tipo</InputLabel>
                                        <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        
                                        label="Age"
                                        >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Solicitud</MenuItem>
                                        <MenuItem value={20}>Consulta</MenuItem>
                                        
                                        </Select>
                                    </FormControl>
                                </div>
                          </div>
                          <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Seleccione el Servicio</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    
                                    label="Age"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Solicitud</MenuItem>
                                    <MenuItem value={20}>Consulta</MenuItem>
                                    
                                    </Select>
                                </FormControl>
                          <div  className='mt-4'> 
                          <TextField fullWidth variant="standard"
                                placeholder="Escribe tu mensaje o Consulta Aquí"
                                multiline
                                rows={2}
                                maxRows={4}
/>
                          </div>    
                          
                          <div className='mt-5'>
                          <Button variant="contained" color='info' fullWidth>Enviar</Button> 
                          </div>
                        </div>
                    </div> 
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="about-shape"></div>
                        <img className="app" src="images/about-app.png" alt="app"/>
                    </div> 
                </div>
             
            </div> 
        </div>
    </section>
    </div>
  )
}

export default Contacto
