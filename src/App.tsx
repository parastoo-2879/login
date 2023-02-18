import  Grid  from '@mui/material/Grid';
import CustomizedButton from './component/button';
import CustomizedInputs from './component/textFeilds';
import { Buttons } from './component/button';
import  "./App.css"
function App() {

  return (
    <div className="App">
        <Grid container  component="form" md={5} xs={12} sx={{m:"auto",p:2,minHeight:"100vh"}} >
            <Grid component="header" xs={12} >
              <CustomizedButton children='ثبت نام' sx={{borderBottom:"2px solid blue"}}/>
              <CustomizedButton children='ورود' sx={{color:"gray"}}/>
            </Grid>
            <Grid xs={12}><CustomizedInputs title='نام کاربری' id="userName" /></Grid>
            <Grid xs={12}><CustomizedInputs title='رمز عبور' id="pass1" /></Grid>
            <Grid xs={12}><CustomizedInputs title='تکرار رمز عبور' id="pass2" /></Grid>
            <Grid xs={12}><CustomizedInputs title='ایمیل' id='email' /></Grid>
            <Grid xs={12}><Buttons children="ثبت نام" sx={{width:1,borderRadius:"30px",mt:2}}/></Grid>
        </Grid>
    </div>
  );
}

export default App;