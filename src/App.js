import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [isOpen, setOpen] = useState(true);
  const handleClose = () => {
    setOpen((is) => !is);
  };

  return (
    <div>
      <button onClick={handleClose} className="close">
        &times;
      </button>
      {isOpen && <Steps />}
    </div>
  );
};

const Steps = () => {
  const [step, setStep] = useState(1);

  const decreaseStep = () => {
    if (step !== 1) {
      setStep((s) => s - 1);
    }
  };

  const increaseStep = () => {
    if (step !== 3) {
      setStep((s) => s + 1);
    }
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">{`Step ${step}: ${messages[step - 1]}`}</p>

      <div className="buttons">
        <button
          onClick={decreaseStep}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={increaseStep}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
