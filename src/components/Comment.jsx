import styles from './Comment.module.css';

import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        console.log('deletar');
        onDeleteComment(content);
    }
    function handleLikeComment() {
        setLikeCount( state => {
            return state + 1;
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/MRodrigues51.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Marcelo Rodrigues</strong>
                            <time title='28 de Outubro às 16:14' dateTime='2022-10-28 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}