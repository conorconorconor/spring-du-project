import { ConsultantComment } from './comment';
import { User } from 'src/user/user';

export class Consultant {
  _id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  title: string;
  comments: ConsultantComment[];
  teamManager: User;
}

