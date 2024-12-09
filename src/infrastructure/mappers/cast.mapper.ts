import {Cast} from '../../core/entities/cast.entities';
import type {MovieDBCast} from '../interfaces/movie-db-responses';

export class CastMapper {
  static fromMovieDBRCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? 'No character',
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : 'https://i.sstatic.net/l60Hf.png',
    };
  }
}
