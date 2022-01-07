import {solve, sum} from "./index";
import {Vector} from "./components/common";
import {MovableAdapter, MoveCommand} from "./components/move";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('x^2+1 = 0 no quadratic roots', () => {
  expect(solve(1, 0, 1)).toStrictEqual([]);
});

test('x^2-1 = 0 there are 2 roots of multiplicity 1 (x1=1, x2=-1)', () => {
  expect(solve(1, 0, -1)).toStrictEqual([1, -1]);
});

test('x^2+2x+1 = 0 there is one root of multiplicity 2 (x1 = x2 = -1)', () => {
  expect(solve(1, 2, 1)).toStrictEqual([-1, -1]);
});

test('x^2-2.00000001x+1 = 0 there is one root of multiplicity 2 (x1 = x2 = 2)', () => {
  expect(solve(1, -2.00000001, 1)).toStrictEqual([1.000000005, 1.000000005]);
});

test('a !== 0', () => {
  expect(() => solve(1e-7, 1, 1)).toThrow('a не может быть равно 0');
});

test('parameters typeof number', () => {
  // @ts-ignore
  expect(() => solve('0', 1, 1)).toThrow('Параметры должны иметь тип "number"');
});
test('parameters typeof number (not NaN)', () => {
  // @ts-ignore
  expect(() => solve(NaN, 1, 1)).toThrow('Параметры должны иметь тип "number"');
});
test('parameters typeof number (not Infinity)', () => {
  // @ts-ignore
  expect(() => solve(Infinity, 1, 1)).toThrow('Параметры должны иметь тип "number"');
});



test('Position [12, 5] -> Position [5, 8] with Velocity [-7, 3]', () => {
  const MockObject = {
    Position: new Vector([12, 5]),
    Velocity: new Vector([-7, 3]),
  }
  const move = new MoveCommand(new MovableAdapter(MockObject));
  move.execute();
  expect(MockObject.Position.body).toStrictEqual([5, 8]);
});
test('no Position -> throw new Error', () => {
  const MockObject = {
    Velocity: new Vector([-7, 3]),
  }
  const move = new MoveCommand(new MovableAdapter(MockObject));
  expect(() => move.execute()).toThrow();
});
test('no Velocity -> throw new Error', () => {
  const MockObject = {
    Position: new Vector([12, 5]),
  }
  const move = new MoveCommand(new MovableAdapter(MockObject));
  expect(() => move.execute()).toThrow();
});
test('setPosition -> throw new Error', () => {
  const MockObject = {
    Position: new Vector([-12, 5]),
    Velocity: new Vector([-7, 3]),
  }
  const move = new MoveCommand(new MovableAdapter(MockObject));
  expect(() => move.execute()).toThrow();
});

