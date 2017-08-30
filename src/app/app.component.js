"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require('./app.service');
var actions_1 = require('./actions');
var videos_1 = require('./videos');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.i = 0;
        this.linkUrl = "https://media.frequency.com/UC6zPzUJo8hu-5TzUk8IEC2Q/Zefh3FjYMqs.mp4";
        this.n = 0;
        this.types = ["cut", "fadevideo", "fadeaudio", "Add video", "Add audio"];
        this.files = ["fade1.mp3", "fade2.mp3", "endcard1.mp4", "endcard2.mp4"];
        this.listactions = [];
        this.videos = new videos_1.Video();
        this.resultVideo = "";
        this.error = false;
        this.pattern = new RegExp("[0-9]{2}:[0-5]{1}[0-9]{1}");
        this.body = {
            video: this.videos,
            actions: this.listactions
        };
        this.listactions.push(new actions_1.Action());
        this.listactions[0].type = "cut";
    }
    // public  pattern= new RegExp("([0-5]?\d):");
    // public step = 1;
    AppComponent.prototype.addStep = function (i) {
        this.listactions.push(new actions_1.Action());
        this.listactions[this.n].index = this.n + 1;
        this.n++;
    };
    AppComponent.prototype.removeStep = function (i) {
        this.listactions.splice(i, 1);
    };
    AppComponent.prototype.checkPattern = function (value) {
        console.log(this.pattern.test(value));
        return this.pattern.test(value);
    };
    AppComponent.prototype.submit = function () {
        var _this = this;
        // this.body.video = this.videos;
        this.videos.link = this.linkUrl;
        // console.log(this.body);
        this.error = true;
        for (var i = 0; i < this.listactions.length; i++) {
            if (!this.checkPattern(this.listactions[i].start)) {
                // alert("Step: "+(i+1)+", From time wrong format, please check again");
                document.getElementsByClassName("start")[i].classList.add("error");
                // console.log(document.getElementsByClassName("start")[i]);
                this.error = true;
                return;
            }
            else {
                document.getElementsByClassName("start")[i].classList.remove("error");
                this.error = false;
            }
            if (!this.checkPattern(this.listactions[i].end)) {
                // alert("Step: "+(i+1)+", End time wrong format, please check again");
                document.getElementsByClassName("end")[i].classList.add("error");
                this.error = true;
                return;
            }
            else {
                document.getElementsByClassName("end")[i].classList.remove("error");
                this.error = false;
            }
        }
        // document.getElementById("body").classList.add("hidden");
        document.getElementById("loader").classList.remove("hidden");
        var res = this.appService.submitData('text', this.body);
        res.subscribe(function (result) {
            console.log("response: " + result);
            _this.error = false;
            alert("Success");
            _this.resultVideo = result;
            // document.getElementById("body").classList.remove("hidden");
            document.getElementById("loader").classList.add("hidden");
        });
        // console.log(this.body);
        // console.log(res);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map