
export interface Device {
    _id: string;
    name: string;
    type: string;
    model: string;
    description: string;
    location: Location[];
    status: string;
}
