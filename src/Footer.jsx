function Footer(){
    return<>
     <footer style={{ backgroundColor: "#000", color: "white", padding: "60px 0 40px" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 style={{ fontSize: "2.5rem", fontWeight: "300", marginBottom: "20px" }}>Subscribe to our emails</h2>
            <p style={{ color: "#ccc", fontSize: "1.1rem", marginBottom: "40px" }}>
              Be the first to know about new collections and exclusive offers.
            </p>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div style={{ position: "relative", maxWidth: "400px", margin: "0 auto" }}>
                  <input
                    type="email"
                    placeholder="Email"
                    style={{
                      width: "100%",
                      padding: "15px 60px 15px 20px",
                      backgroundColor: "transparent",
                      border: "1px solid #666",
                      borderRadius: "50px",
                      color: "white",
                      fontSize: "1rem",
                      outline: "none",
                    }}
                  />
                  <button
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "transparent",
                      border: "none",
                      color: "white",
                      fontSize: "1.2rem",
                      cursor: "pointer",
                      padding: "5px 10px",
                    }}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: "60px" }}>
            <div className="col-md-4 mb-4">
              <h4 style={{ fontSize: "1.3rem", fontWeight: "400", marginBottom: "30px" }}>timeless Clothing</h4>
              <div style={{ color: "#ccc", lineHeight: "1.8" }}>
                <p style={{ marginBottom: "15px" }}>
                  <strong>Address:</strong> Block 19, Gulistan-E-Johar, Karachi, Sindh, Pakistan
                </p>
                <p style={{ marginBottom: "15px" }}>
                  <strong>Hotline:</strong> 0310-3000547
                </p>
                <p style={{ marginBottom: "15px" }}>
                  <strong>Other:</strong> 0313-3942250
                </p>
                <p style={{ marginBottom: "15px" }}>
                  <strong>Email:</strong> support@timeless.pk
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h4 style={{ fontSize: "1.3rem", fontWeight: "400", marginBottom: "30px" }}>Our Company</h4>
              <div style={{ color: "#ccc", lineHeight: "2" }}>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    About Us
                  </a>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    Contact Us
                  </a>
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h4 style={{ fontSize: "1.3rem", fontWeight: "400", marginBottom: "30px" }}>Customer Support</h4>
              <div style={{ color: "#ccc", lineHeight: "2" }}>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    FAQ
                  </a>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    Delivery
                  </a>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    Returns & Refunds
                  </a>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    Payment Methods
                  </a>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    Information Security
                  </a>
                </p>
                <p style={{ marginBottom: "10px" }}>
                  <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>
                    Store System
                  </a>
                </p>
              </div>
            </div>
          </div>

          
          <div className="text-end" style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #333" }}>
            <div
              style={{
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                transform: "skew(-10deg)",
              }}
            >
              T I M E L E S s
              <div style={{ fontSize: "0.8rem", fontWeight: "normal", marginTop: "5px" }}>HOUSE OF STREETWEAR</div>
            </div>
          </div>
        </div>
      </footer>
    </>
}
export default Footer