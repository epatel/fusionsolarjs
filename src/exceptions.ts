export class FusionSolarError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'FusionSolarError';
    }
}

export class AuthenticationError extends FusionSolarError {
    constructor(message: string) {
        super(message);
        this.name = 'AuthenticationError';
    }
}

export class APIError extends FusionSolarError {
    constructor(message: string) {
        super(message);
        this.name = 'APIError';
    }
}

export class CaptchaError extends FusionSolarError {
    constructor(message: string) {
        super(message);
        this.name = 'CaptchaError';
    }
} 