import React from "react";
import Button from '@material-ui/core/Button';

import  './index.css'


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
  <h4>#21122</h4>
{/* CAR NAME */}
  <h2>BMW Z4 2012</h2>
  <p>Here are the best bids for you</p>
  <br />
  <br />
        <div>
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
        <Button variant="contained" color="primary" >Emil me all the details</Button>
        <Button variant="contained" color="primary" >Donate</Button>
        </>
      );

      
    }

    export default Customer_page2;