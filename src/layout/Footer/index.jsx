import { Link } from "react-router-dom";
import CompassLogo from "../../assets/interface/icons8-compass-64.png";

function Footer() {
  return (
    <footer class="p-5 pb-[15rem] bg-white shadow-3xl md:px-6 md:py-8 dark:bg-gray-800">
      <div class="sm:flex sm:items-center sm:justify-between">
        <p class="flex items-center mb-4 sm:mb-0">
          <img src={CompassLogo} class="mr-4 h-14 w-14" alt="Holidaze Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Holidaze</span>
        </p>
        <ul class="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <a href="https://github.com/Sigvel" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sigvel/" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl text-gray-500 hover:underline md:mr-6 dark:text-gray-400">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.noroff.no/" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Noroff API</a>
          </li>
          <li>
            <Link to="/contact" class="mr-4 text-xl text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Contact</Link>
          </li>
          <li>
            <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer" class="mr-4 text-xl text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Icons8</a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-xl text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <a href="https://portfolio-panda-dev.netlify.app/" target="_blank" rel="noopener noreferrer" class="hover:underline">PandäDev™</a>. All Rights Reserved.
      </span>
    </footer>
  );
}
// <footer className="pb-[20rem] bg-light-gray">
// </footer>

export default Footer;
