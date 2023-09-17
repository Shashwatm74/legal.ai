
if (typeof window === 'object') {
    const primaryNav = document.getElementById('PrimaryNav');
    const SecondaryNav = document.getElementById('SecondaryNav');
    const navToggle = document.getElementById('NavToggle');
    const navToggle2 = document.getElementById('NavToggle2');
    const menu = document.getElementById('menu');
    const pfp = document.getElementById('pfp');
    {
        //to set the data visible to none if not clicked on the menu or profile
        document?.addEventListener('click', (event) => {
            if ((event.target !== menu)) {
                if (event.target !== SecondaryNav) {
                    SecondaryNav.setAttribute("data-visible", "false");
                    navToggle2.setAttribute("data-visible", "false");
                }
            }
            if ((event.target !== pfp)) {
                if (event.target !== primaryNav) {

                    primaryNav.setAttribute("data-visible", "false");
                    navToggle.setAttribute("data-visible", "false");
                }
            }

        });

        // Toggle primary  nav
        navToggle?.addEventListener("click", () => {
            const visibilityProfile = primaryNav.getAttribute("data-visible");
            const visibilityMenu = SecondaryNav.getAttribute("data-visible");
            if ((visibilityProfile === "false") && (visibilityMenu === "false")) {
                primaryNav.setAttribute("data-visible", "true");
                navToggle.setAttribute("data-visible", "true");
            }
            else if ((visibilityProfile === "false") && (visibilityMenu === "true")) {
                SecondaryNav.setAttribute("data-visible", "false");
                navToggle2.setAttribute("data-visible", "false");
                primaryNav.setAttribute("data-visible", "true");
                navToggle.setAttribute("data-visible", "true");
            }

            else {
                primaryNav.setAttribute("data-visible", "false");
                navToggle.setAttribute("data-visible", "false");
            }
        });

        //Toggle secondary nav
        navToggle2?.addEventListener("click", () => {
            const visibilityProfile = primaryNav.getAttribute("data-visible");
            const visibilityMenu = SecondaryNav.getAttribute("data-visible");
            if ((visibilityProfile === "false") && (visibilityMenu === "false")) {
                SecondaryNav.setAttribute("data-visible", "true");
                navToggle2.setAttribute("data-visible", "true");
            }
            else if ((visibilityProfile === "true") && (visibilityMenu === "false")) {
                primaryNav.setAttribute("data-visible", "false");
                navToggle.setAttribute("data-visible", "false");
                SecondaryNav.setAttribute("data-visible", "true");
                navToggle2.setAttribute("data-visible", "true");
            }
            else {
                SecondaryNav.setAttribute("data-visible", "false");
                navToggle2.setAttribute("data-visible", "false");
            }
        });

    }
}