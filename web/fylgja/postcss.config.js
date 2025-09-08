/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
        require('postcss-extend-rule'),
        require('postcss-import'),
        require('postcss-nested')
    ]
}

module.exports = config
