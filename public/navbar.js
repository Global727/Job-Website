function NavBar() {
    return /*#__PURE__*/React.createElement("nav", {
      class: "navbar navbar-expand-sm navbar-light border-bottom border-$gray-500 bg-white"
    }, /*#__PURE__*/React.createElement("div", {
      class: "container-fluid"
    }, /*#__PURE__*/React.createElement("a", {
      class: "navbar-brand align-right brand-text",
      href: "/"
    }, /*#__PURE__*/React.createElement("img", {
      src: "stackhirelogoBRAND2.png",
      width: "55",
      height: "55",
      alt: ""
    }), "\uFF33\uFF54\uFF41\uFF43\uFF4B\uFF28\uFF49\uFF52\uFF45"), /*#__PURE__*/React.createElement("button", {
      class: "navbar-toggler",
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, /*#__PURE__*/React.createElement("span", {
      class: "navbar-toggler-icon"
    })), /*#__PURE__*/React.createElement("div", {
      class: "collapse navbar-collapse",
      id: "navbarSupportedContent"
    }, /*#__PURE__*/React.createElement("ul", {
      class: "navbar-nav me-auto mt-2 mt-lg-0"
    }), /*#__PURE__*/React.createElement("ul", {
      class: "navbar-nav me-right mt-2 mt-lg-0"
    }, /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link",
      href: "/"
    }, "Search")), /*#__PURE__*/React.createElement("li", {
      class: "nav-item"
    }, /*#__PURE__*/React.createElement("a", {
      class: "nav-link btn btn-outline-primary my-2 my-sm-0",
      href: "#/createlisting/"
    }, "Post a Job"))))));
  }