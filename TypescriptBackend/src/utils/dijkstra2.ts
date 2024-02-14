enum Parent {
    NO_PARENT = -1
}

export function dijkstra2(adjacencyMatrix: number[][], startVertex: number, endVertex: number): number[] {
    const nVertices: number = adjacencyMatrix[0].length;

    const shortestDistances: number[] = new Array(nVertices);
    const added: boolean[] = new Array(nVertices);

    for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++) {
        shortestDistances[vertexIndex] = Number.MAX_SAFE_INTEGER;
        added[vertexIndex] = false;
    }

    shortestDistances[startVertex] = 0;

    const parents: number[] = new Array(nVertices);
    parents[startVertex] = Parent.NO_PARENT;

    for (let i: number = 1; i < nVertices; i++) {

        // Pick the minimum distance vertex
        // from the set of vertices not yet
        // processed. nearestVertex is
        // always equal to startNode in
        // first iteration.
        let nearestVertex: number = -1;
        let shortestDistance: number = Number.MAX_SAFE_INTEGER;
        for (let vertexIndex: number = 0 ; vertexIndex < nVertices ; vertexIndex++) {
            if (!added[vertexIndex] &&
                shortestDistances[vertexIndex] <
                shortestDistance)
            {
                nearestVertex = vertexIndex;
                shortestDistance = shortestDistances[vertexIndex];
            }
        }

        // Mark the picked vertex as
        // processed
        added[nearestVertex] = true;

        // Update dist value of the
        // adjacent vertices of the
        // picked vertex.
        for (let vertexIndex: number = 0; vertexIndex < nVertices; vertexIndex++) {
            const edgeDistance: number = adjacencyMatrix[nearestVertex][vertexIndex];

            if (edgeDistance > 0
                && ((shortestDistance + edgeDistance) <
                    shortestDistances[vertexIndex]))
            {
                parents[vertexIndex] = nearestVertex;
                shortestDistances[vertexIndex] = shortestDistance +
                    edgeDistance;
            }
        }
    }
    const solution: number[] = [];
    getSolution(endVertex, parents, solution);
    return solution;

}

// function printOneSolution(startVertex: number, endVertex: number, distances: number[], parents: number[]) {
//     // console.log("Vertex\t Distance\tPath");
//     //
//     // //test
//     // console.log("\n" + startVertex + " -> ");
//     // console.log(endVertex + " \t\t ");
//     // console.log(distances[endVertex] + "\t\t");
//     const solution: number[] = [];
//     printPath(endVertex, parents, solution);
//     solution.push()
// }



function getSolution(currentVertex: number, parents: number[], solution: number[]) {

    // Base case : Source node has
    // been processed
    if (currentVertex == Parent.NO_PARENT) return;

    getSolution(parents[currentVertex], parents, solution);
    solution.push(currentVertex);
    console.log(currentVertex + " ");
}

export function createDefaultMap(): number[][] {
    return [
        [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], //1
        [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], //2
        [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], //3
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0], //6
        [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0], //7
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], //9
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0], //10
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0], //11
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0], //12
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], //13
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], //14
        [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], //15
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], //16
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0], //17
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], //18
    ];
}

export function updateDefaultMap() :number[][] {
    createDefaultMap();


    return [

    ];
}