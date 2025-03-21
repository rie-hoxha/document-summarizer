import { useState } from "react";
import "./App.css";
import DocumentInput from "./components/DocumentInput";
import SummarizerButton from "./components/SummarizerButton";
import SummaryDisplay from "./components/SummaryDisplay";
import {motion} from 'framer-motion';
import { Upload } from "antd";
import {UploadOutlined} from "@ant-design/icons";

function App() {
  const [documentText, setDocumentText] = useState("");
  const [summarizedText, setSummarizedText] = useState("");

  const onSummarize = async () => {
    try {
      const response = await fetch("https://api.apyhub.com/ai/summarize-text", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apy-token": process.env.REACT_APP_APY_TOKEN, 
        },
        body: JSON.stringify({"text": documentText}),
      });
  
      const data = await response.json(); // Convert response to JSON
      setSummarizedText(data.data.summary);
      // console.log(data); 
  
    } catch (error) {
      console.error("Error:", error); 
    }
  };
  



  return (
    <div className="App min-h-screen bg-gray-50 p-8">
      
      <div className="max-w-4xl mx-auto">
        <motion.h1
        initial = {{opacity:0, y: -20}}
        animate = {{opacity:1, y: 0}}
        className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Text Summarizer
        </motion.h1>
        <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity: 1 , y:0}}
        className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4"> 
              <label className=" flex items-center gap-2 bg-blue-50 text-blue-500 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                <Upload size={20}/>
                <UploadOutlined/>
                <span>Upload Document</span>
                <input type="file" accept=".txt,.doc,.docx" className="hidden" />
              </label>
              <span className="text-gray-500">or paste your text below</span>
              </div>
              <DocumentInput onTextChange={setDocumentText} />
              <SummarizerButton onSummarize={onSummarize} />
              <SummaryDisplay summarizedText={summarizedText} />
            
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}

export default App;
