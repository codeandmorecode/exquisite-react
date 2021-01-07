import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');
  
  const [lines, setLines] = useState([])
  const [poemIsSubmitted, setPoemState] = useState(false)

  const addLine = (line) => {
    const newLines = [
      ...lines,
  ]
    const newSentence = `The ${line.word1} ${line.word2} ${line.word3} ${line.word4} the ${line.word5} ${line.word6}.`
    newLines.push(newSentence);
    setLines(newLines);
  }

  const lastLine = () => {
    if (lines.length == 0){
      return ''
    }else{
      return lines[lines.length - 1]
    }
  }

  const revealPoem = () => {
    setPoemState(true)
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      {poemIsSubmitted || <RecentSubmission submission={lastLine()}/>}

      {poemIsSubmitted || <PlayerSubmissionForm fields={FIELDS} sendSubmission={addLine} index={lines.length + 1}/>}

      <FinalPoem submissions={lines} revealPoem={revealPoem} isSubmitted={poemIsSubmitted}/>

    </div>
  );
  
      {/* alternatively: {poemIsSubmitted? null : <PlayerSubmissionForm sendSubmission={addLine} index={lines.length + 1}/>} */}
}


const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
