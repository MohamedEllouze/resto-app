import { useState } from "react";
import { Wizard, useWizard } from "react-use-wizard";

const Memoiremimoucha = () => {
  const [name, setName] = useState("");
  const [toEat, setToEat] = useState("");
  const [toDrink, setToDrink] = useState("");

  const Step1 = () => {
    const { nextStep } = useWizard();
    return (
      <section className="components-mimoucha" id="home">
        <div className="welcome">
          <img
            src="https://i.ibb.co/TKY5fVd/chef-hat-ackg1.png"
            className="welcome-img"
          />
          <span>Welcome</span>
        </div>
        <div className="arrows-container">
          <span className="prev" />
          <span className="text">
            Toucher & <br /> commander
          </span>
          <span className="next" onClick={() => nextStep()}>
            {">"}
          </span>
        </div>
        <img
          src="https://i.ibb.co/v3MHsQq/image-backg1.png"
          className="welcome-bg-img"
        />
        <div className="dots-container">
          <span id="actif" />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
    );
  };
  const Step2 = () => {
    const { nextStep, goToStep } = useWizard();

    return (
      <section className="components-mimoucha" id="identifiez-vous">
        <div className="arrows-container">
          <span className="prev" />
          <span className="text" />
          <span className="next" onClick={() => nextStep()}>
            {">"}
          </span>
        </div>
        <div className="card-mimoucha">
          <h1 className="title">Identifiez-vous </h1>
          <input
            className="input-mimoucha"
            type="text"
            name="name"
            placeholder="nom et prénom"
          />
        </div>
        <img src="https://i.ibb.co/MR9W8W1/backg2.png" className="img1-cake" />
        <img
          src="https://i.ibb.co/mTBwtC5/bagshop-backg-2.png"
          className="img2-sac"
        />
        <img
          src="https://i.ibb.co/Vw3pty9/dont-elouta-backg2.png"
          className="img3-cake"
        />
        <div className="dots-container">
          <span style={{ cursor: "pointer" }} onClick={() => goToStep(0)} />
          <span id="actif" />
          <span />
          <span />
          <span />
        </div>
      </section>
    );
  };

  const Step3 = () => {
    const { previousStep, nextStep, goToStep } = useWizard();

    return (
      <section className="components-mimoucha" id="que-preferez-vous">
        <div className="arrows-container">
          <span className="prev" onClick={() => previousStep()}>
            {"<"}
          </span>
          <span className="text">Que préférez-vous</span>
          <span className="next" onClick={() => nextStep()}>
            {">"}
          </span>
        </div>
        <div className="btn-with-image-container">
          <div
            className="btn-with-image"
            onClick={() => setToEat(toEat === "macaron" ? "" : "macaron")}
          >
            <img
              src="https://i.ibb.co/hfjjmNx/macaron-backg3.png"
              style={{ opacity: toEat === "macaron" ? 0.2 : 1 }}
              className="bg-img"
            />
            <div className="btn-title">Macaron</div>
          </div>
          <div
            className="btn-with-image"
            onClick={() => setToEat(toEat === "choclate" ? "" : "choclate")}
          >
            <img
              src="https://i.ibb.co/98y4v1k/chocolat-backg3.png"
              style={{ opacity: toEat === "choclate" ? 0.2 : 1 }}
              className="bg-img"
            />
            <div className="btn-title">chocolat</div>
          </div>
          <div
            className="btn-with-image"
            onClick={() =>
              setToEat(toEat === "tunisian_food" ? "" : "tunisian_food")
            }
          >
            <img
              src="https://i.ibb.co/HT2cW9R/ma9roudh-backg3.png"
              style={{ opacity: toEat === "tunisian_food" ? 0.2 : 1 }}
              className="bg-img"
            />
            <div className="btn-title" style={{ fontSize: "13px" }}>
              Pâtisserie Tunisienne
            </div>
          </div>
        </div>
        <div className="dots-container">
          <span style={{ cursor: "pointer" }} onClick={() => goToStep(0)} />
          <span style={{ cursor: "pointer" }} onClick={() => goToStep(1)} />
          <span id="actif" />
          <span />
          <span />
        </div>
      </section>
    );
  };

  const Step4 = () => {
    const { previousStep, nextStep, goToStep } = useWizard();

    return (
      <section className="components-mimoucha" id="que-preferez-vous">
        <div className="arrows-container">
          <span className="prev" onClick={() => previousStep()}>
            {"<"}
          </span>
          <span className="text">Que préférez-vous boire ?</span>
        </div>
        <div className="btn-with-image-container">
          <div
            className="btn-with-image"
            onClick={() =>
              setToDrink(toDrink === "citronade" ? "" : "citronade")
            }
          >
            <img
              src="https://i.ibb.co/xS6Xtfg/citronnade-page4.png"
              style={{ opacity: toDrink === "citronade" ? 0.2 : 1 }}
              className="bg-img"
            />
            <div className="btn-title">Citronade</div>
          </div>
          <div
            className="btn-with-image"
            onClick={() =>
              setToDrink(toDrink === "strawberry" ? "" : "strawberry")
            }
          >
            <img
              src="https://i.ibb.co/GphNp9X/fraise-pg4.png"
              style={{ opacity: toDrink === "strawberry" ? 0.2 : 1 }}
              className="bg-img"
            />
            <div className="btn-title">Jus de Fraise</div>
          </div>
        </div>
        <div className="btn-validation">
          <button onClick={() => nextStep()}> Valider la commande</button>
        </div>
        <div className="dots-container">
          <span style={{ cursor: "pointer" }} onClick={() => goToStep(0)} />
          <span style={{ cursor: "pointer" }} onClick={() => goToStep(1)} />
          <span style={{ cursor: "pointer" }} onClick={() => goToStep(2)} />
          <span id="actif" />
          <span />
        </div>
      </section>
    );
  };

  const Step5 = () => {
    return (
      <section className="components-mimoucha" id="commande-validée">
        <div className="notification">
          <div className="message">
            <span>Commande Validée</span>
          </div>
          <img
            className="panier"
            src="https://i.ibb.co/yVBZ7bm/Shopping-cart-backg5.png"
          />
          <span className="number">
            {" "}
            {toEat && toDrink
              ? 2
              : (!toEat && toDrink) || (toEat && !toDrink)
              ? 1
              : 0}{" "}
          </span>
        </div>
        <img
          className="delivery"
          src="https://i.ibb.co/M2bMcL7/delivery-backg5.png"
        />
        <span className="thank-u"> Merci pour votre temps</span>
        <div className="footer-line" />
      </section>
    );
  };

  return (
    <Wizard>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
    </Wizard>
  );
};
export default Memoiremimoucha;
