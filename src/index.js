import _ from "lodash";
// import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css";
// import "./tailwind.js";
// import "./style.css";
import Icon from "./assets/images/icon-tick.png";
import printMe from "./print";
// import "./style.scss";
import test from "./subscribe-now-panel";
import test2 from "./table-duplication-reformat";
import MyPromises from "./my-promises";
import "./subscribe-now-panel.scss";
import "./tables.scss";
// import "./navigation.scss";
import "./accordion-custom";
import "./navigation-custom";
import "./dropmenu-custom";
// import "./color-variables.scss";
// import "./nav.scss";

// import "./accordion-custom.scss";
import "./main.scss";
import { CustomCollapse } from "./custom-collapse";
// import mobileMenu from "./mobile-menu";
// import rsllott from "./navigation-mobile";
// import { alertTest } from "./alert";

import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";

function component() {
    // window.Alpine = Alpine;
    // Alpine.start();
    // Alpine.plugin(collapse);
    // Alpine.store("nav", {
    //     open: false,
    //     toggle() {
    //         this.open = !this.open;
    //     },
    //     subMenuActive: null,
    //     isMobile: false,
    // });

    // rsllott();

    const element = document.createElement("div");
    const btn = document.createElement("button");

    // Lodash, now imported by this script
    element.innerHTML = _.join(["<h1>", "Hello", "webpack", "</h1>"], " ");

    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;
    element.appendChild(btn);

    // css
    element.classList.add("hello");

    // image
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("image");

    element.appendChild(myIcon);

    

    // build and append to dom a CSS link tag with the href pointing at https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css
    // const link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href =
    //     "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css";
    // document.head.appendChild(link);

    // const scriptAlpineMin = document.createElement("script");
    // scriptAlpineMin.src = "https://cdn.tailwindcss.com";
    // const scriptAlpineMin = document.createElement("script");
    // scriptAlpineMin.src =
    //     "https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js";
    // const scriptAlpineCore = document.createElement("script");
    // scriptAlpineCore.src =
    //     "https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js";

    // document.body.appendChild(scriptAlpineMin);
    // document.body.appendChild(scriptAlpineCore);
    // element.innerHTML = `
    //     <div class="subscribe-now-panel">
    //         <div class="subscribe-now-panel__inner-wrapper">
    //             <a href="#" class="subscribe-now-panel__anchor-wrapper">
    //                 <div class="subscribe-now-panel__anchor-inner">
    //                     <div class="subscribe-now-panel__column-left">
    //                         <div class="subscribe-now-panel__image-container">
    //                             <img src="assets/images/icon-tick.png" style="height: auto; max-width:100%;" />
    //                         </div>
    //                     </div>

    //                     <div class="subscribe-now-panel__column-right">
    //                         <h3 class="h3 condensed">Experience the best!</h3>
    //                         <div class="subscribe-now-panel__visual-link">
    //                             <span>Subscribe now</span>
    //                             <img style="height: 28px" />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </a>
    //         </div>

    //         <div class="subscribe-now-panel__tcs m-1-top">
    //             <a href="#prize-tiles-tcs-1-2" style="display: none" data-lity>T&Cs Apply</a>
    //         </div>
    //     </div>

    //     <div class="subscribe-now-panel">
    //         <div class="subscribe-now-panel__inner-wrapper">
    //             <a href="#" class="subscribe-now-panel__anchor-wrapper">
    //                 <div class="subscribe-now-panel__anchor-inner">
    //                     <div class="subscribe-now-panel__column-left">
    //                         <div class="subscribe-now-panel__image-container">
    //                         <img src="assets/images/icon-tick.png" style="height: auto; max-width:100%;" />
    //                         </div>
    //                     </div>

    //                     <div class="subscribe-now-panel__column-right">
    //                         <h3 class="h3 condensed">Experience the best!</h3>
    //                         <div class="subscribe-now-panel__visual-link">
    //                             <span>Subscribe now</span>
    //                             <img style="height: 28px" />
    //                         </div>
    //                     </div>
    //                 </div>
    //             </a>
    //         </div>

    //         <div class="subscribe-now-panel__tcs m-1-top">
    //             <a href="#prize-tiles-tcs-1-2" style="display: none" data-lity>T&Cs Apply</a>
    //         </div>
    //     </div>
    //     <div class="container">
    //         <div class="row">
    //             <div class="col-12 col-sm2-6">
    //                 <div class="subscribe-now-panel">
    //                     <div class="subscribe-now-panel__inner-wrapper">
    //                         <a href="#" class="subscribe-now-panel__anchor-wrapper">
    //                             <div class="subscribe-now-panel__anchor-inner">
    //                                 <div class="subscribe-now-panel__column-left">
    //                                     <div class="subscribe-now-panel__image-container">
    //                                         <img src="assets/images/icon-tick.png" style="height: auto; max-width:100%;" />
    //                                     </div>
    //                                 </div>

    //                                 <div class="subscribe-now-panel__column-right">
    //                                     <h3 class="h3 condensed">Experience the best!</h3>
    //                                     <div class="subscribe-now-panel__visual-link">
    //                                         <span>Subscribe now</span>
    //                                         <img style="height: 28px" />
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </a>
    //                     </div>

    //                     <div class="subscribe-now-panel__tcs m-1-top">
    //                         <a href="#prize-tiles-tcs-1-2" style="display: none" data-lity>T&Cs Apply</a>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="row">
    //             <div class="col-12 col-sm2-6">
    //                 <div class="subscribe-now-panel">
    //                 <div class="subscribe-now-panel__inner-wrapper">
    //                     <a href="#" class="subscribe-now-panel__anchor-wrapper">
    //                         <div class="subscribe-now-panel__anchor-inner">
    //                             <div class="subscribe-now-panel__column-left">
    //                                 <div class="subscribe-now-panel__image-container">
    //                                 <img src="assets/images/icon-tick.png" style="height: auto; max-width:100%;" />
    //                                 </div>
    //                             </div>

    //                             <div class="subscribe-now-panel__column-right">
    //                                 <h3 class="h3 condensed">Experience the best!</h3>
    //                                 <div class="subscribe-now-panel__visual-link">
    //                                     <span>Subscribe now</span>
    //                                     <img style="height: 28px" />
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </a>
    //                 </div>

    //                 <div class="subscribe-now-panel__tcs m-1-top">
    //                     <a href="#prize-tiles-tcs-1-2" style="display: none" data-lity>T&Cs Apply</a>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // `;

    // element.innerHTML = `
    // <div class="container">
    //     <div class="row">
    //         <div class="col-12">
    //             <div class="table-wrapper connected">
    //                 <table class="rsllott vertical-table col-1-small d-none d-md-table">
    //                 <tr>
    //                     <th>Prize value</th>
    //                     <th>Sales ref num.</th>
    //                     <th>Location</th>
    //                 </tr>
    //                 <tr>
    //                     <td>$1,000</td>
    //                     <td>100000000</td>
    //                     <td>Kergunyah, Vic</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$2,000</td>
    //                     <td>200000000</td>
    //                     <td>Taigum, Qld</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$3,000</td>
    //                     <td>300000000</td>
    //                     <td>Anderson, Tas</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$4,000</td>
    //                     <td>400000000</td>
    //                     <td>Coopers, NT</td>
    //                 </tr>
    //                 </table>
    //             </div>
    //         </div>

    //         <div class="col-12">
    //             <div class="table-wrapper connected">
    //                 <table class="rsllott vertical-table col-1-medium alt-rows d-none d-md-table">
    //                 <tr>
    //                     <th>Prize</th>
    //                     <th>Sales</th>
    //                     <th>Location</th>
    //                 </tr>
    //                 <tr>
    //                     <td>$1,000</td>
    //                     <td>100000000</td>
    //                     <td>Kergunyah, Vic</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$2,000</td>
    //                     <td>200000000</td>
    //                     <td>Taigum, Qld</td>
    //                 </tr>

    //                 </table>
    //             </div>
    //         </div>

    //         <div class="col-12">
    //             <div class="table-wrapper">
    //                 <table class="rsllott theme--blue alt-rows vertical-table col-1-large d-none d-md-table">
    //                 <tr>
    //                     <th>Prize 3</th>
    //                     <th>Sales</th>
    //                     <th>Location</th>
    //                 </tr>
    //                 <tr>
    //                     <td>$1,000</td>
    //                     <td>100000000</td>
    //                     <td>Kergunyah, Vic</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$2,000</td>
    //                     <td>200000000</td>
    //                     <td>Taigum, Qld</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$1,000</td>
    //                     <td>100000000</td>
    //                     <td>Kergunyah, Vic</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$2,000</td>
    //                     <td>200000000</td>
    //                     <td>Taigum, Qld</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$1,000</td>
    //                     <td>100000000</td>
    //                     <td>Kergunyah, Vic</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$2,000</td>
    //                     <td>200000000</td>
    //                     <td>Taigum, Qld</td>
    //                 </tr>

    //                 </table>
    //             </div>
    //         </div>

    //         <div class="col-12">
    //             <div class="table-wrapper">
    //                 <table class="rsllott vertical-table col-1-medium alt-rows d-none d-md-table">

    //                 <tr>
    //                     <th>Prize</th>
    //                        <th>Sales</th>
    //                     <th>Location</th>
    //                 </tr>
    //                 <tr>
    //                     <td>$1,000</td>
    //                     <td>100000000</td>
    //                     <td>Kergunyah, Vic</td>
    //                 </tr>
    //                 <tr>
    //                     <td>$2,000</td>
    //                     <td>200000000</td>
    //                     <td>Taigum, Qld</td>
    //                 </tr>

    //                 </table>
    //             </div>
    //         </div>

    //     </div>
    // </div>`;

    /*
    element.innerHTML = `
        <div x-data="{selected:null}">
        
            <button @click="selected !== 0 ? selected = 0 : selected = null""  type="button" aria-expanded="false" aria-label="Toggle navigation">
                test
                <div class="nav-icon"><div></div></div>
            </button>
 
            <ul 
                class="ease-in" 
                
                
            >
                <li>
                    
                        <button @click="selected !== 1 ? selected = 1 : selected = null">Prizes</button>
                    
                        <ul x-show="item_1" x-collapse>
                            <li><a href="#">Prizes 1</a></li>
                            <li><a href="#">Prizes 2</a></li>
                            <li><a href="#">Prizes 3</a></li>
                            <li><a href="#">Prizes 4</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    
                        <button @click="selected !== 1 ? selected = 1 : selected = null">VIP Club</button>
                    
                        <ul x-show="item_2" x-collapse>
                            <li><a href="#">Prizes 1</a></li>
                            <li><a href="#">Prizes 2</a></li>
                            <li><a href="#">Prizes 3</a></li>
                            <li><a href="#">Prizes 4</a></li>
                        </ul>
                    
                </li>

                <li>
                    <div x-data="{ item_3: false }">
                        <button @click="item_3 = ! item_3">Winners</button>
                    
                        <ul x-show="item_3" x-collapse>
                            <li><a href="#">Prizes 1</a></li>
                            <li><a href="#">Prizes 2</a></li>
                            <li><a href="#">Prizes 3</a></li>
                            <li><a href="#">Prizes 4</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div x-data="{ item_4: false }">
                        <button @click="item_4 = ! item_4">About us</button>
                    
                        <ul x-show="item_4" x-collapse>
                            <li><a href="#">Prizes 1</a></li>
                            <li><a href="#">Prizes 2</a></li>
                            <li><a href="#">Prizes 3</a></li>
                            <li><a href="#">Prizes 4</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div x-data="{ item_5: false }">
                        <button @click="item_5 = ! item_5">My account</button>
                    
                        <ul x-show="item_5" x-collapse>
                            <li><a href="#">Prizes 1</a></li>
                            <li><a href="#">Prizes 2</a></li>
                            <li><a href="#">Prizes 3</a></li>
                            <li><a href="#">Prizes 4</a></li>
                        </ul>
                    </div>
                </li>

            </ul>
    
        </div>
    `;

    element.innerHTML = `
    
    <nav x-data="{open: false, toggle(){this.open = !this.open;}}">

  <div 
    id="nav-box" 
    class="grid justify-items-end items-center
  >

    <!-- bars btn -->
    <div 
      id="bars-btn"
      class="cursor-pointer md:hidden" 
      @click="toggle"
      
    >
      <img src="https://raw.githubusercontent.com/andrew-zachary/responsive-nav-menu/c444f2550548cee7d408ea1b8be32af34202bd16/public/bars.svg" alt="">
    </div>
    <!-- bars btn -->

    <!-- logo -->
    <div 
      id="logo" 
      class="md:col-start-1 md:col-end-2"
    >
      <img class="w-full max-w-[30rem]" src="/logo.svg" alt="">
    </div>
    <!-- logo -->

    <!-- links-list -->
    <div 
      id="list-links" 
      class="w-full 
      row-start-2 row-end-3 col-start-1 col-end-4
      md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3"
    >
         <ul 
            class="md:px-4
            text-4xl text-center font-regular capitalize
            md:!flex md:justify-between md:!h-full"
            x-show="open" x-collapse 
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 scale-90"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-300"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-90"
        >
            <div x-data="{selected:null}">
                <li class="py-6 md:py-0">
                    <button @click="selected !== 0 ? selected = 0 : selected = null">test</button>     

                    <div x-show="selected == 0" x-collapse>
                        <div class="border py-4 px-2">
                            This is made with Alpine JS and Tailwind CSS
                        </div>
                    </div>
                </li>

                <li class="py-6 md:py-0">
                    <button @click="selected !== 1 ? selected = 1 : selected = null">test</button>     

                    <div x-show="selected == 1" x-collapse>
                        <div class="border py-4 px-2">
                            This is made with Alpine JS and Tailwind CSS
                        </div>
                    </div>
                </li>
        <li class="py-6 md:py-0">
          <a href="#" class="hover:font-bold">about us</a>
        </li>
        <li class="py-6 md:py-0">
          <a href="#" class="hover:font-bold">contacts</a>
        </li>
        </div>
      </ul>
    </div>
    <!-- links-list -->

    <!-- search btn -->
    <div 
      id="search-btn" 
      class="cursor-pointer"
    >
      <img src="/search.svg" alt="">
    </div>
    <!-- search btn -->

  </div>

</nav>
    `;
    

    element.innerHTML = `
    <div class="grid justify-items-end items-center">
    <nav x-data="{sidebarOpen: false}" class=" ">

  <div 
    id="nav-box" 
    class="grid justify-items-end items-center
  >

    <!-- bars btn -->
    <div 
      id="bars-btn"
      class="cursor-pointer md:hidden" 
      @click="sidebarOpen = !sidebarOpen"
      
    >
      <img src="https://raw.githubusercontent.com/andrew-zachary/responsive-nav-menu/c444f2550548cee7d408ea1b8be32af34202bd16/public/bars.svg" alt="">
    </div>
    <!-- bars btn -->

    <!-- logo -->
    <div 
      id="logo" 
      class="md:col-start-1 md:col-end-2"
    >
      <img class="w-full max-w-[30rem]" src="/logo.svg" alt="">
    </div>
    <!-- logo -->

    
    <!-- links-list -->
    <div 
      id="list-links" 
      class="w-full 
      row-start-2 row-end-3 col-start-1 col-end-4
      md:row-start-1 md:row-end-2 md:col-start-2 md:col-end-3"
    >
         <ul 
         class="absolute flex-shrink-0 w-64 flex flex-col border-r transition-all duration-300 overflow-hidden" 
         :class="{ 'translate-x-0': sidebarOpen === true,  '-translate-x-full': sidebarOpen === false }"
         x-cloak
         x-data={slideout()}"
         x-init="init()"
        >
            <div x-data="{selected:null}">
                <li class="py-6 md:py-0">
                    <button @click="selected !== 0 ? selected = 0 : selected = null">test</button>     

                    <div x-show="selected == 0" x-collapse>
                        <div class="border py-4 px-2">
                            This is made with Alpine JS and Tailwind CSS
                        </div>
                    </div>
                </li>

                <li class="py-6 md:py-0">
                    <button @click="selected !== 1 ? selected = 1 : selected = null">test</button>     

                    <div x-show="selected == 1" x-collapse>
                        <div class="border py-4 px-2">
                            This is made with Alpine JS and Tailwind CSS
                        </div>
                    </div>
                </li>
        <li class="py-6 md:py-0">
          <a href="#" class="hover:font-bold">about us</a>
        </li>
        <li class="py-6 md:py-0">
          <a href="#" class="hover:font-bold">contacts</a>
        </li>
        </div>
      </ul>
    </div>
    <!-- links-list -->

    <!-- search btn -->
    <div 
      id="search-btn" 
      class="cursor-pointer"
    >
      <img src="/search.svg" alt="">
    </div>
    <!-- search btn -->

  </div>
  
  </nav>
  </div>
    `;

    */

    element.innerHTML = `

        <div class="navigation">
            <div class="navigation__wrapper">
                
                <header class="navigation__header">
                    <div class="container-custom">
                        <div class="navigation__header-inner">
                            <div>
                                <div class="navigation__desktop-menu-wrapper">

                                            <ul class="navigation__ul desktop">
                                              <li>
                                              sdas
                                              <div class="accordion-custom theme--blue box-shadow-removed" data-acc-cust="auto-toggle">
                                              <div class="accordion-custom__item">
                                                  <div class="accordion-custom__head" data-acc-cust-init-height="44">
                                                      <div class="accordion-custom__title-wrapper">
                                                          <div class="accordion-custom__title">
                                                          <div class="accordion-custom__title-icon">
                                                              test
                                                          </div>
                                                          How your support helps 1
                                                          </div>
                                                          <div class="accordion-custom__icon">
                                                          <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                                                                  arrow">      </div>
                                                      </div>
                                                  </div>
                                              
                                                  <div class="accordion-custom__body">
                                                      <div class="accordion-custom__inner">
                                                          <p>Custom item text 1</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="accordion-custom__item">
                                                  <div class="accordion-custom__head ">
                                                  <div class="accordion-custom__title-wrapper">
                                                      <div class="accordion-custom__title">
                                                      <div class="accordion-custom__title-icon">
                                                          
                                                      </div>
                                                      How your support helps 2
                                                      </div>
                                                      <div class="accordion-custom__icon">
                                                      <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                                                              arrow">      </div>
                                                  </div>
                                                  </div>
                                              
                                                  <div class="accordion-custom__body">
                                                  <div class="accordion-custom__inner">
                                                      <p>Custom item text 2</p>
                                                  </div>
                                                  </div>
                                              </div>
                                              <div class="accordion-custom__item">
                                                  <div class="accordion-custom__head">
                                                  <div class="accordion-custom__title-wrapper">
                                                      <div class="accordion-custom__title">
                                                      <div class="accordion-custom__title-icon">
                                                          
                                                      </div>
                                                      How your support helps 3
                                                      </div>
                                                      <div class="accordion-custom__icon">
                                                      <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                                                              arrow">      </div>
                                                  </div>
                                                  </div>
                                              
                                                  <div class="accordion-custom__body">
                                                  <div class="accordion-custom__inner">
                                                      <p>Custom item text 3</p>
                                                  </div>
                                                  </div>
                                              </div>
                                          </div>
                                              </li>
                                                <li x-data="{ open: false }"  x-on:keydown.escape.prevent.stop="close($refs.button)" class="relative">
                                                    
                                                    <button
                                                        x-ref="button"
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn navigation__active"
                                                        :class="open && ' open'"
                                                    >
                                                        Prizes

                                                        
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    
                                                    <div
                                                        x-show="open"
                                                        @click.away="open = false"
                                                        :id="$id('dropdown-button')"
                                                        style="display: none;"
                                                        class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                                                        x-transition:enter="transition ease-out duration-300"
                                                        x-transition:enter-start="opacity-0 transform scale-y-0"
                                                        x-transition:enter-end="opacity-100 transform scale-y-100"
                                                        x-transition:leave="transition ease-in duration-300"
                                                        x-transition:leave-end="opacity-0 transform scale-y-0"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Explore prizes
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="navigation__active flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    2023 Lineup
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 0</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 0
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Edit Task 0
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 0</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 0
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Edit Task 0
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 0</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>                            
                                                </li>

                                                <li  x-data="{ open: false }" class="relative">
                                                    
                                                    <button
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        VIP Club


                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    
                                                    <div
                                                        x-show="open"
                                                        @click.away="open = false"
                                                        :id="$id('dropdown-button')"
                                                        style="display: none;"
                                                        class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                                                        x-transition:enter="transition ease-out duration-300"
                                                        x-transition:enter-start="opacity-0 transform scale-y-0"
                                                        x-transition:enter-end="opacity-100 transform scale-y-100"
                                                        x-transition:leave="transition ease-in duration-300"
                                                        x-transition:leave-end="opacity-0 transform scale-y-0"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Edit Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 1</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li  x-data="{ open: false }" class="relative">
                                                    
                                                    <button
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        Winners


                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>


                                                    <div
                                                        x-show="open"
                                                        @click.away="open = false"
                                                        :id="$id('dropdown-button')"
                                                        style="display: none;"
                                                        class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                                                        x-transition:enter="transition ease-out duration-300"
                                                        x-transition:enter-start="opacity-0 transform scale-y-0"
                                                        x-transition:enter-end="opacity-100 transform scale-y-100"
                                                        x-transition:leave="transition ease-in duration-300"
                                                        x-transition:leave-end="opacity-0 transform scale-y-0"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Edit Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 1</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li  x-data="{ open: false }" class="relative">
                                                    
                                                    <button
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        About us

                                                        
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    
                                                    <div
                                                        x-show="open"
                                                        @click.away="open = false"
                                                        :id="$id('dropdown-button')"
                                                        style="display: none;"
                                                        class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                                                        x-transition:enter="transition ease-out duration-300"
                                                        x-transition:enter-start="opacity-0 transform scale-y-0"
                                                        x-transition:enter-end="opacity-100 transform scale-y-100"
                                                        x-transition:leave="transition ease-in duration-300"
                                                        x-transition:leave-end="opacity-0 transform scale-y-0"
                                                    >
                                                        <ul>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Edit Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 1</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>

                                                
                                            <ul class="navigation__ul login-cart-wrapper">
                                    

                                                <li  x-data="{ open: false }" class="navigation__login status--logged-in relative">
                                                    
                                                    <button
                                                        @click="$store.nav.open = false, open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        <div>
                                                            <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar" />
                                                            Frank Drebbin
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    <div
                                                        x-show="open"
                                                        @click.away="open = false"
                                                        :id="$id('dropdown-button')"
                                                        style="display: none;"
                                                        class="absolute origin-top-right bg-white shadow-md navigation__desktop-menu-dropdown"
                                                        x-transition:enter="transition ease-out duration-300"
                                                        x-transition:enter-start="opacity-0 transform scale-y-0"
                                                        x-transition:enter-end="opacity-100 transform scale-y-100"
                                                        x-transition:leave="transition ease-in duration-300"
                                                        x-transition:leave-end="opacity-0 transform scale-y-0"
                                                    >
                                                        <ul class="navigation__ul dropdown">
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 1
                                                                </a>
                                                            </li>
                                                            <li
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                Edit Task 1
                                                                </a>
                                                            </li>
                                                            <li
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                <span class="text-red-600">Delete Task 1</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            
                                                <li  x-data="{ open: false }" class="navigation__cart relative">
                                                    <button
                                                        @click="$dispatch('open-menu', { open: true }), open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        <img src="./assets/images/navigation-shopping-cart.svg" alt="RSL Union Login Avatar" />
                                                    </button>

                                                    <div
                                                        x-show="open"
                                                        @click.away="open = false"
                                                        :id="$id('dropdown-button')"
                                                        style="display: none;"
                                                        class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                                                        x-transition:enter="transition ease-out duration-300"
                                                        x-transition:enter-start="opacity-0 transform scale-y-0"
                                                        x-transition:enter-end="opacity-100 transform scale-y-100"
                                                        x-transition:leave="transition ease-in duration-300"
                                                        x-transition:leave-end="opacity-0 transform scale-y-0"
                                                    >
                                                    <ul>
                                                        <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    New Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    Edit Task 1
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                                    <span class="text-red-600">Delete Task 1</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                    <button
                                        x-data="{usedKeyboard: false, collapsed: true}"
                                        @keydown.window.tab="usedKeyboard = true"
                                        
                                        @click="$store.nav.toggle(), $store.nav.subMenuActive = null"
                                        
                                        
                                        :class="!$store.nav.open && ' collapsed'"
                                        class="navigation__hamburgers"
                                        
                                    >
                                        <div class="nav-icon"><div></div></div>
                                    </button>
                                </div>
                            </div>

                            <div class="navigation__logo">
                                <a href="#">
                                    <img src="./assets/images/rsl-art-union-logo.svg" alt="RSL Art Uninion Winners">
                                </a>
                            </div>                        
                        </div>
                    </div>
                </header>
            </div>
        </div>

        <section
            x-on:resize.window="$store.nav.isMobile = (window.innerWidth < 1024) ? true : false"
            
            @keydown.window.tab="usedKeyboard = true"
            @keydown.escape="open = false"
            class="navigation__mobile"
            :class="$store.nav.isMobile && ' is-mobile'"   
            x-init="$store.nav.isMobile = (window.innerWidth < 1024) ? true : false" 
        >
            <div
                x-show="$store.nav.open"    
                @click="$store.nav.toggle(), $store.nav.subMenuActive = null"
                class="navigation__mobile-underlay"
            >
            </div>
            
            <div
                class="navigation__mobile-menu-wrapper"
                
                :class="!$store.nav.open && ' translate-x-full'"
            >
                
                <div class=" w-full absolute top-0 h-full overflow-y-auto">
                    
                    <ul class="navigation__ul mobile">
                        <li>
                            <button @click="$store.nav.subMenuActive !== 0 ? $store.nav.subMenuActive = 0 : $store.nav.subMenuActive = null">test  0</button>

                            <div x-show="$store.nav.subMenuActive == 0" x-collapse>
                                <ul>
                                    <li>
                                        <a href="#">
                                            test - 0 - 0
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            test - 0 - 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            test - 0 - 2
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>

                        <li>
                        <button @click="$store.nav.subMenuActive !== 1 ? $store.nav.subMenuActive = 1 : $store.nav.subMenuActive = null">test  0</button>

                            <div x-show="$store.nav.subMenuActive == 1" x-collapse>
                                <ul>
                                    <li>
                                        <a href="#">
                                            test - 1 - 0
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            test - 1 - 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            test - 1 - 2
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            
            <!--
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-16">
                <button
                    x-data="{usedKeyboard: false}"
                    @keydown.window.tab="usedKeyboard = true"
                    role=button
                    
                    :class="{'focus:outline-none': !usedKeyboard}"
                    class="bg-indigo-500 hover:bg-indigo-400 h-64 text-white font-extrabold text-4xl flex items-center justify-center uppercase">
                    Open Menu
                </button>
            </div>
            -->
        `;

    // element.innerHTML = `
    //         <div class="navigation__mobile">
    //             <ul>
    //                 <li>
    //                     <button>nav item 1</button>
    //                     <ul style="display:none;">
    //                         <li>
    //                             <a href="#">dropdown item 1-1</a>
    //                         </li>
    //                         <li>
    //                             <a href="#">dropdown item 1-2</a>
    //                         </li>
    //                     </ul>
    //                 </li>
    //                 <li>
    //                     <button>nav item 2</button>
    //                     <ul style="display:none;">
    //                         <li>
    //                             <a href="#">dropdown item 2-1</a>
    //                         </li>
    //                         <li>
    //                             <a href="#">dropdown item 2-2</a>
    //                         </li>
    //                     </ul>
    //                 </li>
    //             </ul>
    //         </div>
    //     `;

    // element.innerHTML = `<button onClick="window.alertTest()">alert me</button><br /><button onClick="slideout.slideout()">alert me</button>`;
    element.innerHTML = `
    <div class="navigation">

    <div class="navigation__wrapper">
      <header class="navigation__header" style="top:100px">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">    
              <div class="navigation__header-inner">
                <div>
                  <div class="navigation__desktop-menu-wrapper">
  
                    <ul class="navigation__ul desktop">
                      <li>
                      <div class="accordion-custom theme--blue box-shadow-removed" data-acc-cust="auto-toggle">
            <div class="accordion-custom__item">
                <button class="accordion-custom__head" data-acc-cust-init-height="44">
                    <div class="accordion-custom__title-wrapper">
                        <div class="accordion-custom__title">
                        <div class="accordion-custom__title-icon">
                            
                        </div>
                        How your support helps 1
                        </div>
                        <div class="accordion-custom__icon">
                        <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                                arrow">      </div>
                    </div>
                </button>
            
                <div class="accordion-custom__body">
                    <div class="accordion-custom__inner">
                        <a href="#">Custom item text 1</a>
                    </div>
                </div>
            </div>
            <div class="accordion-custom__item">
                <button class="accordion-custom__head ">
                <div class="accordion-custom__title-wrapper">
                    <div class="accordion-custom__title">
                    <div class="accordion-custom__title-icon">
                        
                    </div>
                    How your support helps 2
                    </div>
                    <div class="accordion-custom__icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                            arrow">      </div>
                </div>
                </button>
            
                <div class="accordion-custom__body">
                <div class="accordion-custom__inner">
                <a href="#">Custom item text 2</a>
                </div>
                </div>
            </div>
            <div class="accordion-custom__item">
                <button class="accordion-custom__head">
                <div class="accordion-custom__title-wrapper">
                    <div class="accordion-custom__title">
                    <div class="accordion-custom__title-icon">
                        
                    </div>
                    How your support helps 3
                    </div>
                    <div class="accordion-custom__icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                            arrow">      </div>
                </div>
                </button>
            
                <div class="accordion-custom__body">
                <div class="accordion-custom__inner">
                  <a href="#">Custom item text 1</a>
                </div>
                </div>
            </div>
        </div>
                      </li>
                      <li>
                            <div class="dropmenu-custom">
                                <div class="dropmenu-custom__head">
                                    <button 
                                        type="button" 
                                        class="navigation__primary-btn"
                                        aria-expanded="open"
                                        aria-controls="$id('dropdown-button')" 
                                    >
                                        Prizes
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="dropmenu-custom__body" style="display: none;">
                                    <ul>
                                        <li><a href="https://google.com">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">6</a></li>
                                        <li><a href="#">7</a></li>
                                        <li><a href="#">8</a></li>
                                    </ul>
                                </div>
                            </div>
                      </li>

                      <li>
                        <div class="dropmenu-custom">
                          <div class="dropmenu-custom__head">
                            <button 
                              type="button" 
                              class="navigation__primary-btn"
                              aria-expanded="open"
                              aria-controls="$id('dropdown-button')" 
                            >
                              Prizes
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                              </svg>
                            </button>
                          </div>

                          <div class="dropmenu-custom__body" style="display:none;">
                            <ul>
                              <li><a href="https://google.com">1</a></li>
                              <li><a href="#">2</a></li>
                              <li><a href="#">3</a></li>
                              <li><a href="#">4</a></li>
                              <li><a href="#">5</a></li>
                              <li><a href="#">6</a></li>
                              <li><a href="#">7</a></li>
                              <li><a href="#">8</a></li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      <li>
                      <button type="button" class="navigation__primary-btn">
                        Prizes

                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
  
  
                        <div x-show="open" @click.away="open = false" :id="$id('dropdown-button')" style="display: none;"
                          class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                          x-transition:enter="transition ease-out duration-300"
                          x-transition:enter-start="opacity-0 transform scale-y-0"
                          x-transition:enter-end="opacity-100 transform scale-y-100"
                          x-transition:leave="transition ease-in duration-300"
                          x-transition:leave-end="opacity-0 transform scale-y-0">
                          <ul class="navigation__ul dropdown">
                            <li>
                               {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Explore prizes"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="2023 lineup"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--prizes
                                noticeInfo=true
                                badgeLabel="Draw 406"
                                badgeColor="color: #005B8D"
                                alertType="notice-alert"
                                noticeText="Final days"
                                menuHeading="Live for free"
                                menuImage="navigation-sub-menu-img-3.png"
                              }}
                            </li>
                            <li>
                              {{> navigation-sub-menu/navigation-sub-menu--prizes menuHeading="Sunshine Coast sanctuary"}}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--prizes
                                noticeInfo=true
                                noticeText="pre-order"
                                badgeLabel="Draw 408"
                                badgeColor="color: #005B8D"
                                menuImage="navigation-sub-menu-img.png"
                                menuHeading="Sydney Beachfront lifestyle or gold"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--prizes
                                noticeInfo=true
                                noticeText="pre-order"
                                badgeLabel="Draw 409"
                                badgeColor="color: #005B8D"
                                menuImage="navigation-sub-menu-img.png"
                                menuHeading="Gold Coast beach house"
                              }}
                            </li>
                          </ul>
                        </div>
                      </li>
  
                      <li 
                        x-data="{
                          open: false,
                          toggle() {
                              if (this.open) {
                                  return this.close()
                              }
              
                              this.$refs.button.focus()
              
                              this.open = true
                          },
                          close(focusAfter) {
                              if (! this.open) return
              
                              this.open = false
              
                              focusAfter && focusAfter.focus()
                          }
                        }"
                        x-on:keydown.escape.prevent.stop="close($refs.button)"
                        x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                        x-id="['dropdown-button']"
                      >
  
                        <button x-ref="button" @click="toggle()" :aria-expanded="open"
                          :aria-controls="$id('dropdown-button')" type="button" class="navigation__primary-btn"
                          :class="open && ' open'">
                          VIP Club
  
  
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
  
  
                        <div x-show="open" @click.away="open = false" :id="$id('dropdown-button')" style="display: none;"
                          class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                          x-transition:enter="transition ease-out duration-300"
                          x-transition:enter-start="opacity-0 transform scale-y-0"
                          x-transition:enter-end="opacity-100 transform scale-y-100"
                          x-transition:leave="transition ease-in duration-300"
                          x-transition:leave-end="opacity-0 transform scale-y-0">
                          <ul class="navigation__dropdown">
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="2023 lineup"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                headingIcon="crown-solid-vip.svg"
                                menuHeading="Join the VIP Club"
                              }}
                            </li>
                          </ul>
                        </div>
                      </li>
  
                      <li 
                        x-data="{
                          open: false,
                          toggle() {
                              if (this.open) {
                                  return this.close()
                              }
              
                              this.$refs.button.focus()
              
                              this.open = true
                          },
                          close(focusAfter) {
                              if (! this.open) return
              
                              this.open = false
              
                              focusAfter && focusAfter.focus()
                          }
                        }"
                        x-on:keydown.escape.prevent.stop="close($refs.button)"
                        x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                        x-id="['dropdown-button']"
                      >
  
                        <button x-ref="button" @click="toggle()" :aria-expanded="open"
                          :aria-controls="$id('dropdown-button')" type="button" class="navigation__primary-btn"
                          :class="open && ' open'">
                          Winners
  
  
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
  
  
                        <div x-show="open" @click.away="open = false" :id="$id('dropdown-button')" style="display: none;"
                          class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                          x-transition:enter="transition ease-out duration-300"
                          x-transition:enter-start="opacity-0 transform scale-y-0"
                          x-transition:enter-end="opacity-100 transform scale-y-100"
                          x-transition:leave="transition ease-in duration-300"
                          x-transition:leave-end="opacity-0 transform scale-y-0">
                          <ul class="navigation__dropdown">
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Art Union winners"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                headingIcon="5k-draw.svg"
                                menuHeading="5k Pay Day"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                headingIcon="100k-draw.svg"
                                menuHeading="VIP Quarterly Cash Draw"
                              }}
                            </li>
                          </ul>
                        </div>
                      </li>
  
                      <li 
                        x-data="{
                          open: false,
                          toggle() {
                              if (this.open) {
                                  return this.close()
                              }
              
                              this.$refs.button.focus()
              
                              this.open = true
                          },
                          close(focusAfter) {
                              if (! this.open) return
              
                              this.open = false
              
                              focusAfter && focusAfter.focus()
                          }
                        }"
                        x-on:keydown.escape.prevent.stop="close($refs.button)"
                        x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                        x-id="['dropdown-button']"
                        class="relative"
                      >
  
                        <button x-ref="button" @click="toggle()" :aria-expanded="open"
                          :aria-controls="$id('dropdown-button')" type="button" class="navigation__primary-btn"
                          :class="open && ' open'">
                          About us
  
  
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
  
  
                        <div x-show="open" @click.away="open = false" :id="$id('dropdown-button')" style="display: none;"
                          class="absolute origin-top bg-white shadow-md navigation__desktop-menu-dropdown"
                          x-transition:enter="transition ease-out duration-300"
                          x-transition:enter-start="opacity-0 transform scale-y-0"
                          x-transition:enter-end="opacity-100 transform scale-y-100"
                          x-transition:leave="transition ease-in duration-300"
                          x-transition:leave-end="opacity-0 transform scale-y-0">
                          <ul class="navigation__dropdown">
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Find out about us"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Contact us"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Our heroes"
                              }}
                            </li>
                            <li>
                              {{
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="FAQ"
                              }}
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
  
                    <ul class="navigation__ul login-cart-wrapper">
                      <li 
                        x-data="{
                          open: false,
                          toggle() {
                              if (this.open) {
                                  return this.close()
                              }
              
                              this.$refs.button.focus()
              
                              this.open = true
                          },
                          close(focusAfter) {
                              if (! this.open) return
              
                              this.open = false
              
                              focusAfter && focusAfter.focus()
                          }
                        }"
                        x-on:keydown.escape.prevent.stop="close($refs.button)"
                        x-on:focusin.window="! $refs.panel.contains($event.target) && close()"
                        x-id="['dropdown-button']"
                        class="navigation__login status--logged-in"
                      >
                        <button 
                          x-ref="button" 
                          @click="window.innerWidth < 1024 ? ($store.nav.toggleLoginMenu(), $store.nav.subMenuActive = null) : toggle()" 
                          :aria-expanded="open"
                          :aria-controls="$id('dropdown-button')" type="button" class="navigation-icon account logged-in"
                          :class="open && ' open'"
                        >
                          <div class="navigation-icon__wrapper">
                            <div>
                              <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar" />
                              <div class="navigation-icon__background"></div>
                            </div>
                            <span class="navigation-icon__text" style="display: none">FrankDrebbin</span>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>
  
                        <!--  <button class="navigation-icon account logged-in">
                          <div class="navigation-icon__wrapper">
                            <img src="./assets/images/icons/account_circle.svg" alt="account icon">
                            <div class="navigation-icon__background"></div>
                          </div>
                          <span class="navigation-icon__text" style="display: none">Hi Frankothan</span>
                        </button>  -->
  
                        <div x-show="open" @click.away="open = false" :id="$id('dropdown-button')" style="display: none;"
                          class="absolute origin-top-right bg-white shadow-md navigation__desktop-menu-dropdown"
                          x-transition:enter="transition ease-out duration-300"
                          x-transition:enter-start="opacity-0 transform scale-y-0"
                          x-transition:enter-end="opacity-100 transform scale-y-100"
                          x-transition:leave="transition ease-in duration-300"
                          x-transition:leave-end="opacity-0 transform scale-y-0">
                          <ul class="navigation__ul dropdown">
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="My details"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="My orders"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Buy tickets"
                              }}
                            </li>
                            <li>
                              {{> 
                                navigation-sub-menu/navigation-sub-menu--simple
                                menuHeading="Logout"
                                headingIcon="logout.svg"
                              }}
                            </li>
                          </ul>
                        </div>
                      </li>
  
                      <li class="navigation__cart">
                        <button class="navigation-icon shopping-cart">
                          <div class="navigation-icon__wrapper">
                            <img src="./assets/images/shopping_cart.svg" alt="shopping cart icon">
                            <div class="navigation-icon__counter solid">
                              <span>1</span>
                            </div>
                          </div>
                        </button>
                      </li>
                    </ul>
  
                    <button 
                      
                      class="navigation__hamburger"
                    >
                      <div class="nav-icon">
                        <div></div>
                      </div>
                    </button>
  
                  </div>
                </div>
  
                <div class="navigation__logo">
                  <a href="#">
                    <img src="./assets/images/rsl-art-union-logo.svg" alt="RSL Art Uninion Winners">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
  
  <section x-on:resize.window="$store.nav.isMobile = (window.innerWidth < 1024) ? true : false"
    @keydown.window.tab="usedKeyboard = true" @keydown.escape="open = false" class="navigation__mobile"
    :class="$store.nav.isMobile && ' is-mobile'" x-cloak x-init="$store.nav.isMobile = (window.innerWidth < 1024) ? true : false">
    <!--  <div x-show="$store.nav.open" @click="$store.nav.toggle(), $store.nav.subMenuActive = null"
      class="navigation__mobile-underlay">
    </div>  -->
  
    <div class="navigation__mobile-menu-wrapper" :class="!$store.nav.open && ' translate-x-full'">
  
      <div class=" w-full absolute top-0 h-full overflow-y-auto">
  
        <ul class="navigation__ul mobile">
          <li>
          <div class="accordion-custom theme--blue box-shadow-removed" data-acc-cust="auto-toggle">
          <div class="accordion-custom__item">
              <button class="accordion-custom__head" data-acc-cust-init-height="44">
                  <div class="accordion-custom__title-wrapper">
                      <div class="accordion-custom__title">
                      <div class="accordion-custom__title-icon">
                          
                      </div>
                      How your support helps 1
                      </div>
                      <div class="accordion-custom__icon">
                      <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                              arrow">      </div>
                  </div>
              </button>
          
              <div class="accordion-custom__body">
                  <div class="accordion-custom__inner">
                      <a href="#">Custom item text 1</a>
                  </div>
              </div>
          </div>
          <div class="accordion-custom__item">
              <button class="accordion-custom__head ">
              <div class="accordion-custom__title-wrapper">
                  <div class="accordion-custom__title">
                  <div class="accordion-custom__title-icon">
                      
                  </div>
                  How your support helps 2
                  </div>
                  <div class="accordion-custom__icon">
                  <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                          arrow">      </div>
              </div>
              </button>
          
              <div class="accordion-custom__body">
              <div class="accordion-custom__inner">
              <a href="#">Custom item text 2</a>
              </div>
              </div>
          </div>
          <div class="accordion-custom__item">
              <button class="accordion-custom__head">
              <div class="accordion-custom__title-wrapper">
                  <div class="accordion-custom__title">
                  <div class="accordion-custom__title-icon">
                      
                  </div>
                  How your support helps 3
                  </div>
                  <div class="accordion-custom__icon">
                  <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                          arrow">      </div>
              </div>
              </button>
          
              <div class="accordion-custom__body">
              <div class="accordion-custom__inner">
                <a href="#">Custom item text 1</a>
              </div>
              </div>
          </div>
      </div>
          </li>

          <li>
            <button 
              @click="$store.nav.subMenuActive !== 0 ? $store.nav.subMenuActive = 0 : $store.nav.subMenuActive = null" 
              class="navigation-sub-menu"
              :class="$store.nav.subMenuActive == 0 && ' open'"
            >
              <div class="navigation-sub-menu__details">
                <div class="navigation-sub-menu__heading">
                  <p>Prizes</p>
                  <img src="./assets/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                </div>
              </div>
            </button>
  
            <div x-show="$store.nav.subMenuActive == 0" x-collapse>
              <ul 
                class="navigation__ul dropdown" 
                :class="$store.nav.subMenuActive == 0 && ' active'"
              >
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="Explore prizes"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="2023 lineup"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--prizes
                    noticeInfo=true
                    badgeLabel="Draw 406"
                    badgeColor="color: #005B8D"
                    alertType="notice-alert"
                    noticeText="Final days"
                    menuHeading="Live for free"
                    menuImage="navigation-sub-menu-img-3.png"
                  }}
                </li>
                <li>
                  {{> navigation-sub-menu/navigation-sub-menu--prizes menuHeading="Sunshine Coast sanctuary"}}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--prizes
                    noticeInfo=true
                    noticeText="pre-order"
                    badgeLabel="Draw 408"
                    badgeColor="color: #005B8D"
                    menuImage="navigation-sub-menu-img.png"
                    menuHeading="Sydney Beachfront lifestyle or gold"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--prizes
                    noticeInfo=true
                    noticeText="pre-order"
                    badgeLabel="Draw 409"
                    badgeColor="color: #005B8D"
                    menuImage="navigation-sub-menu-img.png"
                    menuHeading="Gold Coast beach house"
                  }}
                </li>
              </ul>
            </div>
          </li>
  
          <li>
            <button 
              @click="$store.nav.subMenuActive !== 1 ? $store.nav.subMenuActive = 1 : $store.nav.subMenuActive = null"
              class="navigation-sub-menu"
              :class="$store.nav.subMenuActive == 1 && ' open'"
            >
              <div class="navigation-sub-menu__details">
                <div class="navigation-sub-menu__heading">
                  <p>VIP Club</p>
                  <img src="./assets/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                </div>
              </div>
            </button>
  
            <div x-show="$store.nav.subMenuActive == 1" x-collapse>
              <ul 
                class="navigation__ul dropdown" 
                :class="$store.nav.subMenuActive == 1 && ' active'"
              >
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="2023 lineup"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    headingIcon="crown-solid-vip.svg"
                    menuHeading="Join the VIP Club"
                  }}
                </li>
              </ul>
            </div>
          </li>
  
          <li>
            <button 
              @click="$store.nav.subMenuActive !== 1 ? $store.nav.subMenuActive = 1 : $store.nav.subMenuActive = null"
              class="navigation-sub-menu"
              :class="$store.nav.subMenuActive == 1 && ' open'"
            >
              <div class="navigation-sub-menu__details">
                <div class="navigation-sub-menu__heading">
                  <p>Winners</p>
                  <img src="./assets/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                </div>
              </div>
            </button>
  
            <div x-show="$store.nav.subMenuActive == 1" x-collapse>
              <ul 
                class="navigation__ul dropdown" 
                :class="$store.nav.subMenuActive == 1 && ' active'"
              >
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="Art Union winners"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    headingIcon="5k-draw.svg"
                    menuHeading="5k Pay Day"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    headingIcon="100k-draw.svg"
                    menuHeading="VIP Quarterly Cash Draw"
                  }}
                </li>
              </ul>
            </div>
          </li>
  
          <li>
            <button 
              @click="$store.nav.subMenuActive !== 2 ? $store.nav.subMenuActive = 2 : $store.nav.subMenuActive = null"
              class="navigation-sub-menu"
              :class="$store.nav.subMenuActive == 2 && ' open'"
            >
              <div class="navigation-sub-menu__details">
                <div class="navigation-sub-menu__heading">
                  <p>About Us</p>
                  <img src="./assets/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                </div>
              </div>
            </button>
  
            <div x-show="$store.nav.subMenuActive == 2" x-collapse>
              <ul 
                class="navigation__ul dropdown" 
                :class="$store.nav.subMenuActive == 2 && ' active'"
              >
               <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="Find out about us"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="Contact us"
                  }}
                </li>
                <li>
                  {{> 
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="Our heroes"
                  }}
                </li>
                <li>
                  {{
                    navigation-sub-menu/navigation-sub-menu--simple
                    menuHeading="FAQ"
                  }}
                </li>
              </ul>
            </div>
          </li>
  
          <li>
            <button 
              @click="$store.nav.subMenuActive !== 3 ? $store.nav.subMenuActive = 3 : $store.nav.subMenuActive = null"
              class="navigation-sub-menu"
              :class="$store.nav.subMenuActive == 3 && ' open'"
            >
              <div class="navigation-sub-menu__details">
                <div class="navigation-sub-menu__heading">
                  <p>VIP Club</p>
                  <img src="./assets/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                </div>
              </div>
            </button>
  
            <div x-show="$store.nav.subMenuActive == 3" x-collapse>
              <ul 
                class="navigation__ul dropdown" 
                :class="$store.nav.subMenuActive == 3 && ' active'"
              >
               <li>
                  {{> navigation-sub-menu/navigation-sub-menu--simple menuHeading="Explore prizes"}}
                </li>
                <li>
                  {{> navigation-sub-menu/navigation-sub-menu--simple menuHeading="2023 lineup"}}
                </li>
                <li>
                  {{> navigation-sub-menu/navigation-sub-menu--prizes menuHeading="Live for free"}}
                </li>
                <li>
                  {{> navigation-sub-menu/navigation-sub-menu--prizes menuHeading="Sunshine Coast sanctuary"}}
                </li>
                <li>
                  {{> navigation-sub-menu/navigation-sub-menu--prizes menuHeading="Sydney Beachfront lifestyle or gold"}}
                </li>
                <li>
                  {{> navigation-sub-menu/navigation-sub-menu--prizes menuHeading="Gold Coast beach house"}}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  
  <section x-on:resize.window="$store.nav.isMobile = (window.innerWidth < 1024) ? true : false"
    @keydown.window.tab="usedKeyboard = true" @keydown.escape="open = false" class="navigation__mobile"
    :class="$store.nav.isMobile && ' is-mobile'" x-cloak x-init="$store.nav.isMobile = (window.innerWidth < 1024) ? true : false">
    <!--  <div x-show="$store.nav.open" @click="$store.nav.toggle(), $store.nav.subMenuActive = null"
      class="navigation__mobile-underlay">
    </div>  -->
  
    <div class="navigation__mobile-menu-wrapper" :class="!$store.nav.loginMenuOpen && ' translate-x-full'">
  
      <div class=" w-full absolute top-0 h-full overflow-y-auto">
  
        <ul class="navigation__ul mobile">
           <li>
            {{> 
              navigation-sub-menu/navigation-sub-menu--simple
              menuHeading="My details"
            }}
          </li>
          <li>
            {{> 
              navigation-sub-menu/navigation-sub-menu--simple
              menuHeading="My orders"
            }}
          </li>
          <li>
            {{> 
              navigation-sub-menu/navigation-sub-menu--simple
              menuHeading="Buy tickets"
            }}
          </li>
          <li>
            {{> 
              navigation-sub-menu/navigation-sub-menu--simple
              menuHeading="Logout"
              headingIcon="logout.svg"
            }}
          </li>
        </ul>
      </div>
    </div>
  </section>


            
<section>
    <div class="navigation__sidebar-nav-wrapper navigation__mobile-wrapper translate-x-full">
      <ul>
        <li>

          <div class="my-collapse-wrapper">
            <div class="collapse-wrapper">
              <div class="item ">
                <button class="head">
                  number 1 head
                </button>
        
                <div class="body collapsed">
                  <div>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                  </div>
                </div>
              </div>
        
              <div class="item ">
                <button class="head">
                  number 2 head
                </button>
        
                <div class="body collapsed">
                  <div>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                  </div>
                </div>
              </div>
        
              <div class="item ">
                <button class="head">
                  number 3 head
                </button>
        
                <div class="body collapsed">
                  <div>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                    <a href="#">sub-menu item 1</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <!--
        <div class="unique-wrapper">
          <div class="collapse-wrapper">
          <div class="item ">
            <button class="head">
              number 1 head
            </button>
        
            <div class="body" style="max-height: 106px;">
              <div>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
              </div>
            </div>
          </div>
        
          <div class="item ">
            <button class="head">
              number 1 head
            </button>
        
            <div class="body collapsed">
              <div>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
              </div>
            </div>
          </div>
        
          <div class="item ">
            <button class="head">
              number 1 head
            </button>
        
            <div class="body collapsed">
              <div>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
                <a href="#">sub-menu item 1</a>
              </div>
            </div>
          </div>
        </div>
        </div> 
        -->
      </li>
      <!--
        <li>
          <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
            <div class="navigation-sub-menu__details">
              <div class="navigation-sub-menu__heading">
                <p>Prizes</p>
                <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
              </div>
            </div>
          </button>

          <ul class="navigation__dropdown mobile" style="display: none;">
            <li>
            <div class="accordion-custom theme--blue box-shadow-removed" data-acc-cust="auto-toggle">
            <div class="accordion-custom__item">
                <button class="accordion-custom__head" data-acc-cust-init-height="44">
                    <div class="accordion-custom__title-wrapper">
                        <div class="accordion-custom__title">
                        <div class="accordion-custom__title-icon">
                            
                        </div>
                        How your support helps 1
                        </div>
                        <div class="accordion-custom__icon">
                        <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                                arrow">      </div>
                    </div>
                </button>
            
                <div class="accordion-custom__body">
                    <div class="accordion-custom__inner">
                        <a href="#">Custom item text 1</a>
                    </div>
                </div>
            </div>
            <div class="accordion-custom__item">
                <button class="accordion-custom__head ">
                <div class="accordion-custom__title-wrapper">
                    <div class="accordion-custom__title">
                    <div class="accordion-custom__title-icon">
                        
                    </div>
                    How your support helps 2
                    </div>
                    <div class="accordion-custom__icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                            arrow">      </div>
                </div>
                </button>
            
                <div class="accordion-custom__body">
                <div class="accordion-custom__inner">
                <a href="#">Custom item text 2</a>
                </div>
                </div>
            </div>
            <div class="accordion-custom__item">
                <button class="accordion-custom__head">
                <div class="accordion-custom__title-wrapper">
                    <div class="accordion-custom__title">
                    <div class="accordion-custom__title-icon">
                        
                    </div>
                    How your support helps 3
                    </div>
                    <div class="accordion-custom__icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                            arrow">      </div>
                </div>
                </button>
            
                <div class="accordion-custom__body">
                <div class="accordion-custom__inner">
                  <a href="#">Custom item text 1</a>
                </div>
                </div>
            </div>
        </div>
            </li>

            <li>
              <a class="navigation-sub-menu " href="#">
                <div class="navigation-sub-menu__details">
                  <div class="navigation-sub-menu__draw-info">
                    <div class="badge-container draw-badge high-priority badge-default">
                      <span class="label-text col-default" style="color: #005B8D">Draw 000</span>
                    </div>
                    <div class="navigation-sub-menu__notice notice-win ">
                      <img src="/assets/Frontend RSLLOTT/images/icons/error_outline.svg" alt="Custom notice icon alt tag">
                      <span>Lorem Ipsum</span>
                    </div>
                  </div>
                  <div class="navigation-sub-menu__heading">
                    <p>Lorem Ipsum Dolar At Simut</p>
                    <img src="/assets/Frontend RSLLOTT/images/icons/favorite_heart.svg" alt="custom alt for heading icon">
                  </div>
                </div>
                <div class="navigation-sub-menu__media-wrapper">
                  <div class="navigation-sub-menu__image-wrapper">
                    <img src="/assets/Frontend RSLLOTT/images/placeholder/navigation-sub-menu-img.png" alt="">
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>

        <li>
        <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
            <div class="navigation-sub-menu__details">
              <div class="navigation-sub-menu__heading">
                <p>Prizes</p>
                <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
              </div>
            </div>
          </button>

          <ul class="navigation__dropdown mobile" style="display: none;">
            <li>
              <a class="navigation-sub-menu " href="#">
                <div class="navigation-sub-menu__details">
                  <div class="navigation-sub-menu__draw-info">
                    <div class="badge-container draw-badge high-priority badge-default">
                      <span class="label-text col-default" style="color: #005B8D">Draw 000</span>
                    </div>
                    <div class="navigation-sub-menu__notice notice-win ">
                      <img src="/assets/Frontend RSLLOTT/images/icons/error_outline.svg" alt="Custom notice icon alt tag">
                      <span>Lorem Ipsum</span>
                    </div>
                  </div>
                  <div class="navigation-sub-menu__heading">
                    <p>Lorem Ipsum Dolar At Simut</p>
                    <img src="/assets/Frontend RSLLOTT/images/icons/favorite_heart.svg" alt="custom alt for heading icon">
                  </div>
                </div>
                <div class="navigation-sub-menu__media-wrapper">
                  <div class="navigation-sub-menu__image-wrapper">
                    <img src="/assets/Frontend RSLLOTT/images/placeholder/navigation-sub-menu-img.png" alt="">
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
-->
      </ul>
<!--
        <div class="accordion-custom theme--blue box-shadow-removed" data-acc-cust="auto-toggle">
            <div class="accordion-custom__item">
                <div class="accordion-custom__head" data-acc-cust-init-height="44">
                    <div class="accordion-custom__title-wrapper">
                        <div class="accordion-custom__title">
                        <div class="accordion-custom__title-icon">
                            
                        </div>
                        How your support helps 1
                        </div>
                        <div class="accordion-custom__icon">
                        <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                                arrow">      </div>
                    </div>
                </div>
            
                <div class="accordion-custom__body">
                    <div class="accordion-custom__inner">
                        <p>Custom item text 1</p>
                    </div>
                </div>
            </div>
            <div class="accordion-custom__item">
                <div class="accordion-custom__head ">
                <div class="accordion-custom__title-wrapper">
                    <div class="accordion-custom__title">
                    <div class="accordion-custom__title-icon">
                        
                    </div>
                    How your support helps 2
                    </div>
                    <div class="accordion-custom__icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                            arrow">      </div>
                </div>
                </div>
            
                <div class="accordion-custom__body">
                <div class="accordion-custom__inner">
                    <p>Custom item text 2</p>
                </div>
                </div>
            </div>
            <div class="accordion-custom__item">
                <div class="accordion-custom__head">
                <div class="accordion-custom__title-wrapper">
                    <div class="accordion-custom__title">
                    <div class="accordion-custom__title-icon">
                        
                    </div>
                    How your support helps 3
                    </div>
                    <div class="accordion-custom__icon">
                    <img src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="accordion down
                            arrow">      </div>
                </div>
                </div>
            
                <div class="accordion-custom__body">
                <div class="accordion-custom__inner">
                    <p>Custom item text 3</p>
                </div>
                </div>
            </div>
        </div>
        -->
    </div>

</section>

<section>
  <div class="navigation__sidebar-nav-wrapper navigation__mobile-login-wrapper translate-x-full">
    <div>
      test 123
    </div>
  </div>
</section>

<a href="#" style="font-size: 3rem">test</a>

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<div class="my-collapse-wrapper-2">
<div class="collapse-wrapper dropdown">
  <div class="item ">
    <button class="head">
      number 1 head
    </button>

    <div class="body collapsed">
      <div>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
      </div>
    </div>
  </div>

  <div class="item ">
    <button class="head">
      number 1 head
    </button>

    <div class="body collapsed">
      <div>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
      </div>
    </div>
  </div>

  <div class="item ">
    <button class="head">
      number 1 head
    </button>

    <div class="body collapsed">
      <div>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
        <a href="#">sub-menu item 1</a>
      </div>
    </div>
  </div>
</div>
</div>

<p>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere consequuntur necessitatibus minus voluptates illo. Sapiente obcaecati recusandae ipsa, illum corporis alias delectus nam iste ipsum magnam quasi accusamus dolor maiores reprehenderit nesciunt consequatur asperiores vero provident error mollitia sit dignissimos dolore! Et aut voluptate pariatur necessitatibus quibusdam fugit blanditiis, maxime eligendi fuga consequatur modi iste deleniti debitis dolorum facilis veniam. Pariatur laborum rem maxime consequuntur reprehenderit minus deserunt, nobis esse officiis? Laudantium at perferendis et architecto. Ut non nesciunt ea quibusdam at est hic error nulla, iusto esse corrupti doloribus, explicabo nisi sit itaque quia accusamus reiciendis! Recusandae, tenetur explicabo.
</p>


  <div class="my-collapse-wrapper">
    <div class="collapse-wrapper">
      <div class="item ">
        <button class="head">
          number 1 head
        </button>

        <div class="body" style="max-height: 206px">
          <div>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
          </div>
        </div>
      </div>

      <div class="item ">
        <button class="head">
          number 2 head
        </button>

        <div class="body collapsed">
          <div>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
          </div>
        </div>
      </div>

      <div class="item ">
        <button class="head">
          number 3 head
        </button>

        <div class="body collapsed">
          <div>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
            <a href="#">sub-menu item 1</a>
          </div>
        </div>
      </div>
    </div>
  </div>

    `;

    // SubscribeNowPanel();
    // test();
    test2();
    // navMobile();

    $(document).ready(function() {
      $(".my-collapse-wrapper .collapse-wrapper").each(function() {
        new CustomCollapse(this);
      })
      
      $(".my-collapse-wrapper-2 .collapse-wrapper").each(function() {
        new CustomCollapse(this);
      })
    });

    return element;
}

document.body.appendChild(component());
