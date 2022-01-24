import Sequelize from 'sequelize';

const sequelize = new Sequelize.Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    // SQLite only
    storage: 'database.sqlite'
});

export default sequelize;

export const sync = async () => {
    await Users.sync();
    await Ids.sync();
    await Warns.sync();
    await Mutes.sync();
    await Kicks.sync();
    await Banns.sync();
}

// Models
export const Users = sequelize.define('users', {
    id: {
        type: Sequelize.STRING,
        unique: true,
        primaryKey: true
    }
});

export const Ids = sequelize.define('ids', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    }
});

export const Warns = sequelize.define('warns', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    },
    ref: {
        type: Sequelize.STRING
    }
});

export const Kicks = sequelize.define('kicks', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    },
    ref: {
        type: Sequelize.STRING
    }
});

export const Banns = sequelize.define('banns', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    },
    ref: {
        type: Sequelize.STRING
    }
});

export const Mutes = sequelize.define('mutes', {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    reason: {
        type: Sequelize.STRING
    },
    until: {
        type: Sequelize.DATE
    },
    date: {
        type: Sequelize.DATE
    },
    punisher: {
        type: Sequelize.STRING
    },
    ref: {
        type: Sequelize.STRING
    }
});

Warns.belongsTo(Users);
Kicks.belongsTo(Users);
Banns.belongsTo(Users);
Mutes.belongsTo(Users);