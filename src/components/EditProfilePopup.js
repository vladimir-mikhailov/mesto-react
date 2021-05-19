import PopupWithForm from './PopupWithForm';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSaving }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [inputList, setInputList] = useState([]);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  useEffect(() => {
    setInputList(() =>
      Array.from(
        document.querySelector('.edit-form').querySelectorAll('.form__input'),
      ),
    );
  }, []);

  function inputsValidation() {
    inputList.some(inputElement => !inputElement.validity.valid)
      ? setIsFormValid(false)
      : setIsFormValid(true);
  }

  function handleNameChange(e) {
    setName(e.target.value);
    inputsValidation();
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
    inputsValidation();
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name='edit-form'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        id='profile-name'
        className='form__input form__input_type_name'
        name='name'
        placeholder='Имя'
        minLength='2'
        maxLength='40'
        required
        onChange={handleNameChange}
        value={name || ''}
      />
      {isOpen && (
        <span
          className={`form__input-error${
            inputList.find(i => i.name === 'name').validity.valid
              ? ''
              : ' form__input-error_visible'
          }`}
        >
          {inputList.find(i => i.name === 'name').validationMessage}
        </span>
      )}
      <input
        type='text'
        id='profile-description'
        className='form__input form__input_type_description'
        name='about'
        placeholder='О себе'
        minLength='2'
        maxLength='200'
        required
        onChange={handleDescriptionChange}
        value={description || ''}
      />
      {isOpen && (
        <span
          className={`form__input-error${
            inputList.find(i => i.name === 'about').validity.valid
              ? ''
              : ' form__input-error_visible'
          }`}
        >
          {inputList.find(i => i.name === 'about').validationMessage}
        </span>
      )}

      <button
        className={`form__button${isFormValid ? '' : ' form__button_disabled'}`}
        type='submit'
        aria-label='Сохранить профиль'
        name='profile-save'
        value='Сохранить'
        disabled={!isFormValid}
      >
        {isSaving ? 'Сохранение...' : 'Сохранить'}
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
