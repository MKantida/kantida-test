import React from 'react'
import "./LoginForm.css"

function LoginForm() {
  return (
    
            <div className="LoginForm">

              <section className="LoginForm-con">
                <div className="LoginForm-r">
                

                    <h2>Some title</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore consectetur nam assumenda excepturi, doloribus placeat perspiciatis neque vero a, natus aperiam ullam ipsam. Quis, sequi facere?
                    </p>
                </div>
                <div className='LoginForm-l'>
                <div className="LoginForm-form">

                <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>

    <input type="Username"   placeholder="Username" required></input>
    <input type="password"   placeholder="Password" required></input>
    <input type="repassword" placeholder="Re-type Password" required ></input>

    <div className="divider"></div>

    <button className="LoginForm-button"> v3.1 released. </button>
   

</div>
                </div>
                
                
            </section>
    </div>
  )
}

export default LoginForm
