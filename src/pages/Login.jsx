import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, googleLogin } = useContext(AuthContext);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const from = location.state?.from?.pathname || "/";

  const handleGoogle = async () => {
    try {
      const res = await googleLogin();
      console.log(res.user);
    } catch (error) {
      // Handle error
      toast.error('Your email or password is wrong');
    }
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.log(error.code);
      toast.error('Your email or password is wrong');
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
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder="email"
                  className={`input input-bordered ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', { required: 'Password is required' })}
                  placeholder="password"
                  className={`input input-bordered ${errors.password ? "border-red-500" : ""}`}
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </div>
              <div className="form-control mt-6 w-full">
                <button type="submit" className="btn bg-red-600 text-white w-full">Login</button>
              </div>
            </form>
            <div className="mx-8">
              <button
                className="btn bg-red-600 text-white capitalize w-full"
                onClick={handleGoogle}
              >
                Sign Up with Google
              </button>
            </div>
            <p className='text-center mt-2 font-bold font-grand'>Don't have an account <Link className="underline" to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
