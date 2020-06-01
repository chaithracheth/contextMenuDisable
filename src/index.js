import * as monaco from 'monaco-editor';
import demo from './demo.json'

var jsonCode = [
  JSON.stringify(demo,null,' ')
].join("\n");

var modelUri = monaco.Uri.parse("demo.json"); 
var model = monaco.editor.createModel(jsonCode, "json", modelUri);


console.log(monaco);
const editor=monaco.editor.create(document.getElementById("root"), {
  //value: "function hello() {\n\talert('Hello world!');\n}",
  value:`{demo}`,
  language: "python",
  theme:"vs-dark",
  contextmenu:false,
  model: model
  //minimap: { enabled: false },
 
});
//console.log(demo);

// console.log("get",monaco.editor.getModels());
// editor.createContextKey('undo',true);
// editor.addAction(
//   {
//     id: 'undo_model',
//    label: 'Undo',

//    keybindings: [
//     monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_M
//   ],
//  contextMenuGroupId: '9_cutcopypaste',
//   //contextMenuOrder: 0,
//  //     precondition: 'undo',

//       run: () => {
//        editor.trigger('','undo')
//       },

//   });
// console.log("hello");
  