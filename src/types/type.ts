import { Dispatch, SetStateAction } from "react"

import { taskState } from "../enums/enum"

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
  description: string,
  state: taskState
}
