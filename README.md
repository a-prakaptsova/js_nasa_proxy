# Node - Proxy Server

This is a training project to learn Node.js - [NASA API](https://api.nasa.gov/) proxy server

## Run

Command for build application:

```sh
npm run build
```

Command for run application:

```sh
npm run start
```

Command for run application in developper mode:

```sh
npm run dev
```

Command for run Eslint:

```sh
npm npm run eslint
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
| `were_dangerous_asteroids` | boolean | If set, a boolean value will be added to the response indicating whether there were hazardous asteroids during that period. |

#### Response example

```html
<html>
    <head>
        <title>Asteroids</title>
    </head>
    <body>
        <h2>Your search found the following:</h2>
        <p>Were dangerous asteroids found: true</p>
        <h3>Asteroids:</h3>
        <ul>
            <li>
                <div>Asteroid Id: 3511111</div>
                <div>Asteroid Name: (2010 EX11)</div>
                <div>Diameter in meters: from 40.2304579834 to 89.9580388169</div>
                <div>Is potentially hazardous asteroid: false</div>
                <div>Close approach date: 
   2024-Mar-14 17:47, with relative velocity 7.8690676581 km/s;   
</div>
            </li>
        </ul>
    </body>
</html>
```

#### Post user data

```http
  POST /photo
```

#### Request body example

```json
{
    "user_id": 12345,
    "user_name": "Name",
    "api_key": "some_valid_nasa_api_key"
}
```

#### Response example
The most recent image from the rover
