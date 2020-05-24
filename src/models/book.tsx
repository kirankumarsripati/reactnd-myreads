export interface IBook {
  id: string;
  title: string;
  authors: string[];
  shelf: string;
  imageLinks: {
    thumbnail: string;
    smallThumbnail: string;
  }
}