import React, { useState, useEffect } from "react";

function NumberSystemConverter({
  setType,
  setSettings,
}: {
  setType: any;
  setSettings: any;
}) {
  const [binaryToHex, setBinaryToHex] = useState(false);
  const [hexToBinary, setHexToBinary] = useState(false);
  const [binaryToOctal, setBinaryToOctal] = useState(false);
  const [octalToBinary, setOctalToBinary] = useState(false);
  const [decimalToBinary, setDecimalToBinary] = useState(false);
  const [binaryToDecimal, setBinaryToDecimal] = useState(false);

  useEffect(() => {
    setSettings({
      binaryToHex,
      hexToBinary,
      binaryToOctal,
      octalToBinary,
      decimalToBinary,
      binaryToDecimal,
    });
  }, [
    binaryToHex,
    hexToBinary,
    binaryToOctal,
    octalToBinary,
    decimalToBinary,
    binaryToDecimal,
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Number System Converter
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Select the conversions you'd like to practice.
      </p>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="binary-to-hex"
              onClick={() => setBinaryToHex(!binaryToHex)}
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-none border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="binary-to-hex"
            >
              Binary to Hexadecimal
            </label>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="hex-to-binary"
              onClick={() => setHexToBinary(!hexToBinary)}
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-none border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="hex-to-binary"
            >
              Hexadecimal to Binary
            </label>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="binary-to-octal"
              onClick={() => setBinaryToOctal(!binaryToOctal)}
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-none border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="binary-to-octal"
            >
              Binary to Octal
            </label>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="octal-to-binary"
              onClick={() => setOctalToBinary(!octalToBinary)}
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-none border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="octal-to-binary"
            >
              Octal to Binary
            </label>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="decimal-to-binary"
              onClick={() => setDecimalToBinary(!decimalToBinary)}
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-none border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="decimal-to-binary"
            >
              Decimal to Binary
            </label>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              id="binary-to-decimal"
              onClick={() => setBinaryToDecimal(!binaryToDecimal)}
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-none border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="binary-to-decimal"
            >
              Binary to Decimal
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={() => setType(2)}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

function MainGame({
  setType,
  settings,
  setResults,
}: {
  setType: any;
  settings: any;
  setResults: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [answerFormat, setAnswerFormat] = useState("");
  const [questionFormat, setQuestionFormat] = useState("");
  const [guess, setGuess] = useState<string>("");
  const [question, setQuestion] = useState<null | string>(null);
  const [answering, setAnswering] = useState(true);
  const [currentRight, setCurrentRight] = useState(false);
  const [number, setNumber] = useState<null | number>(null);
  const [startTime, setStartTime] = useState(new Date());

  // ts-ignore
  let sawTrue = false;
  for (const key in settings) {
    console.log(key);
    if (settings[key] === true) {
      sawTrue = true;
      break;
    }
  }
  if (!sawTrue) {
    for (const key in settings) {
      // enable all by default
      settings[key] = true;
    }
  }
  const {
    binaryToHex,
    hexToBinary,
    binaryToOctal,
    octalToBinary,
    decimalToBinary,
    binaryToDecimal,
  } = settings;

  const [numCorrect, setNumCorrect] = useState(0);
  const [numAttempted, setNumAttempted] = useState(0);
  const TOTAL = 10; // total number of questions

  useEffect(() => {
    setResults({
      numCorrect,
      numAttempted,
      startTime,
      TOTAL,
    });
  }, [numCorrect, numAttempted]);

  function addSpaces(str: string, n: number) {
    var result = "";
    for (var i = 0; i < str.length; i += n) {
      result += str.substring(i, i + n) + " ";
    }
    return result.trim(); // Remove trailing space
  }

  const generateQuestion = () => {
    if (numAttempted >= TOTAL) {
      setType(3);
      return;
    }

    setAnswering(true);
    // generate a random number between 0 and 255
    const num = Math.floor(Math.random() * 256);

    // decide which base format
    const baseFormats = [];
    if (binaryToHex) baseFormats.push("binary");
    if (hexToBinary) baseFormats.push("hex");
    if (binaryToOctal) baseFormats.push("binary");
    if (octalToBinary) baseFormats.push("octal");
    if (decimalToBinary) baseFormats.push("decimal");
    if (binaryToDecimal) baseFormats.push("binary");

    // choose a random base format
    const baseFormat =
      baseFormats[Math.floor(Math.random() * baseFormats.length)];

    // generate the output format
    let outputFormats = [];
    if (binaryToHex) outputFormats.push("hex");
    if (hexToBinary) outputFormats.push("binary");
    if (binaryToOctal) outputFormats.push("octal");
    if (octalToBinary) outputFormats.push("binary");
    if (decimalToBinary) outputFormats.push("binary");
    if (binaryToDecimal) outputFormats.push("decimal");

    // remove the base format from the output formats
    outputFormats = outputFormats.filter((format) => format !== baseFormat);

    // choose a random output format
    const outputFormat =
      outputFormats[Math.floor(Math.random() * outputFormats.length)];

    let baseNumber = formatNumber(num, baseFormat as any);
    let outputNumber = formatNumber(num, outputFormat as any);

    // adding spaces to binary numbers
    switch (outputFormat) {
      case "binary":
        outputNumber = addSpaces(outputNumber, 4);
        break;
      case "hex":
        outputNumber = addSpaces(outputNumber, 2);
        break;
      case "octal":
        outputNumber = addSpaces(outputNumber, 3);
        break;
    }

    switch (baseFormat) {
      case "binary":
        baseNumber = addSpaces(baseNumber, 4);
        break;
      case "hex":
        baseNumber = addSpaces(baseNumber, 2);
        break;
      case "octal":
        baseNumber = addSpaces(baseNumber, 3);
        break;
    }
    console.log(baseNumber, outputNumber);

    setQuestion(baseNumber);
    setAnswer(outputNumber);
    setNumber(num);
    setQuestionFormat(baseFormat);
    setAnswerFormat(outputFormat);
  };
  console.log("Current right", currentRight);

  useEffect(generateQuestion, []);

  const formatNumber = (
    number: number,
    base: "binary" | "hex" | "octal" | "decimal",
  ) => {
    switch (base) {
      case "binary":
        let num = number.toString(2);
        num = num.padStart(8, "0");
        return num;
      case "hex":
        let numHex = number.toString(16);
        numHex = numHex.padStart(2, "0");
        return numHex;
      case "octal":
        let numOctal = number.toString(8);
        numOctal = numOctal.padStart(3, "0");
        return numOctal;
      case "decimal":
        return number;
    }
  };

  const checkCorrect = () => {
    // cleaning the guess
    let cleanedGuess = guess?.trim().toLowerCase();

    // removing optional prefixes
    if (answerFormat === "hex") {
      cleanedGuess = cleanedGuess?.replace("0x", "");
    }
    if (answerFormat === "octal") {
      cleanedGuess = cleanedGuess?.replace("0o", "");
    }
    if (answerFormat === "binary") {
      cleanedGuess = cleanedGuess?.replace("0b", "");
    }

    // cleaning spaces
    cleanedGuess = cleanedGuess?.replace(" ", "");
    console.log(cleanedGuess);
    console.log(parseInt(cleanedGuess as string, 8));
    try {
      switch (answerFormat) {
        case "binary":
          if (parseInt(cleanedGuess as string, 2) === number) {
            correct();
          }
          break;
        case "hex":
          if (parseInt(cleanedGuess as string, 16) === number) {
            correct();
          }
          break;
        case "octal":
          if (parseInt(cleanedGuess as string, 8) === number) {
            correct();
          }
          break;
        case "decimal":
          if (parseInt(cleanedGuess as string, 10) === number) {
            correct();
          }
          break;
      }
    } catch (e) {
      console.log(e);
    }

    setAnswering(false);
    setNumAttempted(numAttempted + 1);
  };

  const correct = () => {
    setCurrentRight(true);
    setNumCorrect(numCorrect + 1);
  };

  const nextQuestion = () => {
    setGuess("");
    setAnswering(true);
    setCurrentRight(false);
    generateQuestion();
  };

  const submitAnswer = (event: any) => {
    event.preventDefault();

    if (!answering) {
      nextQuestion();
    } else {
      checkCorrect();
    }
  };

  const prefix =
    (questionFormat === "binary" && "0b") ||
    (questionFormat === "hex" && "0x") ||
    (questionFormat === "octal" && "0o") ||
    "";

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Hex to Binary to Decimal to Octal Quiz
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Test your skills in converting between number formats common in computer
        science
      </p>
      <div className="space-y-4">
        <form className="flex items-center space-x-4" onSubmit={submitAnswer}>
          <input
            id="guess"
            onChange={(e) => setGuess(e.target.value)}
            value={guess}
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            placeholder="Enter a hex or decimal number"
            type="text"
          />
        </form>
        {question && (
          <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center">
            <p className="text-gray-900 dark:text-gray-100">
              Convert{" "}
              <span className="font-bold">
                {prefix}
                {question}
              </span>{" "}
              from <span className="font-bold">{questionFormat}</span> to{" "}
              <span className="font-bold">{answerFormat}</span>
            </p>
          </div>
        )}
        {!answering && (
          <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center">
            <p className="text-gray-900 dark:text-gray-100">
              Answer:{" "}
              <span
                className={
                  `font-bold ` +
                  (currentRight ? ` text-green-500` : " text-red-500")
                }
              >
                {answer}
              </span>
            </p>
          </div>
        )}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">
            Score:{" "}
            <span className="font-bold">
              {numCorrect}/{TOTAL}
            </span>{" "}
            {numAttempted > 0 && numAttempted}
          </p>
          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={nextQuestion}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

function EndGame({ setType, results }: any) {
  const [endTime, setEndTime] = useState(new Date());

  console.log(results);
  const timeTaken = (() => {
    const diff = endTime.getTime() - results.startTime.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    return minutes === 0
      ? `${seconds % 60} seconds`
      : `${minutes} minutes ${seconds % 60} seconds`;
  })();

  const { numCorrect, numAttempted, TOTAL } = results;

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Binary to Hex to Decimal Quiz Summary
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        You've completed your hex to binary to decimal quiz. Here's a summary of
        your performance.
      </p>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Time Taken
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            {timeTaken}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Correct Answers
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            {numCorrect}
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Total Questions
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">{TOTAL}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Percentage Correct
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">{`${((numCorrect / TOTAL) * 100).toFixed(0)}%`}</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={() => setType(1)}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

function Game() {
  const [type, setType] = useState(1);
  const [settings, setSettings] = useState({});
  const [results, setResults] = useState({});

  const main = () => {
    switch (type) {
      case 1:
        return (
          <NumberSystemConverter setType={setType} setSettings={setSettings} />
        );
      case 2:
        return (
          <MainGame
            setType={setType}
            settings={settings}
            setResults={setResults}
          />
        );
      case 3:
        return <EndGame setType={setType} results={results} />;
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="md:max-w-md lg:max-w-lg w-full p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
        {main()}
      </div>
    </main>
  );
}

export { Game };
