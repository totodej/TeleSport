import { Participation } from "../models/Participation"

export interface Country {
    id: number, 
    country : string,
    participations: Participation[],
}




