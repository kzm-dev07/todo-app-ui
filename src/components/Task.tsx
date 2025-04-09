'use client';
import { TaskType } from '@/app/(authenticated)/page'
import { deleteById, updateById } from '@/actions/TaskActions';
import React, { useEffect, useState } from 'react'

type Props = {
  task: TaskType
}

export const Task = ({ task }: Props) => {
  const [title, setTitle] = useState<string>(task.title);
  const [isDone, setIsDone] = useState<boolean>(task.isDone);
  useEffect(() => {
    setTitle(task.title);
    setIsDone(task.isDone)
  }, [task]);

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await updateById({ key: task.key, title, isDone });
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteById(task.key);
  };
  const handleOnCheck = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    updateById({ key: task.key, title, isDone: e.target.checked });
  };
  return (
    <li key={task.key}>
      <div className="p-3 flex gap-x-2 justify-between rounded shadow-lg">
        <div className="flex gap-x-2">
          <input
            name="isDone"
            type="checkbox"
            checked={isDone}
            onChange={handleOnCheck}
          />
          {isDone ? <s className='p-1'>{title}</s> : <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-1'
          />}
        </div>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={handleUpdate}
            className='bg-green-500 text-white hover:bg-green-300 p-1 text-sm rounded align-middle'
          >
            更新
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className='bg-red-500 text-white hover:bg-red-300 p-1 text-sm rounded align-middle'
          >
            削除
          </button>
        </div>
      </div>
    </li>
  )
}
