import {Component} from 'react'

class Login extends Component {
  componentDidMount() {
    this.getResult()
  }

  getResult = async () => {
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
    }
    const response = await fetch(url, options)
    console.log(response)
  }

  render() {
    return (
      <div className="login-link">
        <h1 className="heading">Please Login</h1>
        <button type="button" onClick={this.getResult}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
