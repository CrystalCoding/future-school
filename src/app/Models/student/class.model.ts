import {Course} from './course.model';
import {Time} from './time.model';

export class Class {
  private uidPk: number;
  private course: Course;
  private classId: number;
  private roomNumber: string;
  private Timings: Time[];
  private duration; any;
  private startDate: Date;
  private endDate: Date;
}
