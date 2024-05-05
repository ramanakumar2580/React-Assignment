
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextprovider from './context/UserContextprovider'
function App() {
  

  return (
    <UserContextprovider>
    <h1>Conext Api</h1>
    <Login/>
    <Profile/>
    </UserContextprovider>
  )
}

export default App
