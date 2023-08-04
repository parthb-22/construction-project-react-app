import { useState } from "react";
import Home from "./Home";
import LoginForm from "./LoginForm";
import Nav from "./Nav";
import Projects from "./Projects";
import './Style.css'
function App() {
  const [IsLoggedIn,setIsLoggedIn]  = useState(false);
  const handlePage = () =>{
    setIsLoggedIn(true)
  }
  if(IsLoggedIn===true){
    return(
      <div>
        <Nav />
        <Home />
        <Projects/>
      </div>
    )
  }
  
  return (
    <div className="App">
        <LoginForm handlePage={handlePage}/>       
    </div>
  );
}

export default App;
