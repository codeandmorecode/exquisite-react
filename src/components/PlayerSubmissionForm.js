import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {
  const [formFields, setFormFields] = useState({
    word1: '',
    word2: '',
    word3: '',
    word4: '',
    word5: '',
    word6: '',
  })

  const onWordChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    const newFormFields = {
      ...formFields,
    }
    newFormFields[key] = value;
    setFormFields(newFormFields);
  }
  
  const onSubmitFunction = (event) => {
    event.preventDefault()
    props.addLine(formFields)
    console.log('in onSubmitFunction')
}
  
  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{  }</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onSubmitFunction}>

      
        <div className="PlayerSubmissionForm__poem-inputs">

          {
            // Put your form inputs here... We've put in one below as an example
          }
          {/* <label htmlFor="fullName">Name:</label>
          <input name="fullname"/> */}
          <p>The</p>
          <input
            placeholder="adjective"
            type="text" 
            name="word1"
            onChange={onWordChange}
            value={formFields.word1}/>
          <input
            placeholder="noun"
            type="text"
            name="word2"
            onChange={onWordChange}
            value={formFields.word2}
            />
            <input
            placeholder="adverb"
            type="text"
            name="word3"
            onChange={onWordChange}
            value={formFields.word3}/> 
          <input
            placeholder="verb"
            type="text"
            name="word4"
            onChange={onWordChange}
            value={formFields.word4}/>
          <p>the</p>
          <input
            placeholder="adjective"
            type="text"
            name="word5"
            onChange={onWordChange}
            value={formFields.word5}/> 
          <input
            placeholder="noun"
            type="text"
            name="word6"
            onChange={onWordChange}
            value={formFields.word6}/> 
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
