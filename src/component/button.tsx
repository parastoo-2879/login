import {Button} from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';
interface ListHeaderProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}
export default function CustomizedButton({ sx = [], children }: ListHeaderProps) {

  return (
          <Button sx={[{borderBottom:"3px solid white"},  ...(Array.isArray(sx) ? sx : [sx]),]}>{children}</Button>
  )
}

export const Buttons = ({sx=[],children}:ListHeaderProps)=>{
return(
  <Button variant="contained" sx={[ ...(Array.isArray(sx) ? sx : [sx]),]}>{children}</Button>
)
}

// props:{buttontitle:string,sx:[]}