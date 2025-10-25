import { type FC } from "react";

interface TaskListProps {
  tasks: string[];
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="w-full max-w-xl rounded-lg border border-dashed border-slate-200 bg-slate-50 px-6 py-4 text-center text-slate-500">
        Data tugas belum tersedia. Klik tombol di atas untuk memuat contoh
        data.
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl space-y-3 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">
        Daftar Tugas Mingguan
      </h3>
      <ul className="space-y-2 text-left text-slate-700">
        {tasks.map((task, index) => (
          <li
            key={task}
            className="flex items-start gap-2 rounded-md bg-indigo-50/70 px-4 py-2 text-sm font-medium text-indigo-600"
          >
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
              {index + 1}
            </span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
