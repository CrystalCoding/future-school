import {Book} from './book.model';

export class Course {
  private uidPk: number;
  private name: string;
  private description: string;
  private code: string;
  private books: Book[];
}
