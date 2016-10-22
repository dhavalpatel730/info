html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  background: transparent; }

body {
  font-size: 10px;
  font-family: Arial, Helvetica, sans-serif; }

textarea, input, select {
  font-family: Helvetica, Arial, sans-serif;
  box-sizing: border-box; }

ol, ul {
  list-style: none; }

blockquote, q {
  quotes: none; }

:focus {
  outline: 0; }

ins {
  text-decoration: none; }

del {
  text-decoration: line-through; }

table {
  border-collapse: collapse;
  border-spacing: 0; }

a {
  cursor: pointer;
  text-decoration: none; }

html, body {
  height: 100%; }

body {
  overflow-x: auto;
  overflow-y: scroll; }

.wixSiteProperties {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden; }

.SITE_ROOT {
  min-height: 100%;
  position: relative;
  margin: 0 auto; }

.POPUPS_ROOT {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: scroll;
  position: fixed;
  z-index: 99999; }
  .POPUPS_ROOT.mobile {
    z-index: 1005; }

.POPUPS_WRAPPER {
  position: relative;
  overflow: hidden; }
  .POPUPS_WRAPPER > div {
    /* page */
    margin: 0 auto; }

.auto-generated-link {
  color: inherit; }

html.device-phone body {
  overflow-y: auto; }

html.device-mobile-optimized.device-android {
  margin-bottom: 1px; }

html.device-mobile-optimized.blockSiteScrolling > body {
  position: fixed;
  width: 100%; }

body.device-mobile-optimized {
  overflow-x: hidden;
  overflow-y: scroll; }
  body.device-mobile-optimized.qa-mode {
    overflow-y: auto; }
  body.device-mobile-optimized #SITE_CONTAINER {
    width: 320px;
    overflow-x: visible;
    margin: 0 auto;
    position: relative; }
  body.device-mobile-optimized > * {
    max-width: 100% !important; }
  body.device-mobile-optimized .SITE_ROOT {
    overflow-x: hidden;
    overflow-y: hidden; }

body.device-mobile-non-optimized #SITE_CONTAINER > :not(.mobile-non-optimized-overflow) .SITE_ROOT {
  overflow-x: hidden;
  overflow-y: auto; }

body.device-mobile-non-optimized.fullScreenMode {
  background-color: #5f6360; }
  body.device-mobile-non-optimized.fullScreenMode .SITE_ROOT,
  body.device-mobile-non-optimized.fullScreenMode #SITE_BACKGROUND,
  body.device-mobile-non-optimized.fullScreenMode #MOBILE_ACTIONS_MENU {
    visibility: hidden; }

body.fullScreenMode {
  overflow-x: hidden !important;
  overflow-y: hidden !important; }
  body.fullScreenMode.device-mobile-optimized #TINY_MENU {
    opacity: 0;
    pointer-events: none; }

body.fullScreenMode-scrollable.device-mobile-optimized {
  overflow-x: hidden !important;
  overflow-y: auto !important; }
  body.fullScreenMode-scrollable.device-mobile-optimized .SITE_ROOT,
  body.fullScreenMode-scrollable.device-mobile-optimized #masterPage {
    overflow-x: hidden !important;
    overflow-y: hidden !important; }
  body.fullScreenMode-scrollable.device-mobile-optimized #masterPage,
  body.fullScreenMode-scrollable.device-mobile-optimized #SITE_BACKGROUND {
    height: auto !important; }

.fullScreenOverlay {
  z-index: 1005;
  position: fixed;
  left: 0;
  top: -60px;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
          justify-content: center;
  overflow-y: hidden; }
  .fullScreenOverlay > .fullScreenOverlayContent {
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 60px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    -webkit-transform: translateZ(0);
            transform: translateZ(0); }

.mobile-actions-menu-wrapper {
  z-index: 1000; }

body[contenteditable] {
  overflow-x: auto;
  overflow-y: auto; }

.bold {
  font-weight: bold; }

.italic {
  font-style: italic; }

.underline {
  text-decoration: underline; }

.lineThrough {
  text-decoration: line-through; }

.singleLineText {
  white-space: nowrap;
  text-overflow: ellipsis; }

.alignLeft {
  text-align: left; }

.alignCenter {
  text-align: center; }

.alignRight {
  text-align: right; }

.alignJustify {
  text-align: justify; }

ul.font_100, ol.font_100 {
  color: #080808;
  font-family: 'Arial, Helvetica, sans-serif', serif;
  font-size: 10px;
  font-style: normal;
  font-variant: normal;
  font-weight: normal;
  margin: 0;
  text-decoration: none;
  line-height: normal;
  letter-spacing: normal; }
  ul.font_100 li, ol.font_100 li {
    margin-bottom: 12px; }

letter {
  position: relative;
  display: inline-block; }

word {
  display: inline-block;
  white-space: nowrap; }

word.space,
letter.space {
  display: inline; }

.wixapps-less-spacers-align.ltr {
  text-align: left; }

.wixapps-less-spacers-align.center {
  text-align: center; }

.wixapps-less-spacers-align.rtl {
  text-align: right; }

.wixapps-less-spacers-align > div,
.wixapps-less-spacers-align > a {
  display: inline-block !important; }

.flex_display {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex; }

.flex_vbox {
  box-sizing: border-box;
  padding-top: 0.01em;
  padding-bottom: 0.01em; }

a.wixAppsLink img {
  cursor: pointer; }

.singleLine {
  white-space: nowrap;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: normal; }

[data-z-counter] {
  z-index: 0; }

[data-z-counter="0"] {
  z-index: auto; }

.circle-preloader {
  -webkit-animation: semi-rotate 1s 1ms linear infinite;
          animation: semi-rotate 1s 1ms linear infinite;
  height: 30px;
  left: 50%;
  margin-left: -15px;
  margin-top: -15px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  -webkit-transform-origin: 100% 50%;
          transform-origin: 100% 50%;
  width: 15px; }
  .circle-preloader::before {
    content: '';
    top: 0;
    left: 0;
    right: -100%;
    bottom: 0;
    border: 3px solid currentColor;
    border-color: currentColor transparent transparent currentColor;
    border-radius: 50%;
    position: absolute;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-animation: inner-rotate 0.5s 1ms linear infinite alternate;
            animation: inner-rotate 0.5s 1ms linear infinite alternate;
    color: #7fccf7; }
  .circle-preloader::after {
    content: '';
    top: 0;
    left: 0;
    right: -100%;
    bottom: 0;
    border: 3px solid currentColor;
    border-color: currentColor transparent transparent currentColor;
    border-radius: 50%;
    position: absolute;
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-animation: inner-rotate 0.5s 1ms linear infinite alternate;
            animation: inner-rotate 0.5s 1ms linear infinite alternate;
    color: #3899ec;
    opacity: 0; }
  .circle-preloader.white::before {
    color: #f0f0f0; }
  .circle-preloader.white::after {
    color: #dcdcdc; }

@-webkit-keyframes inner-rotate {
  to {
    opacity: 1;
    -webkit-transform: rotate(115deg);
            transform: rotate(115deg); } }

@keyframes inner-rotate {
  to {
    opacity: 1;
    -webkit-transform: rotate(115deg);
            transform: rotate(115deg); } }

@-webkit-keyframes semi-rotate {
  from {
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg); }
  45% {
    -webkit-transform: rotate(198deg);
            transform: rotate(198deg); }
  55% {
    -webkit-transform: rotate(234deg);
            transform: rotate(234deg); }
  to {
    -webkit-transform: rotate(540deg);
            transform: rotate(540deg); } }

@keyframes semi-rotate {
  from {
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg); }
  45% {
    -webkit-transform: rotate(198deg);
            transform: rotate(198deg); }
  55% {
    -webkit-transform: rotate(234deg);
            transform: rotate(234deg); }
  to {
    -webkit-transform: rotate(540deg);
            transform: rotate(540deg); } }

.hidden-comp-ghost-mode {
  opacity: 0.5; }

.g-transparent-a:link, .g-transparent-a:visited {
  border-color: transparent; }

.transitioning-comp {
  -webkit-transition-property: background-color, color !important;
  transition-property: background-color, color !important; }
  .transitioning-comp * {
    -webkit-transition: inherit !important;
    transition: inherit !important; }

.selectionSharerContainer {
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(57, 86, 113, 0.24);
  width: 142px;
  height: 45px;
  border-radius: 100px;
  text-align: center; }
  .selectionSharerContainer:after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 42%;
    /*controls horizontal position */
    border-width: 10px 10px 0;
    /* vary these values to change the angle of the vertex */
    border-style: solid;
    border-color: #ffffff transparent;
    /* reduce the damage in FF3.0 */
    display: block;
    width: 0; }
  .selectionSharerContainer .selectionSharerOption {
    display: inline-block;
    cursor: pointer;
    vertical-align: top;
    margin: 14px 12px 12px 14px;
    z-index: -1; }
  .selectionSharerContainer .selectionSharerVerticalSeparator {
    margin-top: 9px;
    margin-bottom: 18px;
    background-color: #eaf7ff;
    height: 26px;
    width: 1px;
    display: inline-block; }
/*# sourceMappingURL=viewer.css.map */
