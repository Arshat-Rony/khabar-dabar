import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import img from "../../../images/others/logo2.png"
import Sociallogin from '../../Shared/Social/Sociallogin';
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const [
        signInWithEmailAndPassword,] = useSignInWithEmailAndPassword(auth);
    const from = location.state?.from?.pathname || "/"
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPass(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, pass)
            .then(res => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='form-container text-center'>
            <img className='my-5' style={{ width: "200px" }} src={img} alt="" />
            <div className='my-5 d-flex align-items-center flex-md-row justify-content-center flex-column sign-up-container gap-md-5'>
                <Form onSubmit={handleSubmit}>

                    <Form.Control onBlur={handleEmail} style={{ height: "50px", background: "rgba(114, 110, 111, 0.200)" }} className="mt-3 w-100 border-0 " type="email" name="email" placeholder="Your Email" />

                    <Form.Control onBlur={handlePass} style={{ height: "50px", background: "rgba(114, 110, 111, 0.200)" }} className="mt-3 w-100 border-0 " type="password" name="passwrod" placeholder="Your password" />

                    <Link className='text-decoration-none' to='/login'>
                        <p className='text-end text-black '>Forget Password?</p>
                    </Link>

                    <FormControl style={{ background: "crimson", height: "50px" }} type="submit" className='text-white mt-3' value="SignUp" />

                    <p className='mt-3' style={{ color: "crimson" }}>New to Khabar-Dabar? <Link className='text-decoration-none fw-bold' to='/signup'>
                        <span className='text-black'>Please Sign Up</span>
                    </Link></p>

                </Form>
                <div className="bg-secondary float float-login" ></div>
                <Sociallogin
                    email={email}
                    password={pass}
                ></Sociallogin>
            </div>

        </div>
    );
};

export default Login;

{/* <Link className='text-decoration-none' to='/login'>
<p className='text-end text-black '>Forget Password?</p>
</Link> */}