const pascalExport =
  'export { default as {{pascalCase name}} } from "./{{pascalCase name}}/{{pascalCase name}}";';
const camelExport =
  'export { default as {{camelCase name}} } from "./{{camelCase name}}/{{camelCase name}}";';

function plop(/** @type {import('plop').NodePlopAPI} */ plop) {
  plop.setGenerator("ui", {
    description: "Create a new UI component",
    prompts: [
      {
        type: "list",
        name: "type",
        message: "Component type",
        choices: ["atom", "molecule", "organism", "view"],
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/ui/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "./config/plop/ui/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/ui/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "./config/plop/ui/Story.tsx.hbs",
      },
      {
        type: "add",
        path: "./src/ui/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
        templateFile: "./config/plop/ui/Test.tsx.hbs",
      },
      {
        type: "append",
        path: "./src/ui/{{type}}s/index.ts",
        template: pascalExport,
      },
    ],
  });

  plop.setGenerator("util", {
    description: "Create a new utility function",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Utility name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/utils/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "./config/plop/utils/Util.ts.hbs",
      },
      {
        type: "add",
        path: "./src/utils/{{camelCase name}}/{{camelCase name}}.test.ts",
        templateFile: "./config/plop/utils/Test.ts.hbs",
      },
      {
        type: "append",
        path: "./src/utils/index.ts",
        template: camelExport,
      },
    ],
  });

  plop.setGenerator("hook", {
    description: "Create a new React hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Hook name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/hooks/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "./config/plop/hooks/Hook.ts.hbs",
      },
      {
        type: "add",
        path: "./src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts",
        templateFile: "./config/plop/hooks/Test.ts.hbs",
      },
      {
        type: "append",
        path: "./src/hooks/index.ts",
        template: camelExport,
      },
    ],
  });

  plop.setGenerator("page", {
    description: "Create a new page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Page name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
        template: `export default function {{pascalCase name}}() { return <div>Hello from {{pascalCase name}} page</div>; }`,
      },
      {
        type: "append",
        path: "./src/pages/index.ts",
        template: pascalExport,
      },
    ],
  });

  plop.setGenerator("feature", {
    description: "Create a new feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Feature name",
      },
    ],

    actions: [
      {
        type: "add",
        path: "./src/features/{{pascalCase name}}/{{pascalCase name}}.tsx",
        template: `export default function {{pascalCase name}}() { return <div>Hello from {{pascalCase name}} feature</div>; }`,
      },
      {
        type: "append",
        path: "./src/features/index.ts",
        template: pascalExport,
      },
    ],
  });
}

export default plop;
