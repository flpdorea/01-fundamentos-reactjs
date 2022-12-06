import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Felipe' content='Testando'/>
          <Post author='John' content='Testing'/>
        </main>
      </div>
    </>
  )
}
