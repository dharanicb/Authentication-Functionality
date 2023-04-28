// Write your JS code here
import './index.css'
import Header from '../Header'

import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="home-route">
      <h1>Home Router</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
