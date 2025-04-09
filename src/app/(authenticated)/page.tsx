
import { fetchTasks, register } from '@/actions/TaskActions';
import { Task } from '@/components/Task';
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
          <form className="flex justify-between" action={register}>
            <input className="p-1 border-1 border-gray-300 rounded" name="title" />
            <button className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-1 text-sm rounded" type="submit">追加</button>
          </form>
        </div>
      </div>
    </main>
  );
}
