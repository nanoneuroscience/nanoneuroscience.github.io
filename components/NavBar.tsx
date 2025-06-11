import Link from 'next/link';


import styles from '../styles/NavBar.module.css';

const NavBar = () => (
  <nav className={styles.navbar}>
    <div className={styles.inner}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="/nano-neurosciences-logo.png" alt="Nano Neurosciences Logo" style={{ display: 'block', height: '50px', width: 'auto' }} />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li><Link href="/mission">Our Mission</Link></li>
        <li><Link href="/science">Our Science</Link></li>
        <li><Link href="/pipeline">Our Pipeline</Link></li>
        <li><Link href="/team">Our Team</Link></li>
        <li><Link href="/careers">Careers</Link></li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
