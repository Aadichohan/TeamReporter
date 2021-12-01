
import 'antd/dist/antd.css';
import {  TextField ,Card  ,CardContent ,Button ,Typography  ,Grid }  from '@mui/material/';





const Login = () => {
    return (
      <div className="App"> 


<Grid my={10} item md={12}>
<Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <TextField style={{width:"400px"}} id="filled-basic" label="Email" variant="filled" />
        </Typography>
        <Typography variant="h5" component="div">
        <TextField style={{width:"400px"}} id="filled-basic" label="Password" variant="filled" />
        
        </Typography>
        <Typography py={5}   variant="h5" component="div">
        <Button style={{width:"455px"}} variant="contained" disableElevation>
      Login
    </Button>
    <p style={{color:"#1976d2", fontSize:"15px"}}>
    <a href="/Signup">Create An Account! </a>
    </p>
        
        </Typography>
       
        
      
      </CardContent>
     
    </Card>

  </Grid>


      



      


      
      </div>
    );
  }
  
  export default Login;
  