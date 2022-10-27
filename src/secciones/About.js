import React from 'react'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const About = () => {
  return (
    <div>
         <section id="about" className="about-area pt-30 pb-120">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-image mt-50 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="about-shape"></div>
                        <img className="app" src="images/about-app.png" alt="app"/>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <div className="section-title">
                            <h3 className="title">¿Por qué nosotros?</h3>
                            <p className="text">Al igual que tú, nosotros también hemos sentido la distancia que existe entre el sistema financiero y sus clientes. Contigo en Todo nace para hacer las cosas de una manera diferente, en donde la eficiencia y agilidad se combinen naturalmente con el respeto y la empatía.</p>
                        </div> 
                       <br></br>
                       <ul>
                        <li> <IconButton aria-label="delete" disabled><DoneAllIcon style={{color:"#A3E635"}} /></IconButton> Rápido y seguro.</li>
                        <li><IconButton aria-label="delete" disabled><DoneAllIcon style={{color:"#A3E635"}} /></IconButton> Aprobación al instante.</li>
                        <li><IconButton aria-label="delete" disabled><DoneAllIcon style={{color:"#A3E635"}} /></IconButton> Creemos en ti y no solo en tu historial crediticio.</li>
                        <li><IconButton aria-label="delete" disabled><DoneAllIcon style={{color:"#A3E635"}} /></IconButton> Condiciones justas.</li>
                        <li><IconButton aria-label="delete" disabled><DoneAllIcon style={{color:"#A3E635"}} /></IconButton> No importa si no tienes historial crediticio.</li>
                        <li><IconButton aria-label="delete" disabled><DoneAllIcon style={{color:"#A3E635"}} /></IconButton> Queremos que hagas realidad tus sueños.</li>
                       </ul>
                    </div> 
                </div>
            </div> 
        </div>
    </section>
    </div>
  )
}

export default About
