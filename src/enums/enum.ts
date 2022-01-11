export enum taskState {
  todo = "A Fazer",
  doing = "Fazendo",
  backlog = "Acumulado"
}

export function findState(state: string) {
  switch(state) {
    case 'todo':
      return taskState.todo;
    case 'doing':
      return taskState.doing;
    case 'backlog':
      return taskState.backlog;
    default:
      throw new Error('Task state not found');
  }
}