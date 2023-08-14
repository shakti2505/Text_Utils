import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function Textarea(props) {

    const [text, SetText] = useState("");

    const handleUPClick = ()=>{
        // chaning lower case text to upper case 
        let newText = text.toUpperCase();
        SetText(newText);
        props.showAlert("Converted to UpperCase !", "Success")
    }

    const handleLOClick =()=>{
        let newText = text.toLowerCase();
        SetText(newText)
        props.showAlert("Converted to LowerCase !", "Success")

    }


    const handleClearText =()=>{
        SetText("");
        props.showAlert("Cleared text !", "Success")

    }

    const handleCapitilize = () =>{
        const words = text.split(' ');
        for(let i=0; i<words.length; i++){
            const word = words[i]
            words[i] = word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase();
        }
        const capitalizeString = words.join(' ');
        SetText(capitalizeString)
        props.showAlert("Capatilized!!", "Success")

    }

    const handleCopy  = () =>{
        console.log("I am copy")
        var txt = document.getElementById("myBox")
        txt.select();
        txt.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(txt.value)
        props.showAlert("Copied to Clip Board", "Success")
    }

    const countWordsAndLetters = (str) =>{
        const words = str.split(/\s+/).filter(word=>word!=='');
        const letterCount = words.join("").length
        return  {
            words:words.length,
            letters:letterCount
        };
    }

    // changing the value of text area+previous value of "text" variable using onchange event
    const handleOnChange= (e)=>{
        SetText(e.target.value)
    }
    
  return (
    <div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 style={{color:props.mode==='dark'?'black':'light'}}>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{backgroundColor:props.mode==='dark'?'#343a40':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className='btn btn-primary mx-1' onClick={handleUPClick} >Convert to UpperCase</button>
    <button className='btn btn-primary mx-1' onClick={handleLOClick} >Convert to LowerCase</button>
    <button className='btn btn-primary mx-1' onClick={handleClearText} >Clear Text</button>
    <button className='btn btn-primary mx-1' onClick={handleCapitilize} >Capitalize Text</button>
    <button className='btn btn-primary mx-1' onClick={handleCopy} >Copy Text</button>
    </div>
    <div className='container my-3'style={{color:props.mode==='dark'?'black':'light'}} >
        <h2 >Your text Summry</h2>
        {/* <p>{text.split(/\s+/).length} words {text.length} character</p> */}
        <p>{countWordsAndLetters(text).words} Words {countWordsAndLetters(text).letters} Letters</p>
        {/* <p>{0.008*text.split(" ").length } Minute read</p> */}
        <h2>Preview</h2>
        <div className='container my-3'>
        <p>{text}</p>
        </div>
    </div>
    </div>
  )
}

Textarea.propTypes = {heading:PropTypes.string}


