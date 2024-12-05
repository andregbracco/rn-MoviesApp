import {Movie} from '../../core/entities/movie.entities';
import type {Result} from '../interfaces/movie-db-responses';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      backdrop: 'https://image.tmdb.org/t/p/w500' + result.backdrop_path,
      description: result.overview,
      id: result.id,
      poster: 'https://image.tmdb.org/t/p/w500' + result.poster_path,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      title: result.title,
    };
  }
}
