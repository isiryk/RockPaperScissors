/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas, input, content;
(function(){
    canvas = (function(){
        var c = {},
            frame = document.getElementByTageName("canvas")[0],
            _fctx = frame.getContext("2d");
            
            view = document.createElement("canvas"),
            ctx = view.getContext("2d");
            _fw = 1; 
            _fh = 1;
            _vw = 1; 
            _vh = 1;; 
            _scale = 1;
        
        c.frame = frame;
        c.view = view;
        c.ctx = ctx;
        
        c.flip = function() {
            _fctx.clearRect(0,0, _fw, _fh);
            _fctx.drawImage(this.view, 0, 0, _fw, _fh);
            
            this.ctx.clearRect(0,0,_vw,_vh);
        };
        
        Object.defineProperty(c, "width", {
            set: function(w) {
                this.view.width = w;
                this.scale=_scale;
            },
            get: function(){
                return _vw;
            }
        });
        Object.defineProperty(c, "height", {
            set: function(h) {
                this.view.width = h;
                this.scale=_scale;
            },
            get: function(){
                return _vh;
            }
        });
        Object.defineProperty(c, "scale", {
            set: function(s) {
                _scale = s;
                _vw = this.view.width;
                _fw = this.view.height;
                _fw = this.frame.width = _vw * s;
                _fh = this.frame.height = _vh * s;
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