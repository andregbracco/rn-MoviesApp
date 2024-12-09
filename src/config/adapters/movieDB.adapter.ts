import { THE_MOVIE_DB_KEY } from '@env';
import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es',
  },
  headers: {
    Authorization: 'Bearer ' + THE_MOVIE_DB_KEY,
    accept: 'application/json',
  },
});
