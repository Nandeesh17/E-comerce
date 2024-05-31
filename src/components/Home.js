import React from 'react';
import bannner from "../components/banner.jpg"
import { colors } from '@mui/material';
import { green } from '@mui/material/colors';
function Home() {
  return (
    <div>
      <center>
        <br></br>
        <br></br>
      <h1>WELCOME TO OUR E-COMERCE SHOP</h1>
      <img src={bannner} width={1000} height={700} ></img>
      </center>
    </div>
  );
}

export default Home;