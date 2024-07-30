import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase Was Clicked");
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "success")
  }

  const handleLoClick = ()=>{
    // console.log("UpperCase Was Clicked");
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success")
  }

  const handleClearClick = ()=>{
    // console.log("UpperCase Was Clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Textbox has been Cleared", "success")
  }

  const handleCopyClick = ()=>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to Clipboard", "success")
    // setText(newText)
  }

  const handleRemoveExtraSpaces = ()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success")
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const [Text, setText] = useState("");
  
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#041434':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={Text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy to Clipboard</button>
      <button disabled={Text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleRemoveExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your Text Summary</h2>
      <p>{Text.split(" ").filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read it</p>
      <p>{0.007 * Text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to speak it</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Nothing to preview"}</p>
    </div>
    </>
  ) 
}
