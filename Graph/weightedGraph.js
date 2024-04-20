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
            //Below line can be also used (Not recomended)
            // console.log(vertex + "->", [...this.adjacencylist[vertex]])
        }
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

console.log("\nShortest Distances from", startNode + ":");

for (const node in distances) {
    console.log(node + ":", distances[node]);
}