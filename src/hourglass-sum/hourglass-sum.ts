
export function hourglassSum(arr: number[][]): number {
    let hourGlassSum = -9*7; //-Infinity in a general case.
    for(let i = 1; i < arr.length-1; i++) {
        for(let j = 1; j < arr[0].length-1; j++) {
            let current = arr[i][j]+ [i-1,i+1].map(index=>arr[index].slice(j-1,j+2).reduce((a,b) => a+b, 0)).reduce((a1,b1)=>a1+b1,0); 
            hourGlassSum = hourGlassSum > current? hourGlassSum : current;
        }
    }
    return hourGlassSum;
}