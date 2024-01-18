import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../../Control/UserSlice';
import { useNavigate } from 'react-router-dom';

function LoginRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        console.log('Login successful:', user);
        dispatch(setUser(user));
        dispatch(setToken(user.id));
        navigate('/'); // Anasayfaya yönlendir
      } else {
        alert('Login failed! Incorrect email or password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error occurred!');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const confirmPassword = event.target.elements.confirmPassword.value; 

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    try {

      const newUser = { username, email, password };
  

      const response = await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Registration successful:', data);
        alert('Registration successful. You can now log in.');
        event.target.reset(); 
        navigate('/login-register'); 
      } else {
        throw new Error('Registration failed!');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration error occurred!');
    }
  };
  return (
  <div>
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">Home</a>
            <span /> Pages
            <span /> Login / Register
          </div>
        </div>
      </div>
      <section className="pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-lg-5">
                  <div className="login_wrap widget-taber-content p-30 background-white border-radius-10 mb-md-5 mb-lg-0 mb-sm-5">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3 className="mb-30">Login</h3>
                      </div>
                      <form method="post" onSubmit={handleLogin}>
                        <div className="form-group">
                          <input type="text" required name="email" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                          <input required type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" defaultValue />
                              <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                            </div>
                          </div>
                          <a className="text-muted" href="#">Forgot password?</a>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-fill-out btn-block hover-up" name="login">Log in</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-6">
                  <div className="login_wrap widget-taber-content p-30 background-white border-radius-5">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h3 className="mb-30">Create an Account</h3>
                      </div>
                      <p className="mb-50 font-sm">
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy
                      </p>
                      <form method="post" onSubmit={handleRegister}>
                        <div className="form-group">
                          <input type="text" required name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                          <input type="text" required name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <input required type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <input required type="password" name="confirmPassword" placeholder="Confirm password" />
                        </div>
                        
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" defaultValue />
                              <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                            </div>
                          </div>
                          <a href="page-privacy-policy.html"><i className="fi-rs-book-alt mr-5 text-muted" />Lean more</a>
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-fill-out btn-block hover-up" name="login">Submit &amp; Register</button>
                        </div>
                      </form>
                      <div className="divider-text-center mt-15 mb-15">
                        <span> or</span>
                      </div>
                      <ul className="btn-login list_none text-center mb-15">
                        <li><a href="#" className="btn btn-facebook hover-up mb-lg-0 mb-sm-4">Login With Facebook</a></li>
                        <li><a href="#" className="btn btn-google hover-up">Login With Google</a></li>
                      </ul>
                      <div className="text-muted text-center">Already have an account? <a href="#">Sign in now</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
    )
  }
export default LoginRegister;
