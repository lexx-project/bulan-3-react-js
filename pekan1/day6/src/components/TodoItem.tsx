import deleteIcon from "../assets/delete.png";

export default function TodoItem({ todo, onToggle, onDelete }: any) {
  return (
    <li className="text-left mt-5 flex bg-gray-300 h-[30px] p-[25px] items-center rounded-md">
      <input
        type="checkbox"
        className="mr-3 w-4 h-4 cursor-pointer accent-blue-500 rounded-sm"
        checked={todo.isCompleted}
        onChange={() => onToggle(todo.id)}
      />
      <p className="flex-1">
        {todo.isCompleted ? <s>{todo.text}</s> : <span>{todo.text}</span>}
      </p>
      <button className="ml-auto" onClick={() => onDelete(todo.id)}>
        <img src={deleteIcon} alt="Hapus" className="w-5 h-5 cursor-pointer" />
      </button>
    </li>
  );
}
