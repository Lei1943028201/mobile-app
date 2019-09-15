module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        [
            'import', {
                libraryName: 'mobile',
                libraryDirectory: 'es',
                style: true},
            'mobile'
        ]
    ]
}
