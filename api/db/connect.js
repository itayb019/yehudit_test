import oracledb from 'oracledb';

const run = async ( sql, bind = [], results = 'row', dbName='BYA') => {
    let connection;
    try {

        connection = await oracledb.getConnection({
            user: process.env.BYAName,
            password: process.env.BYAPassword,
            connectionString: process.env.BYAAddress

        });
        console.log('connection ', connection)
        oracledb.maxRows = results === 'row' ? 1 : 0;

        let res = await connection.execute(
            sql,
            bind,
            {autoCommit: true, resultSet: false, outFormat: oracledb.OUT_FORMAT_OBJECT});

        let first_word = sql.split(/\s+/, 1);

        switch (first_word) {
            case 'insert':
            case 'update':
            case 'delete':

                results = 'affected'
                break;
        }

        switch (results) {
            case 'rows':
            case 'row':
                res = res.rows;
                break;

            case 'affected':
                res = res.rowsAffected;
                break;

            case 'num_rows':
                res = res.rows.length;
                break;

            case 'lastRowid':
                res = res.lastRowid;
                break;

            case 'procedure':
                res;
                break;

        }
        return res;

    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

export {run};