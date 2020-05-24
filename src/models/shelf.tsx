export interface IShelf {
  id: string;
  name: string;
}

export const Shelves: IShelf[] = [
  { id: 'currentlyReading', name: 'Currently Reading' },
  { id: 'wantToRead', name: 'Want to Read' },
  { id: 'read', name: 'Read' }
]