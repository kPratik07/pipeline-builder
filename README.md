# VectorShift Frontend Technical Assessment

## Project Overview
A React-based Pipeline Builder application with Node.js backend that allows users to create, visualize, and validate data processing pipelines using a drag-and-drop interface.

## Implementation Summary

### Part 1: Node Abstraction ✅
- Created reusable `createNode()` factory function in `baseNode.js`
- Implemented 9 node types: Input, Output, LLM, Text, Filter, Transform, Splitter, Aggregator, Validator
- Each node supports configurable handles, fields, icons, and styling
- Eliminates code duplication while maintaining flexibility

### Part 2: Styling with Tailwind CSS ✅
- Converted entire application to use Tailwind CSS v3
- Modern dark theme with gradient backgrounds
- Color-coded nodes for visual distinction
- Responsive button styling with hover effects
- Professional alert notifications
- Smooth animations and transitions

### Part 3: Text Node Logic ✅
- Dynamic height adjustment based on content (minimum 140px, +18px per line)
- Variable extraction from `{{variableName}}` patterns
- Automatic input handle creation for detected variables
- Real-time variable display in highlighted section

### Part 4: Backend Integration ✅
- Node.js/Express backend on port 8000
- `/pipelines/parse` POST endpoint
- DAG validation using Kahn's algorithm (topological sort)
- Returns: `{num_nodes, num_edges, is_dag}`
- CORS enabled for frontend communication

## Tech Stack

**Frontend:**
- React 18.2.0
- React Flow 11.8.3 (node-based UI)
- Zustand 4.4.0 (state management)
- Tailwind CSS 3 (styling)

**Backend:**
- Node.js
- Express 4.18.2
- CORS middleware

## Project Structure

```
VectorShift_Assignment/
├── frontend/
│   ├── src/
│   │   ├── nodes/
│   │   │   ├── baseNode.js (factory function)
│   │   │   ├── inputNode.js
│   │   │   ├── outputNode.js
│   │   │   ├── llmNode.js
│   │   │   ├── textNode.js
│   │   │   ├── filterNode.js
│   │   │   ├── transformNode.js
│   │   │   ├── splitterNode.js
│   │   │   ├── aggregatorNode.js
│   │   │   └── validatorNode.js
│   │   ├── App.js
│   │   ├── ui.js (React Flow canvas)
│   │   ├── toolbar.js (node buttons)
│   │   ├── submit.js (pipeline submission)
│   │   ├── store.js (Zustand state)
│   │   ├── draggableNode.js
│   │   ├── index.css (Tailwind directives)
│   │   └── index.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
├── backend/
│   ├── server.js (Express server)
│   ├── package.json
│   └── node_modules/
└── README.md
```

## How to Run

### Frontend
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`

### Backend
```bash
cd backend
npm install
npm start
```
Runs on `http://localhost:8000`

## Features

### Node Creation
- Drag node buttons from toolbar into canvas
- Nodes appear with proper styling and handles
- Each node type has specific configuration fields

### Node Connection
- Drag from green (source) handles to blue (target) handles
- Visual feedback with smooth connection lines
- Support for multiple connections

### Pipeline Submission
- Click "SUBMIT PIPELINE" button
- Backend validates pipeline structure
- Returns analysis: node count, edge count, DAG status
- Alert displays results

### Text Node Special Features
- Detects variables in format `{{variableName}}`
- Creates input handles for each variable
- Dynamic height based on content
- Variable list display

## Code Architecture

### State Management (Zustand)
- Centralized store for nodes and edges
- Actions: addNode, onNodesChange, onEdgesChange, onConnect
- Utility: getNodeID for unique node identification

### Component Design
- Functional components with React hooks
- Memoized components for performance
- Separation of concerns (UI, nodes, state)

### Styling Approach
- Tailwind CSS utility classes only
- No inline styles (except dynamic positioning)
- Consistent color scheme across components
- Responsive design patterns

## Validation Logic

### DAG Validation (Backend)
Uses Kahn's algorithm for topological sort:
1. Build adjacency list from edges
2. Calculate in-degree for each node
3. Process nodes with zero in-degree
4. If all nodes processed, graph is a DAG

## Testing

### Example Pipeline
1. Create Input node (name: "user_input", type: "Text")
2. Create Text node (content: "Hello {{user_input}}")
3. Create Output node (name: "result", type: "Text")
4. Connect: Input → Text → Output
5. Submit: Should return Nodes: 3, Edges: 2, Is DAG: Yes

## Performance Considerations
- Memoized node components prevent unnecessary re-renders
- Efficient state updates using Zustand
- React Flow optimized for large graphs
- Tailwind CSS with PurgeCSS for minimal bundle size

## Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Future Enhancements
- Node deletion functionality
- Edge deletion
- Node editing
- Pipeline save/load
- Multiple pipeline management
- Advanced validation rules
