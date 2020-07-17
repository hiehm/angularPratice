export class Common {
  //enums To stirng Array
  static enumsToArray<T>(enumObj: T): string[] {
    return Object.values(enumObj).map(x => x).filter(x => isNaN(x));
  }
}

