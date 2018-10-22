const commonConf = require('./tools/build/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = addonsArg => []
    .concat.apply([], [addonsArg])
    .filter(Boolean)
    .map( addonName => require(`./tools/build/addons/webpack.${addonName}.js`) );


module.exports = (env, argv) =>  {
    if (!env) {
        throw new Error('You must provide an environment flag using --env.env= development|production');
    }

    const envConf = require(`./tools/build/webpack.${env.env}`);
    const mergedConf =  webpackMerge(commonConf, envConf, ...addons(env.addons));

    //console.log('mergedConf', mergedConf);

    return mergedConf;
};