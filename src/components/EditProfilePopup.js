import PopupWithForm from './PopupWithForm';
import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isSaving }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
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
      <span className='form__input-error profile-name-input-error' />
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
      <span className='form__input-error profile-description-input-error' />
      <button
        className='form__button'
        type='submit'
        aria-label='Сохранить профиль'
        name='profile-save'
        value='Сохранить'
      >
        {isSaving ? 'Сохранение...' : 'Сохранить'}
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
