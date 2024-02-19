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
    <div className={classes()} class="text-center" style={{} }>
      
      <div className="card-body text-center ">
        {props.title && (<h5 className="card-title">{props.title}</h5>)}
        {props.text && (<p className="card-text">{props.text}</p>)}
        {props.body && (<p className="card-text" > {props.body}</p>)}
        
        {props.status && (<div id='createStatus'>{props.status}</div>)}
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
        {props.title && (<h5 className="jobscard-title job-title-text">{props.title}</h5>)}
        {props.text && (<p className="jobscard-text">{props.text}</p>)}
        {props.subtitle && (<h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>)}
        {props.body1  && (<h4 className="experience-required">{props.body1} </h4>)}
        {props.body  && (<h4 className="jobscard-text language">{props.body} </h4>)}
        {props.body3  && (<h4 className="experience-required">{props.body3} </h4>)}
        {props.body2  && (<h4 className="jobscard-text">{props.body2} </h4>)}
        {props.status && (<div id='jobscreateStatus'>{props.status}</div>)}
      </div>
    </div> 
    
         
  );    
}
