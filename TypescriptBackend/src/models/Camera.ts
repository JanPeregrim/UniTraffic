export interface Camera {
    id?: string;
    place: string;
    type: string;
    rooms: number[] | null;
}

export interface CameraRecord {
    id?: string;
    rooms: number[];
    number_of_people:  number;
}