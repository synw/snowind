<template>
  <div class="mb-8 text-2xl">User</div>
  <div>
    A
    <code class="variable">User</code> class is available to manage the user preferences. Exemple: create
    a
    <code
      class="variable"
    >state.ts</code>
    file in your project to initialize a user:
  </div>
  <code-block :code="code1" lang="typescript" class="mt-5"></code-block>

  <div class="mt-12 mb-8 text-xl">Persistent properties</div>
  <div>Some properties are stored in localstorage to be available across sessions:</div>
  <code-block :code="code2" lang="typescript" class="mt-5"></code-block>

  <div class="mt-5">Available refs:</div>
  <ul class="mx-3 mt-5 space-y-2">
    <li>
      <div class="inline-block font-bold">name</div>: the user name, default is
      <code class="variable">anonymous</code>
    </li>
    <li>
      <div class="inline-block font-bold">isDarkMode</div>: the user dark mode preference, default is
      <code class="variable">false</code>
    </li>
  </ul>

  <div class="mt-12 mb-8 text-xl">Ephemeral properties</div>
  <div>Some user properties are not persistent across sessions:</div>
  <code-block :code="code3" lang="typescript" class="mt-5"></code-block>

  <div class="mt-12 mb-8 text-xl">Install</div>
  <code lang="bash">npm install @snowind/state</code>
  <br />
  <code class="mt-3 text-neutral"># or</code>
  <br />
  <code class="mt-3">yarn add @snowind/state</code>

  <next-bar
    class="mt-24"
    :prev="{ link: '/state/screen', text: 'Screen' }"
    :next="{ link: '/examples/form', text: 'Example form' }"
  ></next-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CodeBlock from "@/widgets/CodeBlock.vue";
import NextBar from "@/widgets/NextBar.vue";

export default defineComponent({
  components: {
    CodeBlock,
    NextBar,
  },
  setup() {
    const code1 = `
    import { User } from "@snowind/state";

    const user = new User();

    export { User };
    `;

    const code2 = `
    import { Ref } from "vue";
    import { user } from "@/state";

    // user name persistent reference
    const usernameRef: Ref<string> = user.name;
    const username: string = user.name.value;

    // dark mode persistent reference
    const isDarkModeOnRef: Ref<boolean> = user.isDarkMode;
    const isDarkModeOn: boolean = user.isDarkMode.value;
    `;

    const code3 = `
    import { user } from "@/state";

    // the user connection state
    const isLoggedInRef: Ref<boolean> = user.isLoggedIn;
    const isLoggedIn: boolean = user.isLoggedIn.value;
    `;

    return {
      code1,
      code2,
      code3,
    }
  }
});
</script>