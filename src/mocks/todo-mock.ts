export type Mock = {
  id: `${string}-${string}-${string}-${string}-${string}`
  title: string
  completed: boolean
  description?: string
}

export const mockToDoList: Mock[] = [
  {
    id: crypto.randomUUID(),
    title: 'todo 1',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'todo 2',
    completed: false,
  },
  {
    id: crypto.randomUUID(),
    title: 'todo 3',
    completed: false,
  },
]
