import { useRef } from "react";

export default function NewTask({ onAdd }) {
  const text = useRef();

  function handleClick() {
    let enteredText = text.current.value;
    onAdd({
      enteredTask: enteredText,
    });
    text.current.value = "";
  }

  return (
    <div className="flex items-center gap-4">
      <input
        ref={text}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
