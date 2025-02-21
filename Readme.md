# Sales Assistant API

A Node.js/Express API that processes sales data and generates AI-powered insights using OpenAI.

## Features

- Sales data validation using Joi schema
- Sales insights processing including:
  - Total sales per category
  - Best performing category
  - Overall revenue
  - Average sale amount
  - Sales volume
- AI-powered summary generation using OpenAI

## Installation

1. Clone the repository
2. Install dependencies:
```sh
npm install
```
3. Set up environment variables:
```sh
OPENAI_API_KEY=your_api_key_here
```

## Usage

4. Run the development server:
```sh
npm run dev
```
5. Build the project:
```sh
npm run build
```
6. Start the application:
```sh
npm start
```

## Docker

1. Build the Docker image:
```sh
docker build -t sales-assistant .
```
2. Run the container:
```sh
docker run -p 8000:8000 -e OPENAI_API_KEY=your_api_key_here sales-assistant
```


## Sample Sales Data

```json
[
  {
    "name": "string",
    "email": "string",
    "product": "string",
    "category": "string",
    "amount": "number",
    "date": "string",
    "state": "string"
  }
]
```

## Sample Insights Data

```json
{
  "insights": {
    "totalSalesPerCategory": {},
    "bestPerformingCategory": "string",
    "overallRevenue": "number",
    "averageSale": "number",
    "salesVolume": "number"
  },
  "summary": "AI-generated summary string"
}
```

