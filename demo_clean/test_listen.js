import http from 'http';
const server = http.createServer((req, res) => {
  res.end('test');
});
server.listen(0, '0.0.0.0', () => {
  const address = server.address();
  console.log(`Server running on port ${address.port}`);
  process.exit(0);
});
server.on('error', (err) => {
  console.error(err);
  process.exit(1);
});
