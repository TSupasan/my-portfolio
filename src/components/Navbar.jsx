function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <div className="logo">
        TA
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#creative">Creative</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>

    </nav>
  )
}

export default Navbar