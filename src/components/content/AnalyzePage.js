import React from "react"

function AnalyzePage(){
    function giveArray(num) {
      let newNum = num
      let results = [num]
      for(var i = 0; i < 100; i++){
        results.push(newNum + num)
        newNum += num;
      }
      return results
    }
  
    function findCommonMultiple(x, y ,z){
      let xArray = giveArray(x)
      let yArray = giveArray(y)
      let zArray = giveArray(z)
      let common = null
      
      for(var i = 0; i < xArray.length; i++){
        let numberToBeChecked = xArray[i]
        console.log('number', numberToBeChecked)
        console.log("here", yArray.some(x => x === numberToBeChecked))
        console.log("here", zArray.some(x => x === numberToBeChecked))
        if(yArray.some(x => x === numberToBeChecked) && zArray.some(x => x === numberToBeChecked)){
          common = numberToBeChecked
          console.log('commoon', common)
          return common
        } 
        
      }
      return common
    }
  
    return (
      <div>
        <h1>Analyze</h1>
        <p>Here we will have some kind of way for selecting a specific dream 
          to be analyzed. And then the user will be asked relevant questions
          about their dream. For example he will be asked to write down all their 
          dream characters he met in the dream. These markups will also 
          be saved into a database in order to store relative data
          about dreamer's dreams for further analysis and practice.
        </p>
       
        <p>{findCommonMultiple(5,6,7)}</p>
      </div>
    )
  }

  export default AnalyzePage