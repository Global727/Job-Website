function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'Riley',desc:'d',degree:'secret',title:'secret',experience:'secret',manage:'english',lang1:'html',lang2:'html',lang3:'html',lang4:'html',lang5:'html',lang6:'html',lang7:'html',lang8:'html',lang9:'html',lang10:'html'}]}}>
          <div className="container" style={{padding: "20px", margin: "0%", maxWidth: "100%"}}>
            <Route path="/" exact component={Home} />
            <Route path="/demo" exact component={Home} />
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
 

