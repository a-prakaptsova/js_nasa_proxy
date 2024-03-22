import type { Asteroid, AsteroidNasaData, AsteroidResponse } from './types/asteroid';

export const mapAsteroidsData = (asteroidsAllData: AsteroidNasaData, countOnly: boolean, dangerous: boolean): AsteroidResponse => {
    const asteroids: Asteroid[] = Object.values(asteroidsAllData.near_earth_objects).flat();
    const mappedData: AsteroidResponse = {
        count: countOnly ? asteroidsAllData.element_count : undefined,
        were_dangerous_asteroids: dangerous ? isDangerousAsteroidsFound(asteroids) : undefined,
        asteroids: countOnly ? undefined : asteroids
    };
    return mappedData;
};

const isDangerousAsteroidsFound = (asteroids: Asteroid[]): boolean => {
    return asteroids.some(asteroid => asteroid.is_potentially_hazardous_asteroid);
};
