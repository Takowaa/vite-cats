import styles from './Header.module.scss'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav>
            <Link to="/">Homepage</Link>
            <Link to="/people">People</Link>
            <Link to="/planets">Planets</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;