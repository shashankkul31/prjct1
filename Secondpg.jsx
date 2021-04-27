import React from "react";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { spacing } from '@material-ui/system';

import Box from '@material-ui/core/Box';


function Secondpg()
{
    
return(
    <>
{/* QUOTE id      */}
    <h4>#21122</h4>
{/* CAR NAME */}
    <h2>BMW Z4 2012</h2>
    <p>Here are the best bids for you</p>
    <br />
    <br />

    <Container>
        <Grid container>
            <Grid  item xs={10}>
                <Paper>
                <Box m={3} border={1} p={1}>
                <Typography variant="subtitle1">Dealer 1 </Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                         ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                         officia deserunt mollit anim id est laborum.
           </Box>
            </Paper>
            </Grid>
            </Grid>
            </Container>

            <Container>
        <Grid container>
            <Grid  item xs={10}>
                <Paper>
                <Box  m={3} border={1} p={1}>
                <Typography variant="subtitle1">Dealer 2 </Typography>
                <Button size="small" variant="contained" color="primary">See details</Button>
           </Box>
            </Paper>
            </Grid>
            </Grid>
            </Container>

            <Container>
        <Grid container>
            <Grid  item xs={10}>
                <Paper>
                <Box  m={3} border={1} p={1}>
                <p>Dealer 3 </p>
                <Button size="small" variant="contained" color="primary" >See details</Button>
                
           </Box>
            </Paper>
            </Grid>
            </Grid>
            </Container>
            

            <Button  variant="contained" color="primary" >Enroll me all the bids</Button>
            <Button  variant="contained" color="primary" >Donate</Button>
    </>
 )
}

export default Secondpg;
