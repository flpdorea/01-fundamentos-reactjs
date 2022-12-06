import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/flpdorea.png' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Dórea</strong>
              <time title='11 de Maio às 08:00h' dateTime='2022-05-11 08:00:00'>Cerca há 1h atrás</time>
            </div>

            <button title='Deletar comentário'><Trash size={24}/></button>
          </header>
          <p>Comentário</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
