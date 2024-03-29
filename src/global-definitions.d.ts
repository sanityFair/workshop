import { expect, jest, test } from "@jest/globals";

export { expect, jest, test };

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
