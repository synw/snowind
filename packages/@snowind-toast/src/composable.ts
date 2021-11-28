import { ref } from "vue"

const useToast = () => {
  const isToastVisible = ref<boolean>(false);

  const popToast = async (delay = 1000) => {
    isToastVisible.value = true;
    await new Promise(resolve => setTimeout(resolve, delay));
    isToastVisible.value = false;
  }

  return {
    isToastVisible,
    popToast,
  }
};

export default useToast;