export interface User {
    _id: string;
    name: string;
    email: string;
    tags: string[];
    address: UserAddress;
    createdAt: Date;
    role: string;
}

export interface UserAddress {
    city: string;
    country: string;
}

export type RoleType = 'admin' | 'user';
