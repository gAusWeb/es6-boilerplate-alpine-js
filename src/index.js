import _ from "lodash";
// import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css";
import "./tailwind.js";
import "./style.css";
import Icon from "./assets/images/icon-tick.png";
import printMe from "./print";
import "./style.scss";
import test from "./subscribe-now-panel";
import test2 from "./table-duplication-reformat";
import MyPromises from "./my-promises";
import "./subscribe-now-panel.scss";
import "./tables.scss";
import "./navigation.scss";
import Alpine from "alpinejs";
import slideout from "./navigation-mobile";
import { alertTest } from "./alert";

import collapse from "@alpinejs/collapse";

function component() {
    window.Alpine = Alpine;
    Alpine.start();
    Alpine.plugin(collapse);

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
                                    <!--<div class="navigation__desktop-menu-inner-wrapper">
                                        <div>-->
                                            <ul class="navigation__layer-1">
                                                <li x-data="{ open: false }"  x-on:keydown.escape.prevent.stop="close($refs.button)" class="relative">
                                                    <!-- Button -->
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

                                                        <!-- Heroicon: chevron-down -->
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Explore prizes
                                                        </a>

                                                        <a href="#" class="navigation__active flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            2023 Lineup
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 0</span>
                                                        </a>
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 0
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 0
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 0</span>
                                                        </a>
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 0
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 0
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 0</span>
                                                        </a>
                                                    </div>                            
                                                </li>

                                                <li  x-data="{ open: false }" class="relative">
                                                    <!-- Button -->
                                                    <button
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        VIP Club

                                                        <!-- Heroicon: chevron-down -->
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 1</span>
                                                        </a>
                                                    </div>
                                                </li>

                                                <li  x-data="{ open: false }" class="relative">
                                                    <!-- Button -->
                                                    <button
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        Winners

                                                        <!-- Heroicon: chevron-down -->
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 1</span>
                                                        </a>
                                                    </div>
                                                </li>

                                                <li  x-data="{ open: false }" class="relative">
                                                    <!-- Button -->
                                                    <button
                                                        @click="open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        About us

                                                        <!-- Heroicon: chevron-down -->
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 1</span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>

                                                
                                            <ul class="navigation__login-cart-wrapper">
                                                <li  x-data="{ open: false }" class="navigation__login relative">
                                                    <!-- Button -->
                                                    <button
                                                        @click="$dispatch('open-menu', { open: false }), open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        <div>
                                                            <img src="./assets/images/navigation-login-avatar-circle.svg" alt="RSL Union Login Avatar" />
                                                            Login
                                                        </div>
                                                    </button>

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 1</span>
                                                        </a>
                                                    </div>
                                                </li>

                                                <li  x-data="{ open: false }" class="navigation__login status--logged-in relative">
                                                    <!-- Button -->
                                                    <button
                                                        @click="$dispatch('open-menu', { open: false }), open = !open"
                                                        :aria-expanded="open ? 'true' : 'false'"
                                                        :aria-controls="$id('dropdown-button')"
                                                        type="button"
                                                        class="navigation__primary-btn"
                                                        :class="open && ' open'"
                                                    >
                                                        <div>
                                                            <img src="./assets/images/navigation-login-avatar-circle.svg" alt="RSL Union Login Avatar" />
                                                            Frank Drebbin
                                                        </div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                        </svg>
                                                    </button>

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 1</span>
                                                        </a>
                                                    </div>
                                                </li>
                                            
                                                <li  x-data="{ open: false }" class="navigation__cart relative">
                                                    <!-- Button -->
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

                                                    <!-- Panel -->
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
                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            New Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            Edit Task 1
                                                        </a>

                                                        <a href="#" class="flex items-center gap-2 w-full first-of-type:rounded-t-md last-of-type:rounded-b-md px-4 py-2.5 text-left text-sm hover:bg-gray-50 disabled:text-gray-500">
                                                            <span class="text-red-600">Delete Task 1</span>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>
                                        <!--</div>
                                    </div>-->
                                    <button
                                    x-data="{usedKeyboard: false}"
                                    @keydown.window.tab="usedKeyboard = true"
                                    @click="$dispatch('open-menu', { open: true })"
                                    :class="{'focus:outline-none': !usedKeyboard}"
                                    class="navigation__hamburger"
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu stroke-current"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                    </button>
                                </div>
                            </div>

                            <div class="navigation__logo">
                                <img src="./assets/images/rsl-art-union-logo.svg" alt="RSL Art Uninion Winners">
                            </div>                        
                        </div>
                    </div>
                </header>
            </div>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-16">
            <button
                x-data="{usedKeyboard: false}"
                @keydown.window.tab="usedKeyboard = true"
                role=button
                @click="$dispatch('open-menu', { open: true })"
                :class="{'focus:outline-none': !usedKeyboard}"
                class="bg-indigo-500 hover:bg-indigo-400 h-64 text-white font-extrabold text-4xl flex items-center justify-center uppercase">
                Open Menu
            </button>
        </div>
    

        <section
            x-data="slideout()"
            @open-menu.window="open = $event.detail.open"
            x-cloak
            @keydown.window.tab="usedKeyboard = true"
            @keydown.escape="open = false"
            x-init="init()"
        >
            <div
                x-show.transition.opacity.duration.500="open"
                @click="open = false"
                class="navigation__mobile-underlay"
            >
            </div>
            
            <div
                class="navigation__mobile-menu-wrapper"
                :class="{'translate-x-full': !open}">
                
                <div class=" w-full absolute top-0 h-full overflow-y-auto">
                    
                    <ul 
                        x-data="navToggle()" 
                        x-cloak
                        @selected.window="selected = $event.detail.selected"
                        x-init="init()"
                        class="navigation__mobile-ul"
                    >
                        <li class="navigation__mobile-close-li">
                            <button
                                @click="open = false, $dispatch('selected', { selected: null })"
                                x-ref="closeButton"
                                :class="{'focus:outline-none': !usedKeyboard}"
                                class="navigation__mobile-close-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </li>

                        <li>
                            <!--<button @click="$dispatch('selected', { selected: 1 })">test</button>-->
                            <button @click="selected !== 0 ? selected = 0 : selected = null">test  0</button>

                            <div x-show="selected == 0" x-collapse>
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
                            <button @click="selected !== 1 ? selected = 1 : selected = null">test 1</button>     

                            <div x-show="selected == 1" x-collapse>
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
        `;

    // element.innerHTML = `<button onClick="window.alertTest()">alert me</button><br /><button onClick="slideout.slideout()">alert me</button>`;

    // SubscribeNowPanel();
    // test();
    test2();
    // navMobile();

    return element;
}

document.body.appendChild(component());
