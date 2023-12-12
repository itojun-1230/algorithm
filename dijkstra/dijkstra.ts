import { heapq } from "./heapq"

export type nodeType = {
  [index: string]: {
    d: number[],
    p: string | undefined
  }
}

export const dijkstra = (graph: nodeType, start: string, end: string) => {
  let distances: {
    [index: string]: number
  } = {};
  for (let e of Object.keys(graph)) {
    distances[e] = Infinity;
  }
  distances[start] = 0;

  let queue = new heapq<string>();
  queue.enqueue(0, start);

  while (queue.size() > 0) {
    const targetNode = queue.dequeue()!;
    const targetKey = targetNode.d;
    const targetCost = targetNode.p;
    const target = graph[targetKey];
    if (distances[targetKey] < targetCost) {
      continue;
    }

    Object.keys(graph).forEach((node, i) => {
      if (target.d[i] <= 0) {
        return;
      }
      const distance = targetCost + target.d[i];
      if (distance < distances[node]) {
        distances[node] = distance;
        graph[node].p = targetKey;
        queue.enqueue(distance, node);
      }
    });
  }

  let result: string[]= [];
  let path: string | undefined = end;
  while( path ) {
    result.push(path);
    path = graph[path].p;
  }
  return result.reverse();
}