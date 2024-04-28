import React, { useState } from 'react';

// thinking about how this is going to look
// score in the middle showing the percentage
// box to the right with the answer
// box to the right with the question

type Question = {
  from: 'binary' | 'hex' | 'decimal';
  to: 'binary' | 'hex' | 'decimal';
  value: string;
}

const Game = () => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [question, setQuestion] = useState<Question | null>();
  
  return (<section className="grid md:grid-cols-3 grid-rows-2 border-black border-2 rounded-lg shadow-sm">
    <div className="col-span-3 border-b-2 border-black">
      <h1 className="text-3xl font-bold tracking-tight">Binary to hex to decimal practice</h1>
      <p>A simple tool to prevent you from making mistakes </p>
    </div>
    <div id="question">
      <p>Convert: </p>
      <p className="font-bold">Settings:</p>
      <ul>
        <input type="checkbox" id="from-binary" />
        <label htmlFor="from-binary">Binary</label>
        <br />
        <input type="checkbox" id="from-hex" />
        <label htmlFor="from-hex">Hex</label>
        <br />
        <input type="checkbox" id="from-decimal" />
        <label htmlFor="from-decimal">Decimal</label>
      </ul>
    </div>
    <div className="bg-lime-500 w-full h-full border-black border-l-2 border-r-2 flex items-center">
      <div className="mx-auto">
        <p className="my-auto">{`${correct} / ${correct + incorrect}`}</p>
      </div>
    </div>
    <div id="answer">
      <p className="font-bold">Settings:</p>
      <ul>
      <input type="checkbox" id="from-binary" />
        <label htmlFor="from-binary">Binary</label>
        <br />
        <input type="checkbox" id="from-hex" />
        <label htmlFor="from-hex">Hex</label>
        <br />
        <input type="checkbox" id="from-decimal" />
        <label htmlFor="from-decimal">Decimal</label>
      </ul>
    </div>
  </section>);
};

export { Game };