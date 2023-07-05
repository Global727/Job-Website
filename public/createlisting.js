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
  const [name, setName]         = React.useState('');
  const [desc, setDesc]       = React.useState('');
  const [lang, setLang] = React.useState('');

  function handle(){
    console.log(name,desc,lang);
    const url = `/account/create/${name}/${desc}/${lang}`;
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
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Job Description<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter Description" 
      value={desc} 
      onChange={e => setDesc(e.currentTarget.value)}/><br/>

    Languages<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter Language" 
      value={lang} 
      onChange={e => setLang(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Listing</button>

  </> );
}