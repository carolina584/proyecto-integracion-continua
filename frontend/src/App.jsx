import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './features/tasksSlice';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';
import { BookOpen, Plus } from 'lucide-react';

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.tasks);
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTasks());
    }
  }, [status, dispatch]);

  const openNewTask = () => {
    setTaskToEdit(null);
    setIsFormOpen(true);
  };

  const openEditTask = (task) => {
    setTaskToEdit(task);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setTaskToEdit(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-3 text-primary">
            <BookOpen size={40} />
            <h1 className="text-4xl font-bold text-gray-800">NoteFlow</h1>
          </div>
          <button 
            onClick={openNewTask}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium shadow-sm"
          >
            <Plus size={20} />
            Nueva Tarea
          </button>
        </header>

        <main>
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Tus Tareas</h2>
            
            {status === 'loading' && (
              <div className="text-center py-8 text-gray-500">Cargando tareas...</div>
            )}
            
            {status === 'failed' && (
              <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-4">
                Error: {error}
              </div>
            )}

            {status === 'succeeded' && (
              <TaskList onEditTask={openEditTask} />
            )}
          </div>
        </main>
      </div>

      <Modal 
        isOpen={isFormOpen} 
        onClose={closeForm} 
        title={taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}
      >
        <TaskForm 
          taskToEdit={taskToEdit} 
          onSuccess={closeForm}
          onCancel={closeForm} 
        />
      </Modal>
    </div>
  );
}

export default App;
