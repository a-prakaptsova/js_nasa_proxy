const mapAsteroidsData = (asteroidsAllData) => {
    return Object.values(asteroidsAllData.near_earth_objects)
        .flatMap(date => date
            .map(asteroid => mapAsteroidData(asteroid)));
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
    return approachData.map(item => ({
        close_approach_date_full: item.close_approach_date_full,
        relative_velocity: item.relative_velocity.kilometers_per_second
    }))
}

module.exports = mapAsteroidsData;