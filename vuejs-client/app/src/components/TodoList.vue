<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>

  <table>
    <thead>
    <tr>
      <th>Task</th>
      <th>Completed</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="todo of result.todos" :key="todo.id">
      <td>{{ todo.text }}</td>
      <td>{{ todo.completed }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import { useQuery } from '@vue/apollo-composable'
import { GET_TODOS } from '@/graphql/queries';

export default {
  setup () {
    const { result, loading, error } = useQuery(GET_TODOS)

    return {
      result,
      loading,
      error,
    }
  },
}
</script>
