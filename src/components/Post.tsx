import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post(props: any) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/flpdorea.png'/>
          <div className={styles.authorInfo}>
            <strong>Felipe Dórea</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title='11 de Maio às 08:00h' dateTime='2022-05-11 08:00:00'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Teste</p>
        <p><a href='#'>google.com</a></p>
        <p><a href='#'>#teste</a>{' '}<a href='#'>#teste</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}
