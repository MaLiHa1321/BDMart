import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

  const {signInUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin =async(e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;

    signInUser(email,pass)
    .then(result => {
      console.log(result.user);
      e.target.reset();
      navigate('/');
    })
    .catch(err => console.log(err))
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-4xl font-bold">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <form  onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
             
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="flex">
                <p>Doesn't have an account?</p>
            <Link to="/signup" className="text-indigo-950 font-bold">Register</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;