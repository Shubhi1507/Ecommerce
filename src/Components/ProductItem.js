import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ACTION_TYPES } from "../Redux/Actions/ActionTypes";
import { useDispatch } from "react-redux";

export default function ProductItem({ Item }) {
  const Dispatch = useDispatch();

  function AddtoCart(SelectItem) {
    Dispatch({ type: ACTION_TYPES.ADD_TO_CART, payload: SelectItem });
    //console.log("SelectItem", SelectItem);
  }

  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={Item.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Item.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Item.price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Item.rating.rate}
          <button onClick={() => AddtoCart(Item)}> Add to Cart </button>
        </Typography>
      </CardContent>
    </Card>
  );
}
