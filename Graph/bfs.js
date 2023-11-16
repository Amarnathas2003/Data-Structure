class Graph {
    constructor() {
        this.adjacencylist = {};
    }

    addVertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencylist[vertex1]) {
            this.addVertex(vertex1);
        }

        if (!this.adjacencylist[vertex2]) {
            this.addVertex(vertex2);
        }

        this.adjacencylist[vertex1].add(vertex2);
        this.adjacencylist[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencylist[vertex1]?.has(vertex2)
    }

    display() {
        for (let vertex in this.adjacencylist) {
            console.log(vertex + '->' + [...this.adjacencylist[vertex]]);
        }
    }

    bfsTraversal(startVertex) {
        let visited = new Set();
        visited.add(startVertex);
        let queue = [startVertex];

        while (queue.length > 0) {
            let currentVertex = queue.shift()
            let vertexNeighbours = this.adjacencylist[currentVertex]; //Get neibours of current element
            console.log(currentVertex);

            //Insert the neighbour elements to the set and queue 
            for (let neighbour of vertexNeighbours) {
                if (!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
}

const graph = new Graph();

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A", "B")
graph.addEdge("C", "B")

graph.display();

console.log("BFS Traversal Below")

graph.bfsTraversal("A");