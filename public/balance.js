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
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            //props.setStatus('');
            props.setStatus("Your Result is " + (data.balance) +".");
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
      type="select" 
      as="select"
      className="form-select" 
      placeholder="Enter Job Here">
      <option selected>Choose Coding Language</option>
        <option value="3">HMTL</option>
        <option value="1">Javascript</option>
        <option value="2">Java</option>
        <option value="3">CSS</option>
        <option value="3">SASS</option>
        <option value="3">SCSS</option>
        <option value="3">React.js</option>
        <option value="3">React Native</option>
        <option value="3">AngularJS</option>
        <option value="3">Vue</option>
        <option value="3">TypeScript</option>
        <option value="3">PHP</option>
        <option value="3">Python</option>
        <option value="3">Django</option>
        <option value="3">Flask</option>
        <option value="3">Ruby</option>
        <option value="3">Jekyll</option>
        <option value="3">Swift</option>
        <option value="3">Objective C</option>
        <option value="3">Scala</option>

     
      
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}</select><br/>


      <input type="input" 
      className="form-control" 
      placeholder="Enter language" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>



    <button type="submit" 
      className="btn btn-dark" 
      onClick={handle}>
        Search Jobs
    </button>

  </>);
}