
import React from 'react'
import Preloader from '../components/Preloader'
import ScrollTop from '../components/ScrollTop'
import Whatssap from '../components/Whatssap'
import About from './About'
import Aliados from './Aliados'
import Contacto from './Contacto'
import Footer from './Footer'
import Header from './Header'
import Info from './Info'
import PasosPrestamo from './PasosPrestamo'

const index = () => {
  return (
    <div>
       
{/* <Preloader></Preloader>  */}
   <Header></Header>
       <PasosPrestamo></PasosPrestamo>
 

    
   <About></About>
    
 
    
  
    
    
<Info></Info>
    
    <Aliados></Aliados>
    <Contacto></Contacto>
 
    <Footer></Footer>
    
  
    <ScrollTop></ScrollTop>
    <Whatssap></Whatssap>
  

    {/* <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a> */}


    

    <section className="">
        <div className="container">
            <div className="row">
                <div className="col-lg-"></div> 
            </div>
        </div>
    </section>

    

    

    </div>
  )
}

export default index
