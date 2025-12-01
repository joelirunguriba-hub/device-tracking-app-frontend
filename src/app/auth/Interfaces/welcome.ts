
import {User} from './user';

export interface Welcome {
    message:      string;
    user:         User;
    userLoggedIn: boolean;
}
