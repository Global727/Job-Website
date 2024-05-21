function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div className="create">
    <Card
      bgcolor="light"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow} setStatus={setStatus}/> : 
        <CreateMsg setShow={setShow}/>}
    /></div>
  )
}







function CreateMsg(props){
  return(<>
   <div className="alert alert-success" role="alert">
  <h4 className="alert-heading">Listing Created</h4>
  <p>Thanks For Using StackHire.US</p>
  
  <p className="mb-10"> </p>
  <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Make Another Listing
    </button>
</div>
  </>);
}

function CreateForm(props){
  const [name, setName]       = React.useState(' ');
  const [desc, setDesc]       = React.useState(' ');
  const [degree, setDegree]   = React.useState(' ');
  const [title, setTitle]     = React.useState(' ');
  const [experience, setExperience]   = React.useState();
  const [ndxp, setNdxp]       = React.useState(0);
  const [bsxp, setBsxp]       = React.useState(0);
  const [manage, setManage]   = React.useState(' ');
  const [location, setLocation]= React.useState('Choose Job Location');
  
  const [city, setCity]       = React.useState(' ');
  const [contract, setContract]   = React.useState(' ');
  const [respo, setRespo]     = React.useState(' ');
  const [qual, setQual]       = React.useState(' ');
  const [rqual, setRqual]     = React.useState(' ');
  const [link, setLink]       = React.useState(' ');
  const [lang1, setLang1]     = React.useState('null');
  const [lang2, setLang2]     = React.useState('null');
  const [lang3, setLang3]     = React.useState('null');
  const [lang4, setLang4]     = React.useState('null');
  const [lang5, setLang5]     = React.useState('null');
  const [lang6, setLang6]     = React.useState('null');
  const [lang7, setLang7]     = React.useState('null');
  const [lang8, setLang8]     = React.useState('null');
  const [lang9, setLang9]     = React.useState('null');
  const [lang10, setLang10]   = React.useState('null');




  function handle(){
    

    

    console.log( "create success");

    
    var url = `/account/create/${encodeURIComponent(name)}/${encodeURIComponent(desc)}/${degree}/${title}/${experience}/${ndxp}/${bsxp}/${manage}/${location}/${encodeURIComponent(city)}/${contract}/${encodeURIComponent(respo)}/${encodeURIComponent(qual)}/${encodeURIComponent(rqual)}/${encodeURIComponent(link)}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data); 
      
    })();
      props.setShow(false);

  }
  return (<>
  
    <p>Business Name</p>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Company Name" 
      value={name}
      onChange={e => setName(e.currentTarget.value)} /> 

    <p>Job Description</p> 
    <textarea
      className="form-control" 
      placeholder="Enter Job/Company Description" 
      value={desc} 
      onChange={e => setDesc(e.currentTarget.value)}/>

    <p>Responsibilities</p>
    <textarea  
      className="form-control" 
      placeholder="Enter Job Responsibilies/Duties" 
      value={respo} 
      onChange={e => setRespo(e.currentTarget.value)}/>

    <p>Required Qualifications</p>
    <textarea
      className="form-control" 
      placeholder="Enter Required Qualifications" 
      value={rqual} 
      onChange={e => setRqual(e.currentTarget.value)}/>

     <p>Preferred Qualifications</p>
    <textarea 
      className="form-control" 
      placeholder="Enter Qualifications" 
      value={qual} 
      onChange={e => setQual(e.currentTarget.value)}/>


<p>Job URL (https:// required)</p>
    <input type="input" 
      className="form-control" 
      placeholder="''https://'' required" 
      value={link} 
      onChange={e => setLink(e.currentTarget.value)} />
   
  <select  
      className="form-select" 
      placeholder="What is the Title for this job?" 
      value={title}
      onChange={e => setTitle(e.currentTarget.value)}>

<option defaultValue>Job Title?</option>
     <option value="Entry Level">Entry Level</option>
     <option value="Software Developer">Software Developer</option>
     <option value="Software Engineer">Software Engineer</option>
     <option value="Staff Engineer">Staff Engineer</option>
     <option value="Software Engineer">Software Engineer</option>
     <option value="Senior Software Developer">Senior Software Developer</option>
     <option value="Senior Software Engineer">Senior Software Engineer</option>
     <option value="Full Stack Engineer">Full Stack Engineer</option>

    </select>


  


    <select
      className="form-select" 
      placeholder="How Many Years of Experience in Total Are You Looking For" 
      value={experience} 
      onChange={e => setExperience(e.currentTarget.value)}>

    <option defaultValue>Years Experience</option>
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>

    </select>   
   <p>Degree Level</p>
      <select
    className="form-select"
    placeholder="Degree Level?"
    value={degree}
    onChange={e => setDegree(e.currentTarget.value)}>

    <option defaultValue>Degree Level?</option>
     <option value="No Degree">No Degree</option>
        <option value="AA">Associate</option>
        <option value="BS">Bachelor</option>
        <option value="Master">Master</option>
        <option value="PhD">PhD</option>
        </select>
    <p>How Many Additional Years to Equate No Degree/Certificate With Higher Degree</p>
    <select
      className="form-select" 
      placeholder="No Degree Required If You Have Experience?" 
      value={ndxp} 
      onChange={e => setNdxp(e.currentTarget.value)}
      title={"Only Necessary If Applicants with No Degree or Bootcamp Require Extra Years of Experience to Equate Higher Degree"}>
      <option value="0">0</option>
      <option value="1" >1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>

    </select>
    <p>How Many Additional Years to Equate Bachelors With Higher Degree</p>
    <select
      className="form-select" 
      placeholder="No Degree Required If You Have Experience?" 
      value={bsxp} 
      onChange={e => setBsxp(e.currentTarget.value)}
      title={"Only Necessary If Applicants with Bachelors Degree Require Extra Years of Experience To Equate Masters or PHD"}>
      <option value="0">0</option>
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

    </select>    
    <select
      className="form-select" 
      placeholder="Management Experience?" 
      value={manage} 
      onChange={e => setManage(e.currentTarget.value)}>

    <option defaultValue>Management Experience</option>
    <option value="Yes">Yes</option>
      <option value="No">No</option>
    

    </select>    

    <select
      className="form-select" 
      placeholder="Contract Job?" 
      value={contract} 
      onChange={e => setContract(e.currentTarget.value)}>

<option defaultValue>Is This a Contract Job?</option>
    <option value="Yes">Yes</option>
      <option value="No">No</option>
    

    </select>  
    <select
      className="form-select" 
      placeholder="Job Location" 
      value={location} 
      onChange={e => setLocation(e.currentTarget.value)}>

<option defaultValue>Choose Job Location</option>

	<option value="Remote">Remote</option>
  <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>

    

    </select>
    <p>Enter City Name</p>
    <input type="input" 
      className="form-control" 
      placeholder="Enter City Name" 
      value={city} 
      onChange={e => setCity(e.currentTarget.value)} />
      
         
    
      <p className="red">Applicants will only be shown your listing if they the parameters you set below.</p>
      <p>Languages</p> 
        <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang1} 
      onChange={e => setLang1(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Coding Language</option>
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

      </select>
         <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang2} 
      onChange={e => setLang2(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang3} 
      onChange={e => setLang3(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang4} 
      onChange={e => setLang4(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang5} 
      onChange={e => setLang5(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang6} 
      onChange={e => setLang6(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang7} 
      onChange={e => setLang7(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang8} 
      onChange={e => setLang8(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang9} 
      onChange={e => setLang9(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>   


      <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang10} 
      onChange={e => setLang10(e.currentTarget.value)}> 
      
      <option defaultValue="none">Add Language (Optional)</option>
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

      </select>


    
    

    
    
    

    
 
  
   




    <button type="submit" 
      className="btn btn2 btn-primary btn-lg hide" 
      id="captcha"
      onClick={handle}>Create Listing</button>
    
    
 


  </> )
  

  
  
  ;

}
