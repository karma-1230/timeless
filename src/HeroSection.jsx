function HeroSection() {
  return (
    <section className="bg-black text-white d-flex align-items-center">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-4 d-flex justify-content-center p-0 h-100">
            <img
              src="/images/left.jpg"
              alt="Left Banner"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-4 text-center d-flex flex-column justify-content-center">
            <h1 className="fw-bold display-6">Timeless</h1>
            <button className="btn btn-outline-light btn-lg">
              Shop Now
            </button>
          </div>

          <div className="col-4 d-flex justify-content-center p-0 h-100">
            <img
              src="/images/right.jpg"
              alt="Right Banner"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
