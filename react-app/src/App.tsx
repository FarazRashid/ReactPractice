import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ornare
        nunc, sed aliquam justo. Nulla facilisi. Duis sapien turpis, scelerisque
        vel porttitor a, suscipit et ante. Vivamus imperdiet massa quis turpis
        dapibus pharetra. Aenean tincidunt metus eu urna dapibus, non sagittis
        est pellentesque. Aliquam eu erat nunc. Sed congue blandit leo eu
        sodales. Vestibulum venenatis faucibus velit, non elementum purus
        tincidunt imperdiet. Nulla eget rutrum quam. Vestibulum bibendum lacus
        sit amet ipsum euismod pulvinar. Vivamus in lacinia metus, in tristique
        urna. Vestibulum eget massa suscipit, vestibulum erat sit amet, rhoncus
        nibh.
      </ExpandableText>
    </div>
  );
}

export default App;
