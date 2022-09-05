export class NestedObject {
  constructor(base, names) {
    this.base = base;
    this.names = names;
    this.nestedObject = this.getNestedObject(base, names, typeof base);
    this.nestedString = this.getNestedKeyString(
      names,
      Array.isArray(this.nestedObject)
    );
  }

  // eslint-disable-next-line class-methods-use-this
  getNestedObject(base, names, type) {
    let nestedObject;
    if (type === "object" && !Array.isArray(base)) {
      names?.forEach((item, i) => {
        nestedObject = base[item[i]];
        return nestedObject;
      });
    }

    return base;
  }

  // eslint-disable-next-line class-methods-use-this
  getNestedKeyString(names, isArray) {
    const nestedKeyString = names?.map((name, i) =>
      i === 0 ? `${name}` : `[${name}]`
    );
    if (isArray) {
      return [...nestedKeyString, "[]"].join("");
    }
    return nestedKeyString.join("");
  }
}
