import {Command, UObject, Vector} from "./common";

export interface IMovable {
  Position: Vector
  Velocity: Vector
}

export class MovableAdapter implements IMovable
{
  obj: UObject;
  constructor(obj: UObject) {
    this.obj = obj;
  }
  get Position(): Vector {
    return this.obj["Position"] as Vector;
  }
  set Position(value: Vector) {
    this.obj["Position"] = value;
  }
  get Velocity(): Vector {
    return this.obj["Velocity"] as Vector;
  }
}

export class MoveCommand implements Command {
  private movable: IMovable;
  constructor(movable: IMovable) {
    this.movable = movable;
  }
  public execute(): void {
    if (this.movable.Velocity.body[0] === 0 && this.movable.Velocity.body[1] === 0) {
      throw new Error('С нулевой скоростью не сдвинуть объект')
    }
    for (let i = 0; i < this.movable.Position.body.length; i++) {
      if (this.movable.Position.body[i] < 0) {
        throw new Error('Не в игровом поле')
      }
      this.movable.Position.body[i] += this.movable.Velocity.body[i];
    }
  }
}
