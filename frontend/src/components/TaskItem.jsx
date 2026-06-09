import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTask, deleteTask } from '../features/tasksSlice';
import { Trash2, Edit2, CheckCircle, Circle } from 'lucide-react';
import ConfirmModal from './ConfirmModal';

export default function TaskItem({ task, onEdit }) {
  const dispatch = useDispatch();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleToggleStatus = () => {
    dispatch(updateTask({
      id: task._id,
      data: { ...task, completed: !task.completed }
    }));
  };

  const confirmDelete = () => {
    dispatch(deleteTask(task._id));
  };

  const isCompleted = task.completed;

  return (
    <>
      <div className={`p-4 rounded-lg border flex items-start gap-4 transition-all ${isCompleted ? 'bg-gray-50 border-gray-200' : 'bg-white border-blue-100 shadow-sm hover:shadow-md'}`}>
        <button 
          onClick={handleToggleStatus}
          className={`mt-1 flex-shrink-0 transition-colors ${isCompleted ? 'text-green-500' : 'text-gray-300 hover:text-blue-500'}`}
        >
          {isCompleted ? <CheckCircle size={24} /> : <Circle size={24} />}
        </button>

        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-medium truncate ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className={`mt-1 text-sm ${isCompleted ? 'text-gray-400' : 'text-gray-600'}`}>
              {task.description}
            </p>
          )}
          <div className="mt-2 text-xs text-gray-400">
            {new Date(task.createdAt).toLocaleDateString('es-ES', { 
              year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
            })}
          </div>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          <button 
            onClick={onEdit}
            className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            title="Editar"
          >
            <Edit2 size={18} />
          </button>
          <button 
            onClick={() => setIsDeleteModalOpen(true)}
            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            title="Eliminar"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <ConfirmModal 
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Eliminar Tarea"
        message={`¿Estás seguro de que deseas eliminar "${task.title}"? Esta acción no se puede deshacer.`}
      />
    </>
  );
}
