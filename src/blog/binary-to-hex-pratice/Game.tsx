import React, { useState } from "react";

function NumberSystemConverter() {
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
            {/* <Checkbox id="binary-to-hex" /> */}
            <input
              id="binary-to-hex"
              type="checkbox"
              className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
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
            {/* <Checkbox id="hex-to-binary" /> */}
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
            {/* <Checkbox id="binary-to-octal" /> */}
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
            {/* <Checkbox id="octal-to-binary" /> */}
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
            {/* <Checkbox id="decimal-to-binary" /> */}
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
            {/* <Checkbox id="binary-to-decimal" /> */}
            <label
              className="text-gray-900 dark:text-gray-100 font-medium"
              htmlFor="binary-to-decimal"
            >
              Binary to Decimal
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
            href="#"
          >
            Start Quiz
          </a>
        </div>
      </div>
    </div>
  );
}

function MainGame() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Hex to Decimal Quiz
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Test your skills in converting between hexadecimal and decimal numbers.
      </p>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <input
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            placeholder="Enter a hex or decimal number"
            type="text"
          />
          <details className="ui-dropdown">
            <summary className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
              Bin to Hex
            </summary>
            <ul className="p-2 ui-shadow ui-menu ui-dropdown-content z-[1] bg-gray-600 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
          {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
                    type="button"
                  >
                    Convert
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg dark:bg-gray-800">
                  <DropdownMenuItem>
                    <a
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      href="#"
                    >
                      Hex to Decimal
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                      href="#"
                    >
                      Decimal to Hex
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
          {/* <div className="relative inline-block text-left">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  onClick={toggleDropdown}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown button{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id="dropdown"
                    className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div> */}

          {/* <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
                  Hex to Decimal
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Hex to Decimal</DropdownMenuItem>
                  <DropdownMenuItem>Decimal to Hex</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
          {/* <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
                Convert
              </button> */}
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center">
          <p className="text-gray-900 dark:text-gray-100">
            Result: <span className="font-bold">42</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">
            Score: <span className="font-bold">5/10</span>
          </p>
          <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

function EndGame() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
        Hex to Decimal Quiz Summary
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        You've completed the hex to decimal quiz. Here's a summary of your
        performance.
      </p>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Correct Answers
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">5</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Total Questions
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">10</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700 h-16 flex items-center justify-between">
          <p className="text-gray-900 dark:text-gray-100 font-bold">
            Percentage Correct
          </p>
          <p className="text-gray-900 dark:text-gray-100 font-bold">50%</p>
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-4 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
            href="#"
          >
            Try Again
          </a>
        </div>
      </div>
    </div>
  );
}

function Game() {
  const [type, setType] = useState(1);

  const main = () => {
    switch (type) {
      case 1:
        return <NumberSystemConverter />;
      case 2:
        return <MainGame />;
      case 3:
        return <EndGame />;
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
