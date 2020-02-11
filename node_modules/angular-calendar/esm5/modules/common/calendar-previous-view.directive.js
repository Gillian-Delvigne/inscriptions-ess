import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { CalendarView } from './calendar-view.enum';
import { addDaysWithExclusions } from './util';
/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var CalendarPreviousViewDirective = /** @class */ (function () {
    function CalendarPreviousViewDirective(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Days to skip when going back by 1 day
         */
        this.excludeDays = [];
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: this.dateAdapter.subDays,
            week: this.dateAdapter.subWeeks,
            month: this.dateAdapter.subMonths
        }[this.view];
        if (this.view === CalendarView.Day) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -1, this.excludeDays));
        }
        else if (this.view === CalendarView.Week && this.daysInWeek) {
            this.viewDateChange.emit(addDaysWithExclusions(this.dateAdapter, this.viewDate, -this.daysInWeek, this.excludeDays));
        }
        else {
            this.viewDateChange.emit(subFn(this.viewDate, 1));
        }
    };
    CalendarPreviousViewDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CalendarPreviousViewDirective.prototype, "view", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Date)
    ], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CalendarPreviousViewDirective.prototype, "excludeDays", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarPreviousViewDirective.prototype, "daysInWeek", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
    tslib_1.__decorate([
        HostListener('click'),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", []),
        tslib_1.__metadata("design:returntype", void 0)
    ], CalendarPreviousViewDirective.prototype, "onClick", null);
    CalendarPreviousViewDirective = tslib_1.__decorate([
        Directive({
            selector: '[mwlCalendarPreviousView]'
        }),
        tslib_1.__metadata("design:paramtypes", [DateAdapter])
    ], CalendarPreviousViewDirective);
    return CalendarPreviousViewDirective;
}());
export { CalendarPreviousViewDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItcHJldmlvdXMtdmlldy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRS9DOzs7Ozs7Ozs7OztHQVdHO0FBSUg7SUEwQkUsdUNBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBZjVDOztXQUVHO1FBQ00sZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFPcEM7O1dBRUc7UUFDTyxtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRW5CLENBQUM7SUFFaEQ7O09BRUc7SUFFSCwrQ0FBTyxHQUFQO1FBQ0UsSUFBTSxLQUFLLEdBQVE7WUFDakIsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTztZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRO1lBQy9CLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVM7U0FDbEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFYixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDdEIscUJBQXFCLENBQ25CLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxRQUFRLEVBQ2IsQ0FBQyxDQUFDLEVBQ0YsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FDRixDQUFDO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssWUFBWSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzdELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixxQkFBcUIsQ0FDbkIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFFBQVEsRUFDYixDQUFDLElBQUksQ0FBQyxVQUFVLEVBQ2hCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQ0YsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQzs7Z0JBbENnQyxXQUFXOztJQXRCbkM7UUFBUixLQUFLLEVBQUU7OytEQUErQztJQUs5QztRQUFSLEtBQUssRUFBRTswQ0FBVyxJQUFJO21FQUFDO0lBS2Y7UUFBUixLQUFLLEVBQUU7O3NFQUE0QjtJQUszQjtRQUFSLEtBQUssRUFBRTs7cUVBQW9CO0lBS2xCO1FBQVQsTUFBTSxFQUFFOzBDQUFpQixZQUFZO3lFQUE0QjtJQVFsRTtRQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7Z0VBNkJyQjtJQTVEVSw2QkFBNkI7UUFIekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO2lEQTJCaUMsV0FBVztPQTFCakMsNkJBQTZCLENBNkR6QztJQUFELG9DQUFDO0NBQUEsQUE3REQsSUE2REM7U0E3RFksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJWaWV3IH0gZnJvbSAnLi9jYWxlbmRhci12aWV3LmVudW0nO1xuaW1wb3J0IHsgYWRkRGF5c1dpdGhFeGNsdXNpb25zIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKiBDaGFuZ2UgdGhlIHZpZXcgZGF0ZSB0byB0aGUgcHJldmlvdXMgdmlldy4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogPGJ1dHRvblxuICogIG13bENhbGVuZGFyUHJldmlvdXNWaWV3XG4gKiAgWyh2aWV3RGF0ZSldPVwidmlld0RhdGVcIlxuICogIFt2aWV3XT1cInZpZXdcIj5cbiAqICBQcmV2aW91c1xuICogPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW213bENhbGVuZGFyUHJldmlvdXNWaWV3XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJQcmV2aW91c1ZpZXdEaXJlY3RpdmUge1xuICAvKipcbiAgICogVGhlIGN1cnJlbnQgdmlld1xuICAgKi9cbiAgQElucHV0KCkgdmlldzogQ2FsZW5kYXJWaWV3IHwgJ21vbnRoJyB8ICd3ZWVrJyB8ICdkYXknO1xuXG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBEYXlzIHRvIHNraXAgd2hlbiBnb2luZyBiYWNrIGJ5IDEgZGF5XG4gICAqL1xuICBASW5wdXQoKSBleGNsdWRlRGF5czogbnVtYmVyW10gPSBbXTtcblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBkYXlzIGluIGEgd2Vlay4gSWYgc2V0IHdpbGwgc3VidHJhY3QgdGhpcyBhbW91bnQgb2YgZGF5cyBpbnN0ZWFkIG9mIDEgd2Vla1xuICAgKi9cbiAgQElucHV0KCkgZGF5c0luV2VlazogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3Qgc3ViRm46IGFueSA9IHtcbiAgICAgIGRheTogdGhpcy5kYXRlQWRhcHRlci5zdWJEYXlzLFxuICAgICAgd2VlazogdGhpcy5kYXRlQWRhcHRlci5zdWJXZWVrcyxcbiAgICAgIG1vbnRoOiB0aGlzLmRhdGVBZGFwdGVyLnN1Yk1vbnRoc1xuICAgIH1bdGhpcy52aWV3XTtcblxuICAgIGlmICh0aGlzLnZpZXcgPT09IENhbGVuZGFyVmlldy5EYXkpIHtcbiAgICAgIHRoaXMudmlld0RhdGVDaGFuZ2UuZW1pdChcbiAgICAgICAgYWRkRGF5c1dpdGhFeGNsdXNpb25zKFxuICAgICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIsXG4gICAgICAgICAgdGhpcy52aWV3RGF0ZSxcbiAgICAgICAgICAtMSxcbiAgICAgICAgICB0aGlzLmV4Y2x1ZGVEYXlzXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXcgPT09IENhbGVuZGFyVmlldy5XZWVrICYmIHRoaXMuZGF5c0luV2Vlaykge1xuICAgICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KFxuICAgICAgICBhZGREYXlzV2l0aEV4Y2x1c2lvbnMoXG4gICAgICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgICAgICB0aGlzLnZpZXdEYXRlLFxuICAgICAgICAgIC10aGlzLmRheXNJbldlZWssXG4gICAgICAgICAgdGhpcy5leGNsdWRlRGF5c1xuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdEYXRlQ2hhbmdlLmVtaXQoc3ViRm4odGhpcy52aWV3RGF0ZSwgMSkpO1xuICAgIH1cbiAgfVxufVxuIl19