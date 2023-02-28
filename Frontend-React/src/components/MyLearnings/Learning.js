import React from "react";

const Learning = ({ img, title, link, data }) => {
  return (
    <div>
      <div class="max-w-2xl mx-auto mb-4">
        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-96 h-60 " src={img} alt="" />
          </a>
          <div class="p-4">
            <a href="#">
              <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {title}
              </h5>
            </a>
            <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
              {data}
            </p>
            <a
              target="_blank"
              href={link}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              style={{ backgroundColor: "#97144D" }}
            >
              Read more
              <svg
                class="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
