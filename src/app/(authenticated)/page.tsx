
import { fetchTasks } from '@/actions/TaskActions';
import { Task } from '@/components/Task';
import { TaskForm } from '@/components/TaskForm';
import { checkSession } from '@/utils/auth';

export type TaskType = {
  key: string,
  title: string,
  isDone: boolean
};

export default async function Page() {
  /**
   * TODO middlewareに以降したい（middlewareのランタイムとしてNodejsを公式にサポートするの待ち）
   * @see https://nextjs.org/docs/app/building-your-application/routing/middleware#runtime
   */
  await checkSession();
  const tasks = await fetchTasks();
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="p-2 min-w-3/12">
        <h1 className="mb-4 text-2xl">Todos</h1>
        <ul className="flex flex-col gap-y-2">
          {tasks.map((task: TaskType) => (
            <Task key={task.key} task={task} />
          ))}
        </ul>
        <div className="mt-5">
          <TaskForm />
        </div>
      </div>
    </main>
  );
}
