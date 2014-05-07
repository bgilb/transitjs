# transitjs
Nodejs server for transportation data. Currently used as an api to get data to the iPhone app [PennTransit](https://itunes.apple.com/hk/app/penntransit/id737534948?mt=8).

# install
To install dependencies, from the root directory run

`npm install`

Then to start the server

`npm start`

# api

## GET /regions
Respond with the current regions in service.

### example

```bash
curl http://localhost:3000/regions
```

```json
[
    {
        "ID": 6,
        "Name": "Downtown DASH"
    },
    {
        "ID": 7,
        "Name": "Community DASH"
    },
    {
        "ID": 8,
        "Name": "Commuter Express"
    }
]
```

## GET /regions/{regionId}
Respond with the specified region in service.

### example

```bash
curl http://localhost:3000/regions/7
```

```json
{
    "ID": 7,
    "Name": "Community DASH"
}
```

## GET /regions/{regionId}/routes
Respond with the available routes in service for the region.

### example

```bash
curl http://localhost:3000/regions/7/routes
```

```json
[
    {
        "ArrivalsEnabled": true,
        "ArrivalsShowVehicleNames": true,
        "BackwardDirectionName": "Backwards",
        "Color": "#33460C",
        "CustomerID": 30,
        "DirectionStops": null,
        "DisplayName": "BC Beachwood Canyon",
        "ForwardDirectionName": "Forwards",
        "ID": 890,
        "IsHeadway": false,
        "Name": "Beachwood Canyon",
        "NumberOfVehicles": 0,
        "Patterns": null,
        "Points": null,
        "RegionIDs": [
            7
        ],
        "ShortName": "BC",
        "ShowLine": true,
        "TextColor": "#FFFFFF"
    },
    {
        "ArrivalsEnabled": true,
        "ArrivalsShowVehicleNames": false,
        "BackwardDirectionName": "Backwards",
        "Color": "#843C10",
        "CustomerID": 44,
        "DirectionStops": null,
        "DisplayName": "Boyle Hts Boyle Heights",
        "ForwardDirectionName": "Forwards",
        "ID": 1056,
        "IsHeadway": false,
        "Name": "Boyle Heights",
        "NumberOfVehicles": 0,
        "Patterns": null,
        "Points": null,
        "RegionIDs": [
            7
        ],
        "ShortName": "Boyle Hts",
        "ShowLine": true,
        "TextColor": "#FFFFFF"
    }
]
```

## GET /regions/{regionId}/routes/{routeId}
Respond with the specific route.

### example

```bash
curl http://localhost:3000/regions/7/routes/1056
```

```json
{
    "ArrivalsEnabled": true,
    "ArrivalsShowVehicleNames": false,
    "BackwardDirectionName": "Backwards",
    "Color": "#843C10",
    "CustomerID": 44,
    "DirectionStops": null,
    "DisplayName": "Boyle Hts Boyle Heights",
    "ForwardDirectionName": "Forwards",
    "ID": 1056,
    "IsHeadway": false,
    "Name": "Boyle Heights",
    "NumberOfVehicles": 0,
    "Patterns": null,
    "Points": null,
    "RegionIDs": [
        7
    ],
    "ShortName": "Boyle Hts",
    "ShowLine": true,
    "TextColor": "#FFFFFF"
}
```

## GET /regions/{regionId}/routes/{routeId}/waypoints
List all the waypoints for the route.

### example

```bash
curl http://localhost:3000/regions/7/routes/1056/waypoints
```

```json
[
    {
        "Latitude": 34.0603859110969,
        "Longitude": -118.210055530071
    },
    {
        "Latitude": 34.0601414830388,
        "Longitude": -118.210205733776
    },
    {
        "Latitude": 34.0599748271404,
        "Longitude": -118.210296928883
    },
    {
        "Latitude": 34.0597281758095,
        "Longitude": -118.210347890854
    },
    {
        "Latitude": 34.0595015226022,
        "Longitude": -118.210267424583
    }
]
```

## GET /regions/{regionId}/routes/{routeId}/direction/{directionId}/stops
List all the bus stops for the route. Direction can be `0` or `1`, i.e. forward or back.

### example

```bash
curl http://localhost:3000/regions/7/routes/1056/direction/0/stops
```

```json
[
    {
        "ID": 354426,
        "Image": "stop_sign_medium.gif",
        "Latitude": 34.0603859110969,
        "Longitude": -118.210055530071,
        "Name": "LA+USC Medical Center (Southbound)",
        "RtpiNumber": 4328,
        "ShowLabel": false,
        "ShowStopRtpiNumberLabel": false,
        "ShowVehicleName": false
    },
    {
        "ID": 354441,
        "Image": "stop_sign_medium.gif",
        "Latitude": 34.0575949451598,
        "Longitude": -118.209848999977,
        "Name": "Marengo St & State St (Eastbound)",
        "RtpiNumber": 4329,
        "ShowLabel": false,
        "ShowStopRtpiNumberLabel": false,
        "ShowVehicleName": false
    }
]
```

## GET /regions/{regionId}/routes/{routeId}/vehicles
List the current operating vehicles in the given route.

### example

```bash
curl http://localhost:3000/regions/7/routes/1056/vehicles
```

```json
[
    {
        "APCPercentage": 5,
        "Coordinate": {
            "Latitude": 34.054463,
            "Longitude": -118.203007
        },
        "DoorStatus": 0,
        "HasAPC": true,
        "Heading": "S",
        "ID": 840,
        "IconPrefix": "",
        "Latitude": 34.054463,
        "Longitude": -118.203007,
        "Name": "2047",
        "PatternId": 1056,
        "RouteId": 1056,
        "Speed": 12,
        "Updated": "10:06:30A",
        "UpdatedAgo": "6s ago"
    },
    {
        "APCPercentage": 17,
        "Coordinate": {
            "Latitude": 34.029317,
            "Longitude": -118.187422
        },
        "DoorStatus": 0,
        "HasAPC": true,
        "Heading": "S",
        "ID": 842,
        "IconPrefix": "",
        "Latitude": 34.029317,
        "Longitude": -118.187422,
        "Name": "2049",
        "PatternId": 1056,
        "RouteId": 1056,
        "Speed": 9,
        "Updated": "10:06:31A",
        "UpdatedAgo": "5s ago"
    }
]
```