import {Command, UObject} from "./common";

export interface IRotatable {
  Direction: number
  AngularVelocity: number
  MaxDirections: number
}

export class RotatableAdapter implements IRotatable {
  obj: UObject;
  constructor(obj: UObject) {
    this.obj = obj;
  }
  get Direction(): number {
    return this.obj["Direction"] as number;
  }
  set Direction(value: number) {
    this.obj["Direction"] = value;
  }
  get AngularVelocity(): number {
    return this.obj["AngularVelocity"] as number;
  }
  get MaxDirections(): number {
    return this.obj["MaxDirections"] as number;
  }
}

export class RotateCommand implements Command {
  private rotatable: IRotatable;
  constructor(rotatable: IRotatable) {
    this.rotatable = rotatable;
  }
  public execute(): void {
    this.rotatable.Direction = (this.rotatable.Direction + this.rotatable.AngularVelocity) % this.rotatable.MaxDirections;
  }
}
