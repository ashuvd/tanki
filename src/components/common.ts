export class Vector {
  body: number[];
  constructor(body: number[]) {
    this.body = body;
  }
}

export interface Command
{
  execute(): void;
}

export interface UObject {
  [key: string]: Vector | number
}
