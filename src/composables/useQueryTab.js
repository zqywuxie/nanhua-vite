import { computed, unref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Store the selected key in the URL so reload and browser navigation agree.
export function useQueryTab(items, queryKey = 'tab', clearKeys = []) {
  const route = useRoute();
  const router = useRouter();
  return computed({
    get() {
      const index = unref(items).findIndex(item => item.key === route.query[queryKey]);
      return index >= 0 ? index : 0;
    },
    set(index) {
      const options = unref(items);
      if (!options[index]) return;
      const query = { ...route.query };
      if (index === 0) delete query[queryKey];
      else query[queryKey] = options[index].key;
      clearKeys.forEach(key => delete query[key]);
      router.push({ path: route.path, query, hash: route.hash });
    },
  });
}
