export interface IHomeData {
    id?: number;
    body?: string;
    datecreated?: string;
    photos?: Object;
    title?: string;
    userid?: number;
}


export interface IHomeDataProps {
    data: IHomeData[]
}