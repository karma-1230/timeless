
export default function Products() {
  const products = [
    {
      id: 1,
      name: "VORTEX BAGGY PANTS",
      image: "/images/hoodie-1.jpg",
      originalPrice: "Rs 5,999.00",
      salePrice: "Rs 4,999.00",
      discount: "28% OFF",
      rating: 5,
      reviews: 4,
    },
    {
      id: 2,
      name: "KARVAAN COLOSSUS JORTS",
      image: "/images/hoodie-2.jpg",
      originalPrice: "Rs 4,999.00",
      salePrice: "Rs 3,999.00",
      discount: "20% OFF",
      rating: 5,
      reviews: 3,
    },
    {
      id: 3,
      name: "THE NINTH SEAL",
      image: "/images/hoodie-4.jpg",
      originalPrice: "Rs 3,299.00",
      salePrice: "Rs 2,699.00",
      discount: "18% OFF",
      rating: 5,
      reviews: 2,
    },
  ]

  return (
    <>
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark mb-3">CULT OF CYPHER VOLUME I IS LIVE NOW!</h1>
            <p className="lead text-muted">DON'T SLEEP ON THIS DROP. COP IT BEFORE THE SELL-OUT IS REAL</p>
          </div>

          <div className="row g-4 justify-content-center">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="card-img-top"
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2">
                      {product.discount}
                    </span>
                  </div>

                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold text-uppercase mb-3">{product.name}</h5>

                    <div className="d-flex align-items-center mb-3">
                      <div className="me-2">{'★'.repeat(product.rating)}</div>
                      <small className="text-muted">({product.reviews})</small>
                    </div>

                    <div className="mb-4">
                      <span className="text-muted text-decoration-line-through me-2">{product.originalPrice}</span>
                      <span className="h5 fw-bold text-dark">{product.salePrice}</span>
                    </div>

                    <button className="btn btn-outline-dark btn-lg mt-auto rounded-pill">Choose options</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
