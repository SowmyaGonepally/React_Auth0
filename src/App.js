import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Profile from './Components/Profile';
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const  {isLoading} =useAuth0();

  if(isLoading)
  {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
