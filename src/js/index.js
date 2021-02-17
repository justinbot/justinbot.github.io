import * as fontawesome from '@fortawesome/fontawesome-svg-core';
import { faArtstation, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../css/index.css';
import '../images/favicon.svg'

// Don't inject CSS, we include it.
fontawesome.config.autoAddCss = false;

// Only add icons we use to reduce bundle size.
fontawesome.library.add(faArtstation, faGithub, faLinkedin);
fontawesome.library.add(faEnvelope);
fontawesome.dom.watch();

// Easter egg :^)
console.log('%c>>> Taking a look under the hood? Check out the source code: https://github.com/justinbot/justinbot.github.io', 'background: #000000; color: #33d6ab');
