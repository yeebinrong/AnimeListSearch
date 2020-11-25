export enum Genre {
    anime, manga
}

export class SearchForm {
    id?: number;
    q: string;
    genre: Genre;
}