import Alpine from "alpinejs/dist/module.cjs";
// import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";

export default function () {
    window.Alpine = Alpine;
    Alpine.store("nav", {
        open: false,
        loginMenuOpen: false,
        menusOpen() {
            if (open || loginMenuOpen) {
                return true;
            } else if (!open || !loginMenuOpen) {
                return false;
            }
        },
        toggle() {
            this.loginMenuOpen = false;
            this.open = !this.open;
        },
        toggleLoginMenu() {
            this.open = false;
            this.loginMenuOpen = !this.loginMenuOpen;
        },
        subMenuActive: null,
        isMobile: false,
        isLoaded: false,
    });

    Alpine.plugin(collapse);
    Alpine.start();
}
