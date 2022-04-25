import { createTheme } from "@mui/material";
import { green, purple,orange,grey } from "@mui/material/colors";

export const mainTheme = createTheme({
    palette:{
        primary:{
            main:orange[400]
        },
        secondary:{
            main:'#000'
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                   background:orange[400],
                   ":hover":{
                        background:orange[500]       
                   }
                },

                
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    background:orange[400],
                    color:'#000'
                }
            }
        }
    }
    
});
