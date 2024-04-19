
import { Button, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const SideBar=()=>
{
    return (
        <Box sx={{mr:"48px"}}>
        <Stack>
            <Button sx={{
                justifyContent: "flex-start",
                p:"8px 16px 8px 16px",
                backgroundColor:"#F1F5F9",
                borderRadius:"0px",
                textTransform:"inherit",
                fontFamily:"Inter",
                fontWeight:"500",
                color:"#000000",
                width:"250px"
                }} >
                    New Quote Generator
                
            </Button>      
            <Button sx={{justifyContent: "flex-start",
                p:"8px 16px 8px 16px",
                borderRadius:"0px",
                fontWeight:"500",
                textTransform:"inherit",
                fontFamily:"Inter",
                color:"#000000",
                width:"250px"}}  >
                Past Quotations
            </Button>
        </Stack>
      
    </Box>
    )
}
export default SideBar;