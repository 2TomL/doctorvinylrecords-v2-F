export interface Track {
    trackId: number;
    title: string;
    duration: number; // or string, depending on your backend model
    videoLink: string;
}