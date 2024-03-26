
function NavBar() {
  return (
      
      <nav>
        <h1>Blog</h1>
        <div className="nav-btn">
          <a class="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>

          <a className="auth-btn" href="#login">Log-in</a>
          <a className="auth-btn" href="#register">Register</a>
        </div>
        
      </nav>
    
  )
}

export default NavBar