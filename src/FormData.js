import {NestedObject} from './NestedObject.js';

export class ObjectFormData {
  constructor(obj = {}, baseKey = undefined) {
    this.obj = obj;
    this.baseKey = baseKey;
    this.form = new FormData();
    this.descendObject(this.obj, this.form, this.baseKey ? [this.baseKey] : []);
  }

  get getBaseObject() {
    return this.obj;
  }

  set setBase(obj) {
    this.obj = obj;
    this.form = new FormData();
    this.descendObject(this.obj, this.form, this.baseKey ? [this.baseKey] : []);
  }

  get getBaseKey() {
    return this.baseKey;
  }

  set setBaseKey(key) {
    this.baseKey = key;
    this.form = new FormData();
    this.descendObject(this.obj, this.form, this.baseKey ? [this.baseKey] : []);
  }

  get getFormData() {
    return this.form;
  }

  append(key, elem) {
    this.form.append(key, elem);
  }

  // eslint-disable-next-line class-methods-use-this
  descendObject(obj, form, keys = []) {
    const nestedObject = new NestedObject(obj, keys);

    if (
      typeof obj === 'object' &&
      !Array.isArray(obj) &&
      !(obj instanceof File)
    ) {
      Object.entries(obj)?.forEach(([dataKey, dataObj]) => {
        this.descendObject(dataObj, form, [...keys, dataKey]);
      });
    } else if (Array.isArray(obj)) {
      if (nestedObject.nestedObject.length > 0) {
        nestedObject.nestedObject.forEach((elem, index) => {
          if (
            typeof elem === 'object' &&
            !Array.isArray(elem) &&
            !(elem instanceof File)
          ) {
            Object.entries(elem)?.forEach(([dataKey, dataObj]) => {
              this.descendObject(dataObj, form, [...keys, `${index}`, dataKey]);
            });
          } else {
            form.append(nestedObject.nestedString, elem);
          }
        });
      } else {
        form.append(nestedObject.nestedString, []);
      }
    } else {
      form.append(nestedObject.nestedString, nestedObject.nestedObject);
    }
    const object = {};
    form.forEach((value, key) => {
      object[key] = value;
    });
  }
}
