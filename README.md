# _Currency Exchange Calculator_

#### _Exercise in making API calls and using the JavaScript promise, September 11, 2020_

#### By _Forrest Reiland_

## Description 

_This application allows a user to input an integer dollar amount for real time currency conversion. A drop down menu allows them to choose from six international currencies to convert their input dollar amount to. The application makes an API call to Exchange Rate API to access live currency conversion rates. The conversion is returned to the user on the index page._

_To generate your unique API key visit https://app.exchangerate-api.com/sign-up. Fill out the required information to generate your API key. Your API key should be stored within the main file directory in a file named ".env". A webpack plugin, dotenv is required to inject the api variable into the directory scripts. The API should be stored in the variable "API_KEY". Furthermore, the .env file should not be made public or shared to Github._

## Specifications

* #### **Spec**:  The program takes in the a dollar amount and returns an integer of the input value
  * #### **Input**: "10"
  * #### **Output**: 10

* #### **Spec**:  The program takes in a currency code from a drop down menu.
  * #### **Input**: EUR
  * #### **Output**: EUR

* #### **Spec**:  The program multiplies dollar value by the exchange rate for currency code.
  * #### **Input**: 10, EUR:0.84
  * #### **Output**:  8.4


## Setup/Installation Requirements

* _clone this repository_
* _navigate to the root dir of this project_
* _in terminal do command npm install_
* _generate an api key at https://app.exchangerate-api.com/_
* _create a .env file in the root dir_
* _in .env file add API_KEY=[your api key]_
* _in terminal do command npm run start_


## Known Bugs

_No known bugs for this program_

## Support and Contact Information

_If you encounter any problems with this software, or would like to contribute, please contact me at freiland@email.arizona.edu_

## Technologies Used

* HTML
* CSS and Bootstrap
* JavaScript and JQuery
* Markdown 
* node package manager
* Babel 
* CurrencyExchange API

## License 

Copyright (c) 2020 Forrest Reiland

This software is licensed under the MIT license.