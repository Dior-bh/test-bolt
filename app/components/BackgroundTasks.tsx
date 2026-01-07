import React, { useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface BackgroundTask {
  id: string;
  agent: string;
  status: 'running' | 'completed' | 'failed';
  duration?: number;
  result?: any;
  error?: string;
}

interface BackgroundTasksProps {
  tasks: Promise<any[]>;
  autoHide?: boolean;
  autoHideDelay?: number;
}

export const BackgroundTasks: React.FC<BackgroundTasksProps> = ({ tasks, autoHide = true, autoHideDelay = 5000 }) => {
  const [backgroundTasks, setBackgroundTasks] = useState<BackgroundTask[]>([
    { id: '1', agent: 'security', status: 'running' },
    { id: '2', agent: 'testing', status: 'running' },
    { id: '3', agent: 'performance', status: 'running' },
    { id: '4', agent: 'refactoring', status: 'running' },
  ]);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startTime = performance.now();

    tasks
      .then((results) => {
        const endTime = performance.now();

        setBackgroundTasks((prev) =>
          prev.map((task, index) => {
            const result = results[index];
            return {
              ...task,
              status: result?.status === 'fulfilled' ? 'completed' : 'failed',
              duration: endTime - startTime,
              result: result?.value,
              error: result?.reason?.message,
            };
          }),
        );

        if (autoHide) {
          setTimeout(() => setVisible(false), autoHideDelay);
        }
      })
      .catch((error) => {
        console.error('Background tasks error:', error);
        setBackgroundTasks((prev) =>
          prev.map((task) => ({
            ...task,
            status: 'failed',
            error: error.message,
          })),
        );
      });
  }, [tasks, autoHide, autoHideDelay]);

  if (!visible) {
    return null;
  }

  const allCompleted = backgroundTasks.every((task) => task.status === 'completed' || task.status === 'failed');
  const allSuccess = backgroundTasks.every((task) => task.status === 'completed');

  return (
    <div className="fixed bottom-4 right-4 w-96 max-w-full">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div
          className={`px-4 py-3 ${
            allCompleted
              ? allSuccess
                ? 'bg-green-50 border-b border-green-200'
                : 'bg-amber-50 border-b border-amber-200'
              : 'bg-blue-50 border-b border-blue-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {!allCompleted && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
              {allCompleted && allSuccess && <CheckCircle2 className="w-4 h-4 text-green-600" />}
              {allCompleted && !allSuccess && <AlertCircle className="w-4 h-4 text-amber-600" />}
              <h3 className="font-semibold text-gray-900">
                {!allCompleted
                  ? '🚀 Background Quality Checks'
                  : allSuccess
                    ? '✅ All Checks Completed'
                    : '⚠️ Some Checks Failed'}
              </h3>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* Tasks List */}
        <div className="divide-y divide-gray-200">
          {backgroundTasks.map((task) => (
            <div key={task.id} className="px-4 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  {/* Status Icon */}
                  <div className="flex-shrink-0">
                    {task.status === 'running' && <Loader2 className="w-4 h-4 animate-spin text-blue-600" />}
                    {task.status === 'completed' && <CheckCircle2 className="w-4 h-4 text-green-600" />}
                    {task.status === 'failed' && <AlertCircle className="w-4 h-4 text-red-600" />}
                  </div>

                  {/* Task Name */}
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 capitalize">{task.agent} Agent</p>
                    {task.status === 'completed' && (
                      <p className="text-xs text-green-600">✓ Completed in {task.duration?.toFixed(0)}ms</p>
                    )}
                    {task.status === 'running' && <p className="text-xs text-blue-600">Processing...</p>}
                    {task.status === 'failed' && <p className="text-xs text-red-600">{task.error}</p>}
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span
                    className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      task.status === 'running'
                        ? 'bg-blue-100 text-blue-700'
                        : task.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {task.status === 'running' && 'Running'}
                    {task.status === 'completed' && 'Done'}
                    {task.status === 'failed' && 'Error'}
                  </span>
                </div>
              </div>

              {/* Progress bar for running */}
              {task.status === 'running' && (
                <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        {allCompleted && (
          <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-600 text-center">
            {allSuccess ? '👍 Ready to use!' : '📋 Review issues above'}
          </div>
        )}
      </div>

      {/* Stats */}
      {allCompleted && (
        <div className="mt-2 text-xs text-gray-600 text-right">
          <p>{backgroundTasks.filter((t) => t.status === 'completed').length}/4 completed</p>
        </div>
      )}
    </div>
  );
};

export default BackgroundTasks;
