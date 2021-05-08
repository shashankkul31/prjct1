import React from "react";
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';

import Footer from "./Footer";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function Customer_page3()
{
return(
  <>

<Box mx="auto" height="auto"width={600} border={1} m={8} p={4} fontWeight="fontWeightMedium"
style={{marginLeft:"53vh",marginTop:"10vh"}} >

      
<div className="body" align="left">
<h2>Add Vehicle</h2> 
<br /> 
<h4 style={{marginLeft:"7vh"}}>Car maker
<FormControl style={{marginLeft:"25vh",width:"30vh"}}  variant="outlined" >
        <Select native style={{blockSize:"5vh",backgroundColor:"	#1E90FF"}}>
          <option value={10}>Audi</option>
          <option value={20}>BMW</option>
          <option value={30}>Merce</option>
        </Select>
      </FormControl>
</h4>


<h4 style={{marginLeft:"7vh"}}>Car model
<FormControl variant="outlined"  style={{marginLeft:"25vh",width:"30vh"}}>
        <Select native style={{blockSize:"5vh",backgroundColor:"	#1E90FF"}} >
          
          <option value={10}>A4</option>
          <option value={20}>Q6</option>
          <option value={30}>A8</option>
        </Select>
      </FormControl></h4>


<h4 style={{marginLeft:"7vh"}}>Year
<FormControl variant="outlined" style={{marginLeft:"31vh",width:"30vh"}} >
        
        <Select native  style={{blockSize:"5vh",backgroundColor:"	#1E90FF"}}>
         
          <option value={10}>2016</option>
          <option value={20}>2017</option>
          <option value={30}>2018</option>
        </Select>
      </FormControl></h4>


<h4 style={{marginLeft:"7vh"}}>Millage
<FormControl variant="outlined"  style={{marginLeft:"29vh",width:"20vh",backgroundColor:"	#1E90FF",color: "white"}}>
<input>
</input>
 </FormControl>
</h4>


<h4 style={{marginLeft:"7vh"}}>Buying a new car?
<FormControl variant="outlined"  style={{marginLeft:"17vh",width:"30vh"}}>
       
        <Select native style={{blockSize:"5vh",backgroundColor:"	#1E90FF"}}     >

          <option value={10}>Yes</option>
          <option value={20}>No</option>
        </Select>
      </FormControl>
      </h4>


<h4 style={{marginLeft:"7vh"}}>State
<FormControl variant="outlined"  style={{marginLeft:"30vh" ,width:"30vh"}}>
        
        <Select native style={{blockSize:"5vh",backgroundColor:"	#1E90FF"}}    >

          <option value={10} >Califonia</option>
          <option value={20}>Penselnevia</option>
          <option value={30}>Merce</option>
        </Select>
      </FormControl></h4>
    
<h4 style={{marginLeft:"7vh"}}>Zip code
<FormControl variant="outlined"  style={{marginLeft:"27vh",width:"30vh",backgroundColor:"	#1E90FF",color: "white"}}>
<input style ={{border:"none"}}   value="90011">
</input>
</FormControl>
</h4>

<h4 style={{marginLeft:"7vh"}}>Comments
<FormControl variant="outlined"  style={{marginLeft:"25vh",width:"30vh",backgroundColor:"	#1E90FF",color: "white"}}>
<input>
</input>
</FormControl>
</h4>
<center>
<Button variant="contained" style={{backgroundColor:"	#1E90FF"}}>Submit</Button>
</center>
</div>

</Box>

<Footer />
</>


);
}
export default Customer_page3;