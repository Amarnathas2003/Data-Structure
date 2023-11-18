class Graph {
    constructor() {
        this.adjacencylist = {};
    }

    insertVertex(vertex) {
        if (!this.adjacencylist[vertex]) {
            this.adjacencylist[vertex] = new Set();
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencylist[vertex1]) {
            this.insertVertex(vertex1);
        }

        if (!this.adjacencylist[vertex2]) {
            this.insertVertex(vertex2);
        }

        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }

    bfs(startNode) {
        const visited = new Set();
        visited.add(startNode);
        const queue = [startNode];

        while (queue.length > 0) {
            let current = queue.shift();
            const vertexNeighbours = this.adjacencylist[current];
            console.log(current);

            for (let neighbour of vertexNeighbours) {
                if (!this.adjacencylist[neighbour]) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }

    dfsTraversal(startNode) {
        let visited = new Set();
        dfsRecursive(startNode, visited);
    }

    dfsRecursive(startNode, visited) {
        if (!startNode) return null;

        visited.add(startNode);
        console.log(startNode);

        for (let neibours of this.adjacencylist[startNode]) {
            if (!visited.has(neibours)) {
                dfsRecursive(neibours, visited);
            }
        }
    }


    display() {
        for (let vertex in this.adjacencylist) {
            console.log(vertex + '->' + [...this.adjacencylist[vertex]]);
        }
    }
}

