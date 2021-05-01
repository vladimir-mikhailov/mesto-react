import React from 'react';

function Card({ card, onCardClick }) {
  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className='element'>
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className='element__image'
        onClick={handleCardClick}
      />
      <button
        className='trash-button'
        type='button'
        aria-label='Удалить'
        name='delete'
      />
      <div className='element__bottom-container'>
        <h2 className='element__title'>{card.name}</h2>
        <div className='element__like-container'>
          <button
            className='element__like-button'
            type='button'
            aria-label='Мне нравится'
            name='like'
          />
          <span
            className={`element__like-counter ${
              card.likes.length === 0 && 'element__like-counter_hidden'
            }`}
          >
            {card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}

export default Card;
