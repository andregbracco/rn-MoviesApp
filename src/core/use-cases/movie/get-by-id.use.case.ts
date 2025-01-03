import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entities';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    //llamada
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    //mapeo
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

    return fullMovie;
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};
