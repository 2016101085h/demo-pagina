import React from "react";
import {
  Box,
  Zoom,
  Fab,
} from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import useScrollTrigger from "@mui/material/useScrollTrigger";

// eslint-disable-next-line no-undef
const Whatssap = () => {
    const trigger = useScrollTrigger({
      
      disableHysteresis: false,
      threshold: 100,
    });
 
    const scrollToTop = React.useCallback(() => {
        console.log("hola")
       window.scrollTo({ top: 0, behavior: "smooth" });
     }, []);
 
   return (
       
         <Box
           role="presentation"
           sx={{
             position: "fixed",
             bottom: 32,
             left: 32,
             zIndex: 1000,
           }}
         >
           <Fab
             onClick={scrollToTop}
             color="success"
             style={{backgroundColor: "#A3E635"}}
             size="large"
             aria-label="scroll back to top"
           >
             <WhatsAppIcon />
           </Fab>
         </Box>
      
   )
 }
 export default Whatssap