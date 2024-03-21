export interface AsteroidResponse {
    count?: string
    were_dangerous_asteroids?: boolean
    asteroids?: Asteroid[]
}

export interface AsteroidNasaData {
    element_count: string
    near_earth_objects: Asteroid[]
}

export interface AsteroidQueryParams {
    start_date?: string
    end_date?: string
    count?: string
    were_dangerous_asteroids?: string
}

interface Asteroid {
    id: string
    name: string
    estimated_diameter: DiameterInMeters
    is_potentially_hazardous_asteroid: string
    close_approach_data: CloseApproachData[]
}

interface DiameterInMeters {
    meters: {
        estimated_diameter_min: string
        estimated_diameter_max: string
    }
}

export interface CloseApproachData {
    close_approach_date_full: string
    relative_velocity: {
        kilometers_per_second: string
    }
}

export interface AsteroidPeriod {
    startDate: string
    endDate?: string
}
