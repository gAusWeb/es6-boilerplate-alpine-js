import _ from "lodash";
// import "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.2/css/bootstrap.min.css";
// import "./tailwind.js";
// import "./style.css";
import printMe from "./print";
import calendarData from "./v2-data-2024-01-17";
// // import "./style.scss";
// import test from "./subscribe-now-panel";
// import test2 from "./table-duplication-reformat";
// import MyPromises from "./my-promises";
// import "./subscribe-now-panel.scss";
// import "./tables.scss";
// // import "./navigation.scss";
// import "./accordion-custom";
// import "./navigation-custom";
// import "./dropmenu-custom";
// import "./color-variables.scss";
// import "./nav.scss";

// import "./accordion-custom.scss";
import "./main.scss";
// import { CustomCollapse } from "./custom-collapse";
// import mobileMenu from "./mobile-menu";
// import rsllott from "./navigation-mobile";
// import { alertTest } from "./alert";
// import "./navigation-icon";
import "./loading-spinner.scss";
// import "./dayjsCustom";
// import './localWindowData';
// import "./dayjsCustom2_windowData";
import "./dayjsCustom2_windowData";

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
  // const btn = document.createElement("button");

  // Lodash, now imported by this script
  // element.innerHTML = _.join(["<h1>", "Hello", "webpack", "</h1>"], " ");

  // btn.innerHTML = "Click me and check the console!";
  // btn.onclick = printMe;
  // element.appendChild(btn);

  // // css
  // element.classList.add("hello");

  // // image
  // const myIcon = new Image();
  // myIcon.src = Icon;
  // myIcon.classList.add("image");

  // element.appendChild(myIcon);

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

  //   element.innerHTML = `
  //     <div class="navigation">

  //     <div class="navigation__wrapper">
  //       <header class="navigation__header">
  //         <div class="container">
  //           <div class="row">
  //             <div class="col-xs-12">
  //               <div class="navigation__header-inner">

  //                 <div class="navigation__logo">
  //                   <a href="#" tabindex="0">
  //                     <img src="./assets/images/rsl-art-union-logo.svg" alt="RSL Art Uninion Winners">
  //                   </a>
  //                 </div>

  //                 <div>
  //                   <div class="navigation__desktop-collapse">

  //                     <ul class="navigation__ul desktop collapse-custom dropdown">
  //                       <li class="collapse-custom__item">

  //                         <button
  //                           type="button"
  //                           class="navigation__primary-btn collapse-custom__head"
  //                           aria-expanded="false"
  //                           aria-label="Toggle navigation"
  //                         >
  //                           Prizes

  //                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
  //                             fill="currentColor">
  //                             <path fill-rule="evenodd"
  //                               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //                               clip-rule="evenodd" />
  //                           </svg>
  //                         </button>

  //                         <div class="collapse-custom__body collapsed" aria-expanded="false"
  //                         aria-label="Toggle navigation">
  //                           <div>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>

  //                           </div>
  //                         </div>
  //                       </li>

  //                       <li class="collapse-custom__item">
  //                         <button
  //                           type="button"
  //                           class="navigation__primary-btn collapse-custom__head"
  //                           aria-expanded="false"
  //                           aria-label="Toggle navigation"
  //                         >
  //                           VIP Club
  //                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
  //                             fill="currentColor">
  //                             <path fill-rule="evenodd"
  //                               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //                               clip-rule="evenodd" />
  //                           </svg>
  //                         </button>

  //                         <div class="collapse-custom__body collapsed">
  //                           <div>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>

  //                           </div>
  //                         </div>
  //                       </li>
  //                       <li class="collapse-custom__item">
  //                         <button
  //                           type="button"
  //                           class="navigation__primary-btn collapse-custom__head"
  //                           aria-expanded="false"
  //                           aria-label="Toggle navigation"
  //                         >
  //                           Winners

  //                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
  //                             fill="currentColor">
  //                             <path fill-rule="evenodd"
  //                               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //                               clip-rule="evenodd" />
  //                           </svg>
  //                         </button>

  //                         <div class="collapse-custom__body collapsed">
  //                           <div>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>

  //                           </div>
  //                         </div>
  //                       </li>

  //                       <li class="collapse-custom__item">
  //                         <button
  //                           type="button"
  //                           class="navigation__primary-btn collapse-custom__head"
  //                           aria-expanded="false"
  //                           aria-label="Toggle navigation"
  //                         >
  //                           About us
  //                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
  //                             fill="currentColor">
  //                             <path fill-rule="evenodd"
  //                               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //                               clip-rule="evenodd" />
  //                           </svg>
  //                         </button>

  //                         <div class="collapse-custom__body collapsed">
  //                           <div>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>

  //                           </div>
  //                         </div>
  //                       </li>

  //                       <li class="collapse-custom__item desktop-login">
  //                         <button aria-expanded="false" aria-label="Toggle navigation" type="button" class="collapse-custom__head navigation__primary-btn navigation-icon account logged-in">
  //                           <div class="navigation-icon__wrapper">
  //                             <div class="navigation-icon__image-wrapper">
  //                               <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar">
  //                               <div class="navigation-icon__background"></div>
  //                             </div>
  //                             <div class="navigation-icon__text-wrapper">
  //                               <span class="navigation-icon__text">Frank Drebbin</span>
  //                               <img class="navigation__button-image" width="20px" height="20px src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png">
  //                             </div>
  //                           </div>
  //                         </button>
  //                         <!--
  //                         <button
  //                           aria-expanded="false"
  //                           aria-label="Toggle navigation"
  //                           type="button"
  //                           class="collapse-custom__head navigation__primary-btn navigation-icon account logged-in"
  //                         >
  //                           <div>
  //                             <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar">
  //                             Frank Drebbin
  //                           </div>
  //                           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
  //                               <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
  //                           </svg>
  //                         </button>
  //                         -->

  //                         <div class="collapse-custom__body collapsed">
  //                           <div>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>
  //                             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
  //                               <div class="navigation-sub-menu__details">
  //                                 <div class="navigation-sub-menu__heading">
  //                                   <p>Prizes</p>
  //                                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                                 </div>
  //                               </div>
  //                             </button>

  //                           </div>
  //                         </div>
  //                       </li>

  //                     </ul>

  //                     <ul class="navigation__ul login-cart-wrapper">
  //                       <li class="navigation__login status--logged-in relative">
  //                         <button
  //                           aria-expanded="false"
  //                           aria-label="Toggle navigation"
  //                           type="button"
  //                           class="collapse-custom__head navigation__primary-btn navigation-icon account logged-in"
  //                         >
  //                           <div class="navigation-icon__wrapper">
  //                             <div class="navigation-icon__image-wrapper">
  //                               <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar">
  //                               <div class="navigation-icon__background"></div>
  //                             </div>
  //                             <div class="navigation-icon__text-wrapper">
  //                               <span class="navigation-icon__text" style="display: none">FrankDrebbin</span>
  //                               <img class="navigation__button-image" width="20px" height="20px" src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/chevron-bottom-512.png" alt="custom alt for chevron">
  //                             </div>
  //                           </div>
  //                         </button>
  //                       </li>
  //                       <li class="navigation__cart">
  //                         <button class="navigation-icon shopping-cart">
  //                           <div class="navigation-icon__wrapper">
  //                             <img src="./assets/images/shopping_cart.svg" alt="shopping cart icon">
  //                             <div class="navigation-icon__counter solid">
  //                               <span>1</span>
  //                             </div>
  //                           </div>
  //                         </button>
  //                       </li>
  //                     </ul>

  //                     <button
  //                       type="button"
  //                       class="navigation__hamburger"
  //                       tabindex="0"
  //                       aria-expanded="false"
  //                       aria-label="Toggle navigation"
  //                     >
  //                       <div class="nav-icon">
  //                         <div></div>
  //                       </div>
  //                     </button>

  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </header>
  //     </div>

  //     <section>
  //       <div class="navigation__sidebar-nav-wrapper navigation__mobile-wrapper translate-x-full">
  //         <ul>
  //           <li>
  //             <button
  //               class="navigation__mobile-close"
  //               tabindex="0"
  //               aria-expanded="false"
  //               aria-label="Close mobile navigation"
  //               style="padding: 20px;"
  //             >
  //               X
  //             </button>
  //           </li>

  //           <li>
  //             <div class="navigation__mobile-custom">
  //               <div class="collapse-custom">
  //                 <div class="collapse-custom__item">
  //                   <button
  //                     class="collapse-custom__head"
  //                     tabindex="0"
  //                     aria-expanded="false"
  //                     aria-label="Toggle mobile navigation"
  //                   >
  //                     number 1 head
  //                   </button>

  //                   <div class="collapse-custom__body collapsed">
  //                     <div>
  //                       <button
  //                         class="mobile-sub-menu-collapse-trigger
  //                         navigation-sub-menu"
  //                         tabindex="0"
  //                       >
  //                         <div class="navigation-sub-menu__details">
  //                           <div class="navigation-sub-menu__heading">
  //                             <p>Prizes</p>
  //                             <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                           </div>
  //                         </div>
  //                       </button>
  //                       <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
  //                         <div class="navigation-sub-menu__details">
  //                           <div class="navigation-sub-menu__heading" >
  //                             <p>Prizes</p>
  //                             <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                           </div>
  //                         </div>
  //                       </button>

  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div class="collapse-custom__item">
  //                   <button
  //                     class="collapse-custom__head"
  //                     tabindex="0"
  //                     aria-expanded="false"
  //                     aria-label="Toggle mobile navigation"
  //                   >
  //                     number 2 head
  //                   </button>

  //                   <div class="collapse-custom__body collapsed">
  //                     <div>
  //                       <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
  //                         <div class="navigation-sub-menu__details">
  //                           <div class="navigation-sub-menu__heading">
  //                             <p>Prizes</p>
  //                             <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                           </div>
  //                         </div>
  //                       </button>
  //                       <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
  //                         <div class="navigation-sub-menu__details">
  //                           <div class="navigation-sub-menu__heading">
  //                             <p>Prizes</p>
  //                             <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                           </div>
  //                         </div>
  //                       </button>

  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div class="collapse-custom__item">
  //                   <button
  //                     class="collapse-custom__head"
  //                     tabindex="0"
  //                     aria-expanded="false"
  //                     aria-label="Toggle mobile navigation"
  //                   >
  //                     number 3 head
  //                   </button>

  //                   <div class="collapse-custom__body collapsed">
  //                     <div>
  //                       <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
  //                         <div class="navigation-sub-menu__details">
  //                           <div class="navigation-sub-menu__heading">
  //                             <p>Prizes</p>
  //                             <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                           </div>
  //                         </div>
  //                       </button>
  //                       <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
  //                         <div class="navigation-sub-menu__details">
  //                           <div class="navigation-sub-menu__heading">
  //                             <p>Prizes</p>
  //                             <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                           </div>
  //                         </div>
  //                       </button>

  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //       </div>
  //   </section>

  //   <section>
  //     <div class="navigation__sidebar-nav-wrapper navigation__mobile-login-wrapper translate-x-full">
  //       <div>
  //         <ul>
  //           <li>
  //             <button
  //               class="navigation__mobile-close"
  //               tabindex="0"
  //               aria-expanded="false"
  //               aria-label="Close mobile navigation"
  //               style="padding: 20px;"
  //             >
  //               X
  //             </button>
  //           </li>
  //           <li>
  //             <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
  //               <div class="navigation-sub-menu__details">
  //                 <div class="navigation-sub-menu__heading">
  //                   <p>Prizes</p>
  //                   <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
  //                 </div>
  //               </div>
  //             </button>
  //           </li>
  //         </ul>

  //       </div>
  //     </div>
  //   </section>
  //   </div>

  // <!--

  // <a href="#" style="font-size: 3rem">test</a>

  // <br />
  // <br />
  // <br />
  // <br />
  // <br />
  // <br />
  // <br />
  // <br />
  // <div class="my-collapse-custom-2">
  // <div class="collapse-custom dropdown">
  //   <div class="collapse-custom__item collapsed-item">
  //     <button class="collapse-custom__head">
  //       number 1 head
  //     </button>

  //     <div class="collapse-custom__body collapsed">
  //       <div>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //       </div>
  //     </div>
  //   </div>

  //   <div class="collapse-custom__item collapsed-item">
  //     <button class="collapse-custom__head">
  //       number 1 head
  //     </button>

  //     <div class="collapse-custom__body collapsed">
  //       <div>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //       </div>
  //     </div>
  //   </div>

  //   <div class="collapse-custom__item collapsed-item">
  //     <button class="collapse-custom__head">
  //       number 1 head
  //     </button>

  //     <div class="collapse-custom__body collapsed">
  //       <div>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //         <a href="#">sub-menu item 1</a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // </div>

  // <p>
  //   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere consequuntur necessitatibus minus voluptates illo. Sapiente obcaecati recusandae ipsa, illum corporis alias delectus nam iste ipsum magnam quasi accusamus dolor maiores reprehenderit nesciunt consequatur asperiores vero provident error mollitia sit dignissimos dolore! Et aut voluptate pariatur necessitatibus quibusdam fugit blanditiis, maxime eligendi fuga consequatur modi iste deleniti debitis dolorum facilis veniam. Pariatur laborum rem maxime consequuntur reprehenderit minus deserunt, nobis esse officiis? Laudantium at perferendis et architecto. Ut non nesciunt ea quibusdam at est hic error nulla, iusto esse corrupti doloribus, explicabo nisi sit itaque quia accusamus reiciendis! Recusandae, tenetur explicabo.
  // </p>

  //   <div class="my-collapse-custom">
  //     <div class="collapse-custom">
  //       <div class="collapse-custom__item collapsed-item">
  //         <button class="collapse-custom__head">
  //           number 1 head
  //         </button>

  //         <div class="collapse-custom__body" style="max-height: 206px">
  //           <div>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //           </div>
  //         </div>
  //       </div>

  //       <div class="collapse-custom__item collapsed-item">
  //         <button class="collapse-custom__head">
  //           number 2 head
  //         </button>

  //         <div class="collapse-custom__body collapsed">
  //           <div>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //           </div>
  //         </div>
  //       </div>

  //       <div class="collapse-custom__item collapsed-item">
  //         <button class="collapse-custom__head">
  //           number 3 head
  //         </button>

  //         <div class="collapse-custom__body collapsed">
  //           <div>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //             <a href="#">sub-menu item 1</a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // -->
  //     `;

  // SubscribeNowPanel();
  // test();
  // test2();
  // navMobile();

  // $(document).ready(function() {
  //   $(".navigation__desktop-collapse .collapse-custom").each(function() {
  //     new CustomCollapse(this);
  //   })

  //   $(".navigation__mobile-custom .collapse-custom").each(function() {
  //     new CustomCollapse(this);
  //   })

  //   // $(".my-collapse-custom-2 .collapse-custom").each(function() {
  //   //   new CustomCollapse(this);
  //   // })
  // });

  // const upcomingDrawsDatav2 = document.createElement("script");
  // upcomingDrawsDatav2.src = "./v2-data-2024-01-17.js";
  // element.appendChild(upcomingDrawsDatav2);

  window.upcomingDrawsData = calendarData();

  element.innerHTML += `<div class="upcoming-draws-calendar">
    <div class="loading-spinner-wrapper">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>`;

  return element;
}

document.body.appendChild(component());

/*

calendarMonthEl.classList.add('calendar-month');
calendarMonthHeaderEl.classList.add('calendar-month-header');
selectedMonthEl.classList.add('calendar-month-header-selected-month');
selectedMonthEl.setAttribute('id', 'selected-month');
selectedMonthHeaderSelectorsEl.classList.add('calendar-month-header-selectors');
prevMonthSelectorEl.setAttribute('id', 'previous-month-selector');
nextMonthSelectorEl.setAttribute('id', 'next-month-selector');
daysOfWeekEl.classList.add('day-of-week');
daysOfWeekEl.setAttribute('id', 'days-of-week');
calendarDaysEl.classList.add('days-grid');
calendarDaysEl.setAttribute('id', 'calendar-days');

*/
