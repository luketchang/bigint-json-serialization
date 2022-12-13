export function stringify(object: any): string {
  return JSON.stringify(object, (_, value) =>
    typeof value === "bigint" ? value.toString() + "n" : value
  );
}

export function parse(input: string): any {
  return JSON.parse(
    JSON.parse(input, (_, value) => {
      if (typeof value === "string" && /^\d+n$/.test(value)) {
        return BigInt(value.substr(0, value.length - 1));
      }
      return value;
    })
  );
}
