
import mypic from './image/pic.jpg';

import java from './image/code.jpg';
import './App.css';

function App() {
  return (
    <div >
      <div >
      <img src={java}  className="app-float-right" alt="java"/> 
     
      
         <div>
           <img src={mypic}  className="app-mypic" alt="My Pic"/> 
          </div>
         <div>
           <p>
            <h1> Rita Sharma </h1><br/>
            Full Stack Developer(Java+react)<br/>
            </p>
            <p>
            Email: rita.lr.sharma@gmail.com<br/>
            Contact: 7986839106 
            </p>
         </div>
            <br/>
      <div className="app-table">
      <table >
        <tr>
          <td className="app-td">
            <b>Qualification:</b>
          </td>
          <td className="app-td"> 
            Masters of Computer Application
          </td>
</tr>
<tr>
          <td className="app-td">
            <b>Name:</b>
          </td>
          <td className="app-td"> 
            Rita Sharma
          </td>
          </tr>
          <tr>
          <td className="app-td">
            <b>Phone:</b>
          </td>
          <td className="app-td"> 
          244234234
          </td>
          </tr>
          <tr>
          <td className="app-td">
            <b>Profession:</b>
          </td>
          <td className="app-td"> 
           Full Stack Developer
          </td>
        </tr>
        <tr>
          <td className="app-td">
            <b>Designation:</b>
          </td>
          <td className="app-td"> 
              Software Associate
          </td>
        </tr>
        <tr>
          <td className="app-td">
            <b>Skills:</b>
          </td>
          <td className="app-td"> 
          <ol>
            <li>Java</li>
            <li>Springboot</li>
            <li>React</li>
            <li>Sailpoint</li>
            <li>AWS</li>
        </ol>
          </td>
        </tr>
        <tr>
          <td className="app-td">
            <b>Hobbies:</b>
          </td>
          <td className="app-td"> 
            Reading new skills
          </td>
          </tr>
         
        <tr>
          <td className="app-td">
            <b>Sibblings:</b>
          </td>
          <td className="app-td"> 
           Two sweet sisters
          </td>
        </tr>
        <tr>
          <td className="app-td">
            <b>Marital Status:</b>
          </td>
          <td className="app-td"> 
           Married
          </td>
        </tr>
        
      </table>

      </div>
    
    <div className="app-p">
     <p>  <b> Objective:   </b>
     A believer of excellence, having the zeal to up-skill, being efficient & productive for the company & develop as well as diversify my professional skill-set. ...
     Working in the IT industry for the past 5 years & now looking for a managerial position in the organization.
     To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.
     Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company. </p> 
    </div>
    </div>
    </div>

  );

 
}

export default App;
