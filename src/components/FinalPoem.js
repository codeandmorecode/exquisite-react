import React from 'react';
import PropTypes from 'prop-types';
import './FinalPoem.css';

const FinalPoem = (props) => {
  let result = null;
  if (props.isSubmitted){
    result = (
      <section className="FinalPoem__poem"> 
      <h3>Final Poem</h3>
      {props.submissions.map((line, i) => {
        return (
          <p key={i}>{line}</p>
        )
      })}
    </section>
    );
  }else{
    result = (
    <div className="FinalPoem__reveal-btn-container">
    <input type="button" value="We are finished: Reveal the Poem" className="FinalPoem__reveal-btn" onClick={props.revealPoem} />
  </div>
  );
  }

  return (
    <div className="FinalPoem">
      {result}
    </div>
  );
}

FinalPoem.propTypes = {
  isSubmitted: PropTypes.bool.isRequired,
  submissions: PropTypes.arrayOf(PropTypes.string).isRequired,
  revealPoem: PropTypes.func.isRequired,
};

export default FinalPoem;
