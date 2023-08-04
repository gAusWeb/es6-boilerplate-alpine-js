export default function () {
    $(document).ready(function () {
        console.log("hi");
        const subscribePanel = $(".subscribe-now-panel");
        if (subscribePanel.length < 1) return;

        /* 
            get dom element with a class .subscribe-now-panel__tcs within subscribePanel,
            absolutely position this element 1 rem below the last child div-element of .subscribe-now-panel__column-right,
            recalculate this position on window resize.
        */

        const subscribePanelWidth = $(subscribePanel).width();
        const subscribePanelTcs = subscribePanel.find(
            ".subscribe-now-panel__tcs"
        );
        const subscribePanelTcsAnchor = subscribePanelTcs.find("a");

        // if (subscribePanelTcsAnchor) {
    });
}
