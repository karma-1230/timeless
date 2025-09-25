function Founder(){
    const founders= [
    {
      id: 1,
      name: "MUDDASSAR",
      image: "/images/founder-1.jpg",
      description:
        "Muddassar brings the dark edge. With a background in fashion design and an obsession with subcultures, he channels gothic aesthetics into wearable rebellion. He leads the creative vision of the brand — blending the raw with the refined, the romantic with the brutal. He believes streetwear should haunt as much as it hypes.",
      alignment: "left",
    },
    {
      id: 2,
      name: "MANSOOR",
      image: "/images/founder-2.jpg",
      description:
        "Mansoor builds the bones. Coming from a background in underground music and visual design, he’s the mind behind the brand’s identity and street influence. Jace handles storytelling, branding, and collaborations — keeping the pulse on the streets while pushing boundaries into darker territory.",
      alignment: "right",
    },
  ]
    return<>
    <div style={{ backgroundColor: "#f5f5f5", padding: "80px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: "bold",
                color: "#000",
                marginBottom: "20px",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              TIMELESS
              <br />
              FOUNDERS
              <br />
            </h2>
          </div>

          {founders.map((founder, index) => (
            <div
              key={founder.id}
              className="row align-items-center mb-5"
              style={{ marginBottom: index === founders.length - 1 ? "0" : "80px" }}
            >
              {founder.alignment === "left" ? (
                <>
                  <div className="col-md-6 mb-4 mb-md-0">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <div style={{ paddingLeft: "40px" }}>
                      <h3
                        style={{
                          fontSize: "2rem",
                          fontWeight: "bold",
                          color: "#000",
                          marginBottom: "25px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {founder.name}
                      </h3>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "1.1rem",
                          lineHeight: "1.6",
                          marginBottom: "30px",
                        }}
                      >
                        {founder.description}
                      </p>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "2px solid #000",
                          padding: "12px 30px",
                          borderRadius: "25px",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "#000"
                          e.target.style.color = "white"
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "transparent"
                          e.target.style.color = "#000"
                        }}
                      >
                        View Article
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-6 order-md-2 mb-4 mb-md-0">
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "15px",
                      }}
                    />
                  </div>
                  <div className="col-md-6 order-md-1">
                    <div style={{ paddingRight: "40px" }}>
                      <h3
                        style={{
                          fontSize: "2rem",
                          fontWeight: "bold",
                          color: "#000",
                          marginBottom: "25px",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {founder.name}
                      </h3>
                      <p
                        style={{
                          color: "#666",
                          fontSize: "1.1rem",
                          lineHeight: "1.6",
                          marginBottom: "30px",
                        }}
                      >
                        {founder.description}
                      </p>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "2px solid #000",
                          padding: "12px 30px",
                          borderRadius: "25px",
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          cursor: "pointer",
                          textTransform: "uppercase",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "#000"
                          e.target.style.color = "white"
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "transparent"
                          e.target.style.color = "#000"
                        }}
                      >
                        View Article
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
}
export default Founder