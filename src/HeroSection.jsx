function HeroSection() {
  return (
    <section className="bg-black text-white min-vh-100">
      <div className="container-fluid">

        <div className="row h-100 d-none d-md-flex">
          <div className="col-md-4 d-flex justify-content-center p-0 h-100">
            <img
              src="/images/left.jpg"
              alt="Left Banner"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>


          <div className="col-md-4 text-center d-flex flex-column justify-content-center">
            <h1 className="fw-bold display-3">Timeless</h1>
            <button className="btn btn-outline-light btn-lg mt-3">
              Shop Now
            </button>
          </div>

          <div className="col-md-4 d-flex justify-content-center p-0 h-100">
            <img
              src="/images/right.jpg"
              alt="Right Banner"
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>


        <div className="d-block d-md-none position-relative">

          <img
            src="/images/left.jpg"
            alt="Mobile Banner"
            className="w-100"
            style={{ objectFit: "cover" }}
          />

          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="fw-bold display-4">Timeless</h1>
            <button className="btn btn-outline-light btn-lg mt-3">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
