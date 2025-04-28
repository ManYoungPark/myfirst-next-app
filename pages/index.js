import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question })
    });

    const data = await response.json();
    setResponseMessage(data.message);
    setQuestion(""); // 입력창 비우기
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>질문을 입력하세요dd</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="질문을 입력하세요"
          required
          style={{ padding: "8px", width: "300px" }}
        />
        <button type="submit" style={{ marginLeft: "10px", padding: "8px 16px" }}>
          보내기
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>{responseMessage}</p>
    </div>
  );
}
