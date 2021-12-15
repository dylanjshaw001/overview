export const joinClasses = (
  classes: (string|boolean)[]
  ):string => {
  return classes.filter(Boolean).join(' ')
}
