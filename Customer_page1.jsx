import React from "react";


import Button from '@material-ui/core/Button';
import  "./index.css"


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
      <p>Welcome,</p>
      {/* Name     */}
    <h1>Adam Steve!</h1>
    <p>Here is your bid list</p>
    <br />
    <br />
    <br />
    <br />
    <br />
        <div>
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
        <br />
        <br />
        <center>
        <Button variant="contained" >Add car</Button>
        </center>
        
        </>
      );

      
    }

    export default Customer_page1;