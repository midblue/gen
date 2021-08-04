export function randomFromArray(array: any[]) {
  return array[Math.floor(Math.random() * array.length)]
}

export function randomBetween(
  min: number,
  max: number,
): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function getColors(
  seed: number = Math.random(),
  count: number = Math.ceil(Math.random() * 7 + 2),
): string[] {
  let colors: number[][] = []

  const startingPoint =
      ((360 * Math.random()) / seed) % 360,
    diff = 360 / (Math.random() * 10 + count)
  for (let i = 0; i < count; i++) {
    let hue = (i * diff + startingPoint) % 360
    colors.push([
      hue,
      Math.round(randomBetween(30, 100)),
      Math.round(randomBetween(4, 100)),
      1,
    ])
  }
  colors = colors.sort((a, b) => a[2] - b[2])

  const colorStrings = colors.map(
    (c) => `hsla(${c[0]}, ${c[1]}%, ${c[2]}%, ${c[3]})`,
  )

  return colorStrings
}
