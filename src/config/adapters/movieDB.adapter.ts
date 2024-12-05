import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es',
  },
  headers: {
    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDgzZjQ0YWQ2YjAwNTBkNjhkNmU0YTBlN2U5ZjlkZiIsIm5iZiI6MTczMzI1MDQwOS45ODgsInN1YiI6IjY3NGY0ZDY5YjRlYjE3Nzk2MzQxNjc0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N2aBq-rURipQlqWTq5sRmXniDFBA_ukokxiGyz9-y8Y',
    accept: 'application/json',
  },
});
