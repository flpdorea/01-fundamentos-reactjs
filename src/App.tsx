import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Post } from './components/Post'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Teste'},
      {type: 'link', content: 'google.com'},
      {type: '', content: '#teste'}
    ],
    publishedAt: new Date('2022-12-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/flpdorea.png',
      name: 'Felipe Dórea',
      role: 'Web Dev'
    },
    content: [
      {type: 'paragraph', content: 'Meu post'},
      {type: 'link', content: 'rocketseat.com.br'},
      {type: '', content: '#react'}
    ],
    publishedAt: new Date('2022-12-08 21:00:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          })}
        </main>
      </div>
    </>
  )
}
