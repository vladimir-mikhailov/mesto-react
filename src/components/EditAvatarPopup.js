import PopupWithForm from './PopupWithForm';
import { useRef, useState } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSaving }) {
  const inputRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  function inputsValidation() {
    inputRef.current.validity.valid
      ? setIsFormValid(true)
      : setIsFormValid(false);
  }

  function handleChange() {
    inputsValidation();
    setValidationMessage(inputRef.current.validationMessage);
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
            inputRef.current.validity.valid ? '' : ' form__input-error_visible'
          }`}
        >
          {validationMessage}
        </span>
      )}
      <button
        className={`form__button${isFormValid ? '' : ' form__button_disabled'}`}
        type='submit'
        aria-label='Сохранить'
        name='avatar-save'
        disabled={!isFormValid}
      >
        {isSaving ? 'Сохранение...' : 'Сохранить'}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
