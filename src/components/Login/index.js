import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {usernameInput: 'rahul', passwordInput: 'rahul@2021'}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitForm = async () => {
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput} // userDetails should have the username and password as keys
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-link">
        <h1 className="heading">Please Login</h1>
        <button type="button" onClick={this.onSubmitForm}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
