import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { mainFilm, filmCards, filmDetails } from './mocks/data.json';
import { player } from './mocks/player.json';
import { reviews } from './mocks/reviews.json';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
        filmData={filmDetails}
        mainFilm={mainFilm}
        filmCards={filmCards}
        myListFilmCards={filmCards}
        player={player}
      />
    </Provider>
  </React.StrictMode>
);
