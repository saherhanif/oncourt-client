import React from "react";
import "./arrowButton.scss";

export default function ArrowButton() {
  return (
    <a href="/about">
      <div className="arrowButtonContainer">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex-row"
        >
          <span>ראה עוד</span>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
          </svg>
        </button>
      </div>
    </a>
  );
}
