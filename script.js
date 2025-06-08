// Network SVG Setup
const svg = document.querySelector('.network-svg');

const nodes = [
  { id: 'n1', x: 100, y: 150 },
  { id: 'n2', x: 200, y: 70 },
  { id: 'n3', x: 300, y: 150 },
  { id: 'n4', x: 400, y: 70 },
  { id: 'n5', x: 500, y: 150 },
  { id: 'n6', x: 300, y: 230 },
];

const connections = [
  ['n1', 'n2'],
  ['n2', 'n3'],
  ['n3', 'n4'],
  ['n4', 'n5'],
  ['n3', 'n6'],
  ['n6', 'n1'],
];

// Create nodes and lines dynamically
nodes.forEach(node => {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('class', 'network-node');
  circle.setAttribute('id', node.id);
  circle.setAttribute('cx', node.x);
  circle.setAttribute('cy', node.y);
  circle.setAttribute('r', 8);
  svg.appendChild(circle);
});

connections.forEach(([startId, endId]) => {
  const startNode = nodes.find(n => n.id === startId);
  const endNode = nodes.find(n => n.id === endId);

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('class', 'network-line');
  line.setAttribute('x1', startNode.x);
  line.setAttribute('y1', startNode.y);
  line.setAttribute('x2', endNode.x);
  line.setAttribute('y2', endNode.y);
  svg.appendChild(line);
});

// Sparks animation on random nodes
function randomSpark() {
  const sparkNode = nodes[Math.floor(Math.random() * nodes.length)];
  const circle = document.getElementById(sparkNode.id);
  if (!circle) return;

  circle.classList.add('spark');

  setTimeout(() => {
    circle.classList.remove('spark');
  }, 400);
}

setInterval(randomSpark, 600);

// Hover effect on hero title to boost glow and network brightness
const heroTitle = document.querySelector('.hero-title');
heroTitle.addEventListener('mouseenter', () => {
  heroTitle.classList.add('hovered');
});
heroTitle.addEventListener('mouseleave', () => {
  heroTitle.classList.remove('hovered');
});
