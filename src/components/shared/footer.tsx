import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../ui/Accordion"

export function Fondo () {
    return (
        <footer className="w-full bg-[#15151e] md:px-20 px-8">
            {/* Seccion de titulo */}
            <div className="flex justify-center items-center pt-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="20" viewBox="0 0 80 20" fill="none" className="injected-svg js-svg-inject">
                    <g clip-path="url(#clip0_1_38-2)">
                        <g clip-path="url(#clip1_1_38-2)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9917 6.01667L0 20H11.275L20.5208 10.8125C23.9875 7.375 25.8 6.81667 32.8333 6.81667H58.6542L65.6083 0H31.3375C21.8 0 19.0583 0.954167 13.9917 6.01667ZM21.9583 12.1958C25.1292 9.02917 26.4917 8.70833 33.525 8.70833H56.7375L49.7833 15.5792H32.7C29.2083 15.5792 28.5958 15.9542 27.1292 17.4708L24.65 20H14.2042L21.9583 12.1958ZM48.05 20L68.0625 0H80L59.9083 20H48.05ZM69.0709 19.0958C69.6667 19.7 70.4167 20 71.3167 20H71.3125C72.2125 20 72.9584 19.7 73.5417 19.1C74.1292 18.5 74.4209 17.7583 74.4209 16.8792C74.4209 16 74.1251 15.2583 73.5376 14.6542C72.9501 14.05 72.2042 13.75 71.3042 13.75C70.4042 13.75 69.6542 14.05 69.0626 14.65C68.4709 15.25 68.175 15.9917 68.175 16.8708C68.175 17.75 68.4751 18.4917 69.0709 19.0958ZM69.4459 15.0083C69.9417 14.4958 70.5625 14.2417 71.3 14.2417V14.2375C72.0376 14.2375 72.6542 14.4917 73.1542 15.0042C73.6501 15.5167 73.9001 16.1417 73.9001 16.8708C73.9001 17.6 73.6501 18.2208 73.1542 18.7292C72.6584 19.2375 72.0376 19.4917 71.3 19.4917C70.5625 19.4917 69.9459 19.2375 69.4459 18.725C68.9501 18.2167 68.7001 17.5958 68.7001 16.8667C68.7001 16.1375 68.9459 15.5208 69.4459 15.0083ZM70.6875 18.6167V17.3917H71.3876L71.9792 18.6167H72.7042L72.05 17.3C72.2709 17.2 72.425 17.0667 72.5167 16.9042C72.6084 16.7417 72.6542 16.4875 72.6542 16.1542C72.6542 15.8208 72.5417 15.5667 72.3167 15.4C72.0917 15.2333 71.7542 15.15 71.3042 15.15H70.0001V18.6167H70.6875ZM70.675 16.8542V15.6875H71.2417C71.7334 15.6875 71.9792 15.8833 71.9792 16.2708C71.9792 16.475 71.9334 16.625 71.8376 16.7167C71.7417 16.8083 71.5876 16.8542 71.3751 16.8542H70.675Z" fill="#E10600"></path>
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_38-2">
                            <rect width="80" height="20" fill="white"></rect>
                        </clipPath>
                        <clipPath id="clip1_1_38-2">
                            <rect width="80" height="20" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
                <h2 className="flex text-lg sm:text-2xl font-semibold text-[#d0d0d2] px-2 gap-2">
                    <span>Our Partners</span>
                    <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        className="w-4" viewBox="0 0 30.727 30.727"
                        xmlSpace="preserve">
                        <g>
                            <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
                            l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
                        </g>
                    </svg>
                </h2>
            </div>
            {/* Seccion de imagenes */}
            <div className="divide-y">
                <div className="flex justify-center py-8 flex-wrap">
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/rolex.png" alt="Rolex" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/pirelli.png" alt="Pirelli" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/aramco.png" alt="Aramco" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/Heineken%20-%20Outlined.png" alt="Heineken" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/dhl.png" alt="DHL" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/qatar.png" alt="Qatar Airways" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/AWS%20GLOBAL.png" alt="AWS" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/crypto.com.png" alt="Crypto.com" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/msc.png" alt="MSC Cruises" className="h-12 md:h-16"/>
                    </div>
                    <div className="pb-4">
                        <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1678707357/content/dam/fom-website/2020/sponsors/salesforce.png" alt="Salesforce" className="h-12 md:h-16"/>
                    </div>
                </div>
                <div className="flex justify-center py-4 flex-wrap">
                    <div className="pb-6">
                        <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1681231879/fom-website/2020/sponsors/Paramount%2B.png" alt="Paramount+" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="pb-6">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/lenovo.png" alt="Lenovo" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="pb-6">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/ferrari-trento.png" alt="Ferrari" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="pb-6">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/liqui-moly.png" alt="Liqui Moly" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="pb-6">
                        <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1714729159/fom-website/2020/sponsors/globant.png" alt="Globant" className="flex md:h-12 h-8 px-2"/>
                    </div>
                </div>
                <div className="flex justify-center py-4 flex-wrap">
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1697556367/fom-website/2020/sponsors/Amex.png" alt="American Express" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/Workday.png" alt="Workday" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/BBS.png" alt="BBS Motorsports" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/TATA.png" alt="Tata Communications" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/content/dam/fom-website/2020/sponsors/188.png" alt="188Bet" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1684232307/content/dam/fom-website/2020/sponsors/puma.png" alt="Puma" className="flex md:h-12 h-8 px-2"/>
                    </div>
                    <div className="">
                        <img src="https://media.formula1.com/image/upload/f_auto/q_auto/v1710505682/content/dam/fom-website/2020/sponsors/mcdonalds.png" alt="McDonald's" className="flex md:h-12 h-8 px-2"/>
                    </div>
                </div>
            </div>
            {/* Seccion de links */}
            <div className="py-12 lg:border-b-8 lg:border-r-8 border-[#38383f] rounded-2xl">
                <div className="lg:flex justify-start 2xl:space-x-40 xl:space-x-28 lg:space-x-16">
                    <div className="lg:flex flex-col hidden">
                        <h3 className="font-semibold mb-2 text-sm text-gray-300 hover:underline">Latest News</h3>
                        <ul>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">What is F1?</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Video</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Drivers</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Teams</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Schedule</li>
                        </ul>
                    </div>
                    <div className="lg:flex flex-col hidden">
                        <h3 className="font-semibold mb-2 text-sm text-gray-300 hover:underline">Results</h3>
                        <ul>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">2024 Season</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Driver Standings</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Constructor Standings</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Archive 1950-2023</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1 Awards</li>
                        </ul>
                    </div>
                    <div className="lg:flex flex-col hidden">
                        <h3 className="font-semibold mb-2 text-sm text-gray-300 hover:underline">Gaming</h3>
                        <ul>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Esports</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Fantasy</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1 24</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1 Manager 24</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1 Play</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1 Clash</li>
                        </ul>
                    </div>
                    <div className="lg:flex flex-col hidden">
                        <h3 className="font-semibold mb-2 text-sm text-gray-300 hover:underline">Live Timing</h3>
                    </div>
                    <div className="lg:flex flex-col hidden">
                        <h3 className="font-semibold mb-2 text-sm text-gray-300 hover:underline">Tickets</h3>
                        <ul>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1® Experiences</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Store</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">Paddock Club</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1® TV</li>
                            <li className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">F1® Authentics</li>
                        </ul>
                    </div>
                    <div className="lg:flex flex-col hidden">
                        <h3 className="font-semibold mb-2 text-sm text-gray-300 hover:underline">Rules & Regulations</h3>
                    </div>
                    {/* Acordeon */}
                    <Accordion type="single" collapsible className="w-full block lg:hidden">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-semibold text-sm text-gray-300 hover:underline">
                                Latest News
                            </AccordionTrigger>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                What is F1?
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Video
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Drivers
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Teams
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Schedule
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="font-semibold text-sm text-gray-300 hover:underline">
                                Results
                            </AccordionTrigger>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                2024 Season
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Driver Standings
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Constructor Standings
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Archive 1950-2023
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1 Awards
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="font-semibold text-sm text-gray-300 hover:underline">
                                Gaming
                            </AccordionTrigger>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Fantasy
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Esports
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1 24
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1 Manager 24
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1 Play
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1 Clash
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className="font-semibold text-sm text-gray-300 hover:underline">
                                Live Timing
                            </AccordionTrigger>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger className="font-semibold text-sm text-gray-300 hover:underline">
                                Tickets
                            </AccordionTrigger>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1® Experiences
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Store
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                Paddock Club
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1® TV
                            </AccordionContent>
                            <AccordionContent className="font-medium text-sm leading-6 hover:underline hover:text-red-500 text-gray-500 transition-all duration-200 ease-in-out">
                                F1® Authentics
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger className="font-semibold text-sm text-gray-300 hover:underline">
                                Rules & Regulations
                            </AccordionTrigger>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            {/* Seccion de adicionales */}
            <div className="flex-1 py-4">
                <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3">
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Contacts</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">F1 TV Support</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Privacy Policy</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Cookies Policy</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Cookie Preferences</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Guidelines</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Legal Notices</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Code of Conduct</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Anti-Bribery</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Human Rights</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Gender Pay Report</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Terms of Use</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Partners</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">F1® Fan Voice</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">F1® Corporate Site</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Become an Affiliate</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Official F1® Race Programme</li>
                    <li className="sm:text-xs text-[10px] text-gray-400 hover:text-red-500 transition-colors duration-200 ease-in-out cursor-pointer">Modern Slavery Statement</li>
                </ul>
            </div>
            {/* Seccion de logos */}
            <div className="flex flex-row flex-1 justify-between items-center py-4 sm:py-8">
                <a href="https://www.formula1.com" title="Formula 1" className="f1-logo" target="_blank">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 80" 
                        fill="none" 
                        className="w-10 sm:w-14"
                    >
                        <g clip-path="url(#clip0_1_57-1)">
                            <g clip-path="url(#clip1_1_57-1)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M45.2583 80L80.7417 45.575H80.7333C94.7167 32.0167 100.392 29.9583 127.058 29.9583H233.408L264.008 0H123.025C87.3333 0 77.2417 3.4 56.3083 24.1167L0 80H45.2583ZM127.7 34.7417H228.842L200.792 62.7917H128.225C114.925 62.7917 111.983 63.4167 105.383 70.0167L95.4 80H53.4333L84.4583 48.975C96.6417 36.8 100.842 34.7417 127.7 34.7417ZM320 0L239.783 80H190.175L270.175 0H320ZM267.183 77.4667C268.85 79.1583 270.95 80 273.475 80C276 80 278.075 79.1583 279.717 77.4833C281.358 75.8083 282.175 73.7333 282.175 71.2667C282.175 68.8 281.35 66.725 279.7 65.0333C278.05 63.3417 275.967 62.5 273.442 62.5C270.917 62.5 268.825 63.3417 267.167 65.0167C265.508 66.6917 264.675 68.7667 264.675 71.2333C264.675 73.7 265.508 75.775 267.183 77.4667ZM268.225 66.025C269.625 64.5917 271.358 63.875 273.425 63.875C275.5 63.875 277.233 64.5917 278.625 66.025C280.017 67.4583 280.717 69.2 280.717 71.25C280.717 73.3 280.017 75.0333 278.625 76.4583C277.225 77.8833 275.5 78.5917 273.425 78.5917C271.35 78.5917 269.617 77.875 268.225 76.4417C266.833 75.0083 266.133 73.275 266.133 71.2333C266.133 69.1917 266.833 67.4583 268.225 66.025ZM271.717 76.125V72.6917L271.725 72.7H273.683L275.342 76.1333H277.367L275.542 72.45C276.158 72.1667 276.592 71.8 276.85 71.3417C277.108 70.8833 277.233 70.1833 277.233 69.2417C277.233 68.3 276.917 67.5917 276.283 67.125C275.65 66.65 274.7 66.4167 273.442 66.4167H269.792V76.125H271.717ZM271.683 71.1833V67.9167H273.275C274.65 67.9167 275.333 68.4583 275.333 69.55C275.333 70.125 275.2 70.5417 274.933 70.8C274.675 71.0583 274.242 71.1833 273.642 71.1833H271.683Z" fill="white"></path>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_57-1">
                                <rect width="320" height="80" fill="white"></rect>
                            </clipPath>
                            <clipPath id="clip1_1_57-1">
                                <rect width="320" height="80" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <span className="text-[8px] sm:text-xs md:text-sm text-[#d0d0d2]">© 2003-2024 Formula One World Championship Limited</span>
            </div>
        </footer>
)}
