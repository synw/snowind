import { RxClass } from "rxclass";

export default class SwDatatableModel<T = Record<string, any>> extends RxClass { //eslint-disable-line

  constructor(columns: Record<string, string> = {}, rows: Array<T> = []) {
    super({
      columns: columns,
      rows: {
        value: rows,
        callback: (v: Array<T>) => {
          console.log("Set rows", v);
        }
      }
    });
  }

  setColumnsFromData(): void { //eslint-disable-line
    const v = this.rows.value[0];
    console.log("Setting columns from row names", Object.keys(v))
    const cols = [] as Array<string>;
    Object.keys(v).forEach((k) => {
      let v = k.charAt(0).toUpperCase() + k.slice(1);
      v = v.replace(/([A-Z])/g, " $1");
      v = v.replace("_", " ");
      cols.push(v);
    });
    this.columns.value = cols;
    console.log("Cols", this.columns.value)
  }
}