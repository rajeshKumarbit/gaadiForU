import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>

      {/* Logo */}
      <div>
        <span>G</span>
        <span>aadiForYou</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul>
          <li><a href="#">Buy Car</a></li>
          <li><a href="#">Sell Car</a></li>
          <li><a href="#">Car Loans</a></li>
          <li><a href="#">Car Check</a></li>
          <li><a href="#">Insurance</a></li>
        </ul>
      </nav>

      {/* Login Button */}
      <div>
        <button>Login</button>
      </div>

    </header>
  )
}