从https://github.com/jiang1027/electron-sample-apps.git fork过来，用于学习electron的使用。

当前测试环境:

- electron v34.3.0

npm config list输出如下：

```text
; "builtin" config from C:\Users\ybjia\AppData\Roaming\npm\node_modules\npm\npmrc

prefix = "C:\\Users\\ybjia\\AppData\\Roaming\\npm"

; "user" config from C:\Users\ybjia\.npmrc

https-proxy = "http://127.0.0.1:7897"
proxy = "http://127.0.0.1:7897"
registry = "https://registry.npmmirror.com"

; node bin location = C:\Program Files\nodejs\node.exe
; node version = v22.14.0
; npm local prefix = C:\source\electron\electron-sample-apps\desktop-capture
; npm version = 10.2.1
; cwd = C:\source\electron\electron-sample-apps\desktop-capture
; HOME = C:\Users\ybjia
; Run `npm config ls -l` to show all defaults.
```

环境变量:

```
set ELECTRON_GET_USE_PROXY=1
set GLOBAL_AGENT_HTTP_PROXY=http://127.0.0.1:7897
set GLOBAL_AGENT_HTTPS_PROXY=http://127.0.0.1:7897
```


# Electron Sample Apps

This repository contains Electron sample apps to illustrate the usage of
[Electron APIs](https://github.com/electron/electron/tree/master/docs).

These sample apps are migrated from [nw-sample-apps](https://github.com/zcbenz/nw-sample-apps),
[chrome-app-sample](https://github.com/GoogleChrome/chrome-app-samples) and
[chromium extensions examples](https://code.google.com/p/chromium/codesearch#chromium/src/chrome/common/extensions/docs/examples/&sq=package:chromium&type=cs).

All samples are test on Electron v1.6.11.

## How to run apps

1. Install Electron via `npm install -g electron`.

2. Run the sample via `electron <electron-sample-apps-path>/<sample-name>`.

If you want to know more about Electron app's development, please refer to the
[official docs](https://github.com/electron/electron/blob/master/docs/tutorial/quick-start.md).

## License

electron-sample-apps is published under the Apache v2 license. See `LICENSE` for details.

## Donation

If this project helps you out, you can give me a cup of coffee :)

[![paypal](https://img.shields.io/badge/donate-paypal-brightgreen.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZVNVLSK6P6JRG)
