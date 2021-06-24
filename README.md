# Multistep Order
This app is live at [Multistep-Order](https://multistep-order.netlify.app/)

## Getting Started

This repo contains a simple react app for demonstrating a multistep order form.

## Scenario

The subscription order process has 3 steps:

1.  Select subscription parameters:
    Duration: 3/6/12 Months (default: 12)
    Amount of gigabytes in a cloud: 5/10/50 (default: 5)
    Upfront payment: yes/no (default: no)

1.  Payment data:
    Credit card number
    Credit card expiration date
    Credit card security code

1.  Confirmation
    Summary of the selected subscription including total price and price per GB.
    Email of the user
    Terms and conditions agreement checkbox
    Confirmation button

Requirements

1. If the user selects upfront payment, the total price should be reduced by 10%
1. Current selected subscription and final price should be shown on every step.
1. Subscription prices are retrieved from [api endpoint](https://cloud-storage-prices-moberries.herokuapp.com/prices)
1. All parameters are required
1. It should be possible to change steps by clicking on the Next or Back button.
1. Every step needs to be completed in order to see the next one.
1. Confirm button click handler sends data to the API [endpoint](https://httpbin.org/post)


## Required Technologies
This application makes use of the following libraries:
- [React (CRA)](https://reactjs.org/) for the frontend/SPA
- [React hook form](https://react-hook-form.com/get-started) for form management
- [Typescript](https://www.typescriptlang.org/) for Javascript type safety
- [Reactstrap](https://reactstrap.github.io/) UI Library
- [Styled components](https://styled-components.com/) ES6 component styling for css
- [Redux](https://redux.js.org/) state management

## Installation

### 1. Installation Steps

Provision the necessary services needed for running the application:

1. Clone this repository to your PC and run `yarn` in the root folder to install dependencies
1. Start the app with `yarn start`

## References

- [Atomic Design | Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
