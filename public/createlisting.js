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
  const [manage, setManage]   = React.useState('');
  const [lang1, setLang1]     = React.useState('');
  const [lang2, setLang2]     = React.useState('');
  const [lang3, setLang3]     = React.useState('');
  const [lang4, setLang4]     = React.useState('');
  const [lang5, setLang5]     = React.useState('');
  const [lang6, setLang6]     = React.useState('');
  const [lang7, setLang7]     = React.useState('');
  const [lang8, setLang8]     = React.useState('');
  const [lang9, setLang9]     = React.useState('');
  const [lang10, setLang10]   = React.useState('');

  function handle(){
    console.log(name,desc,lang1);
    const url = `/account/create/${name}/${desc}/${lang1}`;
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

    Experience<br/>

    <input type="input" 
      className="form-control" 
      placeholder="Degree Level?" 
      value={degree} 
      onChange={e => setDegree(e.currentTarget.value)}/><br/>
        
    <input type="input" 
      className="form-control" 
      placeholder="Management Experience?" 
      value={manage} 
      onChange={e => setManage(e.currentTarget.value)}/><br/>

    <input type="input" 
      className="form-control" 
      placeholder="Enter Language" 
      value={lang1} 
      onChange={e => setLang1(e.currentTarget.value)}/><br/>

    <input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang2} 
      onChange={e => setLang2(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang3} 
      onChange={e => setLang3(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang4} 
      onChange={e => setLang4(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang5} 
      onChange={e => setLang5(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang6} 
      onChange={e => setLang6(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang7} 
      onChange={e => setLang7(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang8} 
      onChange={e => setLang8(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang9} 
      onChange={e => setLang9(e.currentTarget.value)}/><br/>

<input type="input" 
      className="form-control" 
      placeholder="Enter Additional Language (Optional)" 
      value={lang10} 
      onChange={e => setLang10(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Listing</button>

  </> );
}