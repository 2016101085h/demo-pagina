import React from 'react'

const Aliados = () => {
  return (
    <div>
      <section id="why" className="services-area pt-110 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section-title text-center pb-25">
                        <h3 className="title h2">Nuestros <span style={{color: "#a3e635"}}> Clientes</span></h3>
                 
                    </div> 
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <img src="images/clientes/bitel.png" alt="shape"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                <img src="images/clientes/claro.jpg" alt="shape"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                <img src="images/clientes/geodir-entel-logo.png" alt="shape"/>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <img src="images/clientes/geodir-interbank-logo.png" alt="shape"/>
                </div>
            </div> 
       
        {/* <div className="header-shape-2"><img src="images/header-shape-2.svg" alt="shape"/></div> */}
        </div> 
    </section>
    </div>
  )
}

export default Aliados
