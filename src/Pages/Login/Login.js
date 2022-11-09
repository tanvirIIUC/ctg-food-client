import { clear } from '@testing-library/user-event/dist/clear';
import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import loginimg from '../../Assets/login.jpg'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GoogleAuthProvider } from 'firebase/auth';



const Login = () => {
    
   
    const {logIn,providerLogin} = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
   

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from,{replace: true});
            // console.log(user);
        })
        .catch(error =>console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result=>{
          const  user = result.user;
          alert('log in successfull');
          navigate(from, {replace : true})
          form.reset();
          
          
        })
        .catch(err=>{
            console.error(err)
            alert('error please try again')
            form.reset();
            
        })

        
    }
    return (
        <div className="hero w-full my-20">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={loginimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Log In</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                        
                    </div>
                    <div className="form-control mt-6 ">
                        <input className="btn btn-primary" type="submit" value="Sign in" />
                        <p className='text-center mt-4'>login with  <button onClick={handleGoogleSignIn} className='text-orange-600 font-bold '><AiOutlineGoogle /></button> </p>
                        
                    </div>
                    
                </form>
                <p className='text-center'>Already haven't an account? <Link to='/register' className='text-orange-600 font-bold'>Register</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Login;