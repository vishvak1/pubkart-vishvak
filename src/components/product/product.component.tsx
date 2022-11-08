import React, { Component, useState } from "react";
import ProductModel from "../../models/product.model";
import Rating from "../rating/rating.component";
import { MdThumbUpAlt } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

type ProductProps = {
  productdetails: ProductModel;
  deleteAProduct: (productId: number) => void;
};

export default function Product(props: ProductProps) {
  const [likes, setLikes] = useState<number>(props.productdetails.likes);

  const IncrementLikes = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="col-md-3 my-1">
      <div className="card">
        <img
          src={props.productdetails.imageUrl}
          alt={props.productdetails.title}
          height="250px"
          width="300px"
          className="card-img-top"
        />
        <div className="card-body">
          <Rating actualStars={props.productdetails.rating} maxStars={5} />
          <h4 className="card-title">{props.productdetails.title}</h4>
          <h5 className="card-text">₹. {props.productdetails.price}</h5>
          <p className="card-text">
            {/* Could be a seperate Badge Component taking props */}
            <span
              className={
                props.productdetails.isAvailable
                  ? "badge bg-success"
                  : "badge bg-danger"
              }
            >
              {props.productdetails.isAvailable == true
                ? "Available"
                : "Unavailable"}
            </span>
          </p>
          <button className="btn btn-primary " onClick={() => IncrementLikes()}>
            <MdThumbUpAlt /> {likes}
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => props.deleteAProduct(props.productdetails.id)}
          >
            <BsFillTrashFill />
          </button>
        </div>
      </div>
    </div>
  );
}
