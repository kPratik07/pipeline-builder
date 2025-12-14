const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

function isDAG(nodes, edges) {
  if (nodes.length === 0) return true;

  // Build adjacency list
  const adjList = {};
  const inDegree = {};

  nodes.forEach((node) => {
    adjList[node.id] = [];
    inDegree[node.id] = 0;
  });

  edges.forEach((edge) => {
    if (adjList[edge.source] && adjList[edge.target]) {
      adjList[edge.source].push(edge.target);
      inDegree[edge.target]++;
    }
  });

  // Kahn's algorithm for topological sort
  const queue = [];
  const visited = new Set();

  // Start with nodes that have no incoming edges
  Object.keys(inDegree).forEach((nodeId) => {
    if (inDegree[nodeId] === 0) {
      queue.push(nodeId);
    }
  });

  let processedCount = 0;

  while (queue.length > 0) {
    const nodeId = queue.shift();
    visited.add(nodeId);
    processedCount++;

    adjList[nodeId].forEach((neighbor) => {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    });
  }

  // If all nodes were processed, it's a DAG
  return processedCount === nodes.length;
}

app.get('/', (req, res) => {
  res.json({ Ping: 'Pong' });
});

app.post('/pipelines/parse', (req, res) => {
  try {
    const { nodes, edges } = req.body;

    if (!nodes || !edges) {
      return res.status(400).json({
        error: 'Missing nodes or edges in request body',
      });
    }

    const numNodes = nodes.length;
    const numEdges = edges.length;
    const isDag = isDAG(nodes, edges);

    res.json({
      num_nodes: numNodes,
      num_edges: numEdges,
      is_dag: isDag,
    });
  } catch (error) {
    console.error('Error parsing pipeline:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
