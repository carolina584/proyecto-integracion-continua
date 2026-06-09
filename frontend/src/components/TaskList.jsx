import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { ListTodo } from 'lucide-react';

export default function TaskList({ onEditTask }) {
  const { items } = useSelector((state) => state.tasks);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-400">
        <ListTodo size={48} className="mb-4 opacity-50" />
        <p>No hay tareas pendientes. ¡Añade una nueva!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((task) => (
        <TaskItem 
          key={task._id} 
          task={task} 
          onEdit={() => onEditTask(task)} 
        />
      ))}
    </div>
  );
}
