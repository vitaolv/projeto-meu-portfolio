import { XIcon } from "lucide-react";

type ButtonBurguerProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function ButtonBurguer({ isOpen, setIsOpen }: ButtonBurguerProps) {
  return (
    <button
      type="button"
      className={`rounded-full border-2 border-blue-100 p-2 md:hidden 
                        ${
                          isOpen ? "rotate-180" : "scale-100"
                        } transition-transform md:flex-grow-0`}
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <XIcon className="h-8 w-8 bg-gray-900 bg-opacity-20 text-blue-100" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8 transform-gpu bg-gray-900 bg-opacity-20 text-blue-100 transition-transform duration-300 ease-in-out"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </button>
  );
}
