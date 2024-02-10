import { createPlayground, getPlaygroundUrl } from "livecodes";
const svelteConfig = {
    title: "@neoconfetti/svelte",
    activeEditor: "script",
    script: {
        language: "svelte",
        content: `
<script>
	import { confetti } from '@neoconfetti/svelte';
</script>

<div use:confetti={{ particleSize: 6 }} />   
`.trimStart(),
    },
};
createPlayground("#svelte-playground", { config: svelteConfig });
document.querySelector("#svelte-link").href =
    getPlaygroundUrl({ config: svelteConfig });
const reactConfig = {
    title: "@neoconfetti/react",
    activeEditor: "script",
    script: {
        language: "jsx",
        content: `
import { Confetti } from '@neoconfetti/react';

export default () => <Confetti particleSize={6} />;
`.trimStart(),
    },
};
createPlayground("#react-playground", { config: reactConfig });
document.querySelector("#react-link").href =
    getPlaygroundUrl({ config: reactConfig });
const vueConfig = {
    title: "@neoconfetti/vue",
    activeEditor: "script",
    script: {
        language: "vue",
        content: `
<script setup>
import { vConfetti } from '@neoconfetti/vue';
</script>

<template>
  <div v-confetti="{ particleSize: 6 }" />
</template>
`.trimStart(),
    },
};
createPlayground("#vue-playground", { config: vueConfig });
document.querySelector("#vue-link").href =
    getPlaygroundUrl({ config: vueConfig });
const solidConfig = {
    title: "@neoconfetti/solid",
    activeEditor: "script",
    script: {
        language: "solid.tsx",
        content: `
import type { Component } from 'solid-js';
import { createConfetti } from '@neoconfetti/solid';

function App(): Component {
	const { confetti } = createConfetti();

	return <div use:confetti={{ particleSize: 6 }} />;
}

export default App;
`.trimStart(),
    },
};
createPlayground("#solid-playground", { config: solidConfig });
document.querySelector("#solid-link").href =
    getPlaygroundUrl({ config: solidConfig });
const vanillaConfig = {
    title: "@neoconfetti/vanilla",
    activeEditor: "script",
    markup: {
        language: 'html',
        content: `<div id="confetti"></div>`
    },
    script: {
        language: "javascript",
        content: `
import { Confetti } from "@neoconfetti/vanilla";

const confetti = new Confetti(document.querySelector("#confetti"), {
  particleSize: 6,
});

// Explode the confetti
confetti.explode();
`.trimStart(),
    },
};
createPlayground("#vanilla-playground", { config: vanillaConfig });
document.querySelector("#vanilla-link").href =
    getPlaygroundUrl({ config: vanillaConfig });
