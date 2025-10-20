import React from "react"
import styles from "../Styles/Products.module.css"

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
    <section className={styles.productsSection}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className={`fw-bold mb-3 ${styles.sectionTitle}`}>
            CULT OF CYPHER VOLUME I IS LIVE NOW!
          </h1>
          <p className={`lead ${styles.sectionSubtitle}`}>
            DON'T SLEEP ON THIS DROP. COP IT BEFORE THE SELL-OUT IS REAL
          </p>
        </div>

        {/* Product Grid */}
        <div className="row g-4 justify-content-center">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4">
              <div className={`card shadow-sm border-0 rounded-4 h-100 d-flex flex-column ${styles.productCard}`}>

                {/* Product Image */}
                <div className={styles.imageWrapper}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={`card-img-top img-fluid ${styles.productImage}`}
                  />
                  <span className={`badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2 ${styles.discountBadge}`}>
                    {product.discount}
                  </span>
                </div>

                {/* Product Details */}
                <div className={`card-body d-flex flex-column p-4 ${styles.cardBody}`}>
                  <h5 className={`card-title fw-bold text-uppercase mb-3 ${styles.productName}`}>
                    {product.name}
                  </h5>

                  {/* Rating */}
                  <div className="d-flex align-items-center mb-3">
                    <div className={`me-2 ${styles.ratingStars}`}>
                      {"★".repeat(product.rating)}
                      {"☆".repeat(5 - product.rating)}
                    </div>
                    <small className="text-muted">({product.reviews})</small>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <span className={`d-block ${styles.originalPrice}`}>
                      {product.originalPrice}
                    </span>
                    <span className={`h5 fw-bold ${styles.salePrice}`}>
                      {product.salePrice}
                    </span>
                  </div>

                  {/* Button */}
                  <button className={`btn btn-outline-dark btn-lg mt-auto rounded-pill ${styles.chooseButton}`}>
                    Choose options
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
