# Pipeline Builder

A React-based drag-and-drop pipeline builder with Node.js backend for creating and validating data processing pipelines.

## Features

- **Drag-and-drop interface** - Create nodes and connect them visually
- **9 node types** - Input, Output, LLM, Text, Filter, Transform, Splitter, Aggregator, Validator
- **DAG validation** - Automatically validates pipeline structure using Kahn's algorithm
- **Real-time feedback** - Instant visual feedback and error detection
- **Modern UI** - Dark theme with Tailwind CSS and smooth animations

## Tech Stack

**Frontend:** React 18, React Flow, Zustand, Tailwind CSS  
**Backend:** Node.js, Express, CORS

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm start
```

### Backend
```bash
cd backend
npm install
npm start
```

## Deployment

- **Frontend:** Vercel (set `REACT_APP_API_URL` environment variable)
- **Backend:** Render (uses `PORT` environment variable)

---

Made with ❤️ by Pratik Raj
