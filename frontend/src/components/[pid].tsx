import TopBar from "./TopBar";
import {problemComps} from "../store/probemDescriptions/index";
import { Problem } from "../store/types/problem";
import ReactHtmlParser from 'react-html-parser';
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useState } from "react";

export default function ProblemDesc() {

    
    const pid = window.location.href;
    const problemTitle = pid.slice(31,pid.length);
    let currentProblem : Problem = {
        
        id: "" ,
        title: "" ,
        problemStatement: "" , 
        examples: [], 
        constraints: "" ,
        order: 0 , 
        starterCode: "" ,
        handlerFunction: ():boolean=>{return false}    ,
        starterFunctionName: "" ,
        
    }
    problemComps.forEach(element => {
        if(element.id === problemTitle){
            currentProblem = element
        }
    });

    const [val ,setVal] = useState(currentProblem.starterCode + "\n\n\n\n")
    
    function handleSubmission(): void {
        const submission = new Function('return '+ val)();
        
        const result = currentProblem.handlerFunction(submission);
        console.log(result)
       
    }

    function handleChange(event : string): void {
        setVal(event);
        
    }

    return (
        
    <div>
        <TopBar title= {currentProblem.title}/>
        <p className="font-bold">
            Description
        </p>
        <div>{ReactHtmlParser(currentProblem.problemStatement)}</div>
        <p className="font-bold">
            Examples
        </p>
        {currentProblem.examples.map((example)=>
        <div className="bg-amber-100 my-2 mx-7">

        <p>Input : {example.inputText}</p>
        <p>Output : {example.outputText}</p>
        </div>
        )}
        <p className="font-bold">
            Constraints
        </p>
        <div className="bg-blue-100 my-2 mx-7">

        {ReactHtmlParser(currentProblem.constraints)}
        </div>
        <div className="m-7 ">
            <ReactCodeMirror 
                value={val}
                theme={vscodeDark}
                onChange={handleChange}
                extensions={[javascript()]}
                
            />

        <button onClick={handleSubmission} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 mx-auto">
                Submit
        </button>
        </div>


        
    </div>
  )
}
