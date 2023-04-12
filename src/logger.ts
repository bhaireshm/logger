import chalk from "chalk";
import { LoggerConfig } from "./types/global";
const _log = console.log;

const LEVEL = {
    I: "[INFO]",
    E: "[ERROR]",
    W: "[WARNING]",
    S: "[SUCCESS]",
    L: "[LOG]"
}

class Logger {
    private _c: any;
    private _appName: string;
    private _config: LoggerConfig;

    constructor(args?: any) {
        this._c = new chalk.Instance();
        this._appName = "[@bhai/logger]";
        this._config = {
            showLevel: false,
            appName: this._appName
        };

        if (args) _log(this._c.white(this._appName, ...args));
    }

    /**
     * @returns App's name.
     */
    appName() {
        return this._appName;
    }

    setAppName(name: string) {
        if (name) this._appName = name;
        else this.e("Name cannot be empty");
        return this;
    }

    /**
     * Update logger configuration
     * 
     * @param {LoggerConfig} cnf logger configuration
     */
    setConfig(cnf: LoggerConfig) {
        const self = this;
        if (cnf.appName) this.setAppName(cnf.appName);
        this._config = { ...self._config, ...cnf };
        return this;
    }

    getConfig() {
        return this._config;
    }

    _getShowLevel(lvl: string) {
        if (!lvl) return this.e("Level is required!!!");
        return this._config.showLevel ? ` ${LEVEL[lvl]}` : "";
    }

    e(...args: string[]) {
        const prefix = `${this._appName}${this._getShowLevel("E")}`;
        _log(this._c.red(prefix, ...args));
        return this;
    }

    w(...args: string[]) {
        const prefix = `${this._appName}${this._getShowLevel("W")}`;
        _log(this._c.yellow(prefix, ...args));
        return this;
    }

    i(...args: string[]) {
        const prefix = `${this._appName}${this._getShowLevel("I")}`;
        _log(this._c.blueBright(prefix, ...args));
        return this;
    }

    s(...args: string[]) {
        const prefix = `${this._appName}${this._getShowLevel("S")}`;
        _log(this._c.green(prefix, ...args));
        return this;
    }
}

class Log {
    private instance: Logger;

    constructor() {
        // ...
    }

    public getInstance(): Logger {
        if (!this.instance) this.instance = new Logger();
        return this.instance;
    }
}

export default new Log().getInstance();