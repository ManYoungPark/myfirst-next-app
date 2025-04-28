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

<div className="h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center">
    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">질문을 입력하세요_우리집에서</h1>
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="질문을 입력하세요"
        required
        className="w-80 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="w-80 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        보내기
      </button>
    </form>
    {responseMessage && (
      <p className="mt-6 text-center text-green-600">{responseMessage}</p>
    )}
  </div>
</div>


  );
}
