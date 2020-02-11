import * as tslib_1 from "tslib";
import { Directive, Renderer2, ElementRef, OnInit, OnDestroy, Output, EventEmitter, Inject, Input, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var ClickDirective = /** @class */ (function () {
    function ClickDirective(renderer, elm, document) {
        this.renderer = renderer;
        this.elm = elm;
        this.document = document;
        this.clickListenerDisabled = false;
        this.click = new EventEmitter(); // tslint:disable-line
        this.destroy$ = new Subject();
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.clickListenerDisabled) {
            this.listen()
                .pipe(takeUntil(this.destroy$))
                .subscribe(function (event) {
                event.stopPropagation();
                _this.click.emit(event);
            });
        }
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.destroy$.next();
    };
    ClickDirective.prototype.listen = function () {
        var _this = this;
        return new Observable(function (observer) {
            return _this.renderer.listen(_this.elm.nativeElement, 'click', function (event) {
                observer.next(event);
            });
        });
    };
    ClickDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ClickDirective.prototype, "clickListenerDisabled", void 0);
    tslib_1.__decorate([
        Output('mwlClick'),
        tslib_1.__metadata("design:type", Object)
    ], ClickDirective.prototype, "click", void 0);
    ClickDirective = tslib_1.__decorate([
        Directive({
            selector: '[mwlClick]'
        }),
        tslib_1.__param(2, Inject(DOCUMENT)),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            ElementRef, Object])
    ], ClickDirective);
    return ClickDirective;
}());
export { ClickDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2suZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NsaWNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzNDO0lBT0Usd0JBQ1UsUUFBbUIsRUFDbkIsR0FBNEIsRUFDVixRQUFRO1FBRjFCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsUUFBRyxHQUFILEdBQUcsQ0FBeUI7UUFDVixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBVDNCLDBCQUFxQixHQUFHLEtBQUssQ0FBQztRQUVuQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQyxDQUFDLHNCQUFzQjtRQUUxRSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQU05QixDQUFDO0lBRUosaUNBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFO2lCQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM5QixTQUFTLENBQUMsVUFBQSxLQUFLO2dCQUNkLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRU8sK0JBQU0sR0FBZDtRQUFBLGlCQU1DO1FBTEMsT0FBTyxJQUFJLFVBQVUsQ0FBYSxVQUFBLFFBQVE7WUFDeEMsT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBQSxLQUFLO2dCQUNoRSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkExQm1CLFNBQVM7Z0JBQ2QsVUFBVTtnREFDdEIsTUFBTSxTQUFDLFFBQVE7O0lBVFQ7UUFBUixLQUFLLEVBQUU7O2lFQUErQjtJQUVuQjtRQUFuQixNQUFNLENBQUMsVUFBVSxDQUFDOztpREFBd0M7SUFIaEQsY0FBYztRQUgxQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtTQUN2QixDQUFDO1FBV0csbUJBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lEQUZDLFNBQVM7WUFDZCxVQUFVO09BVGQsY0FBYyxDQW1DMUI7SUFBRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO1NBbkNZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDbGlja10nXG59KVxuZXhwb3J0IGNsYXNzIENsaWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjbGlja0xpc3RlbmVyRGlzYWJsZWQgPSBmYWxzZTtcblxuICBAT3V0cHV0KCdtd2xDbGljaycpIGNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5cbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWxtOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY2xpY2tMaXN0ZW5lckRpc2FibGVkKSB7XG4gICAgICB0aGlzLmxpc3RlbigpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgICAgLnN1YnNjcmliZShldmVudCA9PiB7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdGhpcy5jbGljay5lbWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gIH1cblxuICBwcml2YXRlIGxpc3RlbigpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8TW91c2VFdmVudD4ob2JzZXJ2ZXIgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChldmVudCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19