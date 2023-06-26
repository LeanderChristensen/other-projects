import React from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

interface AppState {
	text: string;
}

marked.setOptions({
	breaks: true
});

class App extends React.Component<{}, AppState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			text: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
	return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
	 - With different indentation levels.
		- That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		this.setState({text: event.target.value });
	}
	createMarkup() {
		return { __html: marked.parse(this.state.text) as string };
	}
	render() {
		return (
			<>
				<div id="editorWrapper">
    				<textarea className="form-control" id="editor" rows={10} onChange={this.handleChange} value={this.state.text}></textarea>
				</div>
    			<div id="preview" dangerouslySetInnerHTML={this.createMarkup()}></div>
			</>
		);
	}
}

export default App;
