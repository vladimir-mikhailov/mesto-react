import PopupWithForm from './PopupWithForm';
import { useRef, useState } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSaving }) {
  const inputRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  function inputsValidation(input) {
    input.validity.valid ? setIsFormValid(true) : setIsFormValid(false);
  }

  function handleChange(e) {
    inputsValidation(e.target);
    setValidationMessage(e.target.validationMessage);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
    e.target.reset();
  }

  return (
    <PopupWithForm
      name='update-avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
      isSaving={isSaving}
      buttonValues={{ isSaving: 'Сохранение...', default: 'Сохранить' }}
    >
      <input
        type='url'
        id='profile-avatar'
        className='form__input'
        name='avatar'
        placeholder='Ссылка на изображение'
        required
        ref={inputRef}
        onChange={handleChange}
      />
      {isOpen && (
        <span
          className={`form__input-error${
            isFormValid ? '' : ' form__input-error_visible'
          }`}
        >
          {validationMessage}
        </span>
      )}
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
