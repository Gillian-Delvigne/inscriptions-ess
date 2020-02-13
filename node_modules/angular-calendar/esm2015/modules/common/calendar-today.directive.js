import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
let CalendarTodayDirective = class CalendarTodayDirective {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new EventEmitter();
    }
    /**
     * @hidden
     */
    onClick() {
        this.viewDateChange.emit(this.dateAdapter.startOfDay(new Date()));
    }
};
CalendarTodayDirective.ctorParameters = () => [
    { type: DateAdapter }
];
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Date)
], CalendarTodayDirective.prototype, "viewDate", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], CalendarTodayDirective.prototype, "viewDateChange", void 0);
tslib_1.__decorate([
    HostListener('click'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], CalendarTodayDirective.prototype, "onClick", null);
CalendarTodayDirective = tslib_1.__decorate([
    Directive({
        selector: '[mwlCalendarToday]'
    }),
    tslib_1.__metadata("design:paramtypes", [DateAdapter])
], CalendarTodayDirective);
export { CalendarTodayDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9kYXkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NhbGVuZGFyLXRvZGF5LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9EOzs7Ozs7Ozs7O0dBVUc7QUFJSCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQVdqQyxZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUw1Qzs7V0FFRztRQUNPLG1CQUFjLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUVoRDs7T0FFRztJQUVILE9BQU87UUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0YsQ0FBQTs7WUFUa0MsV0FBVzs7QUFQbkM7SUFBUixLQUFLLEVBQUU7c0NBQVcsSUFBSTt3REFBQztBQUtkO0lBQVQsTUFBTSxFQUFFO3NDQUFpQixZQUFZOzhEQUE0QjtBQVFsRTtJQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7cURBR3JCO0FBbkJVLHNCQUFzQjtJQUhsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO0tBQy9CLENBQUM7NkNBWWlDLFdBQVc7R0FYakMsc0JBQXNCLENBb0JsQztTQXBCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbi8qKlxuICogQ2hhbmdlIHRoZSB2aWV3IGRhdGUgdG8gdGhlIGN1cnJlbnQgZGF5LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8YnV0dG9uXG4gKiAgbXdsQ2FsZW5kYXJUb2RheVxuICogIFsodmlld0RhdGUpXT1cInZpZXdEYXRlXCI+XG4gKiAgVG9kYXlcbiAqIDwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttd2xDYWxlbmRhclRvZGF5XSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUb2RheURpcmVjdGl2ZSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdmlldyBkYXRlIGlzIGNoYW5nZWRcbiAgICovXG4gIEBPdXRwdXQoKSB2aWV3RGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKSB7fVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy52aWV3RGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZUFkYXB0ZXIuc3RhcnRPZkRheShuZXcgRGF0ZSgpKSk7XG4gIH1cbn1cbiJdfQ==