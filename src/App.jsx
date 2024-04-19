import { useState } from "react";
import AllProducts from "./data";
import "./App.css";

function App() {
  const [products, setProducts] = useState(AllProducts);

  function handleClick(id) {
    const del = products.filter((product) => {
      return product.id !== id;
    });
    setProducts(del);
  }

  function handleBrand(brand) {
    if (brand == "all") {
      setProducts(AllProducts);
    } else {
      const ByBrand = products.filter((product) => {
        return product.brand == brand;
      });
      setProducts(ByBrand);
    }
  }
  function handleStock(stock) {
    if (stock == "all") {
      setProducts(AllProducts);
    } else {
      const ByStock = products.filter((product) => {
        return product.stock == stock;
      });
      setProducts(ByStock);
    }
  }
  function handleName(title) {
    if (title == "all") {
      setProducts(AllProducts);
    } else {
      const ByName = products.filter((product) => {
        return product.title == title;
      });
      setProducts(ByName);
    }
  }
  
 
  return (
    <>
      <div className="container mt-5 border-black border rounded p-3">
        <h1 className="text-center mb-5 ">Online Market</h1>
        <div className="filter d-flex gap-5">
          <select
            className="form-select form-select-sm mb-3 fs-5"
            aria-label="Small select example"
            onChange={(e) => handleBrand(e.target.value)}
          >
            <option value="all">All</option>
            {[
              ...new Set(
                AllProducts.map((product) => {
                  return product.brand;
                })
              ),
            ].map((brand, id) => {
              return (
                <option key={id} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
          <select
            className="form-select form-select-sm mb-3 fs-5"
            aria-label="Small select example"
            onChange={(e) => handleStock(e.target.value)}
          >
            <option value="all">All</option>
            {[
              ...new Set(
                AllProducts.map((product) => {
                  return product.stock;
                })
              ),
            ].map((stock, id) => {
              return (
                <option key={id} value={stock}>
                  {stock}%
                </option>
              );
            })}
          </select>
          <select
            className="form-select form-select-sm mb-3 fs-5"
            aria-label="Small select example"
            onChange={(e) => handleName(e.target.value)}
          >
            <option value="all">All</option>
            {[
              ...new Set(
                AllProducts.map((product) => {
                  return product.title;
                })
              ),
            ].map((title, id) => {
              return (
                <option key={id} value={title}>
                  {title}
                </option>
              );
            })}
          </select>
        </div>
        <div className=" container-card gap-4  ">
          {products.map((item) => {
            const {
              id,
              thumbnail,
              description,
              title,
              price,
              discountPercentage,
              stock,
              rating,
              brand,
            } = item;
            return (
              <div key={id} className="card " style={{ width: "400px" }}>
                <img
                  src={thumbnail}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  className="card-img-top"
                  alt={description}
                />
                <div className="card-body">
                  <h3 className="card-title text-center mb-3">{title}</h3>

                  <p
                    className="card-text text-center mb-3"
                    style={{ height: "75px" }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="d-flex card-block mb-1"
                    style={{ height: "25px" }}
                  >
                    <p style={{ color: "blue", fontSize: "20px" }}>
                      <span className="bold">Price:</span> ${price}
                    </p>
                    <h5
                      style={{ color: "red", fontSize: "20px" }}
                      className="mb-3"
                    >
                      <span>Stock:</span> {stock}%
                    </h5>
                  </div>
                  <h6 className="text-center fs-3 mb-3">
                    <span>Rating: </span>
                    {rating}
                  </h6>
                  <h5
                    className="card-title text-center "
                    style={{ color: "red" }}
                  >
                    <span style={{ color: "red" }}>Discount Percentage: </span>
                    {discountPercentage}
                  </h5>
                  <h5 className="card-title text-center ">
                    <span>Brand: </span>
                    {brand}
                  </h5>

                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ width: "100%" }}
                    onClick={() => handleClick(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
