
# Job Finder App For Fetching Data from Third-Party API

This project provides a RESTful API for fetching data from a third-party API. It acts as a proxy server, allowing clients to access data from the third-party API securely.

## Installation

### Prerequisites
Docker install on your machine.

### Running with Docker
1. Clone the repository:

```bash
git clone https://github.com/Kyaw-Bo-Bo-Aung/job-finder-backend.git
```

2. Navigate to the project directory:
```bash
cd job-finder-backend
```  

3. Build the Docker image:
```bash
docker build -t your-backend-image .
``` 

4. Run the Docker container:
```bash
docker run -d -p 3001:3001 --name your-backend-container your-backend-image
```

5. Access the API at http://localhost:3001/api/v1/jobs.


## Usage

#### Get all jobs

```http
  GET /api/v1/jobs
```

| Query String | Type       | Description                |
| :--------    | :-------   | :------------------------- |
| `page`       | `int`      | **Required** (default 0)   |
| `category`   | `array`    | Optional                   |
| `level`      | `array`    | Optional                   |
| `location`   | `string`   | Optional                   |
| `company`    | `string`   | Optional                   |



## Configuration

- Copy .env.example and create .env file in the project root folder
```
cp .env.example .env
```

- ### Third-Party API_URL AND API_KEY ### 
  1. Update the API URL in the .env file.
  2. (Optional) For API_KEY: register your app at [The Muse API](https://www.themuse.com/developers/api/v2)
  3. Update the PORT that your server to run at. (Default port is 3000)


## Tech Stack

Node, Express