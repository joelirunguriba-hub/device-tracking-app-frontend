
import { User } from './user';

export interface UserResponse {
    message: string;
    User: User;
    LatestLocation: Location[];
}
