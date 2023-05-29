<h1 align="center">🚂API Trains Documentation🚂</h1>

- [🔧SERVER🔧](https://trains-node-js.herokuapp.com/)

<p>This documentation provides information on how to make requests to the API for retrieving available trains.</p>

<h2>Request</h2>
The API endpoint for retrieving available trains is /trains. The following query parameters can be used to filter the results:

- **departure**: Filter the trains by the departure station.
- **arrival**: Filter the trains by the arrival station.
- **date**: Filter the trains by the departure date. It can have the following values:
    - "next7days": Retrieve trains for the next 7 days starting from the current date.
    - Specific date in the format "YYYY-MM-DD": Retrieve trains for a specific date.

To make a request to the API, use the following format:

```bash 
GET /trains?departure={departure}&arrival={arrival}&date={date}
```
<p>Replace {departure}, {arrival}, and {date} with the desired values for filtering the trains.</p>

<h2>Response</h2>
The API will respond with a JSON object containing an array of train objects that match the provided filters. Each train object has the following properties:

- **id**: Unique identifier of the train.
- **departure_station**: Name of the departure station.
- **arrival_station**: Name of the arrival station.
- **departure_time**: Departure time of the train.

<p>Example response:</p>

```bash [
  {
    "id": 1,
    "departure_station": "Station A",
    "arrival_station": "Station B",
    "departure_time": "2023-05-30T10:00:00Z"
  },
  {
    "id": 2,
    "departure_station": "Station C",
    "arrival_station": "Station D",
    "departure_time": "2023-05-30T12:00:00Z"
  },
  ...
]
```
If there are no available trains that match the provided filters, the API will respond with an empty array [].

In case of any server error, the API will respond with a 500 status code and an error message in the following format:

```bash 
{
  "error": "Server error"
}
```
Examples
Example 1: Retrieve all trains

```bash 
GET /trains
```
This request will retrieve all available trains without applying any filters.

Example 2: Filter trains by departure and arrival stations

```bash 
GET /trains?departure=StationA&arrival=StationB
```
This request will retrieve trains that depart from "Station A" and arrive at "Station B".

Example 3: Filter trains by departure date for the next 7 days

```bash
GET /trains?date=next7days
```
This request will retrieve trains departing in the next 7 days starting from the current date.

Example 4: Filter trains by specific date

```bash
GET /trains?date=2023-06-01
```
This request will retrieve trains departing on the specific date "2023-06-01".

Feel free to adjust the query parameters according to your needs to retrieve the desired train information from the API.
