# _Currency Exchange Calculator_

#### _Exercise in making API calls and using the JavaScript promise, September 11, 2020_

#### By _Forrest Reiland_

## Description 

_This application allows a user to input an integer dollar amount for real time currency conversion. A drop down menu allows them to choose from six international currencies to convert their input dollar amount to. The application makes an API call to Exchange Rate API to access live currency conversion rates. The conversion is returned to the user on the index page._

_To generate your unique API key visit https://app.exchangerate-api.com/. Fill out the required information to generate your API key. Your API key should be stored within the main file directory in a file named ".env". A webpack plugin, dotenv is required to inject the api variable into the directory scripts. The API should be stored in the variable "API_KEY". Furthermore, the .env file should not be made public or shared to Github._

## Specifications

* #### **Spec**:  The program takes in the a dollar amount and returns an integer of the input value
  * #### **Input**: "7"
  * #### **Output**: 7

* #### **Spec**:  The program takes in a currency code from a drop down menu.
  * #### **Input**: EUR
  * #### **Output**: EUR

* #### **Spec**:  The program calculates age in Venus years.
  * #### **Input**: 25 years
  * #### **Output**: 40.32 years

* #### **Spec**:  The program calculates age in Mars years.
  * #### **Input**: 25 years
  * #### **Output**: 13.29 years

* #### **Spec**:  The program calculates age in Jupiter years.
  * #### **Input**: 25 years
  * #### **Output**: 2.11 years

* #### **Spec**:  The program calculates life expectancy in Earth years based on demographic data compiled by the CDC.
  * #### **Input**: 'hispanic'
  * #### **Output**: 82 years

* #### **Spec**:  A method calculates how many years a user has left to live based on life expectancy.
  * #### **Input**: 25, 'hispanic'
  * #### **Output**: 57 years.

* #### **Spec**:  A function returns the years that a user has exceeded their life expectancy.
  * #### **Input**: 89, 'hispanic'
  * #### **Output**: 7.

## Setup / Installation Instructions

* _Clone this repository_
* _Open the file directory_
* _Drag the index.html file into the browswer of your choice._

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
* Jest
* Babel 

## License 

Copyright (c) 2020 Forrest Reiland

This software is licensed under the MIT license.