
import 'antd/dist/antd.css';

import React,  { useState} from "react"
import {  TextField ,Card ,Select ,FormControl,InputLabel ,MenuItem ,CardContent ,Button ,Typography  ,Grid }  from '@mui/material/';






const Signup = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
    return (
      <div className="App"> 

      


<Grid my={10} item md={12}>
<Card sx={{ minWidth: 275 }}>
      <CardContent>

      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <TextField style={{width:"400px"}} id="filled-basic" label="Name" type="Name" variant="filled" />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <TextField style={{width:"400px"}} id="filled-basic" label="Email" type="Email" variant="filled" />
        </Typography>
        <Typography variant="h5" component="div">
        <TextField style={{width:"400px"}} id="filled-password-input" label="Password"
          type="password" variant="filled" />
        
        </Typography>
        <Typography py={3} variant="h5" component="div">
        <FormControl sx={{ m: 1, minWidth: 380 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Choose the option</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Choose the option"
        >
          
          <MenuItem value={10}>TeamLead</MenuItem>
          <MenuItem value={21}>Employee</MenuItem>
          
        </Select>
      </FormControl>


        
        
        </Typography>
        <Typography py={5}   variant="h5" component="div">
        <Button style={{width:"455px"}} variant="contained" disableElevation>
        Create An Account
    </Button>
    <p style={{color:"#1976d2", fontSize:"15px"}}> <a href="/Login">Already have an Account! </a> </p>
        
        </Typography>
       
        
      
      </CardContent>
     
    </Card>

  </Grid>


      



      


      
      </div>
    );
  }
  
  export default Signup;
  