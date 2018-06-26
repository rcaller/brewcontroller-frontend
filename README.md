# Brew Controller

This project is a HERMS controller designed for use with a Raspberry Pi.

## Requirements

* Raspberry Pi 3+
* 1024*600 touch screen (connected and configured)
* ds18b20 sensors for HERMS tank, mash and flow (close to entry to mash tun)
* HERMS heating system controlled by a GPIO pin
* Chromium browser in kiosk mode pointing to http://localhost

## Installation

On the Raspberry Pi enable the apt repo

deb http://repo.tertiarybrewery.co.uk stretch main

Then run the following commands, you will need to accept a few things as I haven't got the repo signed properly yet.

sudo apt-get update

sudo apt-get install brewcontrol

sudo init 6

Once the system has restarted you should see the interface.

To set up a recipe you need to use a browser on a separate computer.  Navigate to http://<raspberry pi IP address> and drag and drop a beerxml file into the box.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.
