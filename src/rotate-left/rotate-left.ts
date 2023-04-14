export function rotLeft(a: number[], d: number): number[] {
    return [...a.slice(d),...a.slice(0, d)]

}