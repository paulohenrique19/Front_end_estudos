import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import Avatar from './Avatar'
import { useState } from 'react'

const Comment = ({ content, onDeleteComment }: any) => {


    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function handleLikeComment(){
        //const newLikeCount = likeCount + 1
        //setLikeCount(newLikeCount)

        // ou 

        setLikeCount((state) => {
            return state + 1
        })
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>User 1</strong>
                        <time title="09/12/24 13:00" dateTime="2024-09-12 13:00:00">
                            Cerca de 1h
                        </time>
                    </div>

                    <button onClick={handleDeleteComment} title="Deletar comentário">
                        <Trash size={24}/>
                    </button>

                </header>
                <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Like <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

export default Comment