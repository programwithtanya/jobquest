import Form from 'react-bootstrap/Form';
import style from './Form1.module.css'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
function Form1() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <label class="custom-checkbox">
           <span class={style.checkmark}>
           <input type="checkbox" style={{'margin-right' : '3px'}}/>
            <h6 style={{fontSize:'0.7rem'}}>Remember me</h6>
            <h6 style={{fontSize:'0.7rem'}} className={`${style.anchor}`}> <a href="" style={{'text-decoration': 'none'}}>Recovery password</a></h6>
            </span>
      </label>
      
      <button className={style.btn}>Login</button>
      <span className={style.options}>
        <button className={style.googlebtn}><FcGoogle className={style.google} /><h6 style={{'font-weight': '500'}}>Login with google</h6></button>
        <button className={style.applebtn}><FaApple className={style.apple} /><h6 style={{'font-weight': '500'}}>Login with apple</h6></button>
      </span>
      

    </Form>
    <span className={style.register}>
      <p style={{fontSize:'0.7rem'}}>Don’t have an account yet? <a href="" style={{'text-decoration': 'none', fontSize:'0.7rem'}}>Register now</a></p>
      
    </span>
    
    </>
    
  )
}

export default Form1;