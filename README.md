# Pipeline Builder

A React-based drag-and-drop pipeline builder with Node.js backend for creating and validating data processing pipelines.

## Features

- **Drag-and-drop interface** - Create nodes and connect them visually
- **9 node types** - Input, Output, LLM, Text, Filter, Transform, Splitter, Aggregator, Validator
- **DAG validation** - Automatically validates pipeline structure using Kahn's algorithm
- **Real-time feedback** - Instant visual feedback and error detection
- **Modern UI** - Dark theme with Tailwind CSS and smooth animations

## Tech Stack

### Frontend
- **React 18.2.0** - UI framework
- **React Flow 11.8.3** - Node-based UI library
- **Zustand 4.4.0** - State management
- **Tailwind CSS 3** - Styling
- **PostCSS & Autoprefixer** - CSS processing

### Backend
- **Node.js** - Runtime
- **Express 4.18.2** - Web framework
- **CORS** - Cross-origin resource sharing

## Project Structure

```
pipeline-builder/
├── frontend/
│   ├── src/
│   │   ├── nodes/          (9 node type components)
│   │   ├── App.js          (Main component)
│   │   ├── ui.js           (React Flow canvas)
│   │   ├── toolbar.js      (Node buttons)
│   │   ├── submit.js       (Pipeline submission)
│   │   ├── store.js        (Zustand state)
│   │   └── index.css       (Tailwind directives)
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── server.js           (Express server)
│   └── package.json
└── README.md
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
REACT_APP_API_URL=http://localhost:8000 npm start
```

### Backend
```bash
cd backend
npm install
npm start
```

## API Endpoints

- **GET /** - Health check (`{"Ping":"Pong"}`)
- **POST /pipelines/parse** - Validate pipeline (returns `num_nodes`, `num_edges`, `is_dag`)

## Deployment

- **Frontend:** Vercel (set `REACT_APP_API_URL` environment variable)
- **Backend:** Render (uses `PORT` environment variable)

---

Made with ❤️ by Pratik Raj
