import * as React from "react";
import { render } from "react-dom";
import * as monaco from 'monaco-editor';
//import Editor, { EditorProps, Monaco, monaco } from "@monaco-editor/react";
//import Editor,{ monaco } from '@monaco-editor/react';
function App() {
  return (
   monaco.editor.create(document.getElementById('root'), {
	value: "function hello() {\n\talert('Hello world!');\n}",
  language: "javascript",
  theme:"vs-dark",
  width:"800",
  height:"600"
})

  );
}

export default App;
