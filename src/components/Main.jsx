import { Divider, FormControl, Typography,Button,Stack } from '@mui/material';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import QuantityInput from './NumberInput';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const DatePicketComponent=()=> {
    return (
      <Box sx={{display:"flex" ,pt:"32px",justifyContent:"space-between"}}>
        <Box>
            <Typography fontFamily="Inter" fontWeight="500" fontSize="14px">Check-In Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} size="small">
                <DatePicker label="Pick a date"  
                slotProps={{ textField: { size: 'small' }}} 
                slots={{
                    openPickerIcon: CalendarTodayIcon
                  }}
                />
            </LocalizationProvider>
        </Box>
        <Box>
            <Typography fontFamily="Inter" fontWeight="500" fontSize="14px">Check-Out Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Pick a date" 
                slotProps = {{
                     textField: { size: 'small' } 
                    }} 
                slots={{
                    openPickerIcon: CalendarTodayIcon
                  }}
                />
            </LocalizationProvider>
        </Box>
      </Box>
    );
  }

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];
  
const FormPhoneNumber=()=>{
const [anchorEl, setAnchorEl] = useState(null);
const [displaytext, setDisplaytext] = useState("+91");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };

  return (
    <Stack>
    <Box sx={{display:"flex",pt:"32px"}}>
        <div>
        <Button
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon/>}
            sx={{border:"1px solid #E2E8F0",borderRadius:"1px",color:"black",p:"8px 12px 8px 12px",width:"91px",height:"36px"}}
        >
            {displaytext}
        </Button>
        <Menu
            id="long-menu"
            MenuListProps={{
            'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                maxHeight: 45 * 4.5,
                width: '20ch',
            },
            }}
        >
            {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                {option}
            </MenuItem>
            ))}
        </Menu>
        </div>
        <OutlinedInput
                        id="outlined-adornment-weight"
                        aria-describedby="outlined-weight-helper-text"
                        size="small"
                        inputProps={{
                        'aria-label': 'weight',
                        }}
                        sx={{ width: '573px',height:"36px" }}
                    />
        </Box>
        <Typography fontFamily="inter" fontSize="12.8px" fontWeight="400" sx={{color:"#64748B"}}>Select your country code</Typography>    
    </Stack>
    );
}

const FormName=()=>
{
    return (
        <>
        <Typography fontFamily="inter" fontWeight="500" fontSize="14px" sx={{pt:"24px"}}>Name</Typography>
                <OutlinedInput
                    id="outlined-adornment-weight"
                    size="small"
                    sx={{ height: '36px',width:"672px",p:"4px 12px 4px 12px" }}
                />
        </>
    );
}

const MainPage=()=>
{
    return (
        <Box sx={{width:"672px",textAlign:"left"}}>
            <Typography fontFamily="Inter" fontSize="18px" fontWeight="500" sx={{pb:"24px"}}>
                Reservation Information
            </Typography>
            <Divider/>
            <FormName/>
            <FormPhoneNumber/>
            <DatePicketComponent/>
            <Box sx={{display:"flex"}}>
                <QuantityInput text="adults"/>
                <QuantityInput text="children"/>
                <QuantityInput text="rooms"/>
            </Box>
            <Box>
                    <FormPhoneNumber/>
            </Box>
            <Button>
                Select Rooms
            </Button>
        </Box>
    )
}
export default MainPage;