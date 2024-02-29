function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    class: "create"
  }, /*#__PURE__*/React.createElement(Card, {
    bgcolor: "light",
    header: "Create Account",
    status: status,
    body: show ? /*#__PURE__*/React.createElement(CreateForm, {
      setShow: setShow,
      setStatus: setStatus
    }) : /*#__PURE__*/React.createElement(CreateMsg, {
      setShow: setShow
    })
  }));
}
function CreateMsg(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    class: "alert alert-success",
    role: "alert"
  }, /*#__PURE__*/React.createElement("h4", {
    class: "alert-heading"
  }, "Listing Created"), /*#__PURE__*/React.createElement("p", null, "Thanks For Using StackHire.US"), /*#__PURE__*/React.createElement("p", {
    class: "mb-10"
  }, " "), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-light",
    onClick: () => props.setShow(true)
  }, "Make Another Listing")));
}
function CreateForm(props) {
  const [name, setName] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const [degree, setDegree] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [experience, setExperience] = React.useState();
  const [ndxp, setNdxp] = React.useState(0);
  const [bsxp, setBsxp] = React.useState(0);
  const [manage, setManage] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [city, setCity] = React.useState('');
  const [contract, setContract] = React.useState('');
  const [respo, setRespo] = React.useState('');
  const [qual, setQual] = React.useState('');
  const [rqual, setRqual] = React.useState('');
  const [link, setLink] = React.useState('');
  const [lang1, setLang1] = React.useState('null');
  const [lang2, setLang2] = React.useState('null');
  const [lang3, setLang3] = React.useState('null');
  const [lang4, setLang4] = React.useState('null');
  const [lang5, setLang5] = React.useState('null');
  const [lang6, setLang6] = React.useState('null');
  const [lang7, setLang7] = React.useState('null');
  const [lang8, setLang8] = React.useState('null');
  const [lang9, setLang9] = React.useState('null');
  const [lang10, setLang10] = React.useState('null');
  function handle() {
    console.log("create success");
    var url = `/account/create/${encodeURIComponent(name)}/${encodeURIComponent(desc)}/${degree}/${title}/${experience}/${ndxp}/${bsxp}/${manage}/${location}/${encodeURIComponent(city)}/${contract}/${encodeURIComponent(respo)}/${encodeURIComponent(qual)}/${encodeURIComponent(rqual)}/${encodeURIComponent(link)}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log();
    })();

    //put if statement here if all is good then setshow else 
    props.setShow(false);
  }
  ;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("b", null, "Business Name"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "input",
    className: "form-control",
    placeholder: "Enter Company Name",
    value: name,
    onChange: e => setName(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("b", null, "Job Description"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("textarea", {
    className: "form-control",
    placeholder: "Enter Job/Company Description",
    value: desc,
    onChange: e => setDesc(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("b", null, "Responsibilities"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("textarea", {
    className: "form-control",
    placeholder: "Enter Job Responsibilies/Duties",
    value: respo,
    onChange: e => setRespo(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("b", null, "Required Qualifications"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("textarea", {
    className: "form-control",
    placeholder: "Enter Required Qualifications",
    value: rqual,
    onChange: e => setRqual(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("b", null, "Preferred Qualifications"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("textarea", {
    className: "form-control",
    placeholder: "Enter Qualifications",
    value: qual,
    onChange: e => setQual(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("b", null, "Job URL"), /*#__PURE__*/React.createElement("input", {
    type: "input",
    className: "form-control",
    placeholder: "''https://'' required",
    value: link,
    onChange: e => setLink(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "What is the Title for this job?",
    value: title,
    onChange: e => setTitle(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Job Title?"), /*#__PURE__*/React.createElement("option", {
    value: "Entry Level"
  }, "Entry Level"), /*#__PURE__*/React.createElement("option", {
    value: "Software Developer"
  }, "Software Developer"), /*#__PURE__*/React.createElement("option", {
    value: "Software Engineer"
  }, "Software Engineer"), /*#__PURE__*/React.createElement("option", {
    value: "Staff Engineer"
  }, "Staff Engineer"), /*#__PURE__*/React.createElement("option", {
    value: "Software Engineer"
  }, "Software Engineer"), /*#__PURE__*/React.createElement("option", {
    value: "Senior Software Developer"
  }, "Senior Software Developer"), /*#__PURE__*/React.createElement("option", {
    value: "Senior Software Engineer"
  }, "Senior Software Engineer"), /*#__PURE__*/React.createElement("option", {
    value: "Full Stack Engineer"
  }, "Full Stack Engineer")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "How Many Years of Experience in Total Are You Looking For",
    value: experience,
    onChange: e => setExperience(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Years Experience"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/React.createElement("option", {
    value: "6"
  }, "6"), /*#__PURE__*/React.createElement("option", {
    value: "7"
  }, "7"), /*#__PURE__*/React.createElement("option", {
    value: "8"
  }, "8"), /*#__PURE__*/React.createElement("option", {
    value: "9"
  }, "9"), /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Degree Level?",
    value: degree,
    onChange: e => setDegree(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Degree Level?"), /*#__PURE__*/React.createElement("option", {
    value: "No Degree"
  }, "No Degree"), /*#__PURE__*/React.createElement("option", {
    value: "AA"
  }, "Associate"), /*#__PURE__*/React.createElement("option", {
    value: "BS"
  }, "Bachelor"), /*#__PURE__*/React.createElement("option", {
    value: "Master"
  }, "Master"), /*#__PURE__*/React.createElement("option", {
    value: "PhD"
  }, "PhD")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "How Many Additional Years to Equate No Degree/Certificate With Higher Degree"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "No Degree Required If You Have Experience?",
    value: ndxp,
    onChange: e => setNdxp(e.currentTarget.value),
    title: "Only Necessary If Applicants with No Degree or Bootcamp Require Extra Years of Experience to Equate Higher Degree"
  }, /*#__PURE__*/React.createElement("option", {
    selected: true,
    value: "0"
  }, "0"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/React.createElement("option", {
    value: "6"
  }, "6"), /*#__PURE__*/React.createElement("option", {
    value: "7"
  }, "7"), /*#__PURE__*/React.createElement("option", {
    value: "8"
  }, "8"), /*#__PURE__*/React.createElement("option", {
    value: "9"
  }, "9"), /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "How Many Additional Years to Equate Bachelors With Higher Degree"), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "No Degree Required If You Have Experience?",
    value: bsxp,
    onChange: e => setBsxp(e.currentTarget.value),
    title: "Only Necessary If Applicants with Bachelors Degree Require Extra Years of Experience To Equate Masters or PHD"
  }, /*#__PURE__*/React.createElement("option", {
    selected: true,
    value: "0"
  }, "0"), /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "1"), /*#__PURE__*/React.createElement("option", {
    value: "2"
  }, "2"), /*#__PURE__*/React.createElement("option", {
    value: "3"
  }, "3"), /*#__PURE__*/React.createElement("option", {
    value: "4"
  }, "4"), /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/React.createElement("option", {
    value: "6"
  }, "6"), /*#__PURE__*/React.createElement("option", {
    value: "7"
  }, "7"), /*#__PURE__*/React.createElement("option", {
    value: "8"
  }, "8"), /*#__PURE__*/React.createElement("option", {
    value: "9"
  }, "9"), /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Management Experience?",
    value: manage,
    onChange: e => setManage(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Management Experience"), /*#__PURE__*/React.createElement("option", {
    value: "Yes"
  }, "Yes"), /*#__PURE__*/React.createElement("option", {
    value: "No"
  }, "No")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Job Location",
    value: location,
    onChange: e => setLocation(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Choose Job Location"), /*#__PURE__*/React.createElement("option", {
    value: "Remote"
  }, "Remote"), /*#__PURE__*/React.createElement("option", {
    value: "AL"
  }, "Alabama"), /*#__PURE__*/React.createElement("option", {
    value: "AK"
  }, "Alaska"), /*#__PURE__*/React.createElement("option", {
    value: "AZ"
  }, "Arizona"), /*#__PURE__*/React.createElement("option", {
    value: "AR"
  }, "Arkansas"), /*#__PURE__*/React.createElement("option", {
    value: "CA"
  }, "California"), /*#__PURE__*/React.createElement("option", {
    value: "CO"
  }, "Colorado"), /*#__PURE__*/React.createElement("option", {
    value: "CT"
  }, "Connecticut"), /*#__PURE__*/React.createElement("option", {
    value: "DE"
  }, "Delaware"), /*#__PURE__*/React.createElement("option", {
    value: "DC"
  }, "District Of Columbia"), /*#__PURE__*/React.createElement("option", {
    value: "FL"
  }, "Florida"), /*#__PURE__*/React.createElement("option", {
    value: "GA"
  }, "Georgia"), /*#__PURE__*/React.createElement("option", {
    value: "HI"
  }, "Hawaii"), /*#__PURE__*/React.createElement("option", {
    value: "ID"
  }, "Idaho"), /*#__PURE__*/React.createElement("option", {
    value: "IL"
  }, "Illinois"), /*#__PURE__*/React.createElement("option", {
    value: "IN"
  }, "Indiana"), /*#__PURE__*/React.createElement("option", {
    value: "IA"
  }, "Iowa"), /*#__PURE__*/React.createElement("option", {
    value: "KS"
  }, "Kansas"), /*#__PURE__*/React.createElement("option", {
    value: "KY"
  }, "Kentucky"), /*#__PURE__*/React.createElement("option", {
    value: "LA"
  }, "Louisiana"), /*#__PURE__*/React.createElement("option", {
    value: "ME"
  }, "Maine"), /*#__PURE__*/React.createElement("option", {
    value: "MD"
  }, "Maryland"), /*#__PURE__*/React.createElement("option", {
    value: "MA"
  }, "Massachusetts"), /*#__PURE__*/React.createElement("option", {
    value: "MI"
  }, "Michigan"), /*#__PURE__*/React.createElement("option", {
    value: "MN"
  }, "Minnesota"), /*#__PURE__*/React.createElement("option", {
    value: "MS"
  }, "Mississippi"), /*#__PURE__*/React.createElement("option", {
    value: "MO"
  }, "Missouri"), /*#__PURE__*/React.createElement("option", {
    value: "MT"
  }, "Montana"), /*#__PURE__*/React.createElement("option", {
    value: "NE"
  }, "Nebraska"), /*#__PURE__*/React.createElement("option", {
    value: "NV"
  }, "Nevada"), /*#__PURE__*/React.createElement("option", {
    value: "NH"
  }, "New Hampshire"), /*#__PURE__*/React.createElement("option", {
    value: "NJ"
  }, "New Jersey"), /*#__PURE__*/React.createElement("option", {
    value: "NM"
  }, "New Mexico"), /*#__PURE__*/React.createElement("option", {
    value: "NY"
  }, "New York"), /*#__PURE__*/React.createElement("option", {
    value: "NC"
  }, "North Carolina"), /*#__PURE__*/React.createElement("option", {
    value: "ND"
  }, "North Dakota"), /*#__PURE__*/React.createElement("option", {
    value: "OH"
  }, "Ohio"), /*#__PURE__*/React.createElement("option", {
    value: "OK"
  }, "Oklahoma"), /*#__PURE__*/React.createElement("option", {
    value: "OR"
  }, "Oregon"), /*#__PURE__*/React.createElement("option", {
    value: "PA"
  }, "Pennsylvania"), /*#__PURE__*/React.createElement("option", {
    value: "RI"
  }, "Rhode Island"), /*#__PURE__*/React.createElement("option", {
    value: "SC"
  }, "South Carolina"), /*#__PURE__*/React.createElement("option", {
    value: "SD"
  }, "South Dakota"), /*#__PURE__*/React.createElement("option", {
    value: "TN"
  }, "Tennessee"), /*#__PURE__*/React.createElement("option", {
    value: "TX"
  }, "Texas"), /*#__PURE__*/React.createElement("option", {
    value: "UT"
  }, "Utah"), /*#__PURE__*/React.createElement("option", {
    value: "VT"
  }, "Vermont"), /*#__PURE__*/React.createElement("option", {
    value: "VA"
  }, "Virginia"), /*#__PURE__*/React.createElement("option", {
    value: "WA"
  }, "Washington"), /*#__PURE__*/React.createElement("option", {
    value: "WV"
  }, "West Virginia"), /*#__PURE__*/React.createElement("option", {
    value: "WI"
  }, "Wisconsin"), /*#__PURE__*/React.createElement("option", {
    value: "WY"
  }, "Wyoming")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "input",
    className: "form-control",
    placeholder: "Enter City Name",
    value: city,
    onChange: e => setCity(e.currentTarget.value)
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Contract Job?",
    value: contract,
    onChange: e => setContract(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    selected: true
  }, "Is This a Contract Job?"), /*#__PURE__*/React.createElement("option", {
    value: "Yes"
  }, "Yes"), /*#__PURE__*/React.createElement("option", {
    value: "No"
  }, "No")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, /*#__PURE__*/React.createElement("div", {
    class: "red"
  }, "Applicants will only be shown your listing if they match all parameters below.")), /*#__PURE__*/React.createElement("b", null, "Languages"), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang1,
    onChange: e => setLang1(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Coding Language"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang2,
    onChange: e => setLang2(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang3,
    onChange: e => setLang3(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang4,
    onChange: e => setLang4(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang5,
    onChange: e => setLang5(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang6,
    onChange: e => setLang6(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang7,
    onChange: e => setLang7(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang8,
    onChange: e => setLang8(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang9,
    onChange: e => setLang9(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang10,
    onChange: e => setLang10(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "none",
    selected: true
  }, "Add Language (Optional)"), /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "HMTL"), /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Javascript"), /*#__PURE__*/React.createElement("option", {
    value: "Java"
  }, "Java"), /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "CSS"), /*#__PURE__*/React.createElement("option", {
    value: "SASS"
  }, "SASS"), /*#__PURE__*/React.createElement("option", {
    value: "SCSS"
  }, "SCSS"), /*#__PURE__*/React.createElement("option", {
    value: "React.js"
  }, "React.js"), /*#__PURE__*/React.createElement("option", {
    value: "React Native"
  }, "React Native"), /*#__PURE__*/React.createElement("option", {
    value: "AngularJS"
  }, "AngularJS"), /*#__PURE__*/React.createElement("option", {
    value: "Vue"
  }, "Vue"), /*#__PURE__*/React.createElement("option", {
    value: "TypeScript"
  }, "TypeScript"), /*#__PURE__*/React.createElement("option", {
    value: "PHP"
  }, "PHP"), /*#__PURE__*/React.createElement("option", {
    value: "Python"
  }, "Python"), /*#__PURE__*/React.createElement("option", {
    value: "Django"
  }, "Django"), /*#__PURE__*/React.createElement("option", {
    value: "Flask"
  }, "Flask"), /*#__PURE__*/React.createElement("option", {
    value: "Ruby"
  }, "Ruby"), /*#__PURE__*/React.createElement("option", {
    value: "Jekyll"
  }, "Jekyll"), /*#__PURE__*/React.createElement("option", {
    value: "Swift"
  }, "Swift"), /*#__PURE__*/React.createElement("option", {
    value: "Objective C"
  }, "Objective C"), /*#__PURE__*/React.createElement("option", {
    value: "Scala"
  }, "Scala"), /*#__PURE__*/React.createElement("option", {
    value: "a"
  }, "a")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn2 btn-primary btn-lg",
    onClick: handle
  }, "Create Listing"));
}