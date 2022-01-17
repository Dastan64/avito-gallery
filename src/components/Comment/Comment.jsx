import "./Comment.scss";


function Comment({ commentObj }) {
    const { name, comment } = commentObj;
    return (
        <div className="comment popup__comment">
            <p className="comment__date">{new Date().toLocaleDateString()} в {new Date().toLocaleTimeString().substr(0, 5)}</p>
            <p className="comment__author">{name}</p>
            <p className="comment__text">{comment}</p>
        </div>
    );
}

export default Comment;