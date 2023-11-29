import { Category } from "./Category";
import { Format } from "./Format";
import { Status } from "./Status";
import { Track } from "./Track";

export interface vinyl {
    vinylId: number;
    artist: string;
    title: string;
    catalogNr: string;
    label: string;
    country: string;
    category: Category;
    released: number;
    format: Format;
    bestSeller: boolean;
    trackList: Track[];
    price: number;
    status: Status;
}
