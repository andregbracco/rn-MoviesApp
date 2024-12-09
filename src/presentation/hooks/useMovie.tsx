import {useEffect, useState} from 'react';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../core/entities/movie.entities';
import {Cast} from '../../core/entities/cast.entities';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  useEffect(() => {
    loadMovie();
  }, []);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getMovieByIdUseCase(
      movieDBFetcher,
      movieId,
    );

    const castPromise = UseCases.getMovieCastUseCase(movieDBFetcher, movieId);

    const [fullMovie, cast] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false);
  };

  return {movie, cast, isLoading};
};
