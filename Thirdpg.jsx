import React from "react";
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

function Thirdpg()
{
return(
<>
<Box border={1} m={12} p={4} fontWeight="fontWeightMedium" >

<h2>Add Vehicle</h2>        

<h4>Car maker</h4>
<h4>Car model</h4>
<h4>year</h4>
<h4>Millage</h4>
<h4>Buying a new car?</h4>
<h4>State</h4>
<h4>Zip code</h4>
<h4>Comments</h4>
<center>
<Button variant="contained" color="primary">Submit</Button>
</center>

</Box>

<FormControl variant="outlined" >
        <InputLabel htmlFor="filled-age-native-simple">Audi</InputLabel>
        <Select
          native
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Audi</option>
          <option value={20}>BMW</option>
          <option value={30}>Merce</option>
        </Select>
      </FormControl>
<br/>

      <FormControl variant="outlined" >
        <InputLabel htmlFor="filled-age-native-simple">Audi</InputLabel>
        <Select
          native
          
        >
          <option aria-label="None" value="" />
          <option value={10}>Audi</option>
          <option value={20}>BMW</option>
          <option value={30}>Merce</option>
        </Select>
      </FormControl>



</>



);
}
export default Thirdpg;