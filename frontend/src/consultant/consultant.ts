import { ConsultantComment } from './comment';

export class Consultant {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  title: string;
  comments: ConsultantComment[];
}

