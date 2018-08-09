#!/usr/bin/env node
process.env.NODE_CONFIG_DIR = __dirname + "/../config";
import * as config from "config";
import * as log4js from "log4js";

log4js.configure(config.get("log4js"));
const log = log4js.getLogger();
const consoleLog = log4js.getLogger("console");

export function main(argv: string[]) {
  try {
    consoleLog.debug(`argv: ${argv}`);
    const message: string = argv[2];
    return `Hello ${message.charAt(0)}`;
  } catch (e) {
    log.error(e);
  } finally {
    log4js.shutdown((e) => e && console.log(e));
  }
}

if (require.main === module) {
  main(process.argv);
}
