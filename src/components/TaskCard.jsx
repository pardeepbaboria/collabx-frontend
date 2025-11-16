import { Clock, User, MoreVertical } from 'lucide-react';

const TaskCard = ({ task }) => {
  const priorityColors = {
    high: 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400',
    medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400',
    low: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
  };

  const statusColors = {
    todo: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400',
    completed: 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 dark:text-white">{task.title}</h3>
        <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
          <MoreVertical className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{task.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
            {task.priority}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
            {task.status}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
          {task.assignee && (
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{task.assignee}</span>
            </div>
          )}
          {task.dueDate && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{task.dueDate}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;