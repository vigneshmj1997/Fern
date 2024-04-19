import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const TopBar=()=>
{
    return (
        <Box  sx={{p:"0px 16px 0px 16px",textAlign:"left",m:"0 0 24px 0"}}>
            <Typography fontFamily="Inter" fontWeight="700" fontSize="24px">
                Quote Generator
            </Typography>
            <Typography fontFamily="Inter" fontWeight="400" fontSize="16px" color="#64748B">
            Manage your preferences.
            </Typography>
        </Box>
    )
}
export default TopBar;

