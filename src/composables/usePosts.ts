import { computed } from 'vue'

export function usePosts() {
  const posts = useDocuments('~/pages/thoughts')
  return computed(() =>
    posts.value.sort((a, b) => {
      const aDate = new Date(a.date)
      const bDate = new Date(b.date)
      return bDate.getTime() - aDate.getTime()
    })
  )
}
