import React from 'react';

function ShopCard({ product }) {
  return (
    // <div className="card mb-4">
    //   <img src={product.image}
    //    className="card-img-top"
    //    style={{width: "60%"}}
    //    alt={product.name}
      
    //    />
    <section>
          <div className="card border-1  d-flex flex-column h-100 product-card" > 
    <div className="border-bottom pb-2 d-flex justify-content-center">
    <img
    src={product.image}
    className="card-img-top"
    style={{width: "70%"}}
    alt={product.name}
  />
  </div>

      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <a href="#" className="btn btn-primary">Add to Cart</a>
      </div>
    </div>
    </section>
  );
}

export default ShopCard;
