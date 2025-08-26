const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // === Entries (unique names) ===
    .addEntry('app', './assets/app.ts')                    // JS/TS principal
    .addStyleEntry('question_show', './assets/styles/question_show.scss') // CSS-only

    // === Options ===
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    // Loaders
    .enableSassLoader()
    .enableTypeScriptLoader()
    .enableVueLoader()

    // Babel (pour le JS émis)
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23'; // OK si installé ; sinon mets '3'
    })

    // Assets statiques
    .copyFiles({
        from: './assets/images',
        pattern: /\.(png|jpg|jpeg|svg)$/,
        to: 'images/[path][name].[ext]',
    })
;

module.exports = Encore.getWebpackConfig();