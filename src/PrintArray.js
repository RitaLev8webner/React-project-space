import React from 'react';



export default class PrintArray extends React.Component {

    constructor(props){
            super(props);
            this.state ={
                 numArray : ["Raj","Sahil","Rashmi","Riya"]

            };
    }
    /* Worked well
    render() {
     return (
     <div>
         {this.state.numArray.map((num) => (
            <p> num = {num}</p>
        ))}
     </div>
     );
    
  }*/


  /*render() {
    return (
    <div>
        {this.state.numArray.forEach((item ,index) =>(
          document.write("index="+index+"  name="+ item+"<br/>")
          // not able to use html tags here why
         ) )}
        
        
        
    </div>
    );
   }*/


   render() {
       let text =[];
   
        {this.state.numArray.forEach((item ,index) =>(
        text.push("<div>item="+item +"</div>" )
         ) )}
        
        
        
   return (
    <ul>{text}</ul>   
    );
        
    
   }


}