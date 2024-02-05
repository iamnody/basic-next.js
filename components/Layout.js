import styles from '../styles/Layout.module.css'
import Hero from './Hero'
import Meta from './Meta'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Hero />
          {children}
        </main>
      </div>
    </>
  )
}
export default Layout
