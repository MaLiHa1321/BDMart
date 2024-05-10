import { Link, useNavigate } from "react-router-dom";
import { imageUpload } from "../../Api/utlis";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

  const {createUser,updateUser} = useContext(AuthContext);
  const navigate = useNavigate();

const handleRegister =async(e)=>{
           e.preventDefault();
           const form = e.target;
           const name = form.name.value;
           const email = form.email.value;
           const pass = form.password.value;
           const image = form.image.files[0];
           const imageData = await imageUpload(image);
           const photo = imageData?.data?.display_url;



           console.log(name,email,pass,photo);

           if(pass.length < 6) {
            toast.error('password should have 6 letter')
            return;
          }
         if(!/[A-Z]/.test(pass)){
          toast.error("password should have atleast capital letter")
            return;
          }
         if(!/[@$!%*?&]/.test(pass)){
          toast.error("password should have atleast spcial character")
          return;
         }
           createUser(email,pass)
           .then(result => {
            console.log(result.user)
            toast.success('Successfully registared! Now Login...')
            navigate('/login')
            updateUser(name,photo)

           })
           .catch(err =>{
            toast.error("Invalid email or password.")
            console.log(err)

           } )

}


    return (
      <div>
                <Toaster
  position="top-right"
  reverseOrder={false}
/>

        <div className="hero min-h-screen bg-[url('https://i.ibb.co/chQbYnz/pciu.jpg')]" >

          
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white">Sign up now!</h1>
 
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl m-3 p-4 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="name" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo</span>
                </label>
                <input type="file" name="image" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="flex">
                <p className="text-white">Already have an account?</p>
            <Link to="/login" className="text-indigo-950 font-bold">Login</Link>
            </div>
          </div>
        </div>
      </div>
      </div>

    );
};

export default Register;