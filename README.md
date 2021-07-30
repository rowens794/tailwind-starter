## Getting Started with storybook

1. npm/yarn run storybook
2. Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.
3. You can start adding the stories by modifying `components/yourcomponent/component.stories..js`. The page auto-updates as you edit the file.

## Component Organization

- Components are classified in two groups:

  - Building Block Components (small individual blocks that are used in the construction of larger components)
  - Presentation Ready Components (that are immediately available to be used in the construction of a page)
  - A Building Block Component is not created until it is actively used in two or more Presentation Ready Components
  - If a Building Block Component is used more than once in its parent, then the Building Block Component will be stored in the same file as the parent component
  - Building Block Components are stored in the components folder
  - Presentation Ready "Application" components are stored in the application-components folder
  - Presentation Ready "Marketing" components are stored in the page-components folder
  - Inside each component folder, individual components are first sorted according to function, and then according to a descriptive name.
# tailwind-starter
# tailwind-starter
