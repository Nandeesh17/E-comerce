import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
function AllProducts() {

  const [data, setadata] = useState([]);
  const [Search,setSearch]=useState(null);
  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products);
        setadata(res.data.products);

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  let filtered= Search?data.filter((item)=>
  item.title.toLowerCase().includes(Search.toLowerCase())
):data;

console.log(filtered,"filteredData");

  return (
    <div style={{ padding: 10 }}>
      <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField label={"Search products here"}
        onChange={(e)=>setSearch(e.target.value)}
         />
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          "& > :not(style)": {},
        }}
      >
        {filtered.length > 0 ?
        
        filtered.map((i) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              width="200"
              image={i.thumbnail}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.title}
              </Typography>
              <Typography gutterBottom variant="body2" color="text.secondary">
                {i.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography variant="h5">₹price</Typography>
              {i.price}
              <Typography
                variant="h5"
                style={{ textAlign: "end", width: "100%" }}
              >
                {i.brand}
              </Typography>
            </CardActions>
          </Card>
        ))
        :
      <Box>
          <Alert severity="warning">Item Not Found!.</Alert>
      </Box>
}
      </Grid>
    </div>
  );
}
export default AllProducts;
