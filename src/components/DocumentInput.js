import { useState } from "react";


function DocumentInput({onTextChange}){
    const [text,setText] = useState("");


    const handleSetText = (event) =>{
        setText(event.target.value) //updating local state
        onTextChange(event.target.value) //send text to app.js
    }


    return(
        <div className="mb-4">
            <textarea
                value={text} 
                onChange={handleSetText} 
                placeholder="Enter your text here..."
                className="w-full h-64 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
        </div>
    )

}

export default DocumentInput;
