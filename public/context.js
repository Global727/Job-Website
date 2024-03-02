const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
function Card(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-blue';
    return 'card border-light' + bg + txt;
  }
  return (
    /*#__PURE__*/
    //className="text-center"
    React.createElement("div", {
      className: classes(),
      style: {}
    }, /*#__PURE__*/React.createElement("div", {
      className: "card-body text-center "
    }, props.title && /*#__PURE__*/React.createElement("h1", {
      className: "card-title"
    }, props.title), props.text && /*#__PURE__*/React.createElement("h1", {
      className: "card-text"
    }, props.text), props.body && /*#__PURE__*/React.createElement("h1", {
      className: "card-text"
    }, " ", props.body), props.status && /*#__PURE__*/React.createElement("h1", {
      id: "createStatus"
    }, props.status)))
  );
}
function JobsCard(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' ';
    return 'card' + bg + txt;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: classes(),
    style: {}
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, props.title && /*#__PURE__*/React.createElement("h1", {
    className: "jobscard-title job-title-text"
  }, props.title), props.text && /*#__PURE__*/React.createElement("h1", {
    className: "jobscard-text"
  }, props.text), props.subtitle && /*#__PURE__*/React.createElement("h1", {
    className: "card-subtitle mb-2 text-muted"
  }, props.subtitle), props.body1 && /*#__PURE__*/React.createElement("h1", {
    className: "experience-required"
  }, props.body1, " "), props.body && /*#__PURE__*/React.createElement("h1", {
    className: "jobscard-text language"
  }, props.body, " "), props.body3 && /*#__PURE__*/React.createElement("h1", {
    className: "experience-required"
  }, props.body3, " "), props.body2 && /*#__PURE__*/React.createElement("h1", {
    className: "jobscard-text"
  }, props.body2, " "), props.status && /*#__PURE__*/React.createElement("h1", {
    id: "jobscreateStatus"
  }, props.status)));
}