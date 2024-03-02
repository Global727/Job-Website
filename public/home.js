function Home() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Card
  /* header="Balance"*/, {
    status: status,
    body: show ? /*#__PURE__*/React.createElement(BalanceForm, {
      setShow: setShow,
      setStatus: setStatus
    }) : /*#__PURE__*/React.createElement(BalanceMsg, {
      setShow: setShow
    })
  }));
}
function BalanceMsg(props) {}
;
function BalanceForm(props) {
  const [degree, setDegree] = React.useState('');
  const [title, setTitle] = React.useState('null');
  const [experience, setExperience] = React.useState(5);
  const [experiencemin, setExperiencemin] = React.useState(1);
  const [manage, setManage] = React.useState('null');
  const [location, setLocation] = React.useState('');
  const [contract, setContract] = React.useState('null');
  const [lang1, setLang1] = React.useState('HTML');
  const [lang2, setLang2] = React.useState('CSS');
  const [lang3, setLang3] = React.useState('Javascript');
  const [lang4, setLang4] = React.useState('null');
  const [lang5, setLang5] = React.useState('null');
  const [lang6, setLang6] = React.useState('null');
  const [lang7, setLang7] = React.useState('null');
  const [lang8, setLang8] = React.useState('null');
  const [lang9, setLang9] = React.useState('null');
  const [lang10, setLang10] = React.useState('null');
  function handle() {
    console.log('?', degree, title, experience, experiencemin, manage, location, lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10);
    fetch(`/account/find/${degree}/${title}/${+experience}/${experiencemin}/${manage}/${location}/${lang1}/${lang2}/${lang3}/${lang4}/${lang5}/${lang6}/${lang7}/${lang8}/${lang9}/${lang10}`).then(response => response.text()).then(text => {
      try {
        var objs = JSON.parse(text);
        var results = /*#__PURE__*/React.createElement("div", {
          className: "visible-lg"
        }, /*#__PURE__*/React.createElement("div", {
          className: "row row-cols-lg-3 row-cols-md-3 g-3 justify-content-lg-center"
        }, objs.map(objs => /*#__PURE__*/React.createElement(JobsCard, {
          title: objs.name,
          subtitle: objs.title,
          body1: objs.city,
          body2: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
            className: "stretched-link",
            type: "button",
            "data-bs-toggle": "collapse",
            href: "#" + objs._id,
            "aria-expanded": "false",
            "aria-controls": objs._id
          }), /*#__PURE__*/React.createElement("div", {
            className: "collapse",
            id: objs._id
          }, /*#__PURE__*/React.createElement("div", {
            className: "jobscard-text"
          }, /*#__PURE__*/React.createElement("h1", {
            className: "bold"
          }, "Job Description"), /*#__PURE__*/React.createElement("p", null, decodeURIComponent(objs.desc)), /*#__PURE__*/React.createElement("p", {
            className: "relative"
          }, /*#__PURE__*/React.createElement("a", {
            href: decodeURIComponent(objs.link),
            target: "_blank"
          }, decodeURIComponent(objs.link), " ")), /*#__PURE__*/React.createElement("h1", {
            className: "bold"
          }, "Job Responsibilities"), /*#__PURE__*/React.createElement("p", null, objs.respo), /*#__PURE__*/React.createElement("h1", {
            className: "bold"
          }, "Requiured Qualifications"), /*#__PURE__*/React.createElement("p", null, objs.rqual), /*#__PURE__*/React.createElement("h1", {
            className: "bold"
          }, "Preferred Qualifications"), /*#__PURE__*/React.createElement("p", null, objs.qual))))

          //.concat(" ","Years of Experience")
          ,
          body3: objs.experience + ' Years of Experience',
          body: [objs.lang1, objs.lang2, objs.lang3, objs.lang4, objs.lang5, objs.lang6, objs.lang7, objs.lang8, objs.lang9, objs.lang10].filter(e => e !== "null").join(' ')
        }))));

        // props.setStatus(text);
        props.setShow(false);
        //setDegree(lang1);
        props.setStatus(results);
        console.log('Success');
      } catch (err) {
        props.setStatus("You Haven't Selected Options for All of the Required Parameters");
        console.log('err:', text);
      }
    });
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "needs-validation"
  }, /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Degree Level?",
    value: degree,
    id: "degree",
    required: true,
    onChange: e => setDegree(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Choose Degree"), /*#__PURE__*/React.createElement("option", {
    value: "No Degree"
  }, "No Degree"), /*#__PURE__*/React.createElement("option", {
    value: "AA"
  }, "Associate"), /*#__PURE__*/React.createElement("option", {
    value: "BS"
  }, "Bachelor"), /*#__PURE__*/React.createElement("option", {
    value: "Master"
  }, "Master"), /*#__PURE__*/React.createElement("option", {
    value: "PhD"
  }, "PhD")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Years of Experience?",
    id: "experience",
    value: experience,
    onChange: e => setExperience(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "5"
  }, "Years Coding Experience (5)"), /*#__PURE__*/React.createElement("option", {
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
  }, "10"))), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Years of Experience?",
    id: "experiencemin",
    value: experiencemin,
    onChange: e => setExperiencemin(e.currentTarget.value),
    "data-bs-toggle": "tooltip",
    "data-bs-placement": "right",
    title: "Allows you to search for jobs that dont exactly meet your years of experience"
  }, /*#__PURE__*/React.createElement("option", {
    value: "1"
  }, "Minimum XP Years to Include (1)"), /*#__PURE__*/React.createElement("option", {
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
  }, "10")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Job Location",
    value: location,
    onChange: e => setLocation(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
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
  }, "Wyoming")), /*#__PURE__*/React.createElement("p", {
    className: "center"
  }, /*#__PURE__*/React.createElement("b", null, "You Must Meet All Requirements Of A Potential Job")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang1,
    onChange: e => setLang1(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "HTML"
  }, "Choose Coding Language (HMTL)"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang2,
    onChange: e => setLang2(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "CSS"
  }, "Optional Additional Coding Language (CSS)"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang3,
    onChange: e => setLang3(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: "Javascript"
  }, "Optional Additional Coding Language (Javascript)"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang4,
    onChange: e => setLang4(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang5,
    onChange: e => setLang5(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang6,
    onChange: e => setLang6(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang7,
    onChange: e => setLang7(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang8,
    onChange: e => setLang8(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang9,
    onChange: e => setLang9(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("select", {
    className: "form-select",
    placeholder: "Enter Job Here",
    value: lang10,
    onChange: e => setLang10(e.currentTarget.value)
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true
  }, "Optional Additional Coding Language"), /*#__PURE__*/React.createElement("option", {
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
    value: "Node.js"
  }, "Node.js")), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-lg btn2",
    onClick: handle
  }, "Search"));
}