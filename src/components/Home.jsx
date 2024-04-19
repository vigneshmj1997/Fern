import SideBar from "./SideBar";
import TopBar from "./TopBar";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import MainPage from "./Main";
const Home =()=>
{
    return (
        <>
        <TopBar/>
        <Divider/>
        <Box sx={{display:"flex"}}>
            <SideBar/>
            <MainPage/>       
        </Box>
        </>
        
    )
}
export default Home;