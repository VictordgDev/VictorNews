import database from "infra/database.js";

async function status(request, response) {
  //const updatedAt = new Date().toISOString();
  //const dbVersion = await database.query("SELECT version();").rows[0];

  response.status(200).json({
    updated_at: updatedAt,
    // version: dbVersion,
    // dependencies: {
    //   database: {
    //     version: dbVersion,
    //   },
    // },
    //status: serverHealth,
    //max_connections: maxConnections,
    //opened_connections: openedConnections,
  });
}

export default status;
