import React from 'react'

const LoginForm = () => {
  return (
    <div>
            <form>
                <div className={'sign-up-wrapper'}>
                    <input type="radio" value="Signup" id="Signup" name="login-signup" />
                    <label htmlFor="Signup">Signup</label>
                    <input type="radio" value="Login" id="Login" name="login-signup" />
                    <label htmlFor="Login">Login</label>
                </div>
                <br />
                <input type="text" placeholder="Email" />
                <br />
                <br />
                <input type="text" placeholder="Password" />
                <br />
                <br />
                <input
                    type="submit"
                    value="Continue →"
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                />
            </form>
    </div>
  )
}

export default LoginForm;