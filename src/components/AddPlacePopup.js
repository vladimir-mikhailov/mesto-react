import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isSaving }) {
  const [placeName, setPlaceName] = useState('');
  const [placeImage, setPlaceImage] = useState('');

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
  }

  function handlePlaceImageChange(e) {
    setPlaceImage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: placeName,
      link: placeImage,
    });
    setPlaceName('');
    setPlaceImage('');
  }

  return (
    <PopupWithForm
      name='add-card-form'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        id='place-name'
        className='form__input place-name'
        name='name'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
        value={placeName}
        onChange={handlePlaceNameChange}
      />
      <span className='form__input-error place-name-input-error' />
      <input
        type='url'
        id='place-img-src'
        className='form__input place-link'
        name='link'
        placeholder='Ссылка на картинку'
        required
        value={placeImage}
        onChange={handlePlaceImageChange}
      />
      <span className='form__input-error place-img-src-input-error' />
      <button
        className='form__button'
        type='submit'
        aria-label='Создать новую карточку'
        value='Создать'
        name='create-card'
      >
        {isSaving ? 'Создание...' : 'Создать'}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
