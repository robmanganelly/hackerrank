export function minimumBribes(q: number[]): void {
  let permutations = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] !== i + 1) {
      if (i - 1 >= 0 && q[i - 1] === i + 1) {
        [q[i - 1], q[i]] = [q[i], q[i - 1]];
        permutations += 1;
      } else if (i - 2 >= 0 && q[i - 2] === i + 1) {
        [q[i - 2], q[i - 1], q[i]] = [q[i - 1], q[i], q[i - 2]];
        permutations += 2;
      } else {
        console.log("Too chaotic");
        return;
      }
    }
  }
  console.log(permutations);
}
