declare namespace NodeJS {
    interface ProcessEnv {
        API_KEY: string
        NASA_BASE_URL: string
        GET_ASTEROIDS_URL: string
        GET_ROVER_PHOTO_URL: string
        GET_ROVER_MANIFEST_URL: string
        DATE_FORMAT: string
        JOI_DATE_FORMAT: string
        PORT: string
        SENTRY_DSN: string
    }
}
