export interface IMovieDetail {
  Id: string
  Title: string
  CoverImage: string
  TitleImage: string
  Date: string
  ReleaseYear: string
  MpaRating: string
  Category: string
  Duration: string
  Description: string
  VideoUrl: string
}

export interface IApiData {
  Featured: IMovieDetail
  TendingNow: IMovieDetail[]
}
