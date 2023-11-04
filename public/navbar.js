function NavBar(){
  return(

    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="index.html">Stackjobs.us</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              
            </ul>
           <ul class="navbar-nav me-righht mt-2 mt-lg-0">   
        <li>
            <a class="nav-link" href="index.html">Search</a>
        </li> 
        <li>
            <a class="nav-link" href="#/alldata/">All Jobs</a>
        </li> 
        <li>
            <a class="nav-link btn btn-outline-success my-2 my-sm-0" href="#/createlisting/">Post a Job</a>
        </li>
          
            <li>
            <a class="nav-link" href="#"></a>
        </li>
        </ul>
        </div>
  </div>
</nav>

  );
}