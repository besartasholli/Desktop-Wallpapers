module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'Desktop-Wallpapers',
        user: process.env.DB_USER || 'Desktop-Wallpapers',
        password: process.env.DB_PASSWORD || 'Desktop-Wallpapers',
        options: {
           dialect: process.env.DIALECT || 'sqlite',
           host: process.env.HOST || 'localhost',
           storage: './Desktop-Wallpapers.sqlite'
        }
    }
}