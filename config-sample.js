const database = {
    host: 'database-host-here',
    name: 'database-name-here',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
};

const corsOptions = {
    origin: 'origin-here',
    optionsSuccessStatus: 200
};

module.exports = { database, corsOptions };