class weightedGraph {
    constructor() {
        this.adjacencylist = {};
    }

    addVertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            //Using array to store as objects 
            this.adjacencylist[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {

        if (!this.adjacencylist[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencylist[vertex2]) {
            this.addVertex(vertex2);
        }

        //PUSH to the Array
        this.adjacencylist[vertex1].push({ node: vertex2, weight });
        this.adjacencylist[vertex2].push({ node: vertex1, weight });
    }

    display() {
        for (let vertex in this.adjacencylist) {
            let connections = this.adjacencylist[vertex].map(({ node, weight }) => `${node}(${weight})`);
            console.log(`${vertex} -> ${connections}`);
        }
    }

    dijkstra(startNode) {
        let distances = {}; //It stores the distance of all elements
        let priorityQueue = new PriorityQueue();

        for (const node in this.adjacencylist) {
            distances[node] = node === startNode ? 0 : Infinity;
            priorityQueue.enqueue(node, distances[node]);
        }

        while (!priorityQueue.isEmpty()) {
            let current = priorityQueue.dequeue();

            for (const neighbour of this.adjacencylist[current.node]) {
                // Current nodes distance neighbour weight(edge weight)
                const posibleDistance = distances[current.node] + neighbour.weight;

                 // The comparison is if (3 < Infinity) at first
                if (posibleDistance < distances[neighbour.node]) {
                    //distances['B'] = possibleDistance; // After this line, distances['B'] will be updated to 3.
                    distances[neighbour.node] = posibleDistance;
                    priorityQueue.enqueue(neighbour.node, posibleDistance);
                }
            }
        }
        return distances;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(node, priority) {
        this.queue.push({ node, priority });
        this.queue.sort();
    }

    dequeue() {
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    isSort() {
        this.queue.sort((a, b) => a.priority - b.priority);
    }

}

const graph = new weightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 3);
graph.addEdge("B", "C", 2);

graph.display();


const startNode = "A";
const distances = graph.dijkstra(startNode);

console.log("Shortest Distances from", startNode);

for (const node in distances) {
    console.log(node + ":", distances[node]);
}