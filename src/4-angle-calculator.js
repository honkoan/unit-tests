export const angleCalculator = (turns) => {
  const angle = 360
  if (turns === 0) {
    return 0 * angle
  } else if (turns === 1) {
    return 1 * angle
  } else if (turns === 1.5) {
    return 1.5 * angle
  } else if (turns === 2) {
    return 2 * angle
  }
}
