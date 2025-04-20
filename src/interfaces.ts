export interface Plant {
    id: string;
    name: string;
    capacity: number;
    status: string;
    latitude: number;
    longitude: number;
}

export interface Device {
    id: string;
    name: string;
    type: string;
    status: string;
    plantId: string;
}

export interface KPI {
    timestamp: Date;
    value: number;
    unit: string;
}

export interface LoginResponse {
    sessionId: string;
    userId: string;
    userName: string;
}

export interface APIResponse<T> {
    success: boolean;
    failCode: number;
    message: string;
    data: T;
} 