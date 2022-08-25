import ForgeUI, { render, Fragment, Text, IssuePanel } from '@forge/ui';

const lazyGreeter = (name) => {
    console.error(">>> Greeting lazy", name)
    return () => `Hello ${name}`
}
const peopleGreeter = lazyGreeter('people');

const App = () => {
  return (
    <Fragment>
      <Text>Hello world!</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
