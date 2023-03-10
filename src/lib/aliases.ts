import { resolve } from "path";
import { addAlias } from "module-alias";

function makeAlias(alias: string, path = alias.substring(1)): [string, string] {
  const dir = process.env.NODE_ENV === "development" ? "src/" : "dist/";

  return [alias, resolve(process.cwd(), dir, path)];
}

addAlias(...makeAlias("@"));
