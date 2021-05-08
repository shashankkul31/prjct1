import React from "react";
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import  './index.css'
import Footer from "./Footer";

const car= [{
  id: 1,
  name: "Some text",
},
{
  id: 2,
  name: "Bid amount",
},

{
id: 3,
  name: "Bid amount",
}];

function Customer_page2()
{
  return (
    <>
    {/* QUOTE id      */}
  <h4 style={{marginTop:"10vh",marginLeft:"7vh"}}>#21122(Quote Id)

  <FormControl variant="outlined"  style={{marginLeft:"120vh" ,width:"30vh"}}>
        <Select native style={{blockSize:"5vh",backgroundColor:"	#1E90FF"}}    >
          <option value={10} >pick Vehicle</option>
          <option value={20}>Penselnevia</option>
          <option value={30}>Merce</option>
        </Select>
      </FormControl>
  </h4>
{/* CAR NAME */}
  <h2  style={{marginLeft:"7vh"}}>BMW Z4 2012(Car name)</h2>
  <p style={{marginLeft:"7vh"}}>Here are the best bids for you</p>
  <br />
  <br />
        <div style={{marginLeft:"7vh",marginRight:"10vh"}}>
        {car.map((data)=>{
          return(
          <div className="cont"> 
          <p >
          Dealer  ID: {data.id}
          </p>
          <p>
              |
            </p>
          <p>
            {data.name}
          </p>
          <p>
              |
            </p>
    
            <Button variant="contained" color="primary" className="quo">
                     See details
                   </Button>
        </div>
        )
        })}
    
        </div>
        <br />
        <br />
        <br />
        <Button variant="contained" color="primary" style={{blockSize:"7vh",marginLeft:"20vh", marginTop:"5vh"}}>Emil me all the details</Button>
        <Button variant="contained"  style={{blockSize:"7vh",marginLeft:"70vh",marginTop:"5vh",backgroundColor:"green"}}>Donate</Button>
        
        <Footer />
        </>
      );

      
    }

    export default Customer_page2;