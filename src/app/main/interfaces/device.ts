
import {Location} from './location'

export interface DeviceInfo {
    _id: string;
    name: string;
    type: string;
    model: string;
    description: string;
    location?: Location[]; 
    status?: string;
    userId?: string;
    visitorId?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }