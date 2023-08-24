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

    element.innerHTML = `
    <div class="navigation">

    <div class="navigation__wrapper">
      <header class="navigation__header">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">    
              <div class="navigation__header-inner">
                
                <div class="navigation__logo">
                  <a href="#" tabindex="0">
                    <img src="./assets/images/rsl-art-union-logo.svg" alt="RSL Art Uninion Winners">
                  </a>
                </div>

                <div>
                  <div class="navigation__desktop-menu-wrapper">
  
                    <ul class="navigation__ul desktop collapse-wrapper dropdown">
                      <li class="item">
                      
                        <button 
                          type="button" 
                          class="navigation__primary-btn head"
                          aria-expanded="false" 
                          aria-label="Toggle navigation"
                        >
                          Prizes

                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>

                        <div class="body collapsed" aria-expanded="false" 
                        aria-label="Toggle navigation">
                          <div>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                        
                          </div>
                        </div>
                      </li>

                      <li class="item">
                        <button 
                          type="button" 
                          class="navigation__primary-btn head"
                          aria-expanded="false" 
                          aria-label="Toggle navigation"
                        >
                          VIP Club
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>

                        <div class="body collapsed">
                          <div>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                   
                          </div>
                        </div>
                      </li>
                      <li class="item">
                        <button 
                          type="button" 
                          class="navigation__primary-btn head"
                          aria-expanded="false" 
                          aria-label="Toggle navigation"
                        >
                          Winners

                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>

                        <div class="body collapsed">
                          <div>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                        
                          </div>
                        </div>
                      </li>

                      <li class="item">
                        <button 
                          type="button" 
                          class="navigation__primary-btn head"
                          aria-expanded="false" 
                          aria-label="Toggle navigation"
                        >
                          About us
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd" />
                          </svg>
                        </button>

                        <div class="body collapsed">
                          <div>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                   
                          </div>
                        </div>
                      </li>
                     
                      <li class="item desktop-login">
                        <button 
                          aria-expanded="false" 
                          aria-label="Toggle navigation" 
                          type="button" 
                          class="navigation__primary-btn head"
                        >
                          <div>
                            <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar">
                            Frank Drebbin
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                          </svg>
                        </button>
                        

                        <div class="body collapsed">
                          <div>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                            <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu">
                              <div class="navigation-sub-menu__details">
                                <div class="navigation-sub-menu__heading">
                                  <p>Prizes</p>
                                  <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                                </div>
                              </div>
                            </button>
                   
                          </div>
                        </div>
                      </li>

                    </ul>
                    <div class="login-cart-wrapper-outer">
                      <ul class="navigation__ul login-cart-wrapper collapse-wrapper dropdown">
                        <li class="navigation__login status--logged-in item relative">                         
                          <button
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                            type="button"
                            class="navigation__primary-btn head" 
                          >
                              <div>
                                  <img src="./assets/images/frank-drebbin-avatar.svg" alt="RSL Union Login Avatar" />
                                  Frank Drebbin
                              </div>
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                          </button>
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
                    </div> 
  
                    <button 
                      type="button" 
                      class="navigation__hamburger" 
                      tabindex="0"
                      aria-expanded="false" 
                      aria-label="Toggle navigation"
                    >
                      <div class="nav-icon">
                        <div></div>
                      </div>
                    </button>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
  
 
            
  <section>
    <div class="navigation__sidebar-nav-wrapper navigation__mobile-wrapper translate-x-full">
      <ul>
        <li>

          <div class="my-collapse-wrapper">
            <div class="collapse-wrapper">
              <div class="item ">
                <button 
                  class="head" 
                  tabindex="0"
                  aria-expanded="false" 
                  aria-label="Toggle mobile navigation"
                >
                  number 1 head
                </button>
        
                <div class="body collapsed">
                  <div>
                    <button 
                      class="mobile-sub-menu-collapse-trigger 
                      navigation-sub-menu" 
                      tabindex="0"
                    >
                      <div class="navigation-sub-menu__details">
                        <div class="navigation-sub-menu__heading">
                          <p>Prizes</p>
                          <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                        </div>
                      </div>
                    </button>
                    <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
                      <div class="navigation-sub-menu__details">
                        <div class="navigation-sub-menu__heading" >
                          <p>Prizes</p>
                          <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                        </div>
                      </div>
                    </button>
                  
                  </div>
                </div>
              </div>
        
              <div class="item">
                <button 
                  class="head" 
                  tabindex="0"
                  aria-expanded="false" 
                  aria-label="Toggle mobile navigation"
                >
                  number 2 head
                </button>
        
                <div class="body collapsed">
                  <div>
                    <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
                      <div class="navigation-sub-menu__details">
                        <div class="navigation-sub-menu__heading">
                          <p>Prizes</p>
                          <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                        </div>
                      </div>
                    </button>
                    <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
                      <div class="navigation-sub-menu__details">
                        <div class="navigation-sub-menu__heading">
                          <p>Prizes</p>
                          <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                        </div>
                      </div>
                    </button>
            
                  </div>
                </div>
              </div>
        
              <div class="item">
                <button 
                  class="head" 
                  tabindex="0"
                  aria-expanded="false" 
                  aria-label="Toggle mobile navigation"
                >
                  number 3 head
                </button>
        
                <div class="body collapsed">
                  <div>
                    <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
                      <div class="navigation-sub-menu__details">
                        <div class="navigation-sub-menu__heading">
                          <p>Prizes</p>
                          <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                        </div>
                      </div>
                    </button>
                    <button class="mobile-sub-menu-collapse-trigger navigation-sub-menu" tabindex="0">
                      <div class="navigation-sub-menu__details">
                        <div class="navigation-sub-menu__heading">
                          <p>Prizes</p>
                          <img src="/assets/Frontend RSLLOTT/images/icons/chevron-down.svg" alt="custom alt for heading icon">
                        </div>
                      </div>
                    </button>
        
                  </div>
                </div>
              </div>
            </div>
          </div>

       
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
      $(".navigation__desktop-menu-wrapper .collapse-wrapper").each(function() {
        new CustomCollapse(this);
      })

      $(".login-cart-wrapper-outer .collapse-wrapper").each(function() {
        new CustomCollapse(this);
      })

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
