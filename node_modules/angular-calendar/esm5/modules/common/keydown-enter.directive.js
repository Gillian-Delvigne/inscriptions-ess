import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
var KeydownEnterDirective = /** @class */ (function () {
    function KeydownEnterDirective() {
        this.keydown = new EventEmitter(); // tslint:disable-line
    }
    KeydownEnterDirective.prototype.onKeyPress = function (event) {
        if (event.keyCode === 13 || event.which === 13 || event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.keydown.emit(event);
        }
    };
    tslib_1.__decorate([
        Output('mwlKeydownEnter'),
        tslib_1.__metadata("design:type", Object)
    ], KeydownEnterDirective.prototype, "keydown", void 0);
    tslib_1.__decorate([
        HostListener('keydown', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
        tslib_1.__metadata("design:returntype", void 0)
    ], KeydownEnterDirective.prototype, "onKeyPress", null);
    KeydownEnterDirective = tslib_1.__decorate([
        Directive({
            selector: '[mwlKeydownEnter]'
        })
    ], KeydownEnterDirective);
    return KeydownEnterDirective;
}());
export { KeydownEnterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5ZG93bi1lbnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24va2V5ZG93bi1lbnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUU7SUFIQTtRQUk2QixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUMsQ0FBQyxzQkFBc0I7SUFVaEcsQ0FBQztJQVBDLDBDQUFVLEdBQVYsVUFBVyxLQUFvQjtRQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQ3ZFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBVDBCO1FBQTFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQzs7MERBQTZDO0lBR3ZFO1FBREMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztpREFDbEIsYUFBYTs7MkRBTTlCO0lBVlUscUJBQXFCO1FBSGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztPQUNXLHFCQUFxQixDQVdqQztJQUFELDRCQUFDO0NBQUEsQUFYRCxJQVdDO1NBWFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xLZXlkb3duRW50ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBLZXlkb3duRW50ZXJEaXJlY3RpdmUge1xuICBAT3V0cHV0KCdtd2xLZXlkb3duRW50ZXInKSBrZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQud2hpY2ggPT09IDEzIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5rZXlkb3duLmVtaXQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19