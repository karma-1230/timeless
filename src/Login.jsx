
import "./Authentication.css";

function Login() {

    return (
        <div className="dark-signup-container d-flex align-items-center justify-content-center">
            <div className="dark-signup-box rounded shadow-lg p-5">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h5 className="text-light mb-0">T I M E L E S S</h5>
                    <nav>
                        <a href="#" className="nav-link d-inline text-muted me-3">Home</a>
                        <a href="#" className="nav-link d-inline text-muted">Join</a>
                    </nav>
                </div>

                {/* Form Title */}
                <h3 className="fw-bold text-light mb-2">Login to your account</h3>
                <p className="text-muted mb-4">
                    Dont have an account? <a href="#" className="text-decoration-none text-primary">Log in</a>
                </p>

                {/* Form */}
                <form>
                    <div className="mb-3">
                        <input type="email" className="form-control dark-input" placeholder="Email address" />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="form-control dark-input" placeholder="Password" />
                    </div>

                    <div className="d-flex gap-3">
                        <button type="button" className="btn btn-outline-light flex-fill">Google</button>
                        <button type="submit" className="btn btn-primary flex-fill">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
