/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Declares the canvas, input, and content variables
var canvas, input, content;
(function(){
    //Creates the canvas with a function
    canvas = (function(){
        //Var c is 
        var c = {},
            //Gets the element
            frame = document.getElementByTageName("canvas")[0],
            _fctx = frame.getContext("2d");
            view = document.createElement("canvas"),
            ctx = view.getContext("2d");
            
            //sets everything to 1
            _fw = 1; 
            _fh = 1;
            _vw = 1; 
            _vh = 1;; 
            _scale = 1;
        
        //Sets some attributes for c
        c.frame = frame;
        c.view = view;
        c.ctx = ctx;
        
        c.flip = function() {
            _fctx.clearRect(0,0, _fw, _fh);
            _fctx.drawImage(this.view, 0, 0, _fw, _fh);
            
            this.ctx.clearRect(0,0,_vw,_vh);
        };
        
        //Defines what width is as well as gives a setter and getter
        Object.defineProperty(c, "width", {
            set: function(w) {
                this.view.width = w;
                this.scale=_scale;
            },
            get: function(){
                return _vw;
            }
        });
        
        //Defines what height is
        Object.defineProperty(c, "height", {
            set: function(h) {
                this.view.width = h;
                this.scale=_scale;
            },
            get: function(){
                return _vh;
            }
        });
        
        //Defines what scale is
        Object.defineProperty(c, "scale", {
            set: function(s) {
                //Allows us to set all of the variables
                _scale = s;
                _vw = this.view.width;
                _fw = this.view.height;
                _fw = this.frame.width = _vw * s;
                _fh = this.frame.height = _vh * s;
                //This is so it doesnt screw up in a browser
                _fctx["imageSmoothingEnabled"] = false;
                ["o","ms","moz","webkit"].foreach(function(v){
                    _fctx[v + "ImageSmoothingEnabled"] = false;
                });
            },
            get: function(){
                return _scale;
            }
        });
        c.scale = _scale;
        
        return c;    
    })();
})();