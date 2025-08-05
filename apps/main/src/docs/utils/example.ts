export interface Book {
  isbn: number;
  title: string;
  author: string;
}

export const someBooks: Book[] = [
  {
    isbn: 9780679783268,
    title: "Pride and Prejudic",
    author: "Jane Austen",
  },
  {
    isbn: 9780743273565,
    title: "The Great Gatsby",
    author: "Francis Scott Fitzgerald",
  },
  {
    isbn: 9780684830490,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
  },
];
