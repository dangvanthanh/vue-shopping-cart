import { useRoute } from 'vue-router'

export function useParam(key: string) {
	return useRoute().params[key]?.toString()
}
