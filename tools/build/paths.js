const path = require('path');
const fs = require('fs');

// interesting - https://github.com/tol-is/create-react-app-monorepo-example/blob/master/config/paths.js
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    packagesDir: resolveApp('packages/'),
    entryJs:  resolveApp('packages/app/src/'),
    entryHtml: resolveApp('packages/app/src/index.html'),
    entryFavicon: resolveApp('packages/app/static/favicon/icon-home.png'),
};