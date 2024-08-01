

// backend/server.js
const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const Auth = Buffer.from(
  process.env.INFURA_API_KEY + ":" + process.env.INFURA_API_KEY_SECRET
).toString("base64");


app.use(cors()); // Enable CORS

app.get('/api/gas-fees', async (req, res) => {
  const chainId = req.query.chainId; // Get chainId from query parameter
  if (!chainId) {
    return res.status(400).json({ error: 'chainId query parameter is required' });
  }
  try {
    const { data } = await axios.get(
      `https://gas.api.infura.io/networks/${chainId}/suggestedGasFees`,
      {
        headers: { Authorization: `Basic ${Auth}` },
      }
    );
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// const axios = require('axios');

// axios.post('https://arbitrum-mainnet.infura.io/v3/4685667ca60040ccb8956451b1e6c78f', {
//   jsonrpc: '2.0',
//   method: 'eth_blockNumber',
//   params: [],
//   id: 1
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error(error);
// });