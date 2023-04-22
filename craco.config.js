const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyvars: {'@primary-color': '#1DA57A'},
                        javascriptEnabled: true,
                    }
                }

            }
        }]
}


