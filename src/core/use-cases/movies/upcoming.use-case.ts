import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import type {MovieDBResponse} from '../../../infrastructure/interfaces/movie-db-responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entities';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBResponse>('/upcoming');

    return upcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - Upcoming');
  }
};
