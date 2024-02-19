// container-fluid to change navbar
function NavBar(){
  return(

    <nav class="navbar navbar-expand-sm navbar-light border-bottom border-$gray-500 bg-white">
      
      <div class="container-fluid">
        <a class="navbar-brand align-right brand-text" href="/">
        <img src="stackhirelogoBRAND2.png" width="55" height="55"  alt=""/>   
        ＳｔａｃｋＨｉｒｅ</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
          
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            </ul>
           <ul class="navbar-nav me-right mt-2 mt-lg-0">
  
        <li class="nav-item">
            <a class="nav-link" href="/">Search</a>
        </li> 
        <li class="nav-item">
            <a class="nav-link" href="#/alldata/">All Jobs</a>
        </li> 
        <li class="nav-item">
            <a class="nav-link btn btn-outline-primary my-2 my-sm-0" href="#/createlisting/">Post a Job</a>
        </li>
        </ul>
        
        </div>
  </div>
</nav>

  );
}