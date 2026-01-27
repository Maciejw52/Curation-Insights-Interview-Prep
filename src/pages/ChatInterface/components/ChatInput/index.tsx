import { useState, type FormEvent } from "react";

interface IChatInputProps {
  onSend: (value: string) => void;
}

export const ChatInput = ({ onSend }: IChatInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSend(value);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 p-3 bg-slate-800"
    >
      <input
        className="flex-1 p-2 rounded bg-slate-700 text-white outline-none"
        placeholder="Ask about a stock or theme..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 rounded text-white font-semibold"
      >
        Send
      </button>
    </form>
  );
};
