import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
    private localStorage: Storage = window.localStorage;

    constructor() {
    }

    public getItem(key: string): string | null {
        return this.localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        this.localStorage.setItem(key, value);
    }

    removeItem(key: string): void {
        this.localStorage.removeItem(key);
    }

    clear(): void {
        this.localStorage.clear();
    }
}