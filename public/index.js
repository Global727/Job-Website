
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Spa/>);




function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>        
        <UserContext.Provider value={{users:[{name:'Riley',desc:'d',degree:'degree',title:'title',experience:'experience',experiencemin:'experience',manage:'yes',location:'location',city:'city',contract:'contract',link:'link', lang1:'html',lang2:'html',lang3:'html',lang4:'html',lang5:'html',lang6:'html',lang7:'html',lang8:'html',lang9:'html',lang10:'html'}]}}>
          <div className="container" style={{ margin: "0%", maxWidth: "100%"}}>
            <Route path="/" exact component={Home} />
            <Route path="/createlisting/" component={CreateAccount} />

          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}








//ReactDOM.render(
//  <Spa/>,
//  document.getElementById('root')
//);
 

