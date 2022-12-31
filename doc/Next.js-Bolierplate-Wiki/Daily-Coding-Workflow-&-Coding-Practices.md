[[_TOC_]]

# Daily Workflow

This workflow is recommended for people who have just started out. This will help you to avoid certain catastrophic mistakes and keep you consistent.

:::mermaid
graph TB;
A([Day Start]) -->B[git pull and update your main] -->C{Are you working on a task/bug?}
C -->|No| D[Pick up a task/bug from the sprint]
C -->|Yes| E[git rebase main, keep your branch up to date]
D --> F[Checkout new branch from main]
E --> G[Coding]
F --> G
G --> H{Have you resolved your task/bug?}
H -->|No| G
H -->|Yes| I{Is there an update to component/function?}
I -->|Yes| J[Create new or update unit test]
I --> |No|K
J --> K{Is there an update to the main?}
K -->|Yes| L[Update main, rebase, and resolve merge conflict]
K -->|No| M[yarn ci and resolve any issues]
L --> M
M --> Z[git rebase, squash the commits into one]
Z --> N[Create PR and fill out the PR description]
N --> O{Has the day ended?}
O -->|Yes| P([Day End])
O -->|No| D
:::

# Tips and Advice

## Workflow

### Ticket-based branch

- Creating a branch based on one specific task/bug is not only easy to track but also easy to revert when we need to. On the other hand, shoving multiple solutions into one branch not only will cause confusion, but also will likely be painful for you when there is a merge conflict.
- Occasionally, one branch may resolve multiple bugs/tasks. That is fine, but make sure to mention those related items in the PR.

### Treat Wiki as code

- This means that you will need to create a branch, squash commits, and make PR for wiki edit as if you are coding.
- You can directly edit the wiki on Azure UI, but you will still need to create a branch first and make edits on that branch.

## Coding

### Correct typing

- Typescript is used for a reason. The more specific you are with your type, the easier it is for others and future you to know how to correctly reuse your code
- Avoid using `any` as a type, `unknown` is fine in special scenarios.
- There are resources in [educational resources](/Next.js-Bolierplate-Wiki/Educational-Resource) to help you type correctly in React

### Format your code

- It keeps the code pretty and consistent. Therefore, it will be a good idea to regularly run the code formatter, which is already configured in this boilerplate.
- It avoids the random space/style changes being part of the commit
  - Sometimes VScode saves code with different spacing based on the system, if you don't use any code formatter or anything, your code may be different from the others by default

### Keep reusability in mind

- When a component/function is being reused/has the potential to be reused, please consider refactoring the code to be more generic and dynamic. The good old saying "Don't reinvent the wheel".
- The idea is not only applied to just components or functions. Styling, PR description, or task description can all be benefitted from a certain degree of reusability.
- Example:
  - Animation, such as fade-in, is regularly used, so it would be a good idea to refactor it and write that styling as a mixin.
  ```css
  @mixin fade($x, $y, $opacity: 1) {
  	$name: fade-in-#{unique-id()};
  	@keyframes #{$name} {
  		0% {
  			transform: translate($x, $y);
  			opacity: 0;
  		}
  		100% {
  			transform: translate(0, 0);
  			opacity: $opacity;
  		}
  	}
  	animation: $name 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  ```

### Modularisation, separating concerns

- Each component, each function, or each stylesheet should be used to address a specific requirement, encapsulating one idea/purpose. There should not be one file that's all-encompassing and each file/folder should be self-contained.
- Ask yourself this when you are about to add new code to a component:
  - What is the original purpose of this component?
  - Is the new addition relevant to the purpose?
  - Does the new addition expand the original purpose?
  - Is it a good idea to add more code to a component with over 400 lines of code?
- Note:
  - When I say a specific requirement, please don't think I am contradicting myself. You still need to keep functions dynamic and generic. The purpose of a component can and should be generic, but the files and code associated should be only used for serving that generic purpose. For instance, a component can be an outline of any kind of button, which is still a button but very generic and flexible. However, you cannot put code such as functions that manage the header's state in that button code because it has nothing to do with a button. Another common example is the SCSS files. People commonly use one SCSS file to style multiple components, which is not ideal because that file is now serving multiple specific purposes instead of one generic one.
