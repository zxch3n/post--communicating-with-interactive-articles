// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
// TODO: disable before publishing

import Example from "./diagrams/svelte-example.svelte";
import ResearchPracticeTable from "./diagrams/research-x-practice-table.svelte"
import TOC from "./diagrams/toc.svelte"
import ApplicationTabs from "./diagrams/application-tabs/application-tabs.svelte"
import Horse from "./diagrams/horse.svelte"
import GutterTest from "./diagrams/gutter.svelte"
import ExampleTable from "./diagrams/example-table.svelte"

// lazily initialize any diagram below the fold. E.G:

// const exampleTag = document.getElementById("svelte-example-dfigure");
// let example;
// exampleTag.addEventListener("ready", () => {
	// const target = exampleTag.querySelector("#svelte-example-target");
	// example = new Example({ target });
// });

const researchPracticeTable = new ResearchPracticeTable({
	target: document.getElementById('research-x-practice')
});

const toc = new TOC({
	target: document.getElementById('toc')
});

const applicationTabs = new ApplicationTabs({
	target: document.getElementById('applications-tab')
});

const gutterTest = new GutterTest({
	target: document.getElementById('gutter-test')
});

const horse = new Horse({
	target: document.getElementById('horse')
});

const exampleTable = new ExampleTable({
	target: document.getElementById('example-table')
});