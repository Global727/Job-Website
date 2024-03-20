function Home() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div>
      <Card
        /* header="Balance"*/
        status={status}
        body={show ?
          <BalanceForm setShow={setShow} setStatus={setStatus} /> :
          <BalanceMsg setShow={setShow} />}
      />
    </div>)

}

function BalanceMsg(props) {

};



function BalanceForm(props) {
  const [degree, setDegree] = React.useState('');
  const [title, setTitle] = React.useState('null');
  const [experience, setExperience] = React.useState(5);
  const [experiencemin, setExperiencemin] = React.useState(1);
  const [manage, setManage] = React.useState('null');
  const [location, setLocation] = React.useState('');
  const [contract, setContract] = React.useState('null');
  const [lang1, setLang1] = React.useState('HTML');
  const [lang2, setLang2] = React.useState('CSS');
  const [lang3, setLang3] = React.useState('Javascript');
  const [lang4, setLang4] = React.useState('null');
  const [lang5, setLang5] = React.useState('null');
  const [lang6, setLang6] = React.useState('null');
  const [lang7, setLang7] = React.useState('null');
  const [lang8, setLang8] = React.useState('null');
  const [lang9, setLang9] = React.useState('null');
  const [lang10, setLang10] = React.useState('null');

  function handle() {
    console.log('?', degree, title, experience, experiencemin, manage, location, lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10);
    fetch(`/account/find/${degree}/${title}/${+experience}/${experiencemin}/${manage}/${location}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`)


      .then(response => response.text())
      .then(text => {



        try {




          var objs = JSON.parse(text);

          var results =

            <div className="visible-lg">
              <div className="row row-cols-lg-3 row-cols-md-3 g-3 justify-content-lg-center">

                {

                  objs.map((objs) =>


                    <JobsCard
                      title={objs.name}
                      subtitle={objs.title}
                      body1={objs.city}
                      body2={
                        <><button className="stretched-link" type="button" data-bs-toggle="collapse" href={"#" + objs._id} aria-expanded="false" aria-controls={objs._id}>

                        </button><div className="collapse" id={objs._id}>
                            <div className="jobscard-text">
                              <h1 className="bold">Job Description</h1>
                              <p>{decodeURIComponent(objs.desc)}</p>
                              <p className="relative"><a href={decodeURIComponent(objs.link)} target="_blank">{decodeURIComponent(objs.link)} </a></p>
                              <h1 className="bold">Job Responsibilities</h1>
                              <p>{objs.respo}</p>
                              <h1 className="bold">Requiured Qualifications</h1>
                              <p>{objs.rqual}</p>
                              <h1 className="bold">Preferred Qualifications</h1>
                              <p>{objs.qual}</p>
                            </div>
                          </div></>}

                      //.concat(" ","Years of Experience")
                      body3={objs.experience + ' Years of Experience'}
                      body={


                        [objs.lang1, objs.lang2, objs.lang3, objs.lang4, objs.lang5, objs.lang6, objs.lang7, objs.lang8, objs.lang9, objs.lang10].filter((e) => e !== "null").join(' ')
                      } />)}</div></div>
            ;

          // props.setStatus(text);
          props.setShow(false);
          //setDegree(lang1);
          props.setStatus(results);


          console.log('Success');
        } catch (err) {
          props.setStatus("You Haven't Selected Options for All of the Required Parameters")
          console.log('err:', text);
        }
      });
  }


  return (<>


    
    <div className="needs-validation">
      <select
        className="form-select"
        placeholder="Degree Level?"
        value={degree}
        id="degree"
        required
        onChange={e => setDegree(e.currentTarget.value)}>

        <option defaultValue>Choose Degree</option>
        <option value="No Degree">No Degree</option>
        <option value="AA">Associate</option>
        <option value="BS">Bachelor</option>
        <option value="Master">Master</option>
        <option value="PhD">PhD</option>
      </select>




      <select
        className="form-select"
        placeholder="Years of Experience?"
        id='experience'
        value={experience}
        onChange={e => setExperience(e.currentTarget.value)}>

        <option value="5">Years Coding Experience (5)</option>
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
    </div>
    <select
      className="form-select"
      placeholder="Years of Experience?"
      id='experiencemin'
      value={experiencemin}
      onChange={e => setExperiencemin(e.currentTarget.value)}
      data-bs-toggle="tooltip" data-bs-placement="right"
      title="Allows you to search for jobs that dont exactly meet your years of experience">


      <option value="1">Minimum XP Years to Include (1)</option>
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





    <p className="center"><b>You Must Meet All Requirements Of A Potential Job</b></p>
    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang1}
      onChange={e => setLang1(e.currentTarget.value)}>


      <option value="HTML">Choose Coding Language (HMTL)</option>
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
      <option value='Node.js'>Node.js</option>

    </select>

    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang2}
      onChange={e => setLang2(e.currentTarget.value)}>

      <option value="CSS">Optional Additional Coding Language (CSS)</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang3}
      onChange={e => setLang3(e.currentTarget.value)}>

      <option value="Javascript">Optional Additional Coding Language (Javascript)</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang4}
      onChange={e => setLang4(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang5}
      onChange={e => setLang5(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang6}
      onChange={e => setLang6(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang7}
      onChange={e => setLang7(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang8}
      onChange={e => setLang8(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang9}
      onChange={e => setLang9(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>



    <select
      className="form-select"
      placeholder="Enter Job Here"
      value={lang10}
      onChange={e => setLang10(e.currentTarget.value)}>

      <option defaultValue>Optional Additional Coding Language</option>
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
      <option value='Node.js'>Node.js</option>

    </select>





    



    <button type="submit"
      className="btn btn-primary btn-lg btn2 hide"
      id="captcha"
      onClick={handle}>
      Search
    </button>
    
  </>);
}