import styles from './Header.module.css'
import logo from '../assets/rocket.svg'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="Logo do projeto" />
        <div className={styles['text-decoration']}>
          <p>t</p>
          <p>o</p>
          <p>d</p>
          <p>o</p>
        </div>
    </div>
  )
}

export default Header