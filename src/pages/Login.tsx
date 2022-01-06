import React, {FC} from "react";
import {Link} from "react-router-dom";
import UtilityLinks from "../components/UtilityLinks";

const Login: FC = () => {
    return (
        <>
            <div className="login-main-dark">
                <div className="container-fluid">
                    <div className="log-in">
                        <div className="nav-bar">
                            <div className="logo-otr">
                                <Link to="/" className="logo-inr">
                                    <img className="logo-img" src="./img/brand-logo.svg" alt="logo"/>
                                </Link>
                            </div>
                            <div className="button-otr">
                                <a href="" className="member body-sb">Not a member?</a>
                                <div className="action-otr">
                                    <Link to="/signup" className="btn-fill-white btn-signup">Sign
                                        Up</Link>
                                </div>
                            </div>
                        </div>
                        <div className="row row-login">
                            <div className="col-lg-6 col-md-8 col-login-otr">
                                <div className="col-login-inr">
                                    <div className="content">
                                        <h3 className="head heading-h3">Login to BLAH</h3>
                                        <div className="login-social">
                                            <span className="line"/>
                                            <p className="desc body-s">Login with socials</p>
                                            <span className="line"/>
                                        </div>
                                        <div className="btn-main">
                                            <div className="btn-otr">
                                                <a href="" className="btn">
                                                    <svg className="icon" width="19" height="18" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.5 9h8a8 8 0 11-2.343-5.657" stroke="#366CE3"
                                                              strokeWidth="2" strokeLinecap="round"
                                                              strokeLinejoin="round"/>
                                                    </svg>
                                                    <p className="text body-sb">Google</p>
                                                </a>
                                            </div>
                                            <div className="btn-otr">
                                                <a href="" className="btn">
                                                    <svg className="icon" width="22" height="22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M11 21c5.523 0 10-4.477 10-10S16.523 1 11 1 1 5.477 1 11s4.477 10 10 10z"
                                                            stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"/>
                                                        <path
                                                            d="M15.167 6.833H13.5a2.5 2.5 0 00-2.5 2.5V21M7.664 12.667h6.667"
                                                            stroke="#366CE3" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"/>
                                                    </svg>
                                                    <p className="text body-sb">Facebook</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="login-social">
                                            <span className="line"/>
                                            <p className="desc body-s">Or login with email</p>
                                            <span className="line"/>
                                        </div>
                                        <form className="form-main" method="post">
                                            <div className="input-otr">
                                                <input className="input" type="text" name="fname"
                                                       placeholder="Your Full Name" required/>
                                            </div>
                                            <div className="input-otr input-otr-2">
                                                <input className="input" type="email" name="email"
                                                       placeholder="Your Email Address" required/>
                                            </div>
                                            <div className="check-main">
                                                <div className="check">
                                                    <label>
                                                    <span className="check-inner">
                                                        <input type="checkbox"
                                                               className="input-check opacity-0 absolute"/>
                                                        <svg className="fill-current" width="24" height="24" fill="none"
                                                             xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"
                                                                                                        r="12"
                                                                                                        fill="#366CE3"/><path
                                                            d="M16.521 8.938l-6.125 6.125L7.335 12" stroke="#fff"
                                                            strokeWidth="1.5" strokeLinecap="round"
                                                            strokeLinejoin="round"/></svg>
                                                    </span>
                                                        <span className="select-none body-sb">Remember Me</span>
                                                    </label>
                                                </div>
                                                <a href="" className="forget body-sb">Forgot Password?</a>
                                            </div>
                                            <div className="action-otr">
                                                <input className="button body-sb" type="submit" value="Login"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-login">
                            <div className="copy-inr">
                                <UtilityLinks/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
