
export function jumpingOnClouds(c: number[]): number {    
    let leaps = 0;
    let position = 0;
    while (position < c.length-1) {
        position = c[position+2] === 0 ? position + 2 : position + 1;
        leaps++;
    }
    return leaps;
}