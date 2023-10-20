function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'Riley',desc:'d',degree:'secret',manage:'english',lang1:'html',lang2:'html',lang3:'html',lang4:'html',lang5:'html',lang6:'html',lang7:'html',lang8:'html',lang9:'html',lang10:'html'}]}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/balance/" component={Balance} />
            <Route path="/createlisting/" component={CreateAccount} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}


ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
 

