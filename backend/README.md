# VectorShift Backend (Node.js)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will run on `http://localhost:8000`

## Development

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### GET /
Health check endpoint.

**Response:**
```json
{
  "Ping": "Pong"
}
```

### POST /pipelines/parse
Analyzes a pipeline to calculate node count, edge count, and verify if it forms a directed acyclic graph (DAG).

**Request Body:**
```json
{
  "nodes": [
    { "id": "node1", ... },
    { "id": "node2", ... }
  ],
  "edges": [
    { "source": "node1", "target": "node2" },
    ...
  ]
}
```

**Response:**
```json
{
  "num_nodes": 2,
  "num_edges": 1,
  "is_dag": true
}
```

## Implementation Details

- **DAG Detection**: Uses Kahn's algorithm (topological sort) to verify if the graph is acyclic
- **CORS**: Enabled to allow requests from the frontend
- **Error Handling**: Returns appropriate HTTP status codes and error messages
