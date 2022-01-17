import { useState } from "react";

function CommentForm({ createComment }) {
    const [comment, setComment] = useState({
        name: '',
        comment: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        createComment(comment)
        setComment({
            name: '',
            comment: '',
        })
    }
    return (
        <form className="popup__form" onSubmit={handleSubmit}>
            <input className="popup__form-input" type="text" value={comment.name} placeholder="Ваше имя" onChange={(e) => setComment({ ...comment, name: e.target.value })} required />
            <input className="popup__form-input" type="text" value={comment.comment} placeholder="Ваш комментарий" onChange={(e) => setComment({ ...comment, comment: e.target.value })} required />
            <button className="popup__form-btn" type="submit">Оставить комментарий</button>
        </form>
    );
}

export default CommentForm;