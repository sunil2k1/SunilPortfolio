import React from "react";
import "./footer.css";
import Container from "react-bootstrap/Container";

function Footer() {
    return(
   
    <>
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="/#/home" class="flex items-center">
                        <img src="../../public/logo.ico" class="h-8 me-3" alt="FlowBite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sunil Kumar G</span>
                    </a>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">pages</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="/#/home" class="hover:underline">Home</a>
                            </li>
                            <li class="mb-4">
                                <a href="/#/skills" class="hover:underline">Skills</a>
                            </li>
                            <li>
                                <a href="/#/experience" class="hover:underline">Experience</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me on</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="" class="hover:underline ">Github</a>
                            </li>
                            <li class="mb-4">
                                <a href="" class="hover:underline">Linked In</a>
                            </li>
                            <li>
                                <a href="" class="hover:underline">Instagram</a>
                            </li>                            
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© Developed By Sunil Kumar G | 2024
                </span>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://www.instagram.com/your-profile" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2.133a7.87 7.87 0 0 1 7.867 7.867A7.87 7.87 0 0 1 10 17.867a7.87 7.87 0 0 1-7.867-7.867A7.87 7.87 0 0 1 10 2.133zM10 0C4.478 0 0 4.478 0 10s4.478 10 10 10 10-4.478 10-10S15.522 0 10 0zm4.333 5a1.333 1.333 0 1 1-2.666 0 1.333 1.333 0 0 1 2.666 0zm-1.2 7.133a5.333 5.333 0 1 1-10.667 0 5.333 5.333 0 0 1 10.667 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="sr-only">Instagram account</span>
                </a>
                    <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                        </svg>
                        <span class="sr-only">GitHub account</span>
                    </a>
                    <a href="https://www.linkedin.com/in/your-profile" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M17.39 0H2.61A2.61 2.61 0 0 0 0 2.61v14.78A2.61 2.61 0 0 0 2.61 20h14.78A2.61 2.61 0 0 0 20 17.39V2.61A2.61 2.61 0 0 0 17.39 0zM6 16H3V7h3v9zm-1.5-9.75a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 9.75h-3v-4.5a1.5 1.5 0 1 0-3 0v4.5H8V7h3v1.9a3.51 3.51 0 0 1 3-1.4 3.49 3.49 0 0 1 3.5 3.5v5.1z" clip-rule="evenodd"/>
                        </svg>
                        <span class="sr-only">LinkedIn account</span>
                    </a>
                    <a href="mailto:your-email@example.com" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.93 4.93c-.45 0-.86.15-1.2.39l8.27 5.46 8.27-5.46c-.34-.24-.75-.39-1.2-.39H2.93zM0 6.1v9c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2v-9L10 11 0 6.1z"/>
                        </svg>
                        <span class="sr-only">Email account</span>
                    </a>                    
                </div>
            </div>
            </div>
        </footer>

    </>
    );
}

export default Footer;