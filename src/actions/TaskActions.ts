'use server'

import { TaskType } from "@/app/(authenticated)/page";
import { getAccessToken } from "@/utils/auth";
import { revalidatePath } from "next/cache";

export async function fetchTasks() {
  const res = await fetch(`${process.env.TASK_API_ENDPOINT_BASE}/tasks`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAccessToken()}`,
    },
  });
  if (res.status === 200) {
    const json = await res.json();
    return json.tasks;
  } else {
    return [];
  }
};

export async function register(formData: FormData) {
  const title = formData.get('title');
  const res = await fetch(`${process.env.TASK_API_ENDPOINT_BASE}/task`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAccessToken()}`,
    },
    body: JSON.stringify({ title: title })
  });
  if (res.ok) revalidatePath('/');
};

export async function updateById(task: TaskType) {
  const res = await fetch(`${process.env.TASK_API_ENDPOINT_BASE}/task/${task.key}`, {
    method: "put",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAccessToken()}`,
    },
    body: JSON.stringify({ title: task.title, isDone: task.isDone })
  });
  if (res.ok) revalidatePath('/');
};

export async function deleteById(key: string) {
  const res = await fetch(`${process.env.TASK_API_ENDPOINT_BASE}/task/${key}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${await getAccessToken()}`,
    },
  });
  if (res.ok) revalidatePath('/');
};
