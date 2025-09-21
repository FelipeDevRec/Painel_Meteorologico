import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = input.trim();
    if (!city) return;
    onSearch(city);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma cidade (ex: Rio de Janeiro)"
        aria-label="cidade"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
