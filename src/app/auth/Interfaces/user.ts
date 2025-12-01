

export interface User {
    firstName: string;
    lastName:  string;
    userName:  string;
    email:     string;
    password:  string;
    createdAt: Date;
    role:      string;
    isAdmin:   boolean;
    devices:   any[];
    _id:       string;
    __v:       number;
}
