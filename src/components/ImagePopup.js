import React from 'react';

function ImagePopup({ card, isOpen, onClose }) {
  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  function handleClickOnOverlay(evt) {
    evt.target === evt.currentTarget && onClose();
  }

  return (
    <div
      className={`popup popup_type_big-picture ${isOpen && ' popup_open'}`}
      onClick={handleClickOnOverlay}
    >
      <div className='popup__container'>
        <button
          className='popup__button-close'
          type='button'
          aria-label='Закрыть попап'
          onClick={onClose}
        />
        <figure className='figure'>
          <img src={card.link} alt={card.name} className='big-image' />
          <figcaption className='big-image-caption' />
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
