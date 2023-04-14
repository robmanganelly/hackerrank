export function arrayManipulationV1(n: number, queries: number[][]): number {
    // brute force approach
    const host = new Array(n).fill(0);
    for (const [start, end, value] of queries) {
        for (let i = start-1; i < end; i++) {
            host[i] += value;
        }
    }
    return Math.max(...host);    
}

export function arrayManipulation(n: number, queries: number[][]): number {
    const host = new Array(n+1).fill(0);
    
    for (const [start, end, value] of queries) {
        host[start] += value;
        host[end+1] -= value;
    }
    
    let max = 0;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += host[i];
        if (sum > max) {
            max = sum;
        }
    }
    
    return max;
}
