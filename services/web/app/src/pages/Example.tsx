import { useAppStore } from "src/store";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useAppStore();

    return () => <div>Hello World {store.state.example}</div>;
  },
});
