import React, { Component, useEffect, useState } from "react";
export default function NewProduct() {
  const [newproduct, setNewProduct] = useState({});

  return (
    <div
      className="container bg-light rounded my-3 p-2 border border-success"
      style={{ maxWidth: "578px" }}
    >
      <h3 className="display mb-3">New Product</h3>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="newprod-id" className="form-label">
            Id
          </label>
          <input
            type="number"
            name="id"
            id="newprod-id"
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newproduct, id: +e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="newprod-name" className="form-label">
            Title
          </label>
          <input
            type="text"
            name="name"
            id="newprod-name"
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newproduct, title: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="newprod-price" className="form-label">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="newprod-price"
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newproduct, price: +e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="newprod-likes" className="form-label">
            Likes
          </label>
          <input
            type="number"
            name="likes"
            id="newprod-likes"
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newproduct, likes: +e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="newprod-rating" className="form-label">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            id="newprod-rating"
            max={5}
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newproduct, rating: +e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="newprod-image" className="form-label">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            id="newprod-image"
            className="form-control"
            onChange={(e) =>
              setNewProduct({ ...newproduct, imageUrl: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-2">
          <div className="form-check">
            <span className="d-inline-block mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="availability"
                id="available"
                onChange={(e) =>
                  setNewProduct({
                    ...newproduct,
                    isAvailable: e.target.checked,
                  })
                }
              />
              <label className="form-check-label" htmlFor="available">
                Available
              </label>
            </span>
            <span className="d-inline-block mx-3">
              <input
                className="form-check-input"
                type="radio"
                name="availability"
                id="unavailable"
                onChange={(e) =>
                  setNewProduct({
                    ...newproduct,
                    isAvailable: !e.target.checked,
                  })
                }
              />
              <label className="form-check-label" htmlFor="unavailable">
                Unavailable
              </label>
            </span>
          </div>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            type="button"
            onClick={() => {
              console.log(newproduct);
            }}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
