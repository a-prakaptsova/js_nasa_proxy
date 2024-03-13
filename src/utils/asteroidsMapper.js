const mapAsteroidsData = (asteroidsAllData, countOnly, dangerous) => {
    const asteroids = Object.values(asteroidsAllData.near_earth_objects).flat();
    let mappedData = {};
    if (dangerous) {
        mappedData.were_dangerous_asteroid = isDangerousAsteroidsFound(asteroids);
    }
    if (countOnly) {
        mappedData.count = asteroidsAllData.element_count;
        return mappedData;
    }
    mappedData.asteroids = asteroids.map(mapAsteroidData);
    return mappedData;
}

const isDangerousAsteroidsFound = (asteroids) => {
    return asteroids.some(asteroid => asteroid.is_potentially_hazardous_asteroid);
}

const mapAsteroidData = (asteroidAllData) => {
    return {
        id: asteroidAllData.id,
        name: asteroidAllData.name,
        diameter_in_meters: asteroidAllData.estimated_diameter.meters,
        is_potentially_hazardous_asteroid: asteroidAllData.is_potentially_hazardous_asteroid,
        close_approach_data: mapCloseApproachData(asteroidAllData.close_approach_data)
    }
}

const mapCloseApproachData = (approachData) => {
    return approachData.map(data => ({
        close_approach_date_full: data.close_approach_date_full,
        relative_velocity: data.relative_velocity.kilometers_per_second
    }))
}

module.exports = mapAsteroidsData;