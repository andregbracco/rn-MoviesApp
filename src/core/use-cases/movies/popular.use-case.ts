import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import type {MovieDBResponse} from '../../../infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entities';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBResponse>('/popular', {
      params: {
        page : options?.page ?? 1,
      }
    });

    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - Popular');
  }
};
