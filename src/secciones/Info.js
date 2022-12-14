import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Info = () => {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
       <section id="preguntas" className="download-area pt-70 pb-40">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-lg-6 col-md-9">
                    <div className="download-image mt-50 wow fadeInRightBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <img className="image" src="images/download-app.png" alt="download"/>
                        
                        <div className="download-shape-1"></div>
                        <div className="download-shape-2">
                            <img className="svg" src="images/download-shape.svg" alt="shape"/>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6">
                    <div className="download-content mt-45 wow fadeInLeftBig" data-wow-duration="1.3s" data-wow-delay="0.5s">
                        <h3 className="download-title">Preguntas Frecuentes</h3>
                        <p className="text">Lo que debes tener en cuenta</p>
                        <br></br>
                        <Accordion TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          ??Qu?? necesita para solicitar su pr??stamo?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pt-0'>
                       
                        <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Ser peruano.</li>
                        <li className='mt-0 d-block' ><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Edad comprendida entre los 23 y 65 a??os.</li>
                        <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> DNI vigente.</li>
                        <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> N??mero telef??nico m??vil.</li>
                        <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Email.</li>
                        <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Cuenta bancaria a su nombre.</li>
                        <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Desarrollar alguna actividad econ??mica.</li>
                       </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>??Cu??ntas modalidades de solicitar el pr??stamo dispone Contigo en todo?</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pt-0'>
                       
                       <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> 100% digital a trav??s de nuestra p??gina web.</li>
                       <li className='mt-0 d-block' ><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton>La aprobaci??n del pr??stamo toma un promedio de 15 d??as.</li>
                   
                      </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          ??C??ales son los montos de los pr??stamos y plazos de pago?
          </Typography>
       
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pt-0'>
                       
                       <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Monto: Hasta 800* soles.</li>
                       <li className='mt-0 d-block' ><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton>Plazo: Hasta 8 quincenas.</li>
                   
                      </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>??Puedo solicitar un pr??stamo si tengo alg??n antecedente de pago negativo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Porque creemos en ti, evaluamos prospectos con antecedentes de pago negativos siempre que cumplan nuestras pol??ticas internas de aprobaci??n.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>??D??nde puedo pagar las cuotas de mi pr??stamo?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ul className='pt-0 text-justify'>
                       
                       <li className='mt-0 d-block'><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton> Para su comodidad, estar??n habilitados canales de recaudo en los principales bancos del pa??s. Durante el proceso de solicitud del cr??dito le proporcionaremos el nombre del banco y el n??mero de la cuenta a nombre de Contigo Soluciones Integrales SAC para que relice su pago.</li>
                       <li className='mt-0 d-block' ><IconButton aria-label="delete" disabled><CheckCircleIcon style={{color:"#A3E635"}} /></IconButton>Una vez realizado el pago de su cuota, deber?? notificarnos el n??mero de operaci??n a trav??s de los canales disponibles para este prop??sito: portal web y whatsapp.</li>
                   
                      </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>??Qu?? hago si no puedo pagar mi cuota?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        Debes comunicarte con nosotros, seguramente encontraremos la mejor manera de acompa??arte a solucionar tu problema, recuerda que es mucho mejor comunicarte con nosotros que dejar pasar un atraso.
          </Typography>
       
                 
               
        </AccordionDetails>
      </Accordion>
                        {/* <ul>
                            <li><a className="app-store" href="#"><img src="images/app-store.png" alt="store"/></a></li>
                            <li><a className="play-store" href="#"><img src="images/play-store.png" alt="store"/></a></li>
                        </ul> */}
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    </div>
  )
}

export default Info
