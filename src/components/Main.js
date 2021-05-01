import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then(items => {
        setCards(items);
      })
      .catch(err => console.log(err));
    return () => {};
  }, []);

  return (
    <main className='main'>
      <section className='profile section section_centered'>
        <div className='profile__avatar-container' onClick={onEditAvatar}>
          <div
            style={{ backgroundImage: `url(${userAvatar})` }}
            className='profile__avatar'
          />
        </div>

        <div className='profile__info'>
          <div className='profile__name-container'>
            <h1 className='profile__name'>{userName}</h1>
            <button
              className='profile__edit-button'
              type='button'
              aria-label='Редактировать профиль'
              onClick={onEditProfile}
            />
          </div>
          <p className='profile__description'>{userDescription}</p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          aria-label='Добавить фото'
          name='add-card'
          onClick={onAddPlace}
        />
      </section>
      <section
        className='section section_centered'
        aria-label='Фотографии пользователя'
      >
        <ul className='elements'>
          {cards.map(item => (
            <Card key={item._id} card={item} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
