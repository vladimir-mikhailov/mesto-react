import PopupWithForm from './PopupWithForm';
import { useState, useEffect } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isSaving }) {
  const [placeName, setPlaceName] = useState('');
  const [placeImage, setPlaceImage] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputList, setInputList] = useState([]);
  const [validationMessages, setValidationMessages] = useState({
    name: '',
    link: '',
  });

  useEffect(() => {
    setInputList(() =>
      Array.from(
        document
          .querySelector('.add-card-form')
          .querySelectorAll('.form__input'),
      ),
    );
  }, []);

  function inputsValidation() {
    inputList.some(inputElement => !inputElement.validity.valid)
      ? setIsFormValid(false)
      : setIsFormValid(true);
    setValidationMessages({
      name: inputList.find(i => i.name === 'name').validationMessage,
      link: inputList.find(i => i.name === 'link').validationMessage,
    });
  }

  function handlePlaceNameChange(e) {
    setPlaceName(e.target.value);
    inputsValidation();
  }

  function handlePlaceImageChange(e) {
    setPlaceImage(e.target.value);
    inputsValidation();
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
        value={placeName || ''}
        onChange={handlePlaceNameChange}
      />
      {isOpen && (
        <span
          className={`form__input-error${
            validationMessages.name === '' ? '' : ' form__input-error_visible'
          }`}
        >
          {validationMessages.name}
        </span>
      )}
      <input
        type='url'
        id='place-img-src'
        className='form__input place-link'
        name='link'
        placeholder='Ссылка на картинку'
        required
        value={placeImage || ''}
        onChange={handlePlaceImageChange}
      />
      {isOpen && (
        <span className='form__input-error form__input-error_visible'>
          {validationMessages.link}
        </span>
      )}
      <button
        className={`form__button${isFormValid ? '' : ' form__button_disabled'}`}
        type='submit'
        aria-label='Создать новую карточку'
        value='Создать'
        name='create-card'
        disabled={!isFormValid}
      >
        {isSaving ? 'Создание...' : 'Создать'}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
