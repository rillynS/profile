import { createTheme } from "@mui/material";
import { green, purple,orange,grey } from "@mui/material/colors";

export const mainTheme = createTheme({
    palette:{
        primary:{
            main:'#00ffff',
            dark:'#00a2ff',
            
        },
        secondary:{
            main:'#000'
        }
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                   background:'#00ffff',
                   ":hover":{
                        background:'#00a2ff'       
                   }
                },

                
            }
        },
        MuiPaper:{
            styleOverrides:{
                root:{
                    background:'#00ffff',
                    color:'#000'
                }
            }
        }
    }
    
});
