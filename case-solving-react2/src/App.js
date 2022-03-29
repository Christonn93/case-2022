import React, { useReducer,  useState  } from "react";
import logo from "./logo.svg";
import "./App.css";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.firstName]: event.value
  }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState (false);

  const handelSubmit = event => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }

  const handleChange = event => {
    setFormData({
      firstName: event.target.firstName, 
      value: event.target.value,
      surName: event.target.surName,
      value: event.target.value,
      email: event.target.email,
      value: event.target.value,
      adress: event.target.adress,
      value: event.target.value,
    });
  } 

  return (
   <div className="App">
    <div className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
    </div>
    <div className="Wrapper">
     <h1>Bestilling skjema</h1>
   
     <form className="User-Form" onSubmit={handelSubmit}>
      <div className="Fieldset">
       <label>Fornavn:
        <input name="firstName" onChange={handleChange}/>
        </label>
        <label>Etternavn:
        <input name="surName" />
        </label>
      </div>

      <div className="Fieldset">
      <label>
        Epost:
        <input name="email" />
        </label>
      <label>Telefon nummer:
        <input name="phoneNr" />
        </label>
      </div>

      <div className="Fieldset">
      <label>Gatenavn:
        <input name="adress" />
        </label>
        <label>Post nummer:
        <input name="zip" />
        </label>
      </div>

      <div className="Fieldset">
        <button type="submit">Send</button>
      </div>
     </form>
    </div>
    {submitting &&
      <div className="result">
      <ul>
           {Object.entries(formData).map(([firstName, value]) => (
             <li key={firstName}><strong>{firstName}</strong>:{value.toString()}</li>
           ))}
           {Object.entries(formData).map(([surName, value]) => (
            <li key={surName}><strong>{surName}</strong>:{value.toString()}</li>
           ))}
           {Object.entries(formData).map(([email, value]) => (
            <li key={email}><strong>{email}</strong>:{value.toString()}</li>
           ))}
           {Object.entries(formData).map(([adress, value]) => (
            <li key={adress}><strong>{adress}</strong>:{value.toString()}</li>
           ))}
         </ul>
    </div>
     }
   </div>
  );
 }


export default App;
