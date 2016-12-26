"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var balls_reducer_1 = require("../reducers/balls.reducer");
var experimental_environment_1 = require("../models/experimental-environment");
var BallboxPixiComponent = (function () {
    function BallboxPixiComponent(elementRef, store, ballStoreService, route) {
        this.elementRef = elementRef;
        this.store = store;
        this.ballStoreService = ballStoreService;
        this.route = route;
        this.width = 500;
        this.height = 500;
        this.graphics = [];
        this.oBallSet = this.store.select('balls');
    }
    BallboxPixiComponent.prototype.ngOnInit = function () {
        var self = this;
        this.route.params.subscribe(function (p) {
            var n = p['n'] || 100;
            experimental_environment_1.experimentalEnvironment.nbBalls = n;
            experimental_environment_1.experimentalEnvironment.leapLength = p['leap'] || 0.1;
            experimental_environment_1.experimentalEnvironment.refreshIntervalMS = p['refresh'] || 1000;
            self.store.dispatch({ type: balls_reducer_1.SET_POSITION_COUNT, payload: n });
        });
    };
    BallboxPixiComponent.prototype.ngAfterViewInit = function () {
        var self = this;
        self.el = self.elementRef.nativeElement;
        this.oBallSet.subscribe(function (bs) {
            self.ballSet = bs;
            self.render();
        });
    };
    BallboxPixiComponent.prototype.render = function () {
        var self = this;
        if (self.renderer === undefined) {
            self.renderer = PIXI.autoDetectRenderer(self.width, self.height, {
                antialias: true,
                transparent: true,
                resolution: 1
            });
            self.renderer.view.style.border = "1px dashed black";
            //self.renderer.backgroundColor = 0x061639;
            self.el.appendChild(self.renderer.view);
            self.stage = new PIXI.Container();
            self.ballSet.balls.forEach(function () {
                var g = new PIXI.Graphics();
                g.beginFill(0xe74c3c);
                g.drawCircle(0, 0, 2);
                self.graphics.push(g);
                g.endFill();
                self.stage.addChild(g);
            });
        }
        var tFrom = new Date().getTime();
        console.log(tFrom - self.tLast);
        self.tLast = tFrom;
        var n = self.ballSet.size();
        for (var i = 0; i < n; i++) {
            var g = self.graphics[i];
            var b = self.ballSet.get(i);
            var xp = b.x * self.width;
            var yp = b.y * self.height;
            g.xFrom = g.x || xp;
            g.yFrom = g.y || yp;
            g.xTo = xp;
            g.yTo = yp;
        }
        var animate = function () {
            var tRatio = (new Date().getTime() - tFrom) / experimental_environment_1.experimentalEnvironment.refreshIntervalMS;
            if (tRatio > 1) {
                return;
            }
            for (var i = 0; i < n; i++) {
                var g = self.graphics[i];
                g.x = g.xFrom + tRatio * (g.xTo - g.xFrom);
                g.y = g.yFrom + tRatio * (g.yTo - g.yFrom);
            }
            self.renderer.render(self.stage);
            requestAnimationFrame(animate);
        };
        animate();
        // Set the fill color
    };
    BallboxPixiComponent = __decorate([
        core_1.Component({
            selector: 'app-ballbox-pixi',
            template: '<div></div>',
            styleUrls: ['./ballbox-pixi.component.css']
        })
    ], BallboxPixiComponent);
    return BallboxPixiComponent;
}());
exports.BallboxPixiComponent = BallboxPixiComponent;
