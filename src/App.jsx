import React from 'react';
//bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdownText: '',
      convertedHtml: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let markdownText = "# Welcome to my React Markdown Previewer!\n## This is heading 2\n### Here's some other cool stuff with markdown:\nHeres some inline code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLIne, lastLine) {\n  if (firstLine == '```' && lastLine == '```') { \n    return multiLineCode\n  }\n}```\nYou can also make text **bold**... whoa!\n\nOr _italic_.\n\nOr... wait for it... **_both!_**\n\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n    - With different indentation levels.\n      - That look like this.\n\n\n1. And there are numbered lists too.\n2. The list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)";



    let convertedHtml = window.marked(markdownText || '');

    this.setState({
      markdownText,
      convertedHtml
    });
  }

  handleChange(e) {
    let markdownText = e.target.value,
      convertedHtml = window.marked(markdownText || '');
    this.setState({
      markdownText,
      convertedHtml
    });
  }

  render() {
    return (
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">
              <img 
              src="https://www.nicepng.com/png/detail/187-1870373_44191585-markdown-logo.png" 
              width="30" height="30" class="d-inline-block align-top" alt="" />
                &nbsp;&nbsp;&nbsp; Markdown Previewer
            </a>
            <span class="navbar-text">
              You'll never see a better markdown previewer
  </span>
          </nav>
        
        <div className="row">
          <div className="col-md-6">
            <textarea className="form-control border-0" style={{ height: '700px' }} id="editor" value={this.state.markdownText} onChange={this.handleChange}></textarea>
          </div>
          <div id="preview" className="card card-body bg-light col-md-6" dangerouslySetInnerHTML={{ __html: this.state.convertedHtml }} />
        </div>

      </div>
    );
  }
}


export default App;
