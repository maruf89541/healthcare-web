import React, { useState } from 'react';
import useAuth from '../../../Hook/useAuth';

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');

    const { signInUsingGoogle, login } = useAuth();


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        console.log(email, password)
        e.preventDefault();


        return (
            <div>
                <body class="text-center  login">
                    <div class="form-signin bg-light">
                        <form onSubmit={() => login(email, password)}>
                            <img class="mb-4" src="https://www.dropbox.com/s/zgbbayj1iqd9fjf/CF_Mark.jpg?raw=1" alt="" width="72" />
                            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                            <div class="form-floating">
                                <input onBlur={handleEmailChange} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input onBlur={handlePasswordChange} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>

                            <div class="checkbox mb-3">
                                <label>
                                    <input type="checkbox" value="remember-me" /> Remember me
                                </label>
                            </div>
                            <button class="w-100 btn btn-lg btn-dark" type="submit">Log in</button>
                            <button onClick={signInUsingGoogle} class="w-100 btn btn-lg btn-warning mt-3" type="submit">Google</button>
                            <button class="w-100 btn btn-lg btn-primary mt-3" type="submit">Facebook</button>

                            <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>

                        </form>
                    </div>


                </body>
            </div>
        );
    };

    export default Register;