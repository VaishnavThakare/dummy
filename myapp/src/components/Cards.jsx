import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button
} from '@mui/material'

const Cards = () => {

  const [product, setProduct] = useState([])
  const navigate=useNavigate();
  // Fetch data from the API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error fetching products:', err))
  }, [])

  return (
    <>
      <h3>This is the product cards section</h3>

      <Grid container spacing={3}>
        {product.map((ele) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={ele.id}>
            <Card sx={{ maxWidth: 345 }}>
              
              <CardMedia
                component="img"
                height="200"
                image={ele.image}
                alt={ele.title}
              />

              <CardContent>
                <Typography variant="h6" noWrap>
                  {ele.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" noWrap>
                  {ele.description.slice(0, 60)}...
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  ₹ {ele.price}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  <strong>Rating:</strong> {ele.rating.rate} ({ele.rating.count} reviews)
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" onClick={()=>navigate(`/products/${ele.id}`)}>View</Button>
                <Button size="small">Add to Cart</Button>
              </CardActions>

            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Cards
