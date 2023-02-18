import { InputBase } from "@mui/material"
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";
import { blue } from "@mui/material/colors";

// ________________________________________________________________

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
export const CustomizedInputs=(props:{title:string,id:string})=> {

  return (
    
      <FormControl variant="standard" sx={{width:1,position:"relative",mt:2}}>
        <InputLabel shrink htmlFor={props.id} sx={{position:"absolute",right:"-30%",fontWeight:"600",color:"white",fontSize:"1.2rem"}}>
          {props.title}
        </InputLabel>
        <BootstrapInput id={props.id} sx={{width:1,".MuiInputBase-input":{borderRadius:"30px",width:1,backgroundColor:"#aa8cf413"}}} />
      </FormControl>
  )}
  export default CustomizedInputs

  // blue 