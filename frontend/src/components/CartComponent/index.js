import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ProductCard from '../ProductCard';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  checkoutButton: {
    marginTop: "50px",
  },
}));

const CartComponent = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  const classes = useStyles();
  const[search, setSearch] = useState('');
  const[totalPrice, setTotalPrice] = useState(0);

  const filteredProducts = cart.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    filteredProducts.map(product=>
      setTotalPrice(totalPrice + parseFloat(product.price))
    )
  }, [cart])

  return (
    <div className="product-app">
      <h1>Cart</h1>
      <h2>Total Price = {totalPrice}</h2>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {filteredProducts.map(product => 
          <Grid item xs={12} sm={6} md={4}>
            <ProductCard
              id={product._id}
              imgsrc={product.imgsrc}
              title={product.title}
              price={product.price}
              type={product.type}
              description={product.description}
              productPage={false}
            />          
          </Grid>
        )}
      </Grid>
      <Link to='/checkout'>
        <Button 
          className={classes.checkoutButton} 
          variant="contained" 
          color="primary"
        >
          Checkout
        </Button>
      </Link>
    </div>
  )
}

export default CartComponent;
