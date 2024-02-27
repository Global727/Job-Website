function Spa() {
    return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(UserContext.Provider, {
      value: {
        users: [{
          name: 'Riley',
          desc: 'd',
          degree: 'degree',
          title: 'title',
          experience: 'experience',
          experiencemin: 'experience',
          manage: 'yes',
          location: 'location',
          city: 'city',
          contract: 'contract',
          link: 'link',
          lang1: 'html',
          lang2: 'html',
          lang3: 'html',
          lang4: 'html',
          lang5: 'html',
          lang6: 'html',
          lang7: 'html',
          lang8: 'html',
          lang9: 'html',
          lang10: 'html'
        }]
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "container",
      style: {
        margin: "0%",
        maxWidth: "100%"
      }
    }, /*#__PURE__*/React.createElement(Route, {
      path: "/",
      exact: true,
      component: Home
    }), /*#__PURE__*/React.createElement(Route, {
      path: "/createlisting/",
      component: CreateAccount
    })))));
  }
  ReactDOM.render( /*#__PURE__*/React.createElement(Spa, null), document.getElementById('root'));