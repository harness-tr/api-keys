# api-keys

Simple Node.js API with API Key Management

## Overview

This project provides a minimal Express.js server for generating and validating API keys. It allows clients to request an API key and then use that key to access protected endpoints.

## Endpoints

### `POST /generate-key`

Generate a new API key.

**Request Body:**
```json
{
  "name": "Your Name",
  "email": "your@email.com"
}
```

**Response:**
```json
{
  "api_key": "generated-uuid-key"
}
```

### `GET /data`

Access protected data. Requires a valid API key in the request header.

**Headers:**
```
x-api-key: <your-api-key>
```

**Response:**
```json
{
  "message": "Hello, authenticated user!"
}
```

## Running Locally

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   node server.js
   ```
3. The server runs on port 3000 by default.

## Docker

Build and run with Docker:
```sh
docker build -t api-keys .
docker run -p 3000:3000 api-keys
```

## Notes

- API keys are stored in memory and will be lost when the server restarts.
- This project is for demonstration and should not be used in production as-is.
