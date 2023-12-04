import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider';
// import { AuthContext } from '../AuthProvider';
// import { AuthContext } from '../AuthProvider';
// import { AuthContext } from '../AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";
  console.log(from)
  const { signIn, googleLogin } = useContext(AuthContext);
  console.log(signIn)

  const handleGoogle = () => {
    googleLogin()
      .then(res => {
        console.log(res.user);
      })
      .catch(err => {
        // Handle error
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/invalid-login-credentials') {
        toast.error('Your email or password is wrong');
      }
    }
  };

  return (
    <div className='flex'>
  
      <div className='bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen'>
        <img src="https://i.ibb.co/r50fvNm/resturent.jpg" className='w-full h-full object-cover' alt="" />
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card w-full max-w-sm">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6 w-full">
                <button type="submit"  className="btn bg-red-600 text-white w-full">Login</button>
              </div>
            </form>
              
            <div className="mx-8">
          <button className="btn bg-red-600 text-white capitalize w-full" onClick={handleGoogle}>Sign Up with Goolge</button>
        </div>
        <p className='text-center mt-2 font-bold font-grand'>Dont have account <Link className="underline " to='/register'>Register</Link></p>
          </div>
 
   
        </div>
      </div>
    </div>
  );
};

export default Login;
