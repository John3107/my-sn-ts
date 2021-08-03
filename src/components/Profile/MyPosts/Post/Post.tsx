import React from 'react';
import s from './Post.module.css';

type PostType = {
    message: string
    likesCount: number
}

const Post = (props: PostType) => {
    return <div className={s.item}>
        <img src={'https://www.film.ru/sites/default/files/filefield_paths/maxresdefault_1_24.jpg'}/>
        { props.message }
        <div>
            <span>like</span> { props.likesCount }
        </div>
    </div>
}

export default Post;