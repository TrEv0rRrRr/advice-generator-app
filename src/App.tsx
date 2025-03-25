import DiceIcon from "./assets/icon-dice.svg";
import QuoteIconDesktop from "./assets/pattern-divider-desktop.svg";
import QuoteIconMobile from "./assets/pattern-divider-mobile.svg";
import { useAdvice } from "./hooks/useAdvice";

function App() {
  const { advice, loading, handleClick } = useAdvice();

  return (
    <div className="py-7 px-5 flex flex-col gap-8 items-center justify-center relative">
      {loading ? (
        <p className="font-bold text-quote text-center">Loading advice...</p>
      ) : (
        <div className="flex flex-col text-center gap-4">
          <span className="text-primary-Neon-Green tracking-widest text-xs font-medium md:text-base">
            ADVICE #{advice?.id}
          </span>
          <p className="md:text-quote">"{advice?.advice}"</p>
        </div>
      )}

      <div className="flex flex-col gap-5 items-center justify-center pb-7">
        <picture>
          <source srcSet={QuoteIconDesktop} media="(min-width: 768px)" />
          <img
            src={QuoteIconMobile}
            alt=""
            aria-hidden
            className="cursor-pointer"
          />
        </picture>

        <button
          aria-label="Generate a new advice"
          className="bg-primary-Neon-Green p-3.5 rounded-full w-12 h-12 flex items-center justify-center absolute -bottom-5 hover:shadow-neon transition duration-300 cursor-pointer md:p-2 md:w-13 md:h-13"
          onClick={handleClick}
        >
          <img src={DiceIcon} alt="" aria-hidden />
        </button>
      </div>
    </div>
  );
}

export default App;
