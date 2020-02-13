import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { switchMapTo, startWith, map } from 'rxjs/operators';
import { DateAdapter } from '../../date-adapters/date-adapter';
var CalendarWeekViewCurrentTimeMarkerComponent = /** @class */ (function () {
    function CalendarWeekViewCurrentTimeMarkerComponent(dateAdapter) {
        var _this = this;
        this.dateAdapter = dateAdapter;
        this.columnDate$ = new BehaviorSubject(this.columnDate);
        this.marker$ = interval(60 * 1000).pipe(startWith(0), switchMapTo(this.columnDate$), map(function (columnDate) {
            var startOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayStartHour), _this.dayStartMinute);
            var endOfDay = _this.dateAdapter.setMinutes(_this.dateAdapter.setHours(columnDate, _this.dayEndHour), _this.dayEndMinute);
            var hourHeightModifier = (_this.hourSegments * _this.hourSegmentHeight) / 60;
            var now = new Date();
            return {
                isVisible: _this.dateAdapter.isSameDay(columnDate, now) &&
                    now >= startOfDay &&
                    now <= endOfDay,
                top: _this.dateAdapter.differenceInMinutes(now, startOfDay) *
                    hourHeightModifier
            };
        }));
    }
    CalendarWeekViewCurrentTimeMarkerComponent.prototype.ngOnChanges = function (changes) {
        if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
        }
    };
    CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Date)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "columnDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayStartMinute", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndHour", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "dayEndMinute", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegments", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "hourSegmentHeight", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarWeekViewCurrentTimeMarkerComponent.prototype, "customTemplate", void 0);
    CalendarWeekViewCurrentTimeMarkerComponent = tslib_1.__decorate([
        Component({
            selector: 'mwl-calendar-week-view-current-time-marker',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-columnDate=\"columnDate\"\n      let-dayStartHour=\"dayStartHour\"\n      let-dayStartMinute=\"dayStartMinute\"\n      let-dayEndHour=\"dayEndHour\"\n      let-dayEndMinute=\"dayEndMinute\"\n      let-isVisible=\"isVisible\"\n      let-topPx=\"topPx\"\n    >\n      <div\n        class=\"cal-current-time-marker\"\n        *ngIf=\"isVisible\"\n        [style.top.px]=\"topPx\"\n      ></div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        columnDate: columnDate,\n        dayStartHour: dayStartHour,\n        dayStartMinute: dayStartMinute,\n        dayEndHour: dayEndHour,\n        dayEndMinute: dayEndMinute,\n        isVisible: (marker$ | async)?.isVisible,\n        topPx: (marker$ | async)?.top\n      }\"\n    >\n    </ng-template>\n  "
        }),
        tslib_1.__metadata("design:paramtypes", [DateAdapter])
    ], CalendarWeekViewCurrentTimeMarkerComponent);
    return CalendarWeekViewCurrentTimeMarkerComponent;
}());
export { CalendarWeekViewCurrentTimeMarkerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLXZpZXctY3VycmVudC10aW1lLW1hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFvQy9EO0lBZ0RFLG9EQUFvQixXQUF3QjtRQUE1QyxpQkFBZ0Q7UUFBNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUEvQnBDLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpFLFlBQU8sR0FBb0QsUUFBUSxDQUNqRSxFQUFFLEdBQUcsSUFBSSxDQUNWLENBQUMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFDWixXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUM3QixHQUFHLENBQUMsVUFBQSxVQUFVO1lBQ1osSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQzVDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQ3hELEtBQUksQ0FBQyxjQUFjLENBQ3BCLENBQUM7WUFDRixJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FDMUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsRUFDdEQsS0FBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztZQUNGLElBQU0sa0JBQWtCLEdBQ3RCLENBQUMsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPO2dCQUNMLFNBQVMsRUFDUCxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDO29CQUMzQyxHQUFHLElBQUksVUFBVTtvQkFDakIsR0FBRyxJQUFJLFFBQVE7Z0JBQ2pCLEdBQUcsRUFDRCxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUM7b0JBQ3JELGtCQUFrQjthQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUU2QyxDQUFDO0lBRWhELGdFQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN4RDtJQUNILENBQUM7O2dCQU5nQyxXQUFXOztJQS9DbkM7UUFBUixLQUFLLEVBQUU7MENBQWEsSUFBSTtrRkFBQztJQUVqQjtRQUFSLEtBQUssRUFBRTs7b0ZBQXNCO0lBRXJCO1FBQVIsS0FBSyxFQUFFOztzRkFBd0I7SUFFdkI7UUFBUixLQUFLLEVBQUU7O2tGQUFvQjtJQUVuQjtRQUFSLEtBQUssRUFBRTs7b0ZBQXNCO0lBRXJCO1FBQVIsS0FBSyxFQUFFOztvRkFBc0I7SUFFckI7UUFBUixLQUFLLEVBQUU7O3lGQUEyQjtJQUUxQjtRQUFSLEtBQUssRUFBRTswQ0FBaUIsV0FBVztzRkFBTTtJQWYvQiwwQ0FBMEM7UUFsQ3RELFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0Q0FBNEM7WUFDdEQsUUFBUSxFQUFFLGs0QkE4QlQ7U0FDRixDQUFDO2lEQWlEaUMsV0FBVztPQWhEakMsMENBQTBDLENBdUR0RDtJQUFELGlEQUFDO0NBQUEsQUF2REQsSUF1REM7U0F2RFksMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcFRvLCBzdGFydFdpdGgsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWNvbHVtbkRhdGU9XCJjb2x1bW5EYXRlXCJcbiAgICAgIGxldC1kYXlTdGFydEhvdXI9XCJkYXlTdGFydEhvdXJcIlxuICAgICAgbGV0LWRheVN0YXJ0TWludXRlPVwiZGF5U3RhcnRNaW51dGVcIlxuICAgICAgbGV0LWRheUVuZEhvdXI9XCJkYXlFbmRIb3VyXCJcbiAgICAgIGxldC1kYXlFbmRNaW51dGU9XCJkYXlFbmRNaW51dGVcIlxuICAgICAgbGV0LWlzVmlzaWJsZT1cImlzVmlzaWJsZVwiXG4gICAgICBsZXQtdG9wUHg9XCJ0b3BQeFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1jdXJyZW50LXRpbWUtbWFya2VyXCJcbiAgICAgICAgKm5nSWY9XCJpc1Zpc2libGVcIlxuICAgICAgICBbc3R5bGUudG9wLnB4XT1cInRvcFB4XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGNvbHVtbkRhdGU6IGNvbHVtbkRhdGUsXG4gICAgICAgIGRheVN0YXJ0SG91cjogZGF5U3RhcnRIb3VyLFxuICAgICAgICBkYXlTdGFydE1pbnV0ZTogZGF5U3RhcnRNaW51dGUsXG4gICAgICAgIGRheUVuZEhvdXI6IGRheUVuZEhvdXIsXG4gICAgICAgIGRheUVuZE1pbnV0ZTogZGF5RW5kTWludXRlLFxuICAgICAgICBpc1Zpc2libGU6IChtYXJrZXIkIHwgYXN5bmMpPy5pc1Zpc2libGUsXG4gICAgICAgIHRvcFB4OiAobWFya2VyJCB8IGFzeW5jKT8udG9wXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3Q3VycmVudFRpbWVNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb2x1bW5EYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpIGRheVN0YXJ0SG91cjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGRheVN0YXJ0TWludXRlOiBudW1iZXI7XG5cbiAgQElucHV0KCkgZGF5RW5kSG91cjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGRheUVuZE1pbnV0ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50czogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBjb2x1bW5EYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGF0ZT4odGhpcy5jb2x1bW5EYXRlKTtcblxuICBtYXJrZXIkOiBPYnNlcnZhYmxlPHsgaXNWaXNpYmxlOiBib29sZWFuOyB0b3A6IG51bWJlciB9PiA9IGludGVydmFsKFxuICAgIDYwICogMTAwMFxuICApLnBpcGUoXG4gICAgc3RhcnRXaXRoKDApLFxuICAgIHN3aXRjaE1hcFRvKHRoaXMuY29sdW1uRGF0ZSQpLFxuICAgIG1hcChjb2x1bW5EYXRlID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0T2ZEYXkgPSB0aGlzLmRhdGVBZGFwdGVyLnNldE1pbnV0ZXMoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0SG91cnMoY29sdW1uRGF0ZSwgdGhpcy5kYXlTdGFydEhvdXIpLFxuICAgICAgICB0aGlzLmRheVN0YXJ0TWludXRlXG4gICAgICApO1xuICAgICAgY29uc3QgZW5kT2ZEYXkgPSB0aGlzLmRhdGVBZGFwdGVyLnNldE1pbnV0ZXMoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0SG91cnMoY29sdW1uRGF0ZSwgdGhpcy5kYXlFbmRIb3VyKSxcbiAgICAgICAgdGhpcy5kYXlFbmRNaW51dGVcbiAgICAgICk7XG4gICAgICBjb25zdCBob3VySGVpZ2h0TW9kaWZpZXIgPVxuICAgICAgICAodGhpcy5ob3VyU2VnbWVudHMgKiB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0KSAvIDYwO1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZTpcbiAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmlzU2FtZURheShjb2x1bW5EYXRlLCBub3cpICYmXG4gICAgICAgICAgbm93ID49IHN0YXJ0T2ZEYXkgJiZcbiAgICAgICAgICBub3cgPD0gZW5kT2ZEYXksXG4gICAgICAgIHRvcDpcbiAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmRpZmZlcmVuY2VJbk1pbnV0ZXMobm93LCBzdGFydE9mRGF5KSAqXG4gICAgICAgICAgaG91ckhlaWdodE1vZGlmaWVyXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbkRhdGUpIHtcbiAgICAgIHRoaXMuY29sdW1uRGF0ZSQubmV4dChjaGFuZ2VzLmNvbHVtbkRhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==