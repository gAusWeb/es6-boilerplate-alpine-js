window.slideout = function () {
    return {
        open: false,
        usedKeyboard: false,
        init() {
            this.$watch("open", (value) => {
                value && this.$refs.closeButton.focus();
                this.toggleOverlay();
            });
            this.toggleOverlay();
        },
        toggleOverlay() {
            document.body.classList[this.open ? "add" : "remove"](
                "h-screen",
                "overflow-hidden"
            );
        },
    };
};

window.navToggle = function () {
    console.log("test");
    return {
        selected: null,
        usedKeyboard: false,
        init() {
            this.$watch("selected", (value) => {
                console.log("selected", value);
                // value && this.$refs.closeButton.focus();
                // this.toggleOverlay();
            });
            // this.toggleOverlay();
        },
        // toggleOverlay() {
        //     document.body.classList[this.open ? "add" : "remove"](
        //         "h-screen",
        //         "overflow-hidden"
        //     );
        // },
    };
};

window.navToggleTest = function () {
    console.log("navToggleTest");
    return {
        open: null,
        usedKeyboard: false,
        toggle() {
            this.$watch("open", (value) => {
                console.log("open", value);
                // value && this.$refs.closeButton.focus();
                // this.toggleOverlay();
                this.open = value;
            });
            console.log("desktop-toggle", this.open);
            // if (this.open) {
            //     return this.close();
            // }

            // this.$refs.button.focus();

            // this.open = true;
        },
        close(focusAfter) {
            //     console.log("desktop-toggle: close", this.open);
            //     console.log("focusAfter", focusAfter);
            //     if (!this.open) return;

            this.open = null;

            //     focusAfter && focusAfter.focus();
        },
    };
};
