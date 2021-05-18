import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import api from '../../api';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const ProductForm = () => {
  const classes = useStyles();
  const[imgsrc, setImgsrc] = useState('');
  const[title, setTitle] = useState('');
  const[price, setPrice] = useState('');
  const[type, setType] = useState('');
  const[description, setDescription] = useState('');

  const handlePostProduct = () => {
    api.post("api/products", 
    {
      imgsrc,
      title,
      price,
      type,
      description
    });
  };

  return (
    <div>
      <TextField 
        required
        id="standard-basic" 
        label="Imgsrc" 
        value={imgsrc}
        onChange={e => setImgsrc(e.target.value)}
      />
      <TextField 
        required
        id="standard-basic" 
        label="Title" 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextField 
        required
        id="standard-basic" 
        label="Price" 
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <TextField 
        required
        id="standard-basic" 
        label="Type" 
        value={type}
        onChange={e => setType(e.target.value)}
      />
      <TextField 
        required
        id="standard-basic" 
        label="Description" 
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary"
        onClick={handlePostProduct}
      >
        Post Product
      </Button>
    </div>
  )
};

export default ProductForm;
