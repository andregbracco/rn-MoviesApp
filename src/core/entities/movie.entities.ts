export interface Movie {
  backdrop: string;
  description: string;
  id: number;
  poster: string;
  rating: number;
  releaseDate: Date;
  title: string;
}
export interface FullMovie extends Movie {
  budget: number;
  duration: number;
  genres: string[];
  originalTitle: string;
  productionCompanies: string[];
}
