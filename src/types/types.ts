import { Dispatch, SetStateAction } from "react"

export type TaskContextData = {
  tasks: task[],
  setTasks: Dispatch<SetStateAction<task[]>>
}

export type NewTaskModalContextData = {
  handleOpenNewTaskModal: () => void,
  handleCloseNewTaskModal: () => void,
  isNewTaskModalOpen: boolean
}

export type task = {
  title: string,
  text: string,
  state: taskState
}

export enum taskState {
  "To Do" = 1,
  "Doing" = 2,
  "Backlog" = 3
}