
function SummarizerButton({onSummarize}){



    return(
        <button 
            onClick={onSummarize} 
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-300"
        >
           <span>Summarize</span>
        </button>

    )
}

export default SummarizerButton;
