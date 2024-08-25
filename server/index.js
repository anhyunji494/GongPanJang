const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// CORS 설정을 더 구체적으로 지정
app.use(
  cors({
    origin: 'http://localhost:8081', // Expo 개발 서버의 주소
  })
);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
