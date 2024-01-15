function Home(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  
  return (
  
    <Card
     /* header="Balance"*/
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />)
      
}


function BalanceMsg(props){

  ;
}

function BalanceForm(props){
  const [degree, setDegree]   = React.useState('null');
  const [title, setTitle]   = React.useState('null');
  const [experience, setExperience]   = React.useState('null');
  const [manage, setManage]   = React.useState('null');
  const [lang1, setLang1]   = React.useState('null'); 
  const [lang2, setLang2]   = React.useState('null');
  const [lang3, setLang3]   = React.useState('null'); 
  const [lang4, setLang4]   = React.useState('null'); 
  const [lang5, setLang5]   = React.useState('null'); 
  const [lang6, setLang6]   = React.useState('null'); 
  const [lang7, setLang7]   = React.useState('null'); 
  const [lang8, setLang8]   = React.useState('null'); 
  const [lang9, setLang9]   = React.useState('null'); 
  const [lang10, setLang10]   = React.useState('null'); 

  function handle(){
    console.log('?',degree,title,experience,manage,lang1,lang2,lang3,lang4,lang5,lang6,lang7,lang8,lang9,lang10);
  fetch(`/account/find/${degree}/${title}/${experience}/${manage}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`)
 
    
    .then(response => response.text())
    .then(text => {
      
   
   
        try {
            var objs = JSON.parse(text);
            //props.setStatus(text);
            props.setShow(false);
            //setDegree(lang1);
            props.setStatus((objs.map((objs) => 
           
            <JobsCard 
              
              title= {objs.title}
              subtitle= {objs.name}  
              body={objs.desc}

              
                  /> 
                )
              )
            );
          
            console.log('JSON:', text, objs, objs[0].name);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text, objs[0].name);
        }
    });
  } 

  return (<>
   
    

    <select 
      className="form-select" 
      placeholder="Degree Level?" 
      value={degree} 
      onChange={e => setDegree(e.currentTarget.value)}><br/>

<option selected>What Is Your Degree Level</option>
        <option value="No Degree">No Degree</option>
        <option value="AA">Associate</option>
        <option value="BS">Bachelor</option>
        <option value="Master">Master</option>
        <option value="PhD">PhD</option>
        </select><br/>
        
        
        <select 
      className="form-select" 
      placeholder="Management Experience?"
      value={manage} 
      onChange={e => setManage(e.currentTarget.value)}><br/>

<option selected>Management Experience?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        </select><br/>

        <select 
      className="form-select" 
      placeholder="Job Title"
      value={title} 
      onChange={e => setTitle(e.currentTarget.value)}><br/>

<option selected>Job Title</option>
        <option value="Software Developer">Software Developer</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Staff Engineer">Staff Engineer</option>
        <option value="Software Engineer">Software Engineer</option>
        </select><br/>

        
        <select 
      className="form-select" 
      placeholder="Years of Experience?"
      value={experience} 
      onChange={e => setExperience(e.currentTarget.value)}><br/>

<option selected>Years Experience</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select><br/>

      
    

    
    <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang1} 
      onChange={e => setLang1(e.currentTarget.value)}> 
      
      <option selected>Choose Coding Language</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>

      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang2} 
      onChange={e => setLang2(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang3} 
      onChange={e => setLang3(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang4} 
      onChange={e => setLang4(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang5} 
      onChange={e => setLang5(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang6} 
      onChange={e => setLang6(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang7} 
      onChange={e => setLang7(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang8} 
      onChange={e => setLang8(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang9} 
      onChange={e => setLang9(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang10} 
      onChange={e => setLang10(e.currentTarget.value)}> 
      
      <option selected>Choose Additional Coding Language (Optional)</option>
        <option value="HTML">HMTL</option>
        <option value="Javascript">Javascript</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="SASS">SASS</option>
        <option value="SCSS">SCSS</option>
        <option value="React.js">React.js</option>
        <option value="React Native">React Native</option>
        <option value="AngularJS">AngularJS</option>
        <option value="Vue">Vue</option>
        <option value="TypeScript">TypeScript</option>
        <option value="PHP">PHP</option>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Ruby">Ruby</option>
        <option value="Jekyll">Jekyll</option>
        <option value="Swift">Swift</option>
        <option value="Objective C">Objective C</option>
        <option value="Scala">Scala</option>
        <option value='a'>a</option>

      </select><br/>
   



   
    

   
   
    <button type="submit" 
      className="btn btn-primary btn-lg btn2" 
      onClick={handle}>
        Search
    </button>

  </>);
}