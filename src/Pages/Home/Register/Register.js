import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import regimg from '../../../Assets/login.jpg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import Spinner from '../../Spinner/Spinner';

const Register = () => {
    const {createUser,updateUserProfile,loader}= useContext(AuthContext);
    const handleSignUp = event =>{

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        
        
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            alert('Register successfull')
            form.reset();
            handleUpdateUserProfile(name,photoURL)
        })
        .catch(err => console.error(err));
    }

    const handleUpdateUserProfile =(name,photoURL) =>{
        const profile = {
          displayName : name,
          photoURL : photoURL
        }
        updateUserProfile(profile)
        .then(() =>{ })
        .catch(error =>console.error(error));
      }
   
    return (
        <div className="hero w-full my-20">
             <h1 className=''>{loader && <Spinner></Spinner>}</h1>
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
                <img className='w-3/4' src={regimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                <h1 className="text-5xl text-center font-bold">Register</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="Image" className="input input-bordered" required />
                    </div>
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
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link to='/login'  
                className='text-orange-600 font-bold'>Login</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Register;