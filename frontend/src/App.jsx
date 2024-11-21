import NavBar from "./components/navbar.jsx";
import BlogPost from "./components/blogposts.jsx";
import Footer from "./components/footer.jsx";
import LoginForm from "./components/loginform.jsx";
import RegistrationForm from "./components/registrationform.jsx";
import Posts from "./components/posts.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {


    return (
         <>
         <Router>
            <NavBar />
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path='/posts' element={<><Posts/></>} />
                <Route exact path="/" element={<><BlogPost/><Footer/></>}/>
            </Routes>
         </Router>
        </>
    
    )
}



export default App;