import { register } from '@/actions/TaskActions'
import React from 'react'

export const TaskForm = () => {
  return (
    <form className="flex justify-between" action={register}>
      <input className="p-1 border-1 border-gray-300 rounded" name="title" />
      <button className="bg-blue-500 text-white hover:bg-blue-300 px-4 py-1 text-sm rounded" type="submit">追加</button>
    </form>
  )
}
