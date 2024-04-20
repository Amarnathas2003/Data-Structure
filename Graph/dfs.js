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


    dfsTraversal(startVertex) {
        let visited = new Set();
        this.dfsRecursive(startVertex, visited);
    }

    dfsRecursive(startVertex, visited) {
        //Base case of recursive call
        if (!startVertex) return null;

        visited.add(startVertex);
        console.log(startVertex);

        for (let neighbour of this.adjacencylist[startVertex]) {
            if (!visited.has(neighbour)) {
                this.dfsRecursive(neighbour, visited);
            }
        }
    }

    display() {
        for (let vertex in this.adjacencylist) {
            console.log(vertex + '->' + [...this.adjacencylist[vertex]]);
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("D", "E");
graph.addEdge("C", "E");

console.log("DFS Traversal:");

graph.dfsTraversal("A");