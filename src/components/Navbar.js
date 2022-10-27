import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
          <div className="navbar-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 px-md-5  pt-md-3">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="index.html">
                                <img src="images/logo.png" alt="Logo"/>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" className="navbar-nav ml-auto text-center text-md-right">
                                    <li className="nav-item active">
                                        <a className="page-scroll" href="#home">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#why">Solicitar Préstamo</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#features">Por qué Nosotros</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="page-scroll" href="#screenshots">Preguntas Frecuentes</a>
                                    </li>
                                    <li className="nav-item pb-2">
                                        <Link to="/login"><Button variant="outlined" color='warning'>Iniciar Sesión</Button></Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/register"><Button variant="outlined" color='info'>Registrarse</Button></Link>
                                    </li>
                                </ul>
                            </div> 
                        </nav> 
                    </div>
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default Navbar
