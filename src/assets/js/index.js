import '../css/index.css';

import '../images/favicon.svg'

import { dom, library } from '@fortawesome/fontawesome-svg-core';
import { faArtstation, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faComments, faEnvelope, faHandPointRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArtstation, faGithub, faLinkedin);
library.add(faEnvelope, faHandPointRight, faComments);
dom.watch();

console.log('%c>>> Taking a look under the hood? Check out the source code: https://github.com/justinbot/justinbot.github.io', 'background: #2aa198; color: #000000');
