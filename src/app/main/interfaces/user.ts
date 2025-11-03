import { Device } from './device';

export interface User {
    _id:       string;
    firstName: string;
    lastName:  string;
    userName:  string;
    email:     string;
    password:  string;
    createdAt: Date;
    role:      string;
    isAdmin:   boolean;
    devices:   any[];
    pin:       string;
}
