import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import "./Popup.scss";
import close from '../../popup-close.svg'
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

function Popup({ isPopupOpen, setIsPopupOpen, imageId, images }) {
    const [bigImage, setBigImage] = useState('');
    const [comments, setComments] = useState([])

    const createComment = comment => {
        setComments([...comments, comment])
        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}/comments`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comment),
        }).then(response => {
            if (response.status === 204) {
                console.log(`Статус ответа: ${response.status}, что означает успешную отправку комментария`)
            }
            else {
                console.error("Судя по всему, что-то пошло не так.");
            }
        })
    }

    useEffect(() => {
        if (!imageId) {
            return;
        }

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${imageId}`).then(response => response.json()).then(data => {
            setBigImage(data.url)
        })
    }, [imageId, images, comments])

    const commentsList = comments.map((comment) => <Comment commentObj={comment} key={uuidv4()}></Comment>)

    return (
        <div className={`popup ${isPopupOpen ? "popup--open" : ""}`} onClick={() => setIsPopupOpen(!isPopupOpen)}>
            <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                <div className="popup__container">
                    <div className="popup__left">
                        <div className="popup__image-container">
                            <img className="popup__image" src={bigImage} alt="" />
                        </div>
                        <CommentForm createComment={createComment}></CommentForm>
                    </div>

                    <div className="popup__comments">
                        {commentsList}
                    </div>
                </div>

                <button className="popup__close-btn" onClick={() => setIsPopupOpen(!isPopupOpen)} title="Закрыть модальное окно">
                    <img className="popup__close-icon" src={close} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Popup;