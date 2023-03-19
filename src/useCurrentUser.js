import { computed } from "vue";
import { useStore } from "vuex";

export default function useCurrentUser() {
  const store = useStore();
  const currentUser = computed(() => store.getters.currentUser);
  return {
    currentUser
  };
}
