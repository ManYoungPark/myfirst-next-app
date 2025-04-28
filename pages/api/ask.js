export default function handler(req, res) {
    if (req.method === 'POST') {
      const { question } = req.body;
      console.log('받은 질문:', question);
      res.status(200).json({ message: '질문이 잘 접수되었습니다!' });
    } else {
      res.status(405).json({ message: '허용되지 않는 요청입니다.' });
    }
  }
  