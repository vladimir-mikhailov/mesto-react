import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false,
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false,
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  /*const [currentUser, setCurrentUser] = React.useState()

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err));
  },[]);*/

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  /*function handleAddPlaceSubmit (evt) {
    evt.preventDefault();
    const newCard = {
      name: evt.target.querySelector('.place-name').value,
      link: evt.target.querySelector('.place-link').value,
    }
    api
      .addCard(newCard)
      .then((res) => {
        //setCards([...cards, newCard]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }*/
  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='update-avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='url'
          id='profile-avatar'
          className='form__input'
          name='avatar'
          placeholder='Ссылка на изображение'
          required
        />
        <span className='form__input-error profile-avatar-input-error' />
        <button
          className='form__button'
          type='submit'
          aria-label='Сохранить'
          value='Сохранить'
          name='avatar-save'
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name='edit-form'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        />
        <span className='form__input-error profile-description-input-error' />
        <button
          className='form__button'
          type='submit'
          aria-label='Сохранить профиль'
          value='Сохранить'
          name='profile-save'
        >
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name='add-card-form'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        /*onSubmit={handleAddPlaceSubmit}*/
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
        />
        <span className='form__input-error place-name-input-error' />
        <input
          type='url'
          id='place-img-src'
          className='form__input place-link'
          name='link'
          placeholder='Ссылка на картинку'
          required
        />
        <span className='form__input-error place-img-src-input-error' />
        <button
          className='form__button'
          type='submit'
          aria-label='Создать новую карточку'
          value='Создать'
          name='create-card'
        >
          Создать
        </button>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
