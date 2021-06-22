import '../assets/styles/tailwind.css';
import SwitchWidget from "./SwitchWidget.vue";

export default {
  component: SwitchWidget,
  title: "Components/Switch",
};

const Template = (args) => ({
  components: { SwitchWidget },
  setup() {
    return { args };
  },
  template: `
  <div class="p-8" :class="{'dark':args.darkVariant === true,'bg-background-dark':args.darkVariant === true}">
    <SwitchWidget v-bind="args" class="dark:text-foreground-dark" />
  </div>
  `,
});

export const Switch = Template.bind({});