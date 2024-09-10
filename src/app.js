import page from "@page/page.mjs";
import { classMap } from "@lit/directives/class-map.js";
import { styleMap } from "@lit/directives/style-map.js";
import { repeat } from "@lit/directives/repeat.js";
import { until } from "@lit/directives/until.js";

import { showBrowseView } from "./views/browseView.js";
import { showLoginView } from "./views/loginView.js";
import { showProfileView } from "./views/profileView.js";
import { showRegisterView } from "./views/registerView.js";
import { showWelcomeView } from "./views/welcomeView.js";


document.getElementById("user-nav").style.display = "block";
document.getElementById("guest-nav").style.display = "block";


page("/", showWelcomeView);
page("/login", showLoginView);
page("/register", showRegisterView);
page("/browse", showBrowseView);
page("/profile", showProfileView);

page.start()

