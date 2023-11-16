
class Graph {
    constructor() {
        this.adjacencylist = {};
    }

    addVertices(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencylist[vertex1]) {
            this.addVertices(vertex1);
        }

        if (!this.adjacencylist[vertex2]) {
            this.addVertices(vertex2);
        }

        //If vertexs alredy exists establish connection
        this.adjacencylist[vertex1].add(vertex2);
        this.adjacencylist[vertex2].add(vertex1);
    }

    hasEdge(vertex1, vertex2) {
        return this.adjacencylist[vertex1]?.has(vertex2);
    }

    display() {
        for (let vertex in this.adjacencylist) {
            console.log(vertex + '->' + [...this.adjacencylist[vertex]])
        }
    }
}

const graph = new Graph()

graph.addVertices("A")
graph.addVertices("B")
graph.addVertices("C")

graph.addEdge("A", "B")
graph.addEdge("B", "C")

graph.display()