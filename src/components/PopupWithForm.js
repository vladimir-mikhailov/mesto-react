import React from 'react';

function PopupWithForm({ title, name, isOpen, onClose, onSubmit, children }) {
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
      className={`popup popup_type_${name}${isOpen && ' popup_open'}`}
      onClick={handleClickOnOverlay}
    >
      <div className='popup__container popup__container_type_form'>
        <button
          className='popup__button-close'
          type='button'
          aria-label='Закрыть попап'
          onClick={onClose}
        />
        <form
          className='form form_edit'
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className='form__title'>{title}</h2>
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;