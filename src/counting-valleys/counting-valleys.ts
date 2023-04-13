
export function countingValleys(steps: number, path: string): number {
    let valleys = 0;
    let altitude = 0;
    let hike = path.split('').map(step => /^u$/i.test(step) ? 1: -1);
    for (let step of hike) {
        if (altitude === 0 && step < 0){
            altitude--;
            valleys++;
            continue;
        }
        else if ( step < 0){
            altitude--;
        }else if (step > 0){
            altitude++;
        }        
    }
    return valleys;
}
