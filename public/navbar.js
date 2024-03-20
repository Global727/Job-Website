// container-fluid to change navbar
function NavBar(){
  return(

    <nav className="navbar navbar-expand-sm navbar-light border-bottom border-$gray-500 bg-white">
      
      <div className="container-fluid">
        <a className="navbar-brand align-right brand-text" href="/">
        <img src="stackhirelogoBRAND2.png" width="55" height="55"  alt=""/>   
        ＳｔａｃｋＨｉｒｅ</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            </ul>
           <ul className="navbar-nav me-right mt-2 mt-lg-0">
  
        <li className="nav-item">
            <a className="nav-link" href="/">Search</a>
        </li> 
        <li className="nav-item">
            <a className="nav-link btn btn-outline-primary my-2 my-sm-0" href="#/createlisting/">Post a Job</a>
        </li>
        </ul>
        
        </div>
  </div>
</nav>

  );
}