import React from 'react'

const PasosPrestamo = () => {
  return (
    <div>

    <section id="why" className="services-area pt-110 pb-120">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="section-title text-center pb-25">
                        <h3 className="title">¿Cómo solicitar tu préstamo?</h3>
                        <p className="text">Sigue estos pasos para obtener tu dinero.</p>
                    </div> 
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="single-services services-color-1 text-center mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.2s">
                        <div className="services-icon d-flex align-items-center justify-content-center">
                        <i className="lni lni-users"></i>
                        </div>
                        <div className="services-content">
                            <h4 className="services-title"><a href="#">Crea tu cuenta</a></h4>
                            <p className="text">A través de nuestra página web te guiaremos en el proceso de creación de tu cuenta de usuario y solicitud del préstamo.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-services services-color-2 text-center mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.4s">
                        <div className="services-icon d-flex align-items-center justify-content-center">
                            <i className="lni lni-layout"></i>
                        </div>
                        <div className="services-content">
                            <h4 className="services-title"><a href="#">Completa tus datos</a></h4>
                            <p className="text">Una vez creada tu cuenta, ingresa los datos que te solicitaremos para calificar tu solicitud de préstamo.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-services services-color-3 text-center mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.6s">
                        <div className="services-icon d-flex align-items-center justify-content-center">
                        <i className="lni lni-protection"></i>
                        </div>
                        <div className="services-content">
                            <h4 className="services-title"><a href="#">Verifica tu identidad</a></h4>
                            <p className="text">Previo al desembolso de tu préstamo, procederemos a validar tu identidad. Todo el proceso será guiado por nosotros, no te preocupes de ello.</p>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="single-services services-color-4 text-center mt-30 wow fadeInUpBig" data-wow-duration="1.3s" data-wow-delay="0.8s">
                        <div className="services-icon d-flex align-items-center justify-content-center">
                        <i className="lni lni-money-protection"></i>
                        </div>
                        <div className="services-content">
                            <h4 className="services-title"><a href="#">Recibe tu dinero</a></h4>
                            <p className="text">Nos aseguraremos de que el dinero de tu préstamo llegue a tus manos. Para ello, solamente depositaremos si la cuenta del banco que consignaste está a tu nombre.</p>
                        </div>
                    </div> 
                </div>
            </div> 
        </div> 
    </section>
    </div>
  )
}

export default PasosPrestamo
