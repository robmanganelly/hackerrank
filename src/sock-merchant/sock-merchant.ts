export function sockMerchant(n: number, ar: number[]): number {
  const buffer: Map<number, number> = new Map<number, number>(
    ar.map((i) => [i, 0])
  );

  ar.forEach((i) => {
    buffer.set(i, (buffer.get(i) as number) + 1);
  });

  return [...buffer.values()].reduce(
    (previous, current) => previous + Math.floor(current / 2),
    0
  );
}
