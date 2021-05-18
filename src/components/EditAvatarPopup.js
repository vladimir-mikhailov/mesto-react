import PopupWithForm from './PopupWithForm';
import { useRef } from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isSaving }) {
  const inputRef = useRef();

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
      />
      <span className='form__input-error profile-avatar-input-error' />
      <button
        className='form__button'
        type='submit'
        aria-label='Сохранить'
        name='avatar-save'
      >
        {isSaving ? 'Сохранение...' : 'Сохранить'}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
