const http = require('node:http');
const mysql = require('mysql2/promise');

const port = Number(process.env.PORT || 3001);
const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'rootpassword',
  database: process.env.DB_NAME || 'iqra',
  waitForConnections: true,
  connectionLimit: 5,
});

function sendJson(response, status, body) {
  response.writeHead(status, {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(body));
}

const server = http.createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
    });
    response.end();
    return;
  }

  const match = request.url?.match(/^\/v1\/surah\/(\d+)$/);
  if (request.method !== 'GET' || !match) {
    sendJson(response, 404, { error: 'Route not found' });
    return;
  }

  try {
    const sura = Number(match[1]);
    const [rows] = await pool.execute(
      'SELECT aya AS numberInSurah, text FROM quran_text WHERE sura = ? ORDER BY aya',
      [sura],
    );
    if (!rows.length) {
      sendJson(response, 404, { error: `Sura ${sura} was not found in quran_text` });
      return;
    }
    sendJson(response, 200, { data: { number: sura, ayahs: rows } });
  } catch (error) {
    console.error('Quran database request failed:', error.message);
    sendJson(response, 500, { error: 'Quran database request failed' });
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Quran API listening on http://0.0.0.0:${port}`);
});
