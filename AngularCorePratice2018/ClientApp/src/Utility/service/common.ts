export class Common {
  //enums To stirng Array
  static enumsToStringArray<T>(enumObj: T): string[] {
    return Object.values(enumObj).map(x => x).filter(x => isNaN(x));
  }

  //enums To Object Array
  static enumToObjectArray<T>(enumObj: T): any {
    return Object.values(enumObj).filter(x => isNaN(x)).map((x) => {
      return {
        key: x,
        value: enumObj[x]
      };
    });
  }
}

