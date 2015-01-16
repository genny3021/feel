/*
 * jQuery UI CSS Framework @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Theming/API
 */

/* Layout helpers
----------------------------------*/
.ui-helper-hidden {
    display: none;
}

.ui-helper-hidden-accessible {
    position: absolute;
    left: -99999999px;
}

.ui-helper-reset {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    line-height: 1.3;
    text-decoration: none;
    font-size: 100%;
    list-style: none;
}

.ui-helper-clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

.ui-helper-clearfix {
    display: inline-block;
}

/* required comment for clearfix to work in Opera \*/
* html .ui-helper-clearfix {
    height: 1%;
}

.ui-helper-clearfix {
    display: block;
}

/* end clearfix */
.ui-helper-zfix {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    opacity: 0;
    filter: Alpha(Opacity = 0);
}

/* Interaction Cues
----------------------------------*/
.ui-state-disabled {
    cursor: default !important;
}

/* Icons
----------------------------------*/

/* states and images */
.ui-icon {
    display: block;
    text-indent: -99999px;
    overflow: hidden;
    background-repeat: no-repeat;
}

/* Misc visuals
----------------------------------*/

/* Overlays */
.ui-widget-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/*
* jQuery UI Accordion @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Accordion#theming
*/
/* IE/Win - Fix animation bug - #4615 */
.ui-accordion {
    width: 100%;
}

.ui-accordion .ui-accordion-header {
    cursor: pointer;
    position: relative;
    margin-top: 1px;
    zoom: 1;
}

.ui-accordion .ui-accordion-li-fix {
    display: inline;
}

.ui-accordion .ui-accordion-header-active {
    border-bottom: 0 !important;
}

.ui-accordion .ui-accordion-header a {
    display: block;
    font-size: 1em;
    padding: .5em .5em .5em .7em;
}

.ui-accordion-icons .ui-accordion-header a {
    padding-left: 2.2em;
}

.ui-accordion .ui-accordion-header .ui-icon {
    position: absolute;
    left: .5em;
    top: 50%;
    margin-top: -8px;
}

.ui-accordion .ui-accordion-content {
    padding: 1em 2.2em;
    border-top: 0;
    margin-top: -2px;
    position: relative;
    top: 1px;
    margin-bottom: 2px;
    overflow: auto;
    display: none;
    zoom: 1;
}

.ui-accordion .ui-accordion-content-active {
    display: block;
}

/*
* jQuery UI Autocomplete @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Autocomplete#theming
*/
.ui-autocomplete {
    position: absolute;
    cursor: default;
}

/* workarounds */
* html .ui-autocomplete {
    width: 1px;
}

/* without this, the menu expands to 100% in IE6 */

/*
 * jQuery UI Menu @VERSION
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Menu#theming
 */
.ui-menu {
    list-style: none;
    padding: 2px;
    margin: 0;
    display: block;
    float: left;
}

.ui-menu .ui-menu {
    margin-top: -3px;
}

.ui-menu .ui-menu-item {
    margin: 0;
    padding: 0;
    zoom: 1;
    float: left;
    clear: left;
    width: 100%;
}

.ui-menu .ui-menu-item a {
    text-decoration: none;
    display: block;
    padding: .2em .4em;
    line-height: 1.5;
    zoom: 1;
}

.ui-menu .ui-menu-item a.ui-state-hover,
.ui-menu .ui-menu-item a.ui-state-active {
    font-weight: normal;
    margin: -1px;
}

/*
* jQuery UI Button @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Button#theming
*/
.ui-button {
    display: inline-block;
    position: relative;
    padding: 0;
    margin-right: .1em;
    text-decoration: none !important;
    cursor: pointer;
    text-align: center;
    zoom: 1;
    overflow: visible;
    font-size:12px;
}
/* the overflow property removes extra width in IE */

.ui-button-icon-only {
    width: 2.2em;
}

/* to make room for the icon, a width needs to be set here */
button.ui-button-icon-only {
    width: 2.4em;
}

/* button elements seem to need a little more width */
.ui-button-icons-only {
    width: 3.4em;
}

button.ui-button-icons-only {
    width: 3.7em;
}

/*button text element */
.ui-button .ui-button-text {
    display: block;
    line-height: 1.4;
}

.ui-button-text-only .ui-button-text {
    padding: .4em 1em;
}

.ui-button-icon-only .ui-button-text, .ui-button-icons-only .ui-button-text {
    padding: .4em;
    text-indent: -9999999px;
}

.ui-button-text-icon-primary .ui-button-text, .ui-button-text-icons .ui-button-text {
    padding: .4em 1em .4em 2.1em;
}

.ui-button-text-icon-secondary .ui-button-text, .ui-button-text-icons .ui-button-text {
    padding: .4em 2.1em .4em 1em;
}

.ui-button-text-icons .ui-button-text {
    padding-left: 2.1em;
    padding-right: 2.1em;
}

/* no icon support for input elements, provide padding by default */
input.ui-button {
    padding: .4em 1em;
}

/*button icon element(s) */
.ui-button-icon-only .ui-icon, .ui-button-text-icon-primary .ui-icon, .ui-button-text-icon-secondary .ui-icon, .ui-button-text-icons .ui-icon, .ui-button-icons-only .ui-icon {
    position: absolute;
    top: 50%;
    margin-top: -8px;
}

.ui-button-icon-only .ui-icon {
    left: 50%;
    margin-left: -8px;
}

.ui-button-text-icon-primary .ui-button-icon-primary, .ui-button-text-icons .ui-button-icon-primary, .ui-button-icons-only .ui-button-icon-primary {
    left: .5em;
}

.ui-button-text-icon-secondary .ui-button-icon-secondary, .ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary {
    right: .5em;
}

.ui-button-text-icons .ui-button-icon-secondary, .ui-button-icons-only .ui-button-icon-secondary {
    right: .5em;
}

/*button sets*/
.ui-buttonset {
    margin-right: 7px;
}

.ui-buttonset .ui-button {
    margin-left: 0;
    margin-right: -.3em;
}

/* workarounds */
button.ui-button::-moz-focus-inner {
    border: 0;
    padding: 0;
}

/* reset extra padding in Firefox */

.ui-dialog-buttonset .btn-primary {
    font-weight:bold !important;
    color:#614b00 !important;
    background:#ebac1d url(https://imgssl.constantcontact.com/ui/images1/btn-primary-bg.gif) repeat-x left top !important;
    border:1px solid #c8a228 !important;
    text-decoration:none !important;
    cursor: pointer !important;
    padding: 0 !important;
    margin: 0 !important;
}

.ui-dialog-buttonset .btn-primary-disabled {
    margin: 0 !important;
}

.ui-dialog-buttonset .btn-primary:hover {
    background:#d5960e url(https://imgssl.constantcontact.com/ui/images1/btn-primary-bg-hover.gif) repeat-x left top !important; 
    text-decoration:none !important;
}
.ui-dialog-buttonset .btn-secondary {
    color: #007BBF !important;
    text-decoration: underline !important;
    border:0 !important;
    cursor:pointer !important;
    padding: 0 !important;
    margin: 0 !important;
    background:none !important;
    box-shadow:0;
}
.ui-dialog-buttonset .btn-secondary:hover { background:none; text-decoration:none !important; }

/* Datepicker ----------------------------------*/
.ui-datepicker { width: 17em; padding: .2em .2em 0; display: none; }
.ui-datepicker .ui-datepicker-header { position:relative; padding:.2em 0; background:url("images/ui-bg_highlight-soft_100_e7eef3_1x100.png") repeat-x scroll 50% 50% #E7EEF3;
border:1px solid #B2C7D7;
color:#222222;
font-weight:bold; display:block; }
.ui-datepicker .ui-datepicker-prev, .ui-datepicker .ui-datepicker-next { position:absolute; top: 2px; width: 1.8em; height: 1.8em; }
.ui-datepicker .ui-datepicker-prev-hover, .ui-datepicker .ui-datepicker-next-hover { top: 1px; }
.ui-datepicker .ui-datepicker-prev { left:2px; }
.ui-datepicker .ui-datepicker-next { right:2px; }
.ui-datepicker .ui-datepicker-prev-hover { left:1px; }
.ui-datepicker .ui-datepicker-next-hover { right:1px; }
.ui-datepicker .ui-datepicker-prev span, .ui-datepicker .ui-datepicker-next span { display: block; position: absolute; left: 50%; margin-left: -8px; top: 50%; margin-top: -8px;  }
.ui-datepicker .ui-datepicker-title { margin: 0 2.3em; line-height: 1.8em; text-align: center; }
.ui-datepicker .ui-datepicker-title select { float:left; font-size:1em; margin:1px 0; }
.ui-datepicker select.ui-datepicker-month-year {width: 100%;}
.ui-datepicker select.ui-datepicker-month,
.ui-datepicker select.ui-datepicker-year { width: 49%;}
.ui-datepicker .ui-datepicker-title select.ui-datepicker-year { float: right; }
.ui-datepicker table {width: 100%; font-size: .9em; border-collapse: collapse; margin:0 0 .4em; }
.ui-datepicker th { padding: .7em .3em; text-align: center; font-weight: bold; border: 0;  }
.ui-datepicker td { border: 0; padding: 1px; }
.ui-datepicker td span, .ui-datepicker td a { display: block; padding: .2em; text-align: right; text-decoration: none; }
.ui-datepicker .ui-datepicker-buttonpane { background-image: none; margin: .7em 0 0 0; padding:0 .2em; border-left: 0; border-right: 0; border-bottom: 0; }
.ui-datepicker .ui-datepicker-buttonpane button { float: right; margin: .5em .2em .4em; cursor: pointer; padding: .2em .6em .3em .6em; width:auto; overflow:visible; }
.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current { float:left; }

/* with multiple calendars */
.ui-datepicker.ui-datepicker-multi { width:auto; }
.ui-datepicker-multi .ui-datepicker-group { float:left; }
.ui-datepicker-multi .ui-datepicker-group table { width:95%; margin:0 auto .4em; }
.ui-datepicker-multi-2 .ui-datepicker-group { width:50%; }
.ui-datepicker-multi-3 .ui-datepicker-group { width:33.3%; }
.ui-datepicker-multi-4 .ui-datepicker-group { width:25%; }
.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header { border-left-width:0; }
.ui-datepicker-multi .ui-datepicker-buttonpane { clear:left; }
.ui-datepicker-row-break { clear:both; width:100%; }

/* RTL support */
.ui-datepicker-rtl { direction: rtl; }
.ui-datepicker-rtl .ui-datepicker-prev { right: 2px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next { left: 2px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-prev:hover { right: 1px; left: auto; }
.ui-datepicker-rtl .ui-datepicker-next:hover { left: 1px; right: auto; }
.ui-datepicker-rtl .ui-datepicker-buttonpane { clear:right; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button { float: left; }
.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current { float:right; }
.ui-datepicker-rtl .ui-datepicker-group { float:right; }
.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header { border-right-width:0; border-left-width:1px; }
.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header { border-right-width:0; border-left-width:1px; }

/* IE6 IFRAME FIX (taken from datepicker 1.5.3 */
.ui-datepicker-cover {
    display: none; /*sorry for IE5*/
    display/**/: block; /*sorry for IE5*/
    position: absolute; /*must have*/
    z-index: -1; /*must have*/
    filter: mask(); /*must have*/
    top: -4px; /*must have*/
    left: -4px; /*must have*/
    width: 200px; /*must have*/
    height: 200px; /*must have*/
}


.ui-datepicker { background-color:#fff;
	border:1px solid #ccc;
	border-bottom-color: #bbb;
	box-shadow:0 5px 10px 0px rgba(0,0,0,.3);
	-moz-box-shadow:0 5px 10px 0px rgba(0,0,0,.3);
	-webkit-box-shadow: 0 5px 10px 0px rgba(0,0,0,.3); }



.ui-datepicker .ui-state-default,
.ui-datepicker .ui-widget-content .ui-state-default { border: 1px solid #cccccc; background: #e6e6e6 url(/core/js/jquery/1.3.2/themes/cupertino/images/ui-bg_glass_80_e6e6e6_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #444444; outline: none; }

.ui-datepicker .ui-state-default a,
.ui-datepicker .ui-state-default a:link,
.ui-datepicker .ui-state-default a:visited { color: #444444; text-decoration: none; outline: none; }

.ui-datepicker .ui-state-hover,
.ui-datepicker .ui-widget-content .ui-state-hover,
.ui-datepicker .ui-state-focus,
.ui-datepicker .ui-widget-content .ui-state-focus { border: 1px solid #b2c7d7; background: #f0f0f0 url(/core/js/jquery/1.3.2/themes/cupertino/images/ui-bg_glass_100_f0f0f0_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #0b5b98; outline: none; }
.ui-datepicker .ui-state-hover a,
.ui-datepicker .ui-state-hover a:hover { color: #0b5b98; text-decoration: none; outline: none; }

.ui-datepicker .ui-state-active,
.ui-datepicker .ui-widget-content .ui-state-active { border: 1px solid #2694e8; background: #99c2ff url(/core/js/jquery/1.3.2/themes/cupertino/images/ui-bg_glass_50_99c2ff_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #000000; outline: none; }

.ui-datepicker .ui-state-active a,
.ui-datepicker .ui-state-active a:link,
.ui-datepicker .ui-state-active a:visited { color: #000000; outline: none; text-decoration: none; }

/*
* jQuery UI Dialog @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Dialog#theming
*/
.ui-dialog {
    position: fixed;
    width: 300px;
    font-family:Arial, Helvetica, sans-serif;
    background:#ffffff;
    border:1px solid #43495A;
    padding:0px;
    font-size:12px;
    box-shadow:0 5px 10px 0px rgba(0,0,0,.3);
    -moz-box-shadow:0 5px 10px 0px rgba(0,0,0,.3);
    -webkit-box-shadow: 0 5px 10px 0px rgba(0,0,0,.3);
    display:none;
    overflow:visible;
}

.ui-dialog .ui-widget-header {
    background:#ffffff none;
}

.ui-dialog .ui-dialog-titlebar {
    display:block;
    padding:8px 15px;
    background:#1b5285 url(https://imgssl.constantcontact.com/ui/images1/uxCommon/hdr_bkgd.png) repeat-x 0 0;
    position: relative;
    text-align:left;
}

.ui-dialog .ui-dialog-title {
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 16px;
    text-shadow: rgba(0,0,0,0.5) 0 -1px 0; 
    float: left;
    margin:0;
    font-weight:bold;
}

.ui-dialog .ui-dialog-subtitle {
	color:#666666;
    display:block;
}
.ui-dialog .ui-dialog-titlebar-button {
	float:right;
}
.ui-dialog .ui-dialog-titlebar-close {
    position: absolute;
    right: .3em;
    top: 50%;
    width: 19px;
    margin: -10px 0 0 0;
    padding: 1px;
    height: 18px;
}

.ui-dialog .ui-dialog-titlebar-close span {
    display: block;
    margin: 1px;
}

.ui-dialog .ui-icon-closethick {
	display:none;
}

.ui-dialog .ui-dialog-close-btn {
  position:absolute;
  top:-10px;
  right:-10px;
  background:url(https://imgssl.constantcontact.com/ui/images1/uxCommon/closebox_black.png) no-repeat 50% 50%;
  height:30px;
  width:30px;
  z-index:2000;
  cursor:pointer;
}

.ui-dialog .ui-dialog-titlebar-close:hover, .ui-dialog .ui-dialog-titlebar-close:focus {
    padding: 0;
}

.ui-dialog .ui-dialog-content {
    position: relative;
    overflow: auto;
    zoom: 1;
    padding:20px !important; /* !important overrides 0 padding from some legacy dialogs */
	overflow:auto;
	overflow-x:hidden;
	background:#ffffff;
	margin:0;
	border:0 !important; /* Overrides 10px border from some legacy dialogs */
	text-align:left;
}

.ui-dialog .ui-dialog-buttonpane {
    border-width: 1px 0 0 0;
    background:#D1D5E2 url(https://imgssl.constantcontact.com/ui/images1/uxCommon/bg_toolbar.png) repeat-x 0 0;
	padding:6px 10px;
	border-top:1px solid #cccccc;
	text-align:center;
	position:relative;
	margin:0;
	left:0;
	top:0;
}

.ui-dialog .ui-dialog-buttonpane .ui-dialog-buttonset {
    /*float: right;*/
}

.ui-dialog .ui-dialog-buttonpane button {
    margin: .5em .4em .5em 0;
    cursor: pointer;
    border:1px solid #999; 
}

.ui-dialog .ui-dialog-buttonpane .btn-secondary-disabled {
    margin:0;
    border:none;
    color:#aaa !important;
    font-weight:normal;
    background:none;
    text-decoration:none !important;
    text-shadow:none;
    cursor:default;
}

.ui-dialog .ui-resizable-se {
    width: 14px;
    height: 14px;
    right: 3px;
    bottom: 3px;
}

.ui-draggable .ui-dialog-titlebar {
    cursor: move;
    padding:15px 40px 15px 15px;
}

.ui-draggable .ui-dialog-close-btn {
    top: 10px;
    right: 10px;
    background: url(https://imgssl.constantcontact.com/ui/images1/uxCommon/overlay_close_inset.png) no-repeat 50% 50%;
    height: 20px;
    width: 19px;
}


.ui-dialog-type-feature .ui-dialog-content,
.ui-dialog-type-frame .ui-dialog-content,
.ui-dialog-type-tabs .ui-dialog-content {
	padding:0 !important;
}
.ui-dialog-type-feature iframe {
	border:0; width:698px; margin:0; height:350px;
}
.ui-dialog-type-frame iframe {
	border:0; width:100%; margin:0;
}
.ui-dialog-type-message .ui-dialog-close-btn {
	display:none;
}
.ui-dialog-type-details .ui-dialog-titlebar {
	background-color: #F3F3F3;
	padding: 15px;
	overflow-y: hidden;
}
.ui-dialog-type-details .ui-dialog-title {
	font-size: 12px;
	font-weight: normal;
	text-shadow: none;
}

.distui-member { position: relative; }
.distui-member .loading-ind,
.ui-dialog .loading-ind { position: absolute; text-align: center; left: 50%; top: 50%; margin: -25px 0 0 -60px; white-space: nowrap; }
.distui-member .loading-ind .loading-img,
.ui-dialog .loading-ind .loading-img { width: 32px; height: 32px; margin: 0 auto 5px; background: url(https://imgssl.constantcontact.com/ui/images1/ajax_loader.gif) 0 0 no-repeat; }
.distui-member .loading-ind-bg,
.ui-dialog .loading-ind-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: #fff; opacity: 0.9; }

/*
* jQuery UI Progressbar @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Progressbar#theming
*/
/* Progressbar
----------------------------------*/
.ui-progressbar { height:2em; text-align: left; background-color:#ffffff; border: 1px solid #dddddd; }
.ui-progressbar .ui-progressbar-value { margin: -1px; height:100%; background:url("https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-bg_highlight-soft_100_e7eef3_1x100.png") repeat-x scroll 50% 50% #E7EEF3; border:1px solid #B2C7D7; }


/*
* jQuery UI Resizable @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Resizable#theming
*/
.ui-resizable {
    position: relative;
}

.ui-resizable-handle {
    position: absolute;
    font-size: 0.1px;
    z-index: 99999;
    display: block;
}

.ui-resizable-disabled .ui-resizable-handle, .ui-resizable-autohide .ui-resizable-handle {
    display: none;
}

.ui-resizable-n {
    cursor: n-resize;
    height: 7px;
    width: 100%;
    top: -5px;
    left: 0;
}

.ui-resizable-s {
    cursor: s-resize;
    height: 7px;
    width: 100%;
    bottom: -5px;
    left: 0;
}

.ui-resizable-e {
    cursor: e-resize;
    width: 7px;
    right: -5px;
    top: 0;
    height: 100%;
}

.ui-resizable-w {
    cursor: w-resize;
    width: 7px;
    left: -5px;
    top: 0;
    height: 100%;
}

.ui-resizable-se {
    cursor: se-resize;
    width: 12px;
    height: 12px;
    right: 1px;
    bottom: 1px;
}

.ui-resizable-sw {
    cursor: sw-resize;
    width: 9px;
    height: 9px;
    left: -5px;
    bottom: -5px;
}

.ui-resizable-nw {
    cursor: nw-resize;
    width: 9px;
    height: 9px;
    left: -5px;
    top: -5px;
}

.ui-resizable-ne {
    cursor: ne-resize;
    width: 9px;
    height: 9px;
    right: -5px;
    top: -5px;
}

/*
* jQuery UI Selectable @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Selectable#theming
*/
.ui-selectable-helper {
    position: absolute;
    z-index: 100;
    border: 1px dotted black;
}

/*
* jQuery UI Slider @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Slider#theming
*/
.ui-slider {
    position: relative;
    text-align: left;
}

.ui-slider .ui-slider-handle {
    position: absolute;
    z-index: 2;
    width: 1.2em;
    height: 1.2em;
    cursor: default;
}

.ui-slider .ui-slider-range {
    position: absolute;
    z-index: 1;
    font-size: .7em;
    display: block;
    border: 0;
    background-position: 0 0;
}

.ui-slider-horizontal {
    height: .8em;
}

.ui-slider-horizontal .ui-slider-handle {
    top: -.3em;
    margin-left: -.6em;
}

.ui-slider-horizontal .ui-slider-range {
    top: 0;
    height: 100%;
}

.ui-slider-horizontal .ui-slider-range-min {
    left: 0;
}

.ui-slider-horizontal .ui-slider-range-max {
    right: 0;
}

.ui-slider-vertical {
    width: .8em;
    height: 100px;
}

.ui-slider-vertical .ui-slider-handle {
    left: -.3em;
    margin-left: 0;
    margin-bottom: -.6em;
}

.ui-slider-vertical .ui-slider-range {
    left: 0;
    width: 100%;
}

.ui-slider-vertical .ui-slider-range-min {
    bottom: 0;
}

.ui-slider-vertical .ui-slider-range-max {
    top: 0;
}

/*
* jQuery UI Tabs @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Tabs#theming
*/
.ui-tabs {
    position: relative;
    padding: .2em;
    zoom: 1;
}

.ui-tabs .ui-widget-header {
    border:0;
}

/* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as "fixed") */
.ui-tabs .ui-tabs-nav {
    margin: 0;
    padding: .2em .2em 0;
}

.ui-tabs .ui-tabs-nav li {
    list-style: none;
    float: left;
    position: relative;
    top: 1px;
    margin: 0 .2em 1px 0;
    border-bottom: 0 !important;
    padding: 0;
    white-space: nowrap;
}

.ui-tabs .ui-tabs-nav li a {
    float: left;
    /*padding: .5em 1em;*/
    text-decoration: none;
}

.ui-tabs .ui-tabs-nav li.ui-tabs-selected {
    margin-bottom: 0;
    padding-bottom: 1px;
}

.ui-tabs .ui-tabs-nav li.ui-tabs-selected a, .ui-tabs .ui-tabs-nav li.ui-state-disabled a, .ui-tabs .ui-tabs-nav li.ui-state-processing a {
    cursor: text;
}

.ui-tabs .ui-tabs-nav li a, .ui-tabs.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-selected a {
    cursor: pointer;
}

/* first selector in group seems obsolete, but required to overcome bug in Opera applying cursor: text overall if defined elsewhere... */
.ui-tabs .ui-tabs-panel {
    display: block;
    border-width: 0;
    padding: 1em 1.4em;
    background: none;
}

.ui-tabs .ui-tabs-hide {
    display: none !important;
}

/*
* jQuery UI CSS Framework @VERSION
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI/Theming/API
*
* To view and modify this theme, visit http://jqueryui.com/themeroller/
*/

/* Component containers
----------------------------------*/
.ui-widget {
    /*font-size: 1em *//*{fsDefault}*/;
}

.ui-widget .ui-widget {
    /*font-size: 1em; */
}

.ui-widget input, .ui-widget select, .ui-widget textarea, .ui-widget button {

    /*font-size: 1em;*/
}

.ui-widget-content {
    /* border: 1px solid #aaaaaa*/ /*{borderColorContent}*/;
    background: #ffffff /*{bgColorContent}*/ url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-bg_flat_75_ffffff_40x100.png) /*{bgImgUrlContent}*/ 50% /*{bgContentXPos}*/ 50% /*{bgContentYPos}*/ repeat-x /*{bgContentRepeat}*/;
    color: #222222 /*{fcContent}*/;
}

.ui-widget-content a {
    /*color: #222222*/ /*{fcContent}*/;
}

.ui-widget-header {
    color: #fff /*{fcHeader}*/;
    font-weight: bold;
}

.ui-widget-header a {
    color: #007bbf;
}

/* Interaction states
----------------------------------*/
.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
    /*border: 1px solid #d3d3d3*/ /*{borderColorDefault}*/;
    background: #e6e6e6 /*{bgColorDefault}*/;
    font-weight: normal /*{fwDefault}*/;
    color: #555555 /*{fcDefault}*/;
}

.ui-state-default a, .ui-state-default a:link, .ui-state-default a:visited {
    color: #555555 /*{fcDefault}*/;
    text-decoration: none;
}

.ui-state-hover, .ui-widget-content .ui-state-hover, .ui-widget-header .ui-state-hover, .ui-state-focus, .ui-widget-content .ui-state-focus, .ui-widget-header .ui-state-focus {
    border-color: 1px solid #999999 /*{borderColorHover}*/;
    background: #dadada /*{bgColorHover}*/ ;
    font-weight: normal /*{fwDefault}*/;
    color: #212121 /*{fcHover}*/;
}

.ui-state-hover a, .ui-state-hover a:hover {
    color: #212121 /*{fcHover}*/;
    text-decoration: none;
}

.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active {
    /*border: 1px solid #aaaaaa*/ /*{borderColorActive}*/;
    background: #ffffff /*{bgColorActive}*/ ;
    font-weight: normal /*{fwDefault}*/;
    color: #212121 /*{fcActive}*/;
}

.ui-state-active a, .ui-state-active a:link, .ui-state-active a:visited {
    color: #212121 /*{fcActive}*/;
    text-decoration: none;
}

.ui-widget :active {
    outline: none;
}

/* Interaction States from base.jsp */

/*
.ui-datepicker .ui-state-default,
.ui-datepicker .ui-widget-content .ui-state-default { border: 1px solid #cccccc; background: #e6e6e6 url(images/ui-bg_glass_80_e6e6e6_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #444444; outline: none; }
.ui-datepicker .ui-state-default a,
.ui-datepicker .ui-state-default a:link,
.ui-datepicker .ui-state-default a:visited { color: #444444; text-decoration: none; outline: none; }
.ui-datepicker .ui-state-hover,
.ui-datepicker .ui-widget-content .ui-state-hover,
.ui-datepicker .ui-state-focus,
.ui-datepicker .ui-widget-content .ui-state-focus { border: 1px solid #b2c7d7; background: #f0f0f0 url(images/ui-bg_glass_100_f0f0f0_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #0b5b98; outline: none; }
.ui-datepicker .ui-state-hover a,
.ui-datepicker .ui-state-hover a:hover { color: #0b5b98; text-decoration: none; outline: none; }
.ui-datepicker .ui-state-active,
.ui-datepicker .ui-widget-content .ui-state-active { border: 1px solid #2694e8; background: #99c2ff url(images/ui-bg_glass_50_99c2ff_1x400.png) 50% 50% repeat-x; font-weight: normal; color: #000000; outline: none; }
.ui-datepicker .ui-state-active a,
.ui-datepicker .ui-state-active a:link, .ui-state-active a:visited { color: #000000; outline: none; text-decoration: none; }

*/

/* Interaction Cues
----------------------------------*/
.ui-state-highlight, .ui-widget-content .ui-state-highlight, .ui-widget-header .ui-state-highlight {
    border: 1px solid #fcefa1 /*{borderColorHighlight}*/;
    background: #fbf9ee /*{bgColorHighlight}*/ ;
    color: #363636 /*{fcHighlight}*/;
}

.ui-state-highlight a, .ui-widget-content .ui-state-highlight a, .ui-widget-header .ui-state-highlight a {
    color: #363636 /*{fcHighlight}*/;
}

.ui-state-error, .ui-widget-content .ui-state-error, .ui-widget-header .ui-state-error {
    border: 1px solid #cd0a0a /*{borderColorError}*/;
    background: #fef1ec /*{bgColorError}*/ ;
    color: #cd0a0a /*{fcError}*/;
}

.ui-state-error a, .ui-widget-content .ui-state-error a, .ui-widget-header .ui-state-error a {
    color: #cd0a0a /*{fcError}*/;
}

.ui-state-error-text, .ui-widget-content .ui-state-error-text, .ui-widget-header .ui-state-error-text {
    color: #cd0a0a /*{fcError}*/;
}

.ui-priority-primary, .ui-widget-content .ui-priority-primary, .ui-widget-header .ui-priority-primary {
    font-weight: bold;
}

.ui-priority-secondary, .ui-widget-content .ui-priority-secondary, .ui-widget-header .ui-priority-secondary {
    opacity: .7;
    filter: Alpha(Opacity = 70);
    font-weight: normal;
}

.ui-state-disabled, .ui-widget-content .ui-state-disabled, .ui-widget-header .ui-state-disabled {
    opacity: .35;
    filter: Alpha(Opacity = 35);
    background-image: none;
}

/* Icons
----------------------------------*/

/* states and images */
.ui-icon {
    width: 16px;
    height: 16px;
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_222222_256x240.png) /*{iconsContent}*/;
}

.ui-widget-content .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_222222_256x240.png) /*{iconsContent}*/;
}

.ui-widget-header .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_222222_256x240.png) /*{iconsHeader}*/;
}

.ui-state-default .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_888888_256x240.png) /*{iconsDefault}*/;
}

.ui-state-hover .ui-icon, .ui-state-focus .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_454545_256x240.png) /*{iconsHover}*/;
}

.ui-state-active .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_454545_256x240.png) /*{iconsActive}*/;
}

.ui-state-highlight .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_2e83ff_256x240.png) /*{iconsHighlight}*/;
}

.ui-state-error .ui-icon, .ui-state-error-text .ui-icon {
    background-image: url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-icons_cd0a0a_256x240.png) /*{iconsError}*/;
}

/* positioning */
.ui-icon-carat-1-n {
    background-position: 0 0;
}

.ui-icon-carat-1-ne {
    background-position: -16px 0;
}

.ui-icon-carat-1-e {
    background-position: -32px 0;
}

.ui-icon-carat-1-se {
    background-position: -48px 0;
}

.ui-icon-carat-1-s {
    background-position: -64px 0;
}

.ui-icon-carat-1-sw {
    background-position: -80px 0;
}

.ui-icon-carat-1-w {
    background-position: -96px 0;
}

.ui-icon-carat-1-nw {
    background-position: -112px 0;
}

.ui-icon-carat-2-n-s {
    background-position: -128px 0;
}

.ui-icon-carat-2-e-w {
    background-position: -144px 0;
}

.ui-icon-triangle-1-n {
    background-position: 0 -16px;
}

.ui-icon-triangle-1-ne {
    background-position: -16px -16px;
}

.ui-icon-triangle-1-e {
    background-position: -32px -16px;
}

.ui-icon-triangle-1-se {
    background-position: -48px -16px;
}

.ui-icon-triangle-1-s {
    background-position: -64px -16px;
}

.ui-icon-triangle-1-sw {
    background-position: -80px -16px;
}

.ui-icon-triangle-1-w {
    background-position: -96px -16px;
}

.ui-icon-triangle-1-nw {
    background-position: -112px -16px;
}

.ui-icon-triangle-2-n-s {
    background-position: -128px -16px;
}

.ui-icon-triangle-2-e-w {
    background-position: -144px -16px;
}

.ui-icon-arrow-1-n {
    background-position: 0 -32px;
}

.ui-icon-arrow-1-ne {
    background-position: -16px -32px;
}

.ui-icon-arrow-1-e {
    background-position: -32px -32px;
}

.ui-icon-arrow-1-se {
    background-position: -48px -32px;
}

.ui-icon-arrow-1-s {
    background-position: -64px -32px;
}

.ui-icon-arrow-1-sw {
    background-position: -80px -32px;
}

.ui-icon-arrow-1-w {
    background-position: -96px -32px;
}

.ui-icon-arrow-1-nw {
    background-position: -112px -32px;
}

.ui-icon-arrow-2-n-s {
    background-position: -128px -32px;
}

.ui-icon-arrow-2-ne-sw {
    background-position: -144px -32px;
}

.ui-icon-arrow-2-e-w {
    background-position: -160px -32px;
}

.ui-icon-arrow-2-se-nw {
    background-position: -176px -32px;
}

.ui-icon-arrowstop-1-n {
    background-position: -192px -32px;
}

.ui-icon-arrowstop-1-e {
    background-position: -208px -32px;
}

.ui-icon-arrowstop-1-s {
    background-position: -224px -32px;
}

.ui-icon-arrowstop-1-w {
    background-position: -240px -32px;
}

.ui-icon-arrowthick-1-n {
    background-position: 0 -48px;
}

.ui-icon-arrowthick-1-ne {
    background-position: -16px -48px;
}

.ui-icon-arrowthick-1-e {
    background-position: -32px -48px;
}

.ui-icon-arrowthick-1-se {
    background-position: -48px -48px;
}

.ui-icon-arrowthick-1-s {
    background-position: -64px -48px;
}

.ui-icon-arrowthick-1-sw {
    background-position: -80px -48px;
}

.ui-icon-arrowthick-1-w {
    background-position: -96px -48px;
}

.ui-icon-arrowthick-1-nw {
    background-position: -112px -48px;
}

.ui-icon-arrowthick-2-n-s {
    background-position: -128px -48px;
}

.ui-icon-arrowthick-2-ne-sw {
    background-position: -144px -48px;
}

.ui-icon-arrowthick-2-e-w {
    background-position: -160px -48px;
}

.ui-icon-arrowthick-2-se-nw {
    background-position: -176px -48px;
}

.ui-icon-arrowthickstop-1-n {
    background-position: -192px -48px;
}

.ui-icon-arrowthickstop-1-e {
    background-position: -208px -48px;
}

.ui-icon-arrowthickstop-1-s {
    background-position: -224px -48px;
}

.ui-icon-arrowthickstop-1-w {
    background-position: -240px -48px;
}

.ui-icon-arrowreturnthick-1-w {
    background-position: 0 -64px;
}

.ui-icon-arrowreturnthick-1-n {
    background-position: -16px -64px;
}

.ui-icon-arrowreturnthick-1-e {
    background-position: -32px -64px;
}

.ui-icon-arrowreturnthick-1-s {
    background-position: -48px -64px;
}

.ui-icon-arrowreturn-1-w {
    background-position: -64px -64px;
}

.ui-icon-arrowreturn-1-n {
    background-position: -80px -64px;
}

.ui-icon-arrowreturn-1-e {
    background-position: -96px -64px;
}

.ui-icon-arrowreturn-1-s {
    background-position: -112px -64px;
}

.ui-icon-arrowrefresh-1-w {
    background-position: -128px -64px;
}

.ui-icon-arrowrefresh-1-n {
    background-position: -144px -64px;
}

.ui-icon-arrowrefresh-1-e {
    background-position: -160px -64px;
}

.ui-icon-arrowrefresh-1-s {
    background-position: -176px -64px;
}

.ui-icon-arrow-4 {
    background-position: 0 -80px;
}

.ui-icon-arrow-4-diag {
    background-position: -16px -80px;
}

.ui-icon-extlink {
    background-position: -32px -80px;
}

.ui-icon-newwin {
    background-position: -48px -80px;
}

.ui-icon-refresh {
    background-position: -64px -80px;
}

.ui-icon-shuffle {
    background-position: -80px -80px;
}

.ui-icon-transfer-e-w {
    background-position: -96px -80px;
}

.ui-icon-transferthick-e-w {
    background-position: -112px -80px;
}

.ui-icon-folder-collapsed {
    background-position: 0 -96px;
}

.ui-icon-folder-open {
    background-position: -16px -96px;
}

.ui-icon-document {
    background-position: -32px -96px;
}

.ui-icon-document-b {
    background-position: -48px -96px;
}

.ui-icon-note {
    background-position: -64px -96px;
}

.ui-icon-mail-closed {
    background-position: -80px -96px;
}

.ui-icon-mail-open {
    background-position: -96px -96px;
}

.ui-icon-suitcase {
    background-position: -112px -96px;
}

.ui-icon-comment {
    background-position: -128px -96px;
}

.ui-icon-person {
    background-position: -144px -96px;
}

.ui-icon-print {
    background-position: -160px -96px;
}

.ui-icon-trash {
    background-position: -176px -96px;
}

.ui-icon-locked {
    background-position: -192px -96px;
}

.ui-icon-unlocked {
    background-position: -208px -96px;
}

.ui-icon-bookmark {
    background-position: -224px -96px;
}

.ui-icon-tag {
    background-position: -240px -96px;
}

.ui-icon-home {
    background-position: 0 -112px;
}

.ui-icon-flag {
    background-position: -16px -112px;
}

.ui-icon-calendar {
    background-position: -32px -112px;
}

.ui-icon-cart {
    background-position: -48px -112px;
}

.ui-icon-pencil {
    background-position: -64px -112px;
}

.ui-icon-clock {
    background-position: -80px -112px;
}

.ui-icon-disk {
    background-position: -96px -112px;
}

.ui-icon-calculator {
    background-position: -112px -112px;
}

.ui-icon-zoomin {
    background-position: -128px -112px;
}

.ui-icon-zoomout {
    background-position: -144px -112px;
}

.ui-icon-search {
    background-position: -160px -112px;
}

.ui-icon-wrench {
    background-position: -176px -112px;
}

.ui-icon-gear {
    background-position: -192px -112px;
}

.ui-icon-heart {
    background-position: -208px -112px;
}

.ui-icon-star {
    background-position: -224px -112px;
}

.ui-icon-link {
    background-position: -240px -112px;
}

.ui-icon-cancel {
    background-position: 0 -128px;
}

.ui-icon-plus {
    background-position: -16px -128px;
}

.ui-icon-plusthick {
    background-position: -32px -128px;
}

.ui-icon-minus {
    background-position: -48px -128px;
}

.ui-icon-minusthick {
    background-position: -64px -128px;
}

.ui-icon-close {
    background-position: -80px -128px;
}

.ui-icon-closethick {
    background-position: -96px -128px;
}

.ui-icon-key {
    background-position: -112px -128px;
}

.ui-icon-lightbulb {
    background-position: -128px -128px;
}

.ui-icon-scissors {
    background-position: -144px -128px;
}

.ui-icon-clipboard {
    background-position: -160px -128px;
}

.ui-icon-copy {
    background-position: -176px -128px;
}

.ui-icon-contact {
    background-position: -192px -128px;
}

.ui-icon-image {
    background-position: -208px -128px;
}

.ui-icon-video {
    background-position: -224px -128px;
}

.ui-icon-script {
    background-position: -240px -128px;
}

.ui-icon-alert {
    background-position: 0 -144px;
}

.ui-icon-info {
    background-position: -16px -144px;
}

.ui-icon-notice {
    background-position: -32px -144px;
}

.ui-icon-help {
    background-position: -48px -144px;
}

.ui-icon-check {
    background-position: -64px -144px;
}

.ui-icon-bullet {
    background-position: -80px -144px;
}

.ui-icon-radio-off {
    background-position: -96px -144px;
}

.ui-icon-radio-on {
    background-position: -112px -144px;
}

.ui-icon-pin-w {
    background-position: -128px -144px;
}

.ui-icon-pin-s {
    background-position: -144px -144px;
}

.ui-icon-play {
    background-position: 0 -160px;
}

.ui-icon-pause {
    background-position: -16px -160px;
}

.ui-icon-seek-next {
    background-position: -32px -160px;
}

.ui-icon-seek-prev {
    background-position: -48px -160px;
}

.ui-icon-seek-end {
    background-position: -64px -160px;
}

.ui-icon-seek-start {
    background-position: -80px -160px;
}

/* ui-icon-seek-first is deprecated, use ui-icon-seek-start instead */
.ui-icon-seek-first {
    background-position: -80px -160px;
}

.ui-icon-stop {
    background-position: -96px -160px;
}

.ui-icon-eject {
    background-position: -112px -160px;
}

.ui-icon-volume-off {
    background-position: -128px -160px;
}

.ui-icon-volume-on {
    background-position: -144px -160px;
}

.ui-icon-power {
    background-position: 0 -176px;
}

.ui-icon-signal-diag {
    background-position: -16px -176px;
}

.ui-icon-signal {
    background-position: -32px -176px;
}

.ui-icon-battery-0 {
    background-position: -48px -176px;
}

.ui-icon-battery-1 {
    background-position: -64px -176px;
}

.ui-icon-battery-2 {
    background-position: -80px -176px;
}

.ui-icon-battery-3 {
    background-position: -96px -176px;
}

.ui-icon-circle-plus {
    background-position: 0 -192px;
}

.ui-icon-circle-minus {
    background-position: -16px -192px;
}

.ui-icon-circle-close {
    background-position: -32px -192px;
}

.ui-icon-circle-triangle-e {
    background-position: -48px -192px;
}

.ui-icon-circle-triangle-s {
    background-position: -64px -192px;
}

.ui-icon-circle-triangle-w {
    background-position: -80px -192px;
}

.ui-icon-circle-triangle-n {
    background-position: -96px -192px;
}

.ui-icon-circle-arrow-e {
    background-position: -112px -192px;
}

.ui-icon-circle-arrow-s {
    background-position: -128px -192px;
}

.ui-icon-circle-arrow-w {
    background-position: -144px -192px;
}

.ui-icon-circle-arrow-n {
    background-position: -160px -192px;
}

.ui-icon-circle-zoomin {
    background-position: -176px -192px;
}

.ui-icon-circle-zoomout {
    background-position: -192px -192px;
}

.ui-icon-circle-check {
    background-position: -208px -192px;
}

.ui-icon-circlesmall-plus {
    background-position: 0 -208px;
}

.ui-icon-circlesmall-minus {
    background-position: -16px -208px;
}

.ui-icon-circlesmall-close {
    background-position: -32px -208px;
}

.ui-icon-squaresmall-plus {
    background-position: -48px -208px;
}

.ui-icon-squaresmall-minus {
    background-position: -64px -208px;
}

.ui-icon-squaresmall-close {
    background-position: -80px -208px;
}

.ui-icon-grip-dotted-vertical {
    background-position: 0 -224px;
}

.ui-icon-grip-dotted-horizontal {
    background-position: -16px -224px;
}

.ui-icon-grip-solid-vertical {
    background-position: -32px -224px;
}

.ui-icon-grip-solid-horizontal {
    background-position: -48px -224px;
}

.ui-icon-gripsmall-diagonal-se {
    background-position: -64px -224px;
}

.ui-icon-grip-diagonal-se {
    background-position: -80px -224px;
}

/* May be repetetive after merge

.ui-icon-circle-triangle-e, .ui-icon-circle-triangle-w { display: block; text-indent: -99999px; overflow: hidden; background-repeat: no-repeat;  width: 16px; height: 16px; background-image: url(/core/js/jquery/1.3.2/themes/cupertino/images/ui-icons_222222_256x240.png); }


.ui-icon-circle-triangle-e { background-position: -48px -192px; }
.ui-icon-circle-triangle-w { background-position: -80px -192px; }

*/

/* Misc visuals
----------------------------------*/

/* Corner radius */
.ui-corner-tl {
    -moz-border-radius-topleft: 4px /*{cornerRadius}*/;
    -webkit-border-top-left-radius: 4px /*{cornerRadius}*/;
    border-top-left-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-tr {
    -moz-border-radius-topright: 4px /*{cornerRadius}*/;
    -webkit-border-top-right-radius: 4px /*{cornerRadius}*/;
    border-top-right-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-bl {
    -moz-border-radius-bottomleft: 4px /*{cornerRadius}*/;
    -webkit-border-bottom-left-radius: 4px /*{cornerRadius}*/;
    border-bottom-left-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-br {
    -moz-border-radius-bottomright: 4px /*{cornerRadius}*/;
    -webkit-border-bottom-right-radius: 4px /*{cornerRadius}*/;
    border-bottom-right-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-top {
    -moz-border-radius-topleft: 4px /*{cornerRadius}*/;
    -webkit-border-top-left-radius: 4px /*{cornerRadius}*/;
    border-top-left-radius: 4px /*{cornerRadius}*/;
    -moz-border-radius-topright: 4px /*{cornerRadius}*/;
    -webkit-border-top-right-radius: 4px /*{cornerRadius}*/;
    border-top-right-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-bottom {
    -moz-border-radius-bottomleft: 4px /*{cornerRadius}*/;
    -webkit-border-bottom-left-radius: 4px /*{cornerRadius}*/;
    border-bottom-left-radius: 4px /*{cornerRadius}*/;
    -moz-border-radius-bottomright: 4px /*{cornerRadius}*/;
    -webkit-border-bottom-right-radius: 4px /*{cornerRadius}*/;
    border-bottom-right-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-right {
    -moz-border-radius-topright: 4px /*{cornerRadius}*/;
    -webkit-border-top-right-radius: 4px /*{cornerRadius}*/;
    border-top-right-radius: 4px /*{cornerRadius}*/;
    -moz-border-radius-bottomright: 4px /*{cornerRadius}*/;
    -webkit-border-bottom-right-radius: 4px /*{cornerRadius}*/;
    border-bottom-right-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-left {
    -moz-border-radius-topleft: 4px /*{cornerRadius}*/;
    -webkit-border-top-left-radius: 4px /*{cornerRadius}*/;
    border-top-left-radius: 4px /*{cornerRadius}*/;
    -moz-border-radius-bottomleft: 4px /*{cornerRadius}*/;
    -webkit-border-bottom-left-radius: 4px /*{cornerRadius}*/;
    border-bottom-left-radius: 4px /*{cornerRadius}*/;
}

.ui-corner-all {
    -moz-border-radius: 4px /*{cornerRadius}*/;
    -webkit-border-radius: 4px /*{cornerRadius}*/;
    border-radius: 4px /*{cornerRadius}*/;
}

/* Overlays */
.ui-widget-overlay {
    background: #000000 /*{bgColorOverlay}*/ ;
    filter:alpha(opacity=50);
	opacity: 0.5;
	-moz-opacity:0.5;
}

.ui-widget-shadow {
    margin: -8px /*{offsetTopShadow}*/ 0 0 -8px /*{offsetLeftShadow}*/;
    padding: 8px /*{thicknessShadow}*/;
    background: #aaaaaa /*{bgColorShadow}*/ url(https://imgssl.constantcontact.com/ui/images1/jquery/1.8.4/ui-bg_flat_0_aaaaaa_40x100.png) /*{bgImgUrlShadow}*/ 50% /*{bgShadowXPos}*/ 50% /*{bgShadowYPos}*/ repeat-x /*{bgShadowRepeat}*/;
    opacity: .3;
    filter: Alpha(Opacity = 30) /*{opacityShadow}*/;
    -moz-border-radius: 8px /*{cornerRadiusShadow}*/;
    -webkit-border-radius: 8px /*{cornerRadiusShadow}*/;
    border-radius: 8px /*{cornerRadiusShadow}*/;
}

/* popup small */
div > div.popup-small, div > div.popup-small-info { width:330px; background-color:#FEF8EA !important; border:1px solid #efbd6b !important; border-radius:.5em; -webkit-border-radius:.5em; -moz-border-radius:.5em; padding:10px;}
span.smallleft-pu-arrow { background:transparent url(<%=imageRoot%>/images1/popup_small_ltsidearrow.gif) no-repeat 0 0; position:absolute; bottom:40px; left:-1px; height:21px; width:11px; overflow:auto; }
img.popup-small-close { position:relative; float:right; width:12px; padding:0 5px 10px 3px; }
.popup-small-inner h5 { font:bold 12px Arial, Helvetica, sans-serif; color:#dc6b00; margin:0; padding:0 0 3px; }
.popup-small-inner p { font:11px/125% Arial, Helvetica, sans-serif; margin:0; padding:0 0 5px; }

.popup-mnbg { background-color:#FFF; border:3px solid #efbd6b; border-radius:.5em; -webkit-border-radius:.5em; -moz-border-radius:.5em; }
.popup-mnbg-inner { /*padding:10px;*/ }

.info-popup-legacy { background:none !important; border:none !important; -moz-box-shadow:none; }
.info-popup-legacy .ui-dialog-content { margin:0 .6em; position:static; padding:10px !important; border:1px solid #efbd6b !important; }


/* End of dialog styling */
.pagelinks { margin-left:1em; }
.pagelinks a { margin:0 0.1em; }
.pagelinks img { margin:0 0.25em; }
.extDtPaging { margin:0.5em 0; }


/* Floating Menu Panel */
.ui-menu-panel {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;

    background: url('https://imgssl.constantcontact.com/ui/images1/tinymce/skins/dark/trans-white-95.png') transparent 0 0 repeat;
    border: 1px solid rgba(0,0,0,.25);
    border-top-color: rgba(0,0,0,.15);
    border-bottom-color: rgba(0,0,0,.4);

    /* IE8 hack for background and border */
    background-color: #ffffff\9;
    border-color: #aaa\9;

    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;

    -webkit-background-clip: padding-box;
    background-clip: padding-box;

    -moz-box-shadow:0 10px 14px 0px rgba(0,0,0,.3);
    -webkit-box-shadow: 0 10px 14px 0px rgba(0,0,0,.3);
    box-shadow:0 10px 14px 0px rgba(0,0,0,.3);

    overflow: auto;
    overflow-x: hidden;

    min-width:80px;
    max-height:300px;

    padding:5px 0;

    font-family: Arial, Helvetica, Tahoma, Verdana, sans-serif;
}

.ui-menu-panel .section {
    padding:5px 10px;
    overflow:hidden;
}

.ui-menu-panel .separator {
    height: 1px;
    margin: 4px 0;
    background-color: #eaeaea;
}



.canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(https://imgssl.constantcontact.com/ui/images1/uxCommon/spacer.gif) 0 0 repeat;
    display: none;
}
