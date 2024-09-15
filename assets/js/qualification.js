const qualifications = [
  {
    title: "Bachelor of Computer Applications(BCA)",
    year: 2024,
    description:
      "Achieved three years bachelor's degree in Computer Applications from St. Francis College.",
    institute: {
      name: "St. Francis College",
      shortName: "SFC",
      duration: "September 2021 - August 2024",
    },
  },
  {
    title: "Commerce(Business Studies, Computer Science, Stats, Accounts)",
    year: 2021,
    description:
      "Achieved two years higher secondary degree from Commerce major from a St. Francis college.",
    institute: {
      name: "St. Francis College",
      shortName: "SFC",
      duration: "June 2019 - June 2021",
    },
  },
];

const parent = document.getElementById("qualification");

const html = qualifications.map(
  (quali) =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`
);

parent.innerHTML = html.join(" ");
