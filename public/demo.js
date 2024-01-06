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
    />
  )

}


function BalanceMsg(props){

  ;
}

function BalanceForm(props){
  const [degree, setDegree]   = React.useState('No Degree');
  const [title, setTitle]   = React.useState('Software Developer');
  const [experience, setExperience]   = React.useState('1');
  const [manage, setManage]   = React.useState('Yes');
  const [lang1, setLang1]   = React.useState('HTML'); 
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
          body={objs.desc + objs.map}
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
} return(
  setTimeout(handle(), 2000));
};
 