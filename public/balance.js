//dont know why i always have to link index.js to this one this one edits the real page 


function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="light"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-dark" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Search Again
    </button>
  </>);
}

function BalanceForm(props){
  const [lang, setLang]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${lang}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            //props.setStatus('');
            props.setStatus("Your Result is " + (data.name) +".");
            props.setShow(false);
            //setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>

    Enter Skills Below<br/>
    
    <select 
      className="form-select" 
      placeholder="Enter Job Here"
      value={lang} 
      onChange={e => setLang(e.currentTarget.value)}> 
      
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

    <button type="submit" 
      className="btn btn-dark" 
      onClick={handle}>
        Search Jobs
    </button>

  </>);
}