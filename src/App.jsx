import { Header } from "./components/Header";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="bg-[url(/img/Group 1.png)] bg-no-repeat bg-cover m-0 p-0">
      <Header />
      <Experience />
      <div className="grid justify-center  mb-4 ">
        <h3 className="text-3xl font-bold text-[#2F6BA9] mb-6 text-center mt-4 md:text-left md:mt-0">
          Projects
        </h3>

        <a className="md:max-w-sm  sm:mx-5 rounded-lg shadow-sm  cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg" href="https://front-escape.vercel.app/" target="_blank">
          <img
            className="px-3 py-2 object-cover rounded-2xl w-full  "
            src="./img/escape.png"
            alt="escape"
          />
          <div className="p-3">
            <div className="grid grid-cols-[auto_auto] items-center justify-between">
              <h5 className="text-2xl font-semibold tracking-tight text-[#2F6BA9] ">Escape</h5>
              <p className="text-white bg-[#2F6BA9] focus:outline-none  rounded-lg text-sm  px-2 py-0.5 text-center  font-semibold  mb-2 ">Web Application</p>
            </div>
              <p className="text-gray-500 font-normal text-lg ">Escape is a web application that allows users to discover nearby places and plan personalized travel itineraries. The platform suggests locations based on the user's preferences, helping them explore restaurants, outdoor activities, and other points of interest.</p>
            <div className="card-footer">
              <p className="text-gray-400 font-semibold text-md my-2">Technologies used</p>
              <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2F6BA9]" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a23 23 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a23 23 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2F6BA9]" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M8.667 9.417a2.583 2.583 0 1 0 0 5.166h2.583V9.417zm2.583-1.5H8.667a2.583 2.583 0 0 1 0-5.167h2.583zm1.5-5.167v5.167h2.583a2.584 2.584 0 0 0 0-5.167zm2.583 6.666a2.583 2.583 0 0 0-2.583 2.542v.083a2.583 2.583 0 1 0 2.583-2.625m-6.666 6.667a2.584 2.584 0 1 0 2.583 2.584v-2.584z" clipRule="evenodd"></path>
              </svg>
             <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2F6BA9]" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="M0 0h24v24H0zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113m-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416" clipRule="evenodd">
              </path><defs><clipPath id="iconifyReact0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
              <svg  aria-hidden="true" className="text-[#2F6BA9]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinejoin="round" d="m17 13 3.4641-2V7L17 5l-3.4641 2v4M17 13l-3.4641-2M17 13v4l-7.00001 4M17 13V9m0 4-7.00001 4m3.53591-6L10.5 12.7348M9.99999 21l-3.4641-2.1318M9.99999 21v-4m-3.4641 2v-.1318m0 0V15L10.5 12.7348m-3.96411 6.1334L3.5 17V5m0 0L7 3l3.5 2m-7 0 2.99999 2M10.5 5v7.7348M10.5 5 6.49999 7M17 9l3.5-2M17 9l-3.5-2M9.99999 17l-3.5-2m0 .5V7"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2F6BA9]" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path>
              </svg>
              </div>
              </div>
          </div>
        </a>




      </div>
    </div>
  );
}

export default App;
