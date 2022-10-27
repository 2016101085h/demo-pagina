import React from "react";
import {
  Box,
  Zoom,
  Fab,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// eslint-disable-next-line no-undef
const ScrollTop = () => {
    const trigger = useScrollTrigger({
      target: window,
      disableHysteresis: true,
      threshold: 100,
    });
 
    const scrollToTop = React.useCallback(() => {
        console.log("hola")
       window.scrollTo({ top: 0, behavior: "smooth" });
     }, []);
 
   return (
       <Zoom in={trigger}>
         <Box
           role="presentation"
           sx={{
             position: "fixed",
             bottom: 32,
             right: 32,
             zIndex: 1000,
           }}
         >
           <Fab
             onClick={scrollToTop}
             color="secondary"
             size="large"
             aria-label="scroll back to top"
           >
             <KeyboardArrowUp />
           </Fab>
         </Box>
       </Zoom>
   )
 }
 export default ScrollTop