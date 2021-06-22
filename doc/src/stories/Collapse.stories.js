import '../assets/styles/tailwind.css';
import CollapseWidget from './CollapseWidget.vue';

export default {
  component: CollapseWidget,
  title: "Components/Collapse",
};

const Template = (args) => ({
  components: { CollapseWidget },
  setup() {
    return { args };
  },
  template: `
   <CollapseWidget v-bind="args" />
  `,
});

export const Collapse = Template.bind({});


