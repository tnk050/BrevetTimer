# Brevet Timer

A web app that calculates the finish time of brevet.

## URL

https://tnk050.github.io/brevet-timer/

## USAGE

### Caluclate

Set the distance, departure time and finish time.
The result is shown bellow the form.

### Settings

- Lock the distance buttons
  Disable the distance toggle button group.

- Lock the departure form
  Disable the departure date and time picker.

### Create and use QR code

Create a QR code retaining the settings and departure date and time.
Read the QR code when you finsh the ride and the result will be displayed.

## OTHERS

### URL parameter

- dDate
  Departure date(enabled only 1000 or more km)
  Example:2022-06-11

- dTime
  Departure time
  Example:07:00

- depLock
  Check "Lock the departure form"
  Example:true

- dist
  Distance
  Example:300

- distLock
  Check "Lock the distance buttons"
  Example:true

## LICENSE

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
