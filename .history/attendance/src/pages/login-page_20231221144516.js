import React from "react";
import styles from '../styles/login-page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Login = () => {

    return (
        <div 
            style={{
                backgroundColor: 'red'
            }}>
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Login</h1>
                    <div className="login-handle">
                        <div className="login-form">
                            <label>Username: </label>
                            <input type="email" className="form-input" placeholder="Nhập tài khoản"/>
                        </div>
                        <div className="login-form">
                            <label>Password: </label>
                            <input type="password" className="form-input" placeholder="Nhập mật khẩu"/>
                        </div>
                        <div className="login-button">
                            <button className="login-btn">Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login