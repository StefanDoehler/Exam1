var pg = require('pg');
var con = "postgres://gracehopper:buyer-lumen-local-centaur@exam1db.cpsc213.io/exam1"
var client = new pg.Client(con);
client.connect();
var query = client.query("SELECT column_name\
	FROM information_schema.columns \
	WHERE table_schema='public' AND table_name='items'");
query.on("row", function (row, result) {
    result.addRow(row);
});

query.on("end", function (result) {
	console.log(result.rows);
    console.log(JSON.stringify(result.rows, null, "    "));
    client.end();
});