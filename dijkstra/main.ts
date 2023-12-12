import { dijkstra, nodeType } from "./dijkstra";

const N = 8;
const T = [
  [0, 2, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 5, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 4],
  [0, 0, 0, 0, 0, 0, 6, 0],
  [0, 0, 0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

const start = 0;
const end = 7;
const nodeNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let node: nodeType = {};

for (let i = 0; i < N; i++) {
  node[nodeNames[i]] = {
    d: T[i],
    p: undefined
  };
}
console.log(dijkstra(node, nodeNames[start], nodeNames[end]).join(" "));
