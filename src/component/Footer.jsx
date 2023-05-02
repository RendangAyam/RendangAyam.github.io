import React from 'react'
import { faGithub, faInstagram, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <footer class="bg-gray-900">
            <div id="02" class="max-w-7xl mx-auto py-12 px-4 pt-4 overflow-hidden sm:px-6 lg:px-8">
                <div class="mt-8 flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/andrew-christian-widjojo-3a0a57218" class="text-white hover:text-yellow-400 transition duration-300">
                        <span class="sr-only">Linked In</span>
                        <FontAwesomeIcon icon={faLinkedin} className="text-2xl mr-1"/>
                    </a>

                    <a href="https://www.instagram.com/andrewchristian28" class="text-white hover:text-yellow-400 transition duration-300">
                        <span class="sr-only">Instagram</span>
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl"/>
                    </a>

                    <a href="https://t.me/andrew28" class="text-white hover:text-yellow-400 transition duration-300">
                        <span class="sr-only">Telegram</span>
                        <FontAwesomeIcon icon={faTelegram} className="text-2xl"/>
                    </a>

                    <a href="https://github.com/RendangAyam" class="text-white hover:text-yellow-400 transition duration-300">
                        <span class="sr-only">GitHub</span>
                        <FontAwesomeIcon icon={faGithub} className="text-2xl"/>
                    </a>
                </div>
                <p class="justify-center flex mt-8 text-center text-base text-white">
                Made by 
                <a href="https://www.linkedin.com/in/andrew-christian-widjojo-3a0a57218" className="ml-1 hover:text-yellow-400 transition duration-300"> Andrew Christian Widjojo</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
