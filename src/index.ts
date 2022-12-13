export function stringify(object: any): string {
  return JSON.stringify(object, (_, value) =>
    typeof value === "bigint" ? value.toString() + "n" : value
  );
}

export function parse(input: string): any {
  const stringified = stringify(input);
  return JSON.parse(
    JSON.parse(stringified, (_, value) => {
      if (typeof value === "string" && /^\d+n$/.test(value)) {
        return BigInt(value.substring(0, value.length - 1));
      }
      return value;
    })
  );
}
