const request = require('request-promise-native');

module.exports = async ({
  nodeId,
  ip,
  totalMemory,
  freeMemory,
}) => {
  await request({
    method: 'post',
    body: {
      nodeId,
      ip,
      totalMemory,
      freeMemory,
    },
    json: true,
    url: 'http://localhost:3333/nodes',
  });
};
