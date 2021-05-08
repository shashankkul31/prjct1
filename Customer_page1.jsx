import React from "react";


import Button from '@material-ui/core/Button';
import  "./index.css"
import Footer from "./Footer";


const car= [{
    id: 1,
    name: "Car name 1",
  },
  {
    id: 2,
    name: "Car name 2",
  },

{
  id: 3,
    name: "Car name 3",
}];

function Customer_page1()
{
    return (
      <>
      <p style={{marginLeft:"20vh",marginTop:"10vh"}}>Welcome,</p>
      {/* Name     */}
    <h1 style={{marginLeft:"20vh"}}>Adam Steve!</h1>
    <p style={{marginLeft:"20vh"}}>Here is your bid list</p>
    <br />
    <br />
    <br />
    <br />
    <br />
        <div style={{marginLeft:"20vh",marginRight:"22vh"}}>
        {car.map((data)=>{
          return(
          <div className="cont"> 
          <p >
          Quote  ID: {data.id}
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
    
            <Button  className="quo" variant="contained" color="primary" >
                     View bids
                   </Button>
        </div>
        )
        })}
    
        </div>
        <br />
        <center>
        <Button variant="contained" >Add car</Button>
        </center>
        <Footer />
        </>
      );

      
    }

    export default Customer_page1;