import PopupWithForm from './PopupWithForm';

function PopupDeleteCard({ isOpen, onClose, isSaving, card, onDelete }) {
  function handleSubmit(e) {
    e.preventDefault();
    onDelete(card);
  }

  return (
    <PopupWithForm
      name='card-delete'
      title='Уверены?'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <button
        className='form__button'
        type='submit'
        aria-label='Удалить'
        name='avatar-save'
      >
        {isSaving ? 'Удаление...' : 'Удалить'}
      </button>
    </PopupWithForm>
  );
}

export default PopupDeleteCard;
