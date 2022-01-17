import { useEffect, useState } from 'react';
import './App.scss';
import ImagesGrid from './components/ImagesGrid/ImagesGrid';
import Popup from './components/Popup/Popup';

function App() {
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleClick(e) {
    setIsPopupOpen(!isPopupOpen);
    setImageId(+e.target.id);
  }
  useEffect(() => {
    fetch('https://boiling-refuge-66454.herokuapp.com/images').then(response => response.json()).then(data => {
      setImages(data)
    })
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setIsPopupOpen(false);
      }
    }, false);
  }, [])
  const imagesList = images.map(image => {
    return (
      <div className="images__image-container" onClick={handleClick} key={image.id} id={image.id}>
        <img className='images__image' src={image.url} alt="" id={image.id} />
      </div>
    )
  })
  return (
    <div className="app">
      {images.length > 0 ? <ImagesGrid imagesList={imagesList} >
      </ImagesGrid> : <h1 className='app__warning'>К сожалению, изображения не были найдены. Возможно, проблема в API</h1>}
      <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} imageId={imageId} images={images}></Popup>
    </div>
  );
}

export default App;
