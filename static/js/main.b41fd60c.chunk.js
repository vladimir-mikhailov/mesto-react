(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),r=n.n(s),o=(n(11),n(2)),i=n(0);var l=function(){return Object(i.jsx)("header",{className:"header section section_centered",children:Object(i.jsx)("a",{href:"/",target:"_self",children:Object(i.jsx)("div",{className:"header__logo","aria-label":"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",title:"Mesto Russia"})})})},u=n(5),d=n(6),p="https://mesto.nomoreparties.co/v1/cohort-22",m="de47b0cf-2796-425b-8528-a1fb4932903a",b=new(function(){function e(t){Object(u.a)(this,e),this.baseUrl=t.baseUrl,this.authToken=t.authToken}return Object(d.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:{authorization:this.authToken}}).then((function(t){return e._handleResponse(t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{authorization:this.authToken,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t._handleResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.authToken}}).then((function(e){return t._handleResponse(e)}))}},{key:"toggleLikeCard",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"DELETE":"PUT"),headers:{authorization:this.authToken}}).then((function(e){return n._handleResponse(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:{authorization:this.authToken}}).then((function(t){return e._handleResponse(t)}))}},{key:"updateUserInfo",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this.authToken,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._handleResponse(e)}))}},{key:"updateUserAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.authToken,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleResponse(e)}))}}]),e}())({baseUrl:p,authToken:m});var j=function(e){var t=e.card,n=e.onCardClick;return Object(i.jsxs)("li",{className:"element",children:[Object(i.jsx)("div",{style:{backgroundImage:"url(".concat(t.link,")")},className:"element__image",onClick:function(){n(t)}}),Object(i.jsx)("button",{className:"trash-button",type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",name:"delete"}),Object(i.jsxs)("div",{className:"element__bottom-container",children:[Object(i.jsx)("h2",{className:"element__title",children:t.name}),Object(i.jsxs)("div",{className:"element__like-container",children:[Object(i.jsx)("button",{className:"element__like-button",type:"button","aria-label":"\u041c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",name:"like"}),Object(i.jsx)("span",{className:"element__like-counter ".concat(0===t.likes.length&&"element__like-counter_hidden"),children:t.likes.length})]})]})]})};var h=function(e){var t=e.onEditProfile,n=e.onAddPlace,a=e.onEditAvatar,s=e.onCardClick,r=c.a.useState(),l=Object(o.a)(r,2),u=l[0],d=l[1],p=c.a.useState(),m=Object(o.a)(p,2),h=m[0],f=m[1],_=c.a.useState(),O=Object(o.a)(_,2),x=O[0],v=O[1],N=c.a.useState([]),k=Object(o.a)(N,2),y=k[0],g=k[1];return c.a.useEffect((function(){b.getUserInfo().then((function(e){d(e.name),f(e.about),v(e.avatar)})).catch((function(e){return console.log(e)}))}),[]),c.a.useEffect((function(){return b.getCards().then((function(e){g(e)})).catch((function(e){return console.log(e)})),function(){}}),[]),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsxs)("section",{className:"profile section section_centered",children:[Object(i.jsx)("div",{className:"profile__avatar-container",onClick:a,children:Object(i.jsx)("div",{style:{backgroundImage:"url(".concat(x,")")},className:"profile__avatar"})}),Object(i.jsxs)("div",{className:"profile__info",children:[Object(i.jsxs)("div",{className:"profile__name-container",children:[Object(i.jsx)("h1",{className:"profile__name",children:u}),Object(i.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:t})]}),Object(i.jsx)("p",{className:"profile__description",children:h})]}),Object(i.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",name:"add-card",onClick:n})]}),Object(i.jsx)("section",{className:"section section_centered","aria-label":"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",children:Object(i.jsx)("ul",{className:"elements",children:y.map((function(e){return Object(i.jsx)(j,{card:e,onCardClick:s},e._id)}))})})]})};var f=function(){return Object(i.jsx)("footer",{className:"footer section section_centered",children:Object(i.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var _=function(e){var t=e.title,n=e.name,a=e.isOpen,s=e.onClose,r=e.onSubmit,o=e.children;return c.a.useEffect((function(){function e(e){"Escape"===e.key&&s()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),Object(i.jsx)("div",{className:"popup popup_type_".concat(n).concat(a&&" popup_open"),onClick:function(e){e.target===e.currentTarget&&s()},children:Object(i.jsxs)("div",{className:"popup__container popup__container_type_form",children:[Object(i.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:s}),Object(i.jsxs)("form",{className:"form form_edit",name:n,onSubmit:r,noValidate:!0,children:[Object(i.jsx)("h2",{className:"form__title",children:t}),o]})]})})};var O=function(e){var t=e.card,n=e.isOpen,a=e.onClose;return c.a.useEffect((function(){function e(e){"Escape"===e.key&&a()}return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}})),Object(i.jsx)("div",{className:"popup popup_type_big-picture ".concat(n&&" popup_open"),onClick:function(e){e.target===e.currentTarget&&a()},children:Object(i.jsxs)("div",{className:"popup__container",children:[Object(i.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:a}),Object(i.jsxs)("figure",{className:"figure",children:[Object(i.jsx)("img",{src:t.link,alt:t.name,className:"big-image"}),Object(i.jsx)("figcaption",{className:"big-image-caption"})]})]})})};var x=function(){var e=c.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),r=Object(o.a)(s,2),u=r[0],d=r[1],p=c.a.useState(!1),m=Object(o.a)(p,2),b=m[0],j=m[1],x=c.a.useState(!1),v=Object(o.a)(x,2),N=v[0],k=v[1],y=c.a.useState({}),g=Object(o.a)(y,2),C=g[0],T=g[1];function E(){a(!1),d(!1),j(!1),k(!1),T({})}return Object(i.jsxs)("div",{className:"page",children:[Object(i.jsx)(l,{}),Object(i.jsx)(h,{onEditProfile:function(){d(!0)},onAddPlace:function(){j(!0)},onEditAvatar:function(){a(!0)},onCardClick:function(e){T(e),k(!0)}}),Object(i.jsx)(f,{}),Object(i.jsx)(_,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:n,onClose:E,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{type:"url",id:"profile-avatar",className:"form__input",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",required:!0}),Object(i.jsx)("span",{className:"form__input-error profile-avatar-input-error"}),Object(i.jsx)("button",{className:"form__button",type:"submit","aria-label":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"avatar-save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}),Object(i.jsx)(_,{name:"edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:u,onClose:E,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{type:"text",id:"profile-name",className:"form__input form__input_type_name",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0}),Object(i.jsx)("span",{className:"form__input-error profile-name-input-error"}),Object(i.jsx)("input",{type:"text",id:"profile-description",className:"form__input form__input_type_description",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0}),Object(i.jsx)("span",{className:"form__input-error profile-description-input-error"}),Object(i.jsx)("button",{className:"form__button",type:"submit","aria-label":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",value:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",name:"profile-save",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}),Object(i.jsx)(_,{name:"add-card-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:b,onClose:E,children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{type:"text",id:"place-name",className:"form__input place-name",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(i.jsx)("span",{className:"form__input-error place-name-input-error"}),Object(i.jsx)("input",{type:"url",id:"place-img-src",className:"form__input place-link",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(i.jsx)("span",{className:"form__input-error place-img-src-input-error"}),Object(i.jsx)("button",{className:"form__button",type:"submit","aria-label":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",value:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",name:"create-card",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})}),Object(i.jsx)(O,{card:C,isOpen:N,onClose:E}),Object(i.jsx)("div",{className:"popup popup_type_delete-card-form",children:Object(i.jsxs)("div",{className:"popup__container popup__container_type_form",children:[Object(i.jsx)("button",{className:"popup__button-close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f"}),Object(i.jsxs)("form",{className:"form form_delete-card",name:"delete-card",children:[Object(i.jsx)("h2",{className:"form__title",children:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(i.jsx)("input",{type:"text",className:"form__input form__input_type_hidden form__input_type_id",name:"id"}),Object(i.jsx)("button",{className:"form__button",type:"submit","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",value:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",name:"delete-card",children:"\u0414\u0430"})]})]})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),v()}},[[13,1,2]]]);
//# sourceMappingURL=main.b41fd60c.chunk.js.map