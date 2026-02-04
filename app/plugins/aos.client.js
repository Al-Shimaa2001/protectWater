// plugins/aos.client.js with RTL support
import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.hook("app:mounted", () => {
      AOS.init({
        // Basic configuration
        offset: 100,
        delay: 100,
        duration: 600,
        easing: "ease-in-out",
        once: true, // Animation happens only once

        // RTL support for Arabic
        disable: window.innerWidth < 768, // Disable on mobile if needed
        startEvent: "DOMContentLoaded",

        // Custom settings
        mirror: false,
        anchorPlacement: "top-bottom",
      });
    });

    // Refresh AOS on route changes
    nuxtApp.hook("page:finish", () => {
      if (process.client && typeof AOS !== "undefined") {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
    });
  }
});
