import { Link } from 'react-router-dom';
import { useMemo, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks/store';
import { getFilmsByGenre } from '../../store/action';
import type { FilmInfo } from '../../types';

type GenreItemProps = {
  genre: string;
  isActive: boolean;
};

type GenreListProps = {
  filmsList: FilmInfo[];
  activeGenre: string;
};

function GenreItem({ genre, isActive }: GenreItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li
      className={`catalog__genres-item catalog__genres-item${
        isActive ? '--active' : ''
      }`}
    >
      <Link
        to="#"
        className="catalog__genres-link"
        onClick={(event: FormEvent<HTMLAnchorElement>) => {
          event.preventDefault();
          dispatch(getFilmsByGenre({ genre }));
        }}
      >
        {genre}
      </Link>
    </li>
  );
}

function GenreList({ filmsList, activeGenre }: GenreListProps): JSX.Element {
  const genreList = useMemo(
    () =>
      ['All genres', ...new Set(filmsList.map((film) => film.genre))].splice(
        0,
        10
      ),
    [filmsList]
  );

  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <GenreItem genre={genre} isActive={activeGenre === genre} key={genre} />
      ))}
    </ul>
  );
}

export default GenreList;
