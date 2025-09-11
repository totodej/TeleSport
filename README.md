# OlympicGamesStarter

Interactive dashboard application for visualizing Olympic Games statistics. Built with Angular for Télésport to display medal counts, country participation data, and historical performance through interactive charts.

## Stack

- Framework: Angular 20.2.4
- Charts: primeNG
- Styling: SCSS with responsive design
- Data: Local JSON mock data

## Prerequisites

- Node.js (version 20 or higher)
- npm (comes with Node.js)

## Development

Follow these steps to set up and run the project in development mode.

Clone this repository :

```
git clone https://github.com/totodej/TeleSport.git
```

Before starting, make sure you have **Node.js** and **Angular CLI** installed on your machine. If Angular CLI is not installed, you can install it globally using:

```
npm install -g @angular/cli
```

Then, navigate to the project folder and install the required dependencies:

```
npm install
```

Once the dependencies are installed, launch the development server with:

```
ng serve
```

This will start a local development server. Open your browser and go to:

```
http://localhost:4200/
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Structure :

OlympicGamesStarter follows a structured architecture to ensure maintainability and scalability. The project is fully implemented, providing a clean and modular codebase ready for development.

 - `components/` Contains reusable UI components that can be shared across the application.
 - `pages/` Holds the main views, each corresponding to a route in the application.
 - `core/` Manages business logic and shared resources:
    - `services/` Handles data fetching and application logic.
    - `models/` Defines TypeScript interfaces and types to enforce strict typing.
