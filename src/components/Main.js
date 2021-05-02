import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then(res => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    api
      .getCards()
      .then(items => {
        setCards(items);
      })
      .catch(err => console.log(err));
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
