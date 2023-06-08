export interface INowPlaying {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
}

export interface ICardProps {
  movie: INowPlaying;
}
