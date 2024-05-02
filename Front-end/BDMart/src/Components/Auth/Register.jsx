import { Link } from "react-router-dom";
import img1 from '../../assets/react.svg'


const Register = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
           
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl m-3 p-4 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="flex">
                <p>Already have an account?</p>
            <Link to="/login" className="text-indigo-950 font-bold">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;