import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { addToCart, deleteItem } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 345,
    margin: '20px',
  },
  media: {
    height: 140,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProductCard = ({
  id,
  imgsrc,
  title,
  price,
  type,
  description,
  productPage
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      "imgsrc": imgsrc,
      "title": title,
      "price": price,
      "type": type,
      "description": description,
    }));
  };

  const handleRemoveFromCart = () => {
    dispatch(deleteItem(title));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{title}</h2>
      <p id="simple-modal-description">
        Price: {price}
      </p>
      <p id="simple-modal-description">
        Type: {type}
      </p>
      <p id="simple-modal-description">
        Description: {description}
      </p>
    </div>
  );

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgsrc}
          title='Product Picture'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {type}
          </Typography>
        </CardContent>
      </CardActionArea>
      {productPage ?
      <CardActions>
        <Button size="small" color="primary" onClick={handleAddToCart}>
          Add To Cart
        </Button>
      </CardActions> :
      <CardActions>
        <Button size="small" color="primary" onClick={handleRemoveFromCart}>
          Remove From Cart
        </Button>
      </CardActions> 
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Card>
  );
}

export default ProductCard;