import {apiData} from "./utils";

class Api {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.authToken = options.authToken;
  }

  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: {
        authorization: this.authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  addCard(newCard) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this.authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCard),
    }).then((res) => this._handleResponse(res));
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  toggleLikeCard(cardId, isLiked) {
    return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
      method: `${isLiked ? 'DELETE' : 'PUT'}`,
      headers: {
        authorization: this.authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        authorization: this.authToken,
      },
    }).then((res) => this._handleResponse(res));
  }

  updateUserInfo(userData) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this.authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then((res) => this._handleResponse(res));
  }

  updateUserAvatar(userData) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this.authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        avatar: userData.avatar,
      }),
    }).then((res) => this._handleResponse(res));
  }
}

const api = new Api({
  baseUrl: apiData.baseUrl,
  authToken: apiData.authToken,
});

export default api