const Log = require('../dist/index.js').default;

Log
    .i("default config  details", JSON.stringify(Log.getConfig()))
    .i("default log message with default app name")
    .setConfig({ appName: "ABC" })
    .e("setting custom app name from config")
    .setAppName("LOGGER")
    .i("setting custom app name from setAppName method")
    .w("current app name", Log.appName())
    .setConfig({ showLevel: true })
    .e("level enabled from here")
    .s("Success message");