import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Chip,
  Stack,
} from "@mui/material";

const View = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return (
      <Typography variant="h6" align="center" sx={{ mt: 5 }}>
        Loading product...
      </Typography>
    );
  }

  return (
    <Box sx={{ maxWidth: 1100, mx: "auto", mt: 5, p: 2 }}>
      <Card sx={{ display: "flex", p: 2 }}>
        
        {/* Product Image */}
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            width: 350,
            objectFit: "contain",
            p: 2,
            backgroundColor: "#f9f9f9",
          }}
        />

        {/* Product Info */}
        <CardContent sx={{ flex: 1 }}>
          
          <Stack spacing={2}>
            <Typography variant="h5" fontWeight="bold">
              {product.title}
            </Typography>

            <Chip
              label={product.category.toUpperCase()}
              color="primary"
              variant="outlined"
              sx={{ width: "fit-content" }}
            />

            <Typography variant="h6" color="success.main">
              ₹ {product.price}
            </Typography>

            <Stack direction="row" spacing={1} alignItems="center">
              <Rating
                value={product.rating.rate}
                precision={0.1}
                readOnly
              />
              <Typography variant="body2" color="text.secondary">
                ({product.rating.count} reviews)
              </Typography>
            </Stack>

            <Typography variant="body1" sx={{ mt: 2 }}>
              {product.description}
            </Typography>

            {/* Buttons */}
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Stack>
          </Stack>

        </CardContent>
      </Card>
    </Box>
  );
};

export default View;
