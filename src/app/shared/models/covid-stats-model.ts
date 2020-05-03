export interface CovidStats {
    statewise: StateWiseStats[];
}

export interface Stats {
    confirmed: number;
    active: number;
    recovered: number;
}

export interface StateWiseStats extends Stats {
    deaths: number;
    state: string;
}

export interface DistrictStats extends Stats {
    district: string;
    deceased: number;
}
