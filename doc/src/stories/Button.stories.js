import '../assets/styles/tailwind.css';
import Button from './Button.vue';

export default {
  component: Button,
  title: "Css/Buttons",
};

const Template = (args) => ({
  setup() {
    return { args };
  },
  template: `
    <div class="flex space-x-3 p-8" :class="{'dark':args.darkVariant === true,'bg-background-dark':args.darkVariant === true}">
      <button class="btn" v-bind="args">Default</button>
      <button class="btn primary" v-bind="args">Primary</button>
      <button class="btn secondary" v-bind="args">Secondary</button>
      <button class="btn neutral" v-bind="args">Neutral</button>
      <button class="btn light" v-bind="args">Light</button>
      <button class="btn success" v-bind="args">Success</button>
      <button class="btn warning" v-bind="args">Warning</button>
      <button class="btn danger" v-bind="args">Danger</button>
    </div>
  `,
});
export const Overview = Template.bind({});
Overview.argTypes = {
  colorVariant: {
    control: null
  },
  label: {
    control: null
  },
}

const Template2 = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: `
  <div class="p-8" :class="{'dark':args.darkVariant === true,'bg-background-dark':args.darkVariant === true}">
    <Button v-bind="args" />
  </div>`,
});

export const ButtonTypes = Template2.bind({});

ButtonTypes.argTypes = {
  colorVariant: {
    options: ['primary', 'secondary', 'neutral', 'light', 'danger', 'warning', 'success'],
    control: { type: 'select' }
  },
}