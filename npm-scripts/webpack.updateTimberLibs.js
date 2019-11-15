'use strict';

const $TimberTools = require('./TimberTools.js');

const Tbs = new $TimberTools({ env: 'updateTimberLibs', outputDir: 'dist' });

let moduleExports = {}

if (Tbs.webpackMode === 'development') {
    moduleExports = {
        context: Tbs.getContext(),
        entry: Tbs.getEntries(),
        output: Tbs.getOutput(),
        devServer: Tbs.getDevServer(),
        watch: Tbs.getWatch(),
        module: {
            rules: [
                Tbs.getModuleRule_babel(),
                Tbs.getModuleRule_scss(),
                Tbs.getModuleRule_fontFiles(),
                Tbs.getModuleRule_images()
            ]
        },
        plugins: [
            Tbs.getPlugin_writeFilePlugin(),
            Tbs.getPlugin_miniCssExtract('timberCssFilePath')
        ]
    };
} else {
    // webpackMode is either "production" or "none"
    moduleExports = {
        context: Tbs.getContext(),
        entry: Tbs.getEntries(),
        output: Tbs.getOutput(),
        devtool: 'source-map',
        module: {
            rules: [
                Tbs.getModuleRule_babel(),
                Tbs.getModuleRule_scss(),
                Tbs.getModuleRule_fontFiles(),
            ]
        },
        optimization: Tbs.getOptimization(),
        plugins: [
            Tbs.getPlugin_writeFilePlugin(),
            Tbs.getPlugin_miniCssExtract('timberCssFilePath'),
            Tbs.getPlugin_miniCssExtract('timberCssFileMinPath'),
            Tbs.getPlugin_purgecssPlugin(),
            Tbs.getPlugin_banner()
        ],
    };
}

module.exports = moduleExports;