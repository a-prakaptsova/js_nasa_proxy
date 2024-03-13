# Node - Proxy Server

This is a training project to learn Node.js - [NASA API](https://api.nasa.gov/) proxy server

## Run

Command for runnimg application:

```sh
node ./src/index.js
```

## API Reference

#### Get meteors

```http
  GET /meteors
```

| Parameter | Type     |Description                |
| :-------- | :------- | :------------------------- |
| `start_date` | `YYYY-MM-DD` | Default value is last Monday. If `end_date` is set default value is `end_date` - 1 week. |
| `end_date` | `YYYY-MM-DD` | Default value is last Friday. If `start_date` is set default value is `start_date` + 1 week. |
| `count` | boolean |If set, only the number of asteroids seen will be returned. |
| `were_dangerous_asteroid` | boolean | If set, a boolean value will be added to the response indicating whether there were hazardous asteroids during that period. |

#### Response example

```json
{
  "were_dangerous_asteroid": true,
  "asteroids": [
    {
      "id": "2211871",
      "name": "211871 (2004 HO)",
      "diameter_in_meters": {
        "estimated_diameter_min": 447.2547654325,
        "estimated_diameter_max": 1000.0920587679
      },
      "is_potentially_hazardous_asteroid": false,
      "close_approach_data": [
        {
          "close_approach_date_full": "2024-Oct-16 16:14",
          "relative_velocity": "24.063036892"
        }
      ]
    },
    {
      "id": "3092375",
      "name": "(2001 TB2)",
      "diameter_in_meters": {
        "estimated_diameter_min": 133.2155666981,
        "estimated_diameter_max": 297.8790627982
      },
      "is_potentially_hazardous_asteroid": false,
      "close_approach_data": [
        {
          "close_approach_date_full": "2024-Oct-16 12:04",
          "relative_velocity": "14.8505794164"
        }
      ]
    }
  ]
}
```