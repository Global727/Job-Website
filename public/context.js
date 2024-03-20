const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);


function Card(props){
  function classes(){
    const bg  = props.bgcolor  ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-blue';
    return 'card border-light' + bg + txt;
  }

  return (
    //className="text-center"
    <div className={classes()}  style={{} }>
      
      <div className="card-body text-center ">
        {props.title && (<h1 className="card-title">{props.title}</h1>)}
        {props.text && (<h1 className="card-text">{props.text}</h1>)}
        {props.body && (<h1 className="card-text"> {props.body}</h1>)}
        
        {props.status && (<h1 id='createStatus'>{props.status}</h1>)}
      </div>
    </div>      
  );    
}



function JobsCard(props){
  function classes(){
    const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor: ' ';
    return 'card' + bg + txt;
  }

  return (
    <div className={classes()}  style={{}}>
      
      
      <div className="card-body">
        {props.title && (<h1 className="jobscard-title job-title-text">{props.title}</h1>)}
        {props.text && (<h1 className="jobscard-text">{props.text}</h1>)}
        {props.subtitle && (<h1 className="card-subtitle mb-2 text-muted">{props.subtitle}</h1>)}
        {props.body1  && (<h1 className="experience-required">{props.body1} </h1>)}
        {props.body  && (<h1 className="jobscard-text language">{props.body} </h1>)}
        {props.body3  && (<h1 className="experience-required">{props.body3} </h1>)}
        {props.body2  && (<h1 className="jobscard-text">{props.body2} </h1>)}
        {props.status && (<h1 id='jobscreateStatus'>{props.status}</h1>)}
      </div>
    </div> 
    
         
  );    


}
