import * as tslib_1 from "tslib";
import { Component, Input, TemplateRef } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { switchMapTo, startWith, map } from 'rxjs/operators';
import { DateAdapter } from '../../date-adapters/date-adapter';
let CalendarWeekViewCurrentTimeMarkerComponent = class CalendarWeekViewCurrentTimeMarkerComponent {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        this.columnDate$ = new BehaviorSubject(this.columnDate);
        this.marker$ = interval(60 * 1000).pipe(startWith(0), switchMapTo(this.columnDate$), map(columnDate => {
            const startOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayStartHour), this.dayStartMinute);
            const endOfDay = this.dateAdapter.setMinutes(this.dateAdapter.setHours(columnDate, this.dayEndHour), this.dayEndMinute);
            const hourHeightModifier = (this.hourSegments * this.hourSegmentHeight) / 60;
            const now = new Date();
            return {
                isVisible: this.dateAdapter.isSameDay(columnDate, now) &&
                    now >= startOfDay &&
                    now <= endOfDay,
                top: this.dateAdapter.differenceInMinutes(now, startOfDay) *
                    hourHeightModifier
            };
        }));
    }
    ngOnChanges(changes) {
        if (changes.columnDate) {
            this.columnDate$.next(changes.columnDate.currentValue);
        }
    }
};
CalendarWeekViewCurrentTimeMarkerComponent.ctorParameters = () => [
    { type: DateAdapter }
];
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
        template: `
    <ng-template
      #defaultTemplate
      let-columnDate="columnDate"
      let-dayStartHour="dayStartHour"
      let-dayStartMinute="dayStartMinute"
      let-dayEndHour="dayEndHour"
      let-dayEndMinute="dayEndMinute"
      let-isVisible="isVisible"
      let-topPx="topPx"
    >
      <div
        class="cal-current-time-marker"
        *ngIf="isVisible"
        [style.top.px]="topPx"
      ></div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        columnDate: columnDate,
        dayStartHour: dayStartHour,
        dayStartMinute: dayStartMinute,
        dayEndHour: dayEndHour,
        dayEndMinute: dayEndMinute,
        isVisible: (marker$ | async)?.isVisible,
        topPx: (marker$ | async)?.top
      }"
    >
    </ng-template>
  `
    }),
    tslib_1.__metadata("design:paramtypes", [DateAdapter])
], CalendarWeekViewCurrentTimeMarkerComponent);
export { CalendarWeekViewCurrentTimeMarkerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvd2Vlay9jYWxlbmRhci13ZWVrLXZpZXctY3VycmVudC10aW1lLW1hcmtlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFvQy9ELElBQWEsMENBQTBDLEdBQXZELE1BQWEsMENBQTBDO0lBZ0RyRCxZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQS9CcEMsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFakUsWUFBTyxHQUFvRCxRQUFRLENBQ2pFLEVBQUUsR0FBRyxJQUFJLENBQ1YsQ0FBQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUNaLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzdCLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNmLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUN4RCxJQUFJLENBQUMsY0FBYyxDQUNwQixDQUFDO1lBQ0YsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQ3RELElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7WUFDRixNQUFNLGtCQUFrQixHQUN0QixDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BELE1BQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsT0FBTztnQkFDTCxTQUFTLEVBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQztvQkFDM0MsR0FBRyxJQUFJLFVBQVU7b0JBQ2pCLEdBQUcsSUFBSSxRQUFRO2dCQUNqQixHQUFHLEVBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDO29CQUNyRCxrQkFBa0I7YUFDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFFNkMsQ0FBQztJQUVoRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFQa0MsV0FBVzs7QUEvQ25DO0lBQVIsS0FBSyxFQUFFO3NDQUFhLElBQUk7OEVBQUM7QUFFakI7SUFBUixLQUFLLEVBQUU7O2dGQUFzQjtBQUVyQjtJQUFSLEtBQUssRUFBRTs7a0ZBQXdCO0FBRXZCO0lBQVIsS0FBSyxFQUFFOzs4RUFBb0I7QUFFbkI7SUFBUixLQUFLLEVBQUU7O2dGQUFzQjtBQUVyQjtJQUFSLEtBQUssRUFBRTs7Z0ZBQXNCO0FBRXJCO0lBQVIsS0FBSyxFQUFFOztxRkFBMkI7QUFFMUI7SUFBUixLQUFLLEVBQUU7c0NBQWlCLFdBQVc7a0ZBQU07QUFmL0IsMENBQTBDO0lBbEN0RCxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsNENBQTRDO1FBQ3RELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUO0tBQ0YsQ0FBQzs2Q0FpRGlDLFdBQVc7R0FoRGpDLDBDQUEwQyxDQXVEdEQ7U0F2RFksMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcFRvLCBzdGFydFdpdGgsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItd2Vlay12aWV3LWN1cnJlbnQtdGltZS1tYXJrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWNvbHVtbkRhdGU9XCJjb2x1bW5EYXRlXCJcbiAgICAgIGxldC1kYXlTdGFydEhvdXI9XCJkYXlTdGFydEhvdXJcIlxuICAgICAgbGV0LWRheVN0YXJ0TWludXRlPVwiZGF5U3RhcnRNaW51dGVcIlxuICAgICAgbGV0LWRheUVuZEhvdXI9XCJkYXlFbmRIb3VyXCJcbiAgICAgIGxldC1kYXlFbmRNaW51dGU9XCJkYXlFbmRNaW51dGVcIlxuICAgICAgbGV0LWlzVmlzaWJsZT1cImlzVmlzaWJsZVwiXG4gICAgICBsZXQtdG9wUHg9XCJ0b3BQeFwiXG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cImNhbC1jdXJyZW50LXRpbWUtbWFya2VyXCJcbiAgICAgICAgKm5nSWY9XCJpc1Zpc2libGVcIlxuICAgICAgICBbc3R5bGUudG9wLnB4XT1cInRvcFB4XCJcbiAgICAgID48L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGNvbHVtbkRhdGU6IGNvbHVtbkRhdGUsXG4gICAgICAgIGRheVN0YXJ0SG91cjogZGF5U3RhcnRIb3VyLFxuICAgICAgICBkYXlTdGFydE1pbnV0ZTogZGF5U3RhcnRNaW51dGUsXG4gICAgICAgIGRheUVuZEhvdXI6IGRheUVuZEhvdXIsXG4gICAgICAgIGRheUVuZE1pbnV0ZTogZGF5RW5kTWludXRlLFxuICAgICAgICBpc1Zpc2libGU6IChtYXJrZXIkIHwgYXN5bmMpPy5pc1Zpc2libGUsXG4gICAgICAgIHRvcFB4OiAobWFya2VyJCB8IGFzeW5jKT8udG9wXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhcldlZWtWaWV3Q3VycmVudFRpbWVNYXJrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBjb2x1bW5EYXRlOiBEYXRlO1xuXG4gIEBJbnB1dCgpIGRheVN0YXJ0SG91cjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGRheVN0YXJ0TWludXRlOiBudW1iZXI7XG5cbiAgQElucHV0KCkgZGF5RW5kSG91cjogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGRheUVuZE1pbnV0ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50czogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGhvdXJTZWdtZW50SGVpZ2h0OiBudW1iZXI7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgcHJpdmF0ZSBjb2x1bW5EYXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGF0ZT4odGhpcy5jb2x1bW5EYXRlKTtcblxuICBtYXJrZXIkOiBPYnNlcnZhYmxlPHsgaXNWaXNpYmxlOiBib29sZWFuOyB0b3A6IG51bWJlciB9PiA9IGludGVydmFsKFxuICAgIDYwICogMTAwMFxuICApLnBpcGUoXG4gICAgc3RhcnRXaXRoKDApLFxuICAgIHN3aXRjaE1hcFRvKHRoaXMuY29sdW1uRGF0ZSQpLFxuICAgIG1hcChjb2x1bW5EYXRlID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0T2ZEYXkgPSB0aGlzLmRhdGVBZGFwdGVyLnNldE1pbnV0ZXMoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0SG91cnMoY29sdW1uRGF0ZSwgdGhpcy5kYXlTdGFydEhvdXIpLFxuICAgICAgICB0aGlzLmRheVN0YXJ0TWludXRlXG4gICAgICApO1xuICAgICAgY29uc3QgZW5kT2ZEYXkgPSB0aGlzLmRhdGVBZGFwdGVyLnNldE1pbnV0ZXMoXG4gICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0SG91cnMoY29sdW1uRGF0ZSwgdGhpcy5kYXlFbmRIb3VyKSxcbiAgICAgICAgdGhpcy5kYXlFbmRNaW51dGVcbiAgICAgICk7XG4gICAgICBjb25zdCBob3VySGVpZ2h0TW9kaWZpZXIgPVxuICAgICAgICAodGhpcy5ob3VyU2VnbWVudHMgKiB0aGlzLmhvdXJTZWdtZW50SGVpZ2h0KSAvIDYwO1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVmlzaWJsZTpcbiAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmlzU2FtZURheShjb2x1bW5EYXRlLCBub3cpICYmXG4gICAgICAgICAgbm93ID49IHN0YXJ0T2ZEYXkgJiZcbiAgICAgICAgICBub3cgPD0gZW5kT2ZEYXksXG4gICAgICAgIHRvcDpcbiAgICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLmRpZmZlcmVuY2VJbk1pbnV0ZXMobm93LCBzdGFydE9mRGF5KSAqXG4gICAgICAgICAgaG91ckhlaWdodE1vZGlmaWVyXG4gICAgICB9O1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlQWRhcHRlcjogRGF0ZUFkYXB0ZXIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmNvbHVtbkRhdGUpIHtcbiAgICAgIHRoaXMuY29sdW1uRGF0ZSQubmV4dChjaGFuZ2VzLmNvbHVtbkRhdGUuY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==