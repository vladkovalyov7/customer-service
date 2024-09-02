# Customer Anonymization Service

This Node.js service anonymizes sensitive customer data in a MongoDB collection. It listens for new and updated customer documents, anonymizes specific fields, and saves the anonymized documents to a separate collection.

## Features

- **Data Anonymization**: Anonymizes `firstName`, `lastName`, `email`, `address.line1`, `address.line2`, and `postcode` fields.
- **Real-Time Updates**: Uses MongoDB change streams to monitor and process new and modified documents.
- **Scalable Architecture**: Built with Node.js, Express, and TypeScript.

## Prerequisites

- **Node.js** (v14.x or higher)
- **MongoDB** (locally or remotely accessible)

## Installation

1. **Clone the repository**:

   git clone https://github.com/vladkovalyov7/customer-service.git
   cd customer-service

2. **Install dependencies:
npm install

3. **Configure environment variables: Create a .env file in the root directory:
DB_URI=mongodb://localhost:8080/customer-service

## Usage
Start the service:
npm start
npm run dev

## Testing
To run tests:
npm test

## Project Structure

/src
|-- app.ts

|-- database.ts

|-- anonymizer.ts

|-- customerService.ts

|-- index.ts

|-- interfaces
    |-- anonymizer.ts
    |-- customerRepository.ts
|-- repositories
    |-- customerRepository.ts
