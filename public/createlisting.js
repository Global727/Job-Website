function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="light"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
   <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Listing Created</h4>
  <p>Thanks For Using Coding.Jobs</p>
  
  <p class="mb-10"> </p>
  <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        View Listing
    </button>
</div>
  </>);
}

function CreateForm(props){
  const [name, setName]       = React.useState('');
  const [desc, setDesc]       = React.useState('');
  const [degree, setDegree]   = React.useState('');
  const [title, setTitle]   = React.useState('null');
  const [experience, setExperience]   = React.useState('null');
  const [manage, setManage]   = React.useState('null');
  const [location, setLocation]   = React.useState('null');
  const [city, setCity]   = React.useState('null');
  const [contract, setContract]   = React.useState('null');
  const [link, setLink]   = React.useState('');
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
    console.log("name=",name,"=","desc=",desc,"degree=",degree,"title=",title,"experience=",experience,"manage=",manage,"location=",location,"city=",city,"contract=",contract,"lang1=",lang1,"lang2=",lang2,"lang3=",lang3,lang4,lang5,lang6,lang7,lang8,lang9,lang10);
    const url = `/account/create/${name}/${desc}/${degree}/${title}/${experience}/${manage}/${location}/${city}/${contract}/${link}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    props.setShow(false);
  }    

  return (<>

    Business Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Company Name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Job Description<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Job/Comapny Description" 
      value={desc} 
      onChange={e => setDesc(e.currentTarget.value)}/><br/>

    Job URL<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Job URL for your website" 
      value={link} 
      onChange={e => setLink(e.currentTarget.value)} /><br/>

  <select  
      className="form-select" 
      placeholder="What is the Title for this job?" 
      value={title} 
      onChange={e => setTitle(e.currentTarget.value)}>

<option selected>Job Title?</option>
<option value="Entry Level">Entry Level</option>
     <option value="Software Developer">Software Developer</option>
     <option value="Software Engineer">Software Engineer</option>
     <option value="Staff Engineer">Staff Engineer</option>
     <option value="Software Engineer">Software Engineer</option>
     <option value="Senior Software Developer">Senior Software Developer</option>
     <option value="Senior Software Engineer">Senior Software Engineer</option>

    </select><br/>



  
    Qualifications<br/>

    <select
      className="form-select" 
      placeholder="How Many Years of Experience in Total Are You Looking For" 
      value={experience} 
      onChange={e => setExperience(e.currentTarget.value)}>

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
    placeholder="Degree Level?"
    value={degree}
    onChange={e => setDegree(e.currentTarget.value)}>

    <option selected>Degree Level?</option>
    <option value="No Degree">No Degree</option>
      <option value="AA">AA</option>
      <option value="BS">Bachelors</option>
      <option value="Masters">Masters</option>
      <option value="PhD">PhD</option>

    </select><br/>


    <select
      className="form-select" 
      placeholder="Management Experience?" 
      value={title} 
      onChange={e => setManage(e.currentTarget.value)}>

<option selected>Management Experience</option>
    <option value="Yes">Yes</option>
      <option value="No">No</option>
    

    </select><br/>

    <select
      className="form-select" 
      placeholder="Job Location" 
      value={location} 
      onChange={e => setLocation(e.currentTarget.value)}>

<option selected>Choose Job Location</option>

	<option value="Any">Remote</option>
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

    

    </select><br/>

    <input type="input" 
      className="form-control" 
      placeholder="Enter City Name" 
      value={city} 
      onChange={e => setCity(e.currentTarget.value)} /><br/>

    
    <select
      className="form-select" 
      placeholder="Contract Job?" 
      value={contract} 
      onChange={e => setContract(e.currentTarget.value)}>

<option selected>Is This a Contract Job?</option>
    <option value="Yes">Yes</option>
      <option value="No">No</option>
    

    </select><br/>
      
      Languages <br/>
        <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang1} 
      onChange={e => setLang1(e.currentTarget.value)}> 
      
      <option value="Choose Coding Language" selected>Add Coding Language</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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
      
      <option value="none" selected>Add Language (Optional)</option>
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




<p>
<stripe-buy-button
  buy-button-id="buy_btn_1ODLdDIzISM1ETBPPQoUGid9"
  publishable-key="pk_test_51ODLJfIzISM1ETBPFW4gfuUjLK7EeW1nk8I9HM5orRjJ61IlaJSkOeANe86KzIUZAiUNqTYA2dCwYb4mo5FhJn7f00CQ6jMAOp"
>
</stripe-buy-button>
</p>







    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Listing</button>

  </> );
  <p>
<stripe-buy-button
  buy-button-id="buy_btn_1ODLdDIzISM1ETBPPQoUGid9"
  publishable-key="pk_test_51ODLJfIzISM1ETBPFW4gfuUjLK7EeW1nk8I9HM5orRjJ61IlaJSkOeANe86KzIUZAiUNqTYA2dCwYb4mo5FhJn7f00CQ6jMAOp"
>
</stripe-buy-button>
</p>
}
