class Graph {
    constructor() {
        this.adjacencylist = {};
    }

    insertvertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if (!this.adjacencylist[vertex1]) {
            this.insertvertex(vertex1);
        }

        if (!this.adjacencylist[vertex2]) {
            this.insertvertex(vertex2);
        }

        this.adjacencylist[vertex1].push({ node: vertex2, weight });
        this.adjacencylist[vertex2].push({ node: vertex1, weight });
    }
}