/* 	InfoPopup jQuery Plugin
 *	Written by Daniel Horan
 */

;(function($) {

    window.infoPopups = {};

    var uiInfoPopupClasses = 'info-popup ',
        uiInfoPopupTitleBarClass = 'info-popup-titlebar',
        uiCanvasClass = 'canvas';

    //TODO: change tightness options to generic offset
    //TODO: allow forced gravity

    $.widget("ui.infoPopup", {
        options: {
            animate: false,
            orientation: 'hor',
            arrowFromCorner: 10,
            borderOverlap: null,
            offset: 0,
            gravity: null,
            padding:0,
            useCanvas: false,
            clickAway: true,
            title: null,
            width: 300,
            content: null, // Can be passed in as a string or a callback function that returns a string. If content returns false or is undefined, the title attribute will be used. Otherwise the infoPopup will not be created.
            infoPopupClass: '',
            draggable: false,
            showEventType: null,
            delayIn: 250,
            delayOut: 250,
            fade: false,
            position: {},
            instanceNamespace: null,
            shared: false,
            cacheData: false,
            canvasId: 'info_popup_canvas',
            disabled: false,
            autoShow: false,
            tooltip: false
        },
        _create : function() {
            var self = this,
                o = self.options;


            o.fade = !o.fade ? false : typeof o.fade == 'number' ? o.fade : 250;

            /* tooltip default settings */
            o.infoPopupClass = o.tooltip ? o.infoPopupClass+=' info-popup-tooltip' : o.infoPopupClass;
            o.showEventType = o.showEventType ? o.showEventType : o.tooltip ? 'hover' : 'click';
            o.offset = o.offset ? o.offset : o.tooltip ? -3 : 0;
            o.animate = o.animate || o.tooltip;
            o.borderOverlap = o.borderOverlap ? o.borderOverlap : o.tooltip ? 0 : 1;
            o.instanceNamespace = o.instanceNamespace ? o.instanceNamespace : 'tooltip' ? 'tooltip' : 'default';
            o.gravity = o.gravity ? o.gravity : o.tooltip ? 'n' : 'auto';


            var namespaceCount = (infoPopups && infoPopups[o.instanceNamespace] ? infoPopups[o.instanceNamespace].length+1 : 0),
                idSuffix = ( o.shared ? o.instanceNamespace : self.element.attr('id') ? self.element.attr('id') : o.instanceNamespace +"_"+ namespaceCount) ,
                infoPopupId = 'info_popup_' + idSuffix,
                infoPopupCloseBtnId = 'info_popup_close_btn_' + idSuffix;



            var uiButton = self.element
                .show();
                if(uiButton.attr('title')){
                    uiButton.data('title', uiButton.attr('title'))
                        .removeAttr('title');
                }


            if(!o.shared || !infoPopups[o.instanceNamespace]) {

                var uiInfoPopup = ( self.uiInfoPopup = $('<div></div>') )
                    .appendTo(document.body)
                    .hide()
                    .css({ width: o.width })
                    .addClass(uiInfoPopupClasses + o.infoPopupClass)
                    .attr('id', infoPopupId),

                    uiInfoPopupPointer = ( self.uiInfoPopupPointer = $('<div></div>') )
                        .addClass('info-popup-pointer')
                        .appendTo(uiInfoPopup),

                    uiInfoPopupBody = $('<div></div>')
                        .addClass('info-popup-body')
                        .show()
                        .click(function(e){ e.stopPropagation(); })
                        .appendTo(uiInfoPopup),

                    uiInfoPopupTitlebar = ( self.uiInfoPopupTitlebar = $('<div></div>') )
                        .addClass('info-popup-titlebar')
                        .prependTo(uiInfoPopupBody)
                        .hide(),

                    uiInfoPopupClose = ( self.uiInfoPopupClose = $('<div></div>') )
                        .addClass('info-popup-close-btn')
                        .css({cursor:'pointer'})
                        .attr('id', infoPopupCloseBtnId)
                        .click(function(){ self.hide(); })
                        .appendTo(uiInfoPopupBody),

                    uiInfoPopupContent = ( self.uiInfoPopupContent =  $('<div></div>') )
                        .addClass('info-popup-content')
                        .show()
                        .appendTo(uiInfoPopupBody);

                self._trigger('create');

                self._isOpen = false;
                self._isDetatched = false;



                // Set window resize event to keep infoPopup 'glued' to it's trigger
                $(window).bind('resize.infoPopup', function(){ if(!self._isDetatched && self._isOpen){ self.place(); } })

                if(!infoPopups[o.instanceNamespace]){
                    infoPopups[o.instanceNamespace] = new Array();
                    infoPopups[o.instanceNamespace].push(this);
                } else {
                    infoPopups[o.instanceNamespace].push(this);
                }

            } else {
                //InfoPopup container is for a shared collection and he container has been made
                var uiInfoPopup = ( self.uiInfoPopup = infoPopups[o.instanceNamespace][0].uiInfoPopup),
                    uiInfoPopupPointer = ( self.uiInfoPopupPointer = infoPopups[o.instanceNamespace][0].uiInfoPopupPointer),
                    uiInfoPopupBody = ( self.uiInfoPopupBody = infoPopups[o.instanceNamespace][0].uiInfoPopupBody),
                    uiInfoPopupTitlebar = ( self.uiInfoPopupTitlebar = infoPopups[o.instanceNamespace][0].uiInfoPopupTitlebar),
                    uiInfoPopupClose = ( self.uiInfoPopupClose = infoPopups[o.instanceNamespace][0].uiInfoPopupClose),
                    uiInfoPopupContent = ( self.uiInfoPopupContent = infoPopups[o.instanceNamespace][0].uiInfoPopupContent);
            }

            self._eventTypeHandler(o.showEventType);

        },


        _init: function(){
            var self = this,
                o = self.options;
            if(o.useCanvas){
                self.uiCanvas = $('#'+o.canvasId);
                if(!self.uiCanvas.length) {
                    self.uiCanvas = $('<div>')
                        .attr('id', o.canvasId)
                        .addClass('canvas')
                        .appendTo(document.body)
                        .hide();
                }
            }
            if(o.autoShow){
                self.show();
            }
        },

        _eventTypeHandler: function(e){
            var self = this,
                o = self.options;

            if(e == 'click'){
                self._clickHandler(e, self.element);
            } else if(e == 'hover'){
                o.useCanvas = false;
                draggable = false;
                self._overTrigger = false;
                self._overPopup = false;
                // infoPopup hover
                self.uiInfoPopup.hover(
                    function(){
                        self._overPopup = true;
                    },
                    function(){
                        self._overPopup = false;
                        setTimeout(
                            function(){
                                if(!self._overTrigger){
                                    self.hide();
                                }
                            }, o.delayOut
                        );
                    }
                );
                // button hover
                self.element.hover(
                    function(){
                        self._mouseOverHandler()
                    },
                    function(){
                        self._mouseOutHandler()
                    }
                );
            }

        },

        _clickHandler: function(e){
            var self = this,
                o = self.options;

            self.element.bind('click.infoPopup', function(e){
                if(!o.disabled){
                    self.hideAll();
                    e.stopPropagation();
                    self.show();
                }
            });
        },

        _mouseOverHandler: function(){
            var self = this, o = self.options;
            self._overTrigger = true;
            setTimeout(
                function(){
                    if(self._overTrigger){
                        if(!o.disabled && !self._isOpen){
                            self.hideAll();
                            if(o.shared){ self.updateContent(); }
                            self.show();
                        }
                    }
                }, o.delayIn
            );

        },

        _mouseOutHandler: function(){
            var self = this, o = self.options;
            self._overTrigger = false;
            setTimeout(
                function(){
                    if(!self._overPopup){
                        self.hide();
                    }
                }, o.delayOut
            );
        },

        _debug: function(){
            var self = this,
                o = self.options,
                btn = self.element,
                hilight;

            hilight = $('<div>', { text:
                    (btn.offset().left + (btn.outerWidth()/2))
                    + ':' +
                    (btn.offset().top + (btn.outerHeight()/2))
                })
                .css({
                position:'absolute',
                background: 'rgba(0,0,255,0.5)',
                width:btn.outerWidth(),
                height:btn.outerHeight()
            }).appendTo('body').position({my: 'center', at:'center', of: btn });

            setTimeout(function(){
                hilight.fadeOut(300, function() { $(this).remove(); });
            },2000);
        },

        show: function() {

            var self = this,
                o = self.options,
                animateTo,
                zIndex;

            self._trigger('show');
            self._isOpen = true;

            if(!self._infoPopupContentCached || !o.cacheData){
                self._infoPopupContentCached = typeof o.content === 'function' ? o.content(self.element) : o.content ? o.content : self.element.data('title') ? self.element.data('title') : false;
            }

            if(o.draggable && $.fn.draggable){ self._makeDraggable(); }

            // If maxZ is not set, set to 1000, else add 1
            (!jQuery.ui.dialog.maxZ) ? zIndex = 1005 : zIndex = jQuery.ui.dialog.maxZ + 1;

            // set z-index on various infoPopup elements
            self.uiInfoPopup.css({'z-index': zIndex});
            self.uiInfoPopupPointer.css({'z-index': zIndex + 3});
            self.uiInfoPopupClose.css({'z-index': zIndex + 2});

            // Increment and set the new maxZ
            var newZ = zIndex + 4;
            jQuery.ui.dialog.maxZ = newZ;


            if(self._infoPopupContentCached.jquery){
                // if the content passed is a jquery object of something on the page, show it and append it to the infoPopupContent (this moves the node)
                self._infoPopupContentCached.show().appendTo(self.uiInfoPopupContent);
            } else {
                self.uiInfoPopupContent.html(self._infoPopupContentCached);
            }

            if(self._infoPopupContentCached){

                // allow short tooltips to assume natural width
                if(o.tooltip) {
                    o.width = (self.uiInfoPopupContent.text().length < 50) ? 'auto' : 200;
                }
                self.uiInfoPopup.css({ width: o.width });

                if(o.fade && !o.animate){ self.uiInfoPopup.fadeIn(o.fade); }
                else { self.uiInfoPopup.show(); }
            } else {
                //bail out if we dont have content to show!
                return;
            }


            self.place();

            if(o.animate) {
                var targetOpacity = o.tooltip ? '0.9' : 1;
                    self.uiInfoPopup.css('opacity', '0.5');
                if(self.uiInfoPopupPointer.hasClass('info-popup-pointer-up')){
                    animateTo = { top: self.uiInfoPopup.css('top') };
                    $(self.uiInfoPopup).css({ top: parseInt(animateTo.top) - 10 });
                } else if (self.uiInfoPopupPointer.hasClass('info-popup-pointer-down')) {
                    animateTo = { top: self.uiInfoPopup.css('top') };
                    $(self.uiInfoPopup).css({ top: parseInt(animateTo.top) + 10 });
                } else if (self.uiInfoPopupPointer.hasClass('info-popup-pointer-left')) {
                    animateTo = { left: self.uiInfoPopup.css('left') };
                    $(self.uiInfoPopup).css({ left: parseInt(animateTo.left) - 10 });
                } else if (self.uiInfoPopupPointer.hasClass('info-popup-pointer-right')) {
                    animateTo = { left: self.uiInfoPopup.css('left') };
                    $(self.uiInfoPopup).css({ left: parseInt(animateTo.left) + 10 });
                }

                var animateProps = $.extend({}, animateTo, { opacity: targetOpacity } );
                self.uiInfoPopup.stop().animate(animateProps, 200);

            }


            if(o.clickAway){
                if(o.useCanvas){
                    self._renderCanvas(zIndex, true);
                } else {
                    $(document.body).one('click.infoPopup', function(){
                        self.hide();
                    })
                }
            }

        },

        hide: function() {
            var self = this,
                o = self.options,
                infoPopup = self.uiInfoPopup;

            self._trigger('hide');
            self._isOpen = false;

            if(o.fade || o.animate){ infoPopup.stop().fadeOut(o.fade); }
            else { infoPopup.hide(); }
            if(o.useCanvas){ self.uiCanvas.hide(); }
            self._isDetatched = false;
        },

        hideAll: function() {
            var self = this,
                o = self.options;
            this._trigger('hideAll');
            $.each(infoPopups[o.instanceNamespace], function(){
                if(!this.isDetatched()){
                    this.hide();
                }
            });
        },

        flash: function(duration){
            var self = this;
            duration = duration || 2000;
            self.show();
            window.setTimeout(function(){self.hide()},duration);
        },

        place: function(){
            var self = this,
                posObj,
                btn_loc,
                o = self.options,
                // remove from here
                infoPopup = self.uiInfoPopup,
                infoPopupPointer = self.uiInfoPopupPointer,
                infoPopupPointerPos,
                infoPopupPointerClass,
                // to here
                scrollTop = $(window).scrollTop(),
                scrollLeft = $(window).scrollLeft(),
                winWidth = $(window).width(),
                winHeight = $(window).height(),

                btnPos = self.element.offset(),
                btnTop = btnPos.top-scrollTop,
                btnLeft = btnPos.left-scrollLeft,
                btnWidth = self.element.outerWidth(),
                btnHeight = self.element.outerHeight(),

                iconSize = infoPopupPointer.outerWidth(),

                infoPopupWidth = infoPopup.width(),
                infoPopupOuterWidth = infoPopupWidth + iconSize/2,
                infoPopupHeight = infoPopup.height(),
                edgePadding = 10, //TODO: perhaps make this yet another config option.
                canFitCentered = ( (btnLeft + btnWidth/2) + ( infoPopupWidth / 2 ) <= winWidth && (btnLeft + btnWidth/2) - ( infoPopupWidth / 2 )  >= 0 && o.orientation == 'vert' ),
                positions,
                positionConfig = function(pointerClass, pointerPos, popupPos, btnLoc){
                    this.pointerClass = pointerClass;
                    this.pointerPos = pointerPos;
                    this.popupPos = popupPos;
                    this.btnLoc = btnLoc;
                };


        positions = {
            vert: {
                s: {
                    btn_loc: 'tc',
                    pointerClass: 'up',
                    pointerPos: { top: 0-(iconSize - o.borderOverlap), left: (infoPopupWidth/2 - iconSize/2 ) },
                    popupPos: { my: 'center top', at: 'center bottom', offset: '0 ' + (iconSize/2 + o.offset) }
                },
                n: {
                    btn_loc: 'bc',
                    pointerClass: 'down',
                    pointerPos:  { bottom: 0-(iconSize - o.borderOverlap), left: (infoPopupWidth/2 - iconSize/2 ) },
                    popupPos: { my: 'center bottom', at: 'center top', offset: '0 -' + (iconSize/2 + o.offset ) }
                },
                se: {
                    btn_loc: 'tl',
                    pointerClass: 'up',
                    pointerPos: { top: 0-(iconSize - o.borderOverlap), left: o.arrowFromCorner },
                    popupPos: { my: 'left top', at: 'left bottom', offset: '' + (btnWidth/2 - o.arrowFromCorner - iconSize/2) + ' ' + (iconSize/2 - o.offset ) }
                },
                sw: {
                    btn_loc: 'tr',
                    pointerClass: 'up',
                    pointerPos: { top: 0-(iconSize - o.borderOverlap), right: o.arrowFromCorner },
                    popupPos: { my: 'right top', at: 'right bottom', offset: (o.arrowFromCorner + iconSize/2 - btnWidth/2) + ' ' + (iconSize/2 - o.offset ) }
                },
                ne: {
                    btn_loc: 'bl',
                    pointerClass: 'down',
                    pointerPos: { bottom: 0-(iconSize - o.borderOverlap), left: o.arrowFromCorner },
                    popupPos: { my: 'left bottom', at: 'left top', offset: (btnWidth/2 - o.arrowFromCorner - iconSize/2) + ' -' + (iconSize/2 - o.offset ) }
                },
                nw: {
                    btn_loc: 'br',
                    pointerClass: 'down',
                    pointerPos: { bottom: 0-(iconSize - o.borderOverlap), right: o.arrowFromCorner },
                    popupPos: { my: 'right bottom', at: 'right top', offset: (o.arrowFromCorner + iconSize/2 - btnWidth/2)  + ' -'  + (iconSize/2 - o.offset ) }
                }
            },
            hor: {
                e: {
                    btn_loc: 'lc',
                    pointerClass: 'left',
                    pointerPos: { top: (infoPopupHeight/2 - iconSize/2 ), left: 0-(iconSize - o.borderOverlap) },
                    popupPos: { my: 'left center', at: 'right center', offset: (iconSize/2 + o.offset) + ' 0'  }
                },
                w: {
                    btn_loc: 'rc',
                    pointerClass: 'right',
                    pointerPos:  { top: (infoPopupHeight/2 - iconSize/2 ), right: 0-(iconSize - o.borderOverlap) },
                    popupPos: { my: 'right center', at: 'left center', offset: '-' + (iconSize/2 + o.offset) + ' 0' }
                },
                se: {
                    btn_loc: 'tl',
                    pointerClass: 'left',
                    pointerPos: { top:	o.arrowFromCorner, left: 0-(iconSize - o.borderOverlap) },
                    popupPos: { my: 'left top', at: 'right top', offset: (iconSize/2 + o.offset) + ' -' + (o.arrowFromCorner + iconSize/2 - btnHeight/2)  }
                },
                sw: {
                    btn_loc: 'tr',
                    pointerClass: 'right',
                    pointerPos: { top: 	o.arrowFromCorner, right: 0-(iconSize - o.borderOverlap) },
                    popupPos: { my: 'right top', at: 'left top', offset: '-' + (iconSize/2 + o.offset) + ' -' + (o.arrowFromCorner + iconSize/2 - btnHeight/2) }
                },
                ne: {
                    btn_loc: 'bl',
                    pointerClass: 'left',
                    pointerPos: { bottom: o.arrowFromCorner, left: 0-(iconSize - o.borderOverlap) },
                    popupPos: { my: 'left bottom', at: 'right bottom', offset: (iconSize/2 + o.offset) + ' ' + (o.arrowFromCorner + iconSize/2 - btnHeight/2)  }
                },
                nw: {
                    btn_loc: 'br',
                    pointerClass: 'right',
                    pointerPos: { bottom: o.arrowFromCorner, right: 0-(iconSize - o.borderOverlap) },
                    popupPos: { my: 'right bottom', at: 'left bottom', offset: '-' + (iconSize/2 + o.offset) + ' ' + (o.arrowFromCorner + iconSize/2 - btnHeight/2)  }
                }
            }
        };

            // This is to prevent user error for specifying a conflicting gravity like Horizontal North
            positions.hor.n = positions.vert.n;
            positions.hor.s = positions.vert.s;
            positions.vert.e = positions.hor.e;
            positions.vert.w = positions.hor.w;

        if(o.gravity=='auto'){
            if(btnTop + btnHeight + infoPopup.outerHeight() < winHeight){ // top
                if(canFitCentered){ // fits in top center
                    self._position(positions.vert.n);
                } else if(btnLeft + btnWidth + infoPopupOuterWidth + edgePadding <= winWidth){ // top left
                    self._position(positions[o.orientation].se);
                } else { // top right
                    self._position(positions[o.orientation].sw);
                }
            } else { // bottom
                if (canFitCentered) { // fits in bottom center
                    self._position(positions.vert.s);
                } else if(btnLeft + btnWidth + infoPopupWidth <= winWidth){ // bottom left
                    self._position(positions[o.orientation].ne);
                } else { // bottom right
                    self._position(positions[o.orientation].nw);
                }
            }
        } else {
            self._position(positions[o.orientation][o.gravity]);
        }


        },

        _position: function(obj){
            var self = this,
                o = self.options;
            self.uiInfoPopup.position($.extend({}, { of: $(self.element), collision: 'none' }, obj.popupPos, o.position));

            self.uiInfoPopupPointer
                .css( $.extend( {}, { top:'', bottom:'', left:'', right:'' }, obj.pointerPos ) )
                .attr('class', 'info-popup-pointer info-popup-pointer-' + obj.pointerClass)
                .show();
        },

        _makeDraggable: function() {
            var self = this,
                o = self.options,
                doc = $(document),
                heightBeforeDrag;

            //self.uiInfoPopupTitlebar.show();
            self.uiInfoPopup.draggable({
                handle: '.info-popup',
                distance: 10,
                containment: 'document',
                start: function(event, ui) {
                    self.uiInfoPopupPointer.hide();
                    self._getCanvas().show();
                    $(document.body).unbind('click.infoPopup');
                    self._isDetatched = true;
                },
                drag: function(event, ui) {},
                stop: function(event, ui) {
                    self._getCanvas().hide();
                }
            });
        },

        updateContent: function(content, append) {
            var self = this;
            if(!append){
                self._infoPopupContentCached=content;
            } else {
                self._infoPopupContentCached+=content;
            }
            self.uiInfoPopupContent.html(self._infoPopupContentCached);
        },

        _getCanvas: function(){
            var self = this,
                o = self.options,
                uiCanvas = $('#'+o.canvasId);
            if(!uiCanvas.length) {
                uiCanvas = $('<div></div>')
                    .attr('id', o.canvasId)
                    .addClass('canvas')
                    .appendTo(document.body)
                    .hide();
            }
            return uiCanvas;
        },

        _renderCanvas: function(zIndex, clickToHide){
            var self = this,
                canvas = self._getCanvas();

            canvas.css('z-index', zIndex - 1)
                .css('height', $(document).height() + "px")
                .show();

            if(clickToHide){
                canvas.off('click.dropDown')
                    .on('click.dropDown', function(){ self.hide(); })
            }
        },

        widget: function() {
            return this.uiInfoPopup;
        },

        isOpen: function(){
            return this._isOpen;
        },

        isDetatched: function(){
            return this._isDetatched;
        },

        getPopup: function(){
            return this.uiInfoPopup;
        }

    });

})(jQuery);