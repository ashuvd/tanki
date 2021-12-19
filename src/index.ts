export const sum = (a: number, b: number) => a+b;

export const solve = (a: number, b: number, c: number, e: number = 1e-5): number[] => {
  if ((typeof a !== 'number') || (typeof b !== 'number') || (typeof c !== 'number')) {
    throw new Error('Параметры должны иметь тип "number"');
  }
  if (Math.abs(a) < e) {
    throw new Error('a не может быть равно 0');
  }
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D < -e) {
    return [];
  }
  if (Math.abs(D) <= e) {
    return [-b/(2*a), -b/(2*a)];
  }
  if (D > e) {
    return [-b + Math.sqrt(D)/(2*a), -b - Math.sqrt(D)/(2*a)];
  }
  return [];
}
