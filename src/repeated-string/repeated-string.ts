export function repeatedString(s: string, n: number): number {
    // find how many characters "a" exist in s;
    // find Math.floor( n / s.length ) and n%s.length;
    // find how many characters "a" exist in s.slice(n%s.length);
    // return characters "a" in string times Math.floor(n/s.length) + char "a" in s.slice(n%s.length);

    let charsInString = s.replace(/[^a]/g,"").length
    return Math.floor(n/s.length)*charsInString + s.slice(0,n%s.length).replace(/[^a]/g,"").length
}