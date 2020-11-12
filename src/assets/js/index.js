import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faArtstation, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../css/index.css';
import '../images/favicon.svg'

library.add(faArtstation, faGithub, faLinkedin);
library.add(faEnvelope);
dom.watch();

console.log('%c>>> Taking a look under the hood? Check out the source code: https://github.com/justinbot/justinbot.github.io', 'background: #2aa198; color: #000000');
