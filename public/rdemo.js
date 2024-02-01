//click on ad and the description starts to show expanding the card


function Demo(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  

  
  return (
    <div>
    <Card
     
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> : 
        <Jobs setShow={setShow}/>}
    /> 
</div>
  )

}

/*
function hideDesc() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


} ;

var popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
var popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

 */

function BalanceForm(props){
  const [degree, setDegree]   = React.useState('No Degree');
  const [title, setTitle]   = React.useState('Software Developer');
  const [experience, setExperience]   = React.useState('1');
  const [manage, setManage]   = React.useState('Yes');
  const [location, setLocation]   = React.useState('FL');
  const [lang1, setLang1]   = React.useState('HTML'); 
  const [lang2, setLang2]   = React.useState('Javascript');
  const [lang3, setLang3]   = React.useState('null'); 
  const [lang4, setLang4]   = React.useState('null'); 
  const [lang5, setLang5]   = React.useState('null'); 
  const [lang6, setLang6]   = React.useState('null'); 
  const [lang7, setLang7]   = React.useState('null'); 
  const [lang8, setLang8]   = React.useState('null'); 
  const [lang9, setLang9]   = React.useState('null'); 
  const [lang10, setLang10]   = React.useState('null'); 

  function handle(){
    console.log('?',degree,title,experience,manage,location,lang1,lang2,lang3,lang4,lang5,lang6,lang7,lang8,lang9,lang10);
  fetch(`/account/find/${degree}/${title}/${experience}/${manage}/${location}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`)
 
    
    .then(response => response.text())
    .then(text => {
      
   
   
      try {
        var objs = JSON.parse(text);
        


       
        
       
       
        
        var results =
            
            
            <div class="row row-cols-1 row-cols-md-3 g-4"> 
              
            {
           
              objs.map((objs) => 
              
              
              <JobsCard
              title={objs.name}
              subtitle={objs.title}
              body1={objs.city}
              body2={objs.desc}
              body3={objs.experience.concat(" ","Years of Experience")}
              body={
                
                
              
                
               
                 [objs.lang1, objs.lang2, objs.lang3, objs.lang4, objs.lang5, objs.lang6, objs.lang7, objs.lang8, objs.lang9, objs.lang10].filter((e) => e !== "null" ).join(' ')
              
              
              
              
              
              }
              />
                 
              )
              
            }
        
            
            </div>
              ;
        
       // props.setStatus(text);
        props.setShow(false);
        //setDegree(lang1);
        props.setStatus(results);
      
      
        console.log('Success');
    } catch(err) {
        props.setStatus(text)
        console.log('err:', text);
    }
});
} 

return(
  setTimeout(handle(), 1));
};
 