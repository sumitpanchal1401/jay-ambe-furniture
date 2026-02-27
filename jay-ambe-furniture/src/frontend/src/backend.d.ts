import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContactFormSubmission {
    name: string;
    message: string;
    timestamp: Time;
    phoneNumber: string;
}
export type Time = bigint;
export interface GalleryItem {
    id: bigint;
    title: string;
    blob: ExternalBlob;
    category: GalleryCategory;
}
export interface UserProfile {
    name: string;
}
export enum GalleryCategory {
    bedroom = "bedroom",
    sofa = "sofa",
    studyTable = "studyTable",
    modularKitchen = "modularKitchen",
    tvUnit = "tvUnit",
    woodenCeiling = "woodenCeiling",
    wardrobe = "wardrobe",
    woodenFlooring = "woodenFlooring",
    diningTable = "diningTable"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addGalleryItem(title: string, category: GalleryCategory, blob: ExternalBlob): Promise<bigint>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    deleteGalleryItem(id: bigint): Promise<void>;
    getAllContactFormSubmissions(): Promise<Array<ContactFormSubmission>>;
    getAllGalleryItems(): Promise<Array<GalleryItem>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getGalleryItemsByCategory(category: GalleryCategory): Promise<Array<GalleryItem>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, phoneNumber: string, message: string): Promise<void>;
}
