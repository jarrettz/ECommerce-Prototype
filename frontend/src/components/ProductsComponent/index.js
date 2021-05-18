import React, { useState, useEffect } from 'react';
import './styles.css';
import ProductCard from '../ProductCard';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";
import api from '../../api';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  },
}));

const ProductsComponent = () => {
  const[products, setProducts] = useState([]);
  const[search, setSearch] = useState('');
  const classes = useStyles();

  useEffect(() => {
    api.get(`api/products`)
    .then(res => {
      setProducts(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
  }, []);

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <div className="product-app">
      <h1>Products</h1>
      <div className='product-search'>
        <form>
          <input 
            type='text' 
            placeholder='Search' 
            className='product-search-input'
            onChange={handleSearch}
          />
        </form>
      </div>
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
              productPage={true}
            />          
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default ProductsComponent;
