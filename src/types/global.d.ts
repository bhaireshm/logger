export { }
declare global {
    export interface LoggerConfig {

        /**
         * Name of the app to be shown first.
         * @default null
         * @example 
         * Log.setAppName("[ABC]");
         * Log.i("Completed."); // [ABC] Completed.
         * Log.e("Something failed."); // [ABC] Something failed. 
         */
        appName?: string;

        /**
         * 
         * @default false
         */
        showLevel?: boolean;

        /**
         * @default [] // [SUCCESS]
         * @format {value}
         * 
         * @example 
         * levelFormat: "{value} =>"
         * Log.i("level format modified."); // INFO => level format modified.
         * 
         * levelFormat: ":{value}:"
         * Log.e("something failed."); // :ERROR: something failed.
         */
        levelFormat?: string;
    }
}