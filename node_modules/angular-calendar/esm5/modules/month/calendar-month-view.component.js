import * as tslib_1 from "tslib";
import { Component, OnChanges, Input, Output, EventEmitter, ChangeDetectorRef, OnInit, OnDestroy, LOCALE_ID, Inject, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEventTimesChangedEventType } from '../common/calendar-event-times-changed-event.interface';
import { CalendarUtils } from '../common/calendar-utils.provider';
import { validateEvents } from '../common/util';
import { DateAdapter } from '../../date-adapters/date-adapter';
/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var CalendarMonthViewComponent = /** @class */ (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale, dateAdapter) {
        var _this = this;
        this.cdr = cdr;
        this.utils = utils;
        this.dateAdapter = dateAdapter;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'auto';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The delay in milliseconds before the tooltip should be displayed. If not provided the tooltip
         * will be displayed immediately.
         */
        this.tooltipDelay = null;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new EventEmitter();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new EventEmitter();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new EventEmitter();
        /**
         * Called when a header week day is clicked. Returns ISO day number.
         */
        this.columnHeaderClicked = new EventEmitter();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new EventEmitter();
        /**
         * @hidden
         */
        this.trackByRowOffset = function (index, offset) {
            return _this.view.days
                .slice(offset, _this.view.totalDaysVisibleInWeek)
                .map(function (day) { return day.date.toISOString(); })
                .join('-');
        };
        /**
         * @hidden
         */
        this.trackByDate = function (index, day) { return day.date.toISOString(); };
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        var refreshHeader = changes.viewDate || changes.excludeDays || changes.weekendDays;
        var refreshBody = changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays;
        if (refreshHeader) {
            this.refreshHeader();
        }
        if (changes.events) {
            validateEvents(this.events);
        }
        if (refreshBody) {
            this.refreshBody();
        }
        if (refreshHeader || refreshBody) {
            this.emitBeforeViewRender();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.activeDay) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor =
                    (event.color && event.color.secondary) || '#D1E8FF';
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (droppedOn, event, draggedFrom) {
        if (droppedOn !== draggedFrom) {
            var year = this.dateAdapter.getYear(droppedOn.date);
            var month = this.dateAdapter.getMonth(droppedOn.date);
            var date = this.dateAdapter.getDate(droppedOn.date);
            var newStart = this.dateAdapter.setDate(this.dateAdapter.setMonth(this.dateAdapter.setYear(event.start, year), month), date);
            var newEnd = void 0;
            if (event.end) {
                var secondsDiff = this.dateAdapter.differenceInSeconds(newStart, event.start);
                newEnd = this.dateAdapter.addSeconds(event.end, secondsDiff);
            }
            this.eventTimesChanged.emit({
                event: event,
                newStart: newStart,
                newEnd: newEnd,
                day: droppedOn,
                type: CalendarEventTimesChangedEventType.Drop
            });
        }
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            var activeDay_1 = this.activeDay || this.viewDate;
            this.openDay = this.view.days.find(function (day) {
                return _this.dateAdapter.isSameDay(day.date, activeDay_1);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
        this.emitBeforeViewRender();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days,
                period: this.view.period
            });
        }
    };
    CalendarMonthViewComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: CalendarUtils },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DateAdapter }
    ]; };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Date)
    ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "events", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Date)
    ], CalendarMonthViewComponent.prototype, "activeDay", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Subject)
    ], CalendarMonthViewComponent.prototype, "refresh", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CalendarMonthViewComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarMonthViewComponent.prototype, "tooltipDelay", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarMonthViewComponent.prototype, "eventActionsTemplate", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "columnHeaderClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarMonthViewComponent = tslib_1.__decorate([
        Component({
            selector: 'mwl-calendar-month-view',
            template: "\n    <div class=\"cal-month-view\" role=\"grid\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        (columnHeaderClicked)=\"columnHeaderClicked.emit($event)\"\n        [customTemplate]=\"headerTemplate\"\n      >\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div\n          *ngFor=\"let rowIndex of view.rowOffsets; trackBy: trackByRowOffset\"\n        >\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"\n                let day of view.days\n                  | slice: rowIndex:rowIndex + view.totalDaysVisibleInWeek;\n                trackBy: trackByDate\n              \"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipDelay]=\"tooltipDelay\"\n              [customTemplate]=\"cellTemplate\"\n              [ngStyle]=\"{ backgroundColor: day.backgroundColor }\"\n              (mwlClick)=\"dayClicked.emit({ day: day, sourceEvent: $event })\"\n              [clickListenerDisabled]=\"dayClicked.observers.length === 0\"\n              (mwlKeydownEnter)=\"\n                dayClicked.emit({ day: day, sourceEvent: $event })\n              \"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              dragOverClass=\"cal-drag-over\"\n              (drop)=\"\n                eventDropped(\n                  day,\n                  $event.dropData.event,\n                  $event.dropData.draggedFrom\n                )\n              \"\n              (eventClicked)=\"\n                eventClicked.emit({\n                  event: $event.event,\n                  sourceEvent: $event.sourceEvent\n                })\n              \"\n              [attr.tabindex]=\"{} | calendarA11y: 'monthCellTabIndex'\"\n            >\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [locale]=\"locale\"\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [date]=\"openDay?.date\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            [eventActionsTemplate]=\"eventActionsTemplate\"\n            (eventClicked)=\"\n              eventClicked.emit({\n                event: $event.event,\n                sourceEvent: $event.sourceEvent\n              })\n            \"\n            mwlDroppable\n            dragOverClass=\"cal-drag-over\"\n            (drop)=\"\n              eventDropped(\n                openDay,\n                $event.dropData.event,\n                $event.dropData.draggedFrom\n              )\n            \"\n          >\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }),
        tslib_1.__param(2, Inject(LOCALE_ID)),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef,
            CalendarUtils, String, DateAdapter])
    ], CalendarMonthViewComponent);
    return CalendarMonthViewComponent;
}());
export { CalendarMonthViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbW9udGgtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9tb250aC9jYWxlbmRhci1tb250aC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFRdkIsT0FBTyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUVMLGtDQUFrQyxFQUNuQyxNQUFNLHdEQUF3RCxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBZ0IvRDs7Ozs7Ozs7O0dBU0c7QUF5Rkg7SUE4S0U7O09BRUc7SUFDSCxvQ0FDWSxHQUFzQixFQUN0QixLQUFvQixFQUNYLE1BQWMsRUFDdkIsV0FBd0I7UUFKcEMsaUJBT0M7UUFOVyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixVQUFLLEdBQUwsS0FBSyxDQUFlO1FBRXBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBOUtwQzs7O1dBR0c7UUFDTSxXQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUV0Qzs7V0FFRztRQUNNLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBRXBDOztXQUVHO1FBQ00sb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFpQjFDOztXQUVHO1FBQ00scUJBQWdCLEdBQW1CLE1BQU0sQ0FBQztRQU9uRDs7V0FFRztRQUNNLHdCQUFtQixH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U0FBUyxDQUFDLENBQUE7aURBRkgsaUJBQWlCO1lBQ2YsYUFBYSxVQUVQLFdBQVc7T0FyTHpCLDBCQUEwQixDQTRWdEM7SUFBRCxpQ0FBQztDQUFBLEFBNVZELElBNFZDO1NBNVZZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25DaGFuZ2VzLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgTE9DQUxFX0lELFxuICBJbmplY3QsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FsZW5kYXJFdmVudCxcbiAgV2Vla0RheSxcbiAgTW9udGhWaWV3LFxuICBNb250aFZpZXdEYXksXG4gIFZpZXdQZXJpb2Rcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnQsXG4gIENhbGVuZGFyRXZlbnRUaW1lc0NoYW5nZWRFdmVudFR5cGVcbn0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWV2ZW50LXRpbWVzLWNoYW5nZWQtZXZlbnQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENhbGVuZGFyVXRpbHMgfSBmcm9tICcuLi9jb21tb24vY2FsZW5kYXItdXRpbHMucHJvdmlkZXInO1xuaW1wb3J0IHsgdmFsaWRhdGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5pbXBvcnQgeyBEYXRlQWRhcHRlciB9IGZyb20gJy4uLy4uL2RhdGUtYWRhcHRlcnMvZGF0ZS1hZGFwdGVyJztcbmltcG9ydCB7IFBsYWNlbWVudEFycmF5IH0gZnJvbSAncG9zaXRpb25pbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyTW9udGhWaWV3QmVmb3JlUmVuZGVyRXZlbnQge1xuICBoZWFkZXI6IFdlZWtEYXlbXTtcbiAgYm9keTogTW9udGhWaWV3RGF5W107XG4gIHBlcmlvZDogVmlld1BlcmlvZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxlbmRhck1vbnRoVmlld0V2ZW50VGltZXNDaGFuZ2VkRXZlbnQ8XG4gIEV2ZW50TWV0YVR5cGUgPSBhbnksXG4gIERheU1ldGFUeXBlID0gYW55XG4+IGV4dGVuZHMgQ2FsZW5kYXJFdmVudFRpbWVzQ2hhbmdlZEV2ZW50PEV2ZW50TWV0YVR5cGU+IHtcbiAgZGF5OiBNb250aFZpZXdEYXk8RGF5TWV0YVR5cGU+O1xufVxuXG4vKipcbiAqIFNob3dzIGFsbCBldmVudHMgb24gYSBnaXZlbiBtb250aC4gRXhhbXBsZSB1c2FnZTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiA8bXdsLWNhbGVuZGFyLW1vbnRoLXZpZXdcbiAqICBbdmlld0RhdGVdPVwidmlld0RhdGVcIlxuICogIFtldmVudHNdPVwiZXZlbnRzXCI+XG4gKiA8L213bC1jYWxlbmRhci1tb250aC12aWV3PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci1tb250aC12aWV3JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiY2FsLW1vbnRoLXZpZXdcIiByb2xlPVwiZ3JpZFwiPlxuICAgICAgPG13bC1jYWxlbmRhci1tb250aC12aWV3LWhlYWRlclxuICAgICAgICBbZGF5c109XCJjb2x1bW5IZWFkZXJzXCJcbiAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAoY29sdW1uSGVhZGVyQ2xpY2tlZCk9XCJjb2x1bW5IZWFkZXJDbGlja2VkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJoZWFkZXJUZW1wbGF0ZVwiXG4gICAgICA+XG4gICAgICA8L213bC1jYWxlbmRhci1tb250aC12aWV3LWhlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYWwtZGF5c1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nRm9yPVwibGV0IHJvd0luZGV4IG9mIHZpZXcucm93T2Zmc2V0czsgdHJhY2tCeTogdHJhY2tCeVJvd09mZnNldFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FsLWNlbGwtcm93XCI+XG4gICAgICAgICAgICA8bXdsLWNhbGVuZGFyLW1vbnRoLWNlbGxcbiAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgbGV0IGRheSBvZiB2aWV3LmRheXNcbiAgICAgICAgICAgICAgICAgIHwgc2xpY2U6IHJvd0luZGV4OnJvd0luZGV4ICsgdmlldy50b3RhbERheXNWaXNpYmxlSW5XZWVrO1xuICAgICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlEYXRlXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImRheT8uY3NzQ2xhc3NcIlxuICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXG4gICAgICAgICAgICAgIFtvcGVuRGF5XT1cIm9wZW5EYXlcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFt0b29sdGlwUGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBbdG9vbHRpcEFwcGVuZFRvQm9keV09XCJ0b29sdGlwQXBwZW5kVG9Cb2R5XCJcbiAgICAgICAgICAgICAgW3Rvb2x0aXBUZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbdG9vbHRpcERlbGF5XT1cInRvb2x0aXBEZWxheVwiXG4gICAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJjZWxsVGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7IGJhY2tncm91bmRDb2xvcjogZGF5LmJhY2tncm91bmRDb2xvciB9XCJcbiAgICAgICAgICAgICAgKG13bENsaWNrKT1cImRheUNsaWNrZWQuZW1pdCh7IGRheTogZGF5LCBzb3VyY2VFdmVudDogJGV2ZW50IH0pXCJcbiAgICAgICAgICAgICAgW2NsaWNrTGlzdGVuZXJEaXNhYmxlZF09XCJkYXlDbGlja2VkLm9ic2VydmVycy5sZW5ndGggPT09IDBcIlxuICAgICAgICAgICAgICAobXdsS2V5ZG93bkVudGVyKT1cIlxuICAgICAgICAgICAgICAgIGRheUNsaWNrZWQuZW1pdCh7IGRheTogZGF5LCBzb3VyY2VFdmVudDogJGV2ZW50IH0pXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIChoaWdobGlnaHREYXkpPVwidG9nZ2xlRGF5SGlnaGxpZ2h0KCRldmVudC5ldmVudCwgdHJ1ZSlcIlxuICAgICAgICAgICAgICAodW5oaWdobGlnaHREYXkpPVwidG9nZ2xlRGF5SGlnaGxpZ2h0KCRldmVudC5ldmVudCwgZmFsc2UpXCJcbiAgICAgICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgICAgIGRyYWdPdmVyQ2xhc3M9XCJjYWwtZHJhZy1vdmVyXCJcbiAgICAgICAgICAgICAgKGRyb3ApPVwiXG4gICAgICAgICAgICAgICAgZXZlbnREcm9wcGVkKFxuICAgICAgICAgICAgICAgICAgZGF5LFxuICAgICAgICAgICAgICAgICAgJGV2ZW50LmRyb3BEYXRhLmV2ZW50LFxuICAgICAgICAgICAgICAgICAgJGV2ZW50LmRyb3BEYXRhLmRyYWdnZWRGcm9tXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAoZXZlbnRDbGlja2VkKT1cIlxuICAgICAgICAgICAgICAgIGV2ZW50Q2xpY2tlZC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiAkZXZlbnQuZXZlbnQsXG4gICAgICAgICAgICAgICAgICBzb3VyY2VFdmVudDogJGV2ZW50LnNvdXJjZUV2ZW50XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwie30gfCBjYWxlbmRhckExMXk6ICdtb250aENlbGxUYWJJbmRleCdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9td2wtY2FsZW5kYXItbW9udGgtY2VsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bXdsLWNhbGVuZGFyLW9wZW4tZGF5LWV2ZW50c1xuICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgW2lzT3Blbl09XCJvcGVuUm93SW5kZXggPT09IHJvd0luZGV4XCJcbiAgICAgICAgICAgIFtldmVudHNdPVwib3BlbkRheT8uZXZlbnRzXCJcbiAgICAgICAgICAgIFtkYXRlXT1cIm9wZW5EYXk/LmRhdGVcIlxuICAgICAgICAgICAgW2N1c3RvbVRlbXBsYXRlXT1cIm9wZW5EYXlFdmVudHNUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbZXZlbnRUaXRsZVRlbXBsYXRlXT1cImV2ZW50VGl0bGVUZW1wbGF0ZVwiXG4gICAgICAgICAgICBbZXZlbnRBY3Rpb25zVGVtcGxhdGVdPVwiZXZlbnRBY3Rpb25zVGVtcGxhdGVcIlxuICAgICAgICAgICAgKGV2ZW50Q2xpY2tlZCk9XCJcbiAgICAgICAgICAgICAgZXZlbnRDbGlja2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiAkZXZlbnQuZXZlbnQsXG4gICAgICAgICAgICAgICAgc291cmNlRXZlbnQ6ICRldmVudC5zb3VyY2VFdmVudFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIG13bERyb3BwYWJsZVxuICAgICAgICAgICAgZHJhZ092ZXJDbGFzcz1cImNhbC1kcmFnLW92ZXJcIlxuICAgICAgICAgICAgKGRyb3ApPVwiXG4gICAgICAgICAgICAgIGV2ZW50RHJvcHBlZChcbiAgICAgICAgICAgICAgICBvcGVuRGF5LFxuICAgICAgICAgICAgICAgICRldmVudC5kcm9wRGF0YS5ldmVudCxcbiAgICAgICAgICAgICAgICAkZXZlbnQuZHJvcERhdGEuZHJhZ2dlZEZyb21cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9td2wtY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyTW9udGhWaWV3Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBUaGUgY3VycmVudCB2aWV3IGRhdGVcbiAgICovXG4gIEBJbnB1dCgpIHZpZXdEYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBldmVudHMgdG8gZGlzcGxheSBvbiB2aWV3LlxuICAgKiBUaGUgc2NoZW1hIGlzIGF2YWlsYWJsZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGxld2lzOTIvY2FsZW5kYXItdXRpbHMvYmxvYi9jNTE2ODk5ODVmNTlhMjcxOTQwZTMwYmM0ZTJjNGUxZmVlM2ZjYjVjL3NyYy9jYWxlbmRhclV0aWxzLnRzI0w0OS1MNjNcbiAgICovXG4gIEBJbnB1dCgpIGV2ZW50czogQ2FsZW5kYXJFdmVudFtdID0gW107XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCB3aWxsIGJlIGhpZGRlbiBvbiB0aGUgdmlld1xuICAgKi9cbiAgQElucHV0KCkgZXhjbHVkZURheXM6IG51bWJlcltdID0gW107XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGV2ZW50cyBsaXN0IGZvciB0aGUgZGF5IG9mIHRoZSBgdmlld0RhdGVgIG9wdGlvbiBpcyB2aXNpYmxlIG9yIG5vdFxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlRGF5SXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIElmIHNldCB3aWxsIGJlIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBkYXkgdGhhdCBzaG91bGQgYmUgb3Blbi4gSWYgbm90IHNldCwgdGhlIGB2aWV3RGF0ZWAgaXMgdXNlZFxuICAgKi9cbiAgQElucHV0KCkgYWN0aXZlRGF5OiBEYXRlO1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgd2hlbiBlbWl0dGVkIG9uIHdpbGwgcmUtcmVuZGVyIHRoZSBjdXJyZW50IHZpZXdcbiAgICovXG4gIEBJbnB1dCgpIHJlZnJlc2g6IFN1YmplY3Q8YW55PjtcblxuICAvKipcbiAgICogVGhlIGxvY2FsZSB1c2VkIHRvIGZvcm1hdCBkYXRlc1xuICAgKi9cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwbGFjZW1lbnQgb2YgdGhlIGV2ZW50IHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQ6IFBsYWNlbWVudEFycmF5ID0gJ2F1dG8nO1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBldmVudCB0b29sdGlwc1xuICAgKi9cbiAgQElucHV0KCkgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGFwcGVuZCB0b29sdGlwcyB0byB0aGUgYm9keSBvciBuZXh0IHRvIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgICovXG4gIEBJbnB1dCgpIHRvb2x0aXBBcHBlbmRUb0JvZHk6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBUaGUgZGVsYXkgaW4gbWlsbGlzZWNvbmRzIGJlZm9yZSB0aGUgdG9vbHRpcCBzaG91bGQgYmUgZGlzcGxheWVkLiBJZiBub3QgcHJvdmlkZWQgdGhlIHRvb2x0aXBcbiAgICogd2lsbCBiZSBkaXNwbGF5ZWQgaW1tZWRpYXRlbHkuXG4gICAqL1xuICBASW5wdXQoKSB0b29sdGlwRGVsYXk6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RhcnQgbnVtYmVyIG9mIHRoZSB3ZWVrXG4gICAqL1xuICBASW5wdXQoKSB3ZWVrU3RhcnRzT246IG51bWJlcjtcblxuICAvKipcbiAgICogQSBjdXN0b20gdGVtcGxhdGUgdG8gdXNlIHRvIHJlcGxhY2UgdGhlIGhlYWRlclxuICAgKi9cbiAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSB0byByZXBsYWNlIHRoZSBkYXkgY2VsbFxuICAgKi9cbiAgQElucHV0KCkgY2VsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSB0ZW1wbGF0ZSB0byB1c2UgZm9yIHRoZSBzbGlkZSBkb3duIGJveCBvZiBldmVudHMgZm9yIHRoZSBhY3RpdmUgZGF5XG4gICAqL1xuICBASW5wdXQoKSBvcGVuRGF5RXZlbnRzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgdGl0bGVzXG4gICAqL1xuICBASW5wdXQoKSBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEEgY3VzdG9tIHRlbXBsYXRlIHRvIHVzZSBmb3IgZXZlbnQgYWN0aW9uc1xuICAgKi9cbiAgQElucHV0KCkgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgLyoqXG4gICAqIEFuIGFycmF5IG9mIGRheSBpbmRleGVzICgwID0gc3VuZGF5LCAxID0gbW9uZGF5IGV0YykgdGhhdCBpbmRpY2F0ZSB3aGljaCBkYXlzIGFyZSB3ZWVrZW5kc1xuICAgKi9cbiAgQElucHV0KCkgd2Vla2VuZERheXM6IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBBbiBvdXRwdXQgdGhhdCB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHZpZXcgaXMgcmVuZGVyZWQgZm9yIHRoZSBjdXJyZW50IG1vbnRoLlxuICAgKiBJZiB5b3UgYWRkIHRoZSBgY3NzQ2xhc3NgIHByb3BlcnR5IHRvIGEgZGF5IGluIHRoZSBib2R5IGl0IHdpbGwgYWRkIHRoYXQgY2xhc3MgdG8gdGhlIGNlbGwgZWxlbWVudCBpbiB0aGUgdGVtcGxhdGVcbiAgICovXG4gIEBPdXRwdXQoKVxuICBiZWZvcmVWaWV3UmVuZGVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhck1vbnRoVmlld0JlZm9yZVJlbmRlckV2ZW50PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgZGF5IGNlbGwgaXMgY2xpY2tlZFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIGRheUNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBkYXk6IE1vbnRoVmlld0RheTtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSBldmVudCB0aXRsZSBpcyBjbGlja2VkXG4gICAqL1xuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICB9PigpO1xuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGhlYWRlciB3ZWVrIGRheSBpcyBjbGlja2VkLiBSZXR1cm5zIElTTyBkYXkgbnVtYmVyLlxuICAgKi9cbiAgQE91dHB1dCgpIGNvbHVtbkhlYWRlckNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBpc29EYXlOdW1iZXI6IG51bWJlcjtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQ7XG4gIH0+KCk7XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGFuIGV2ZW50IGlzIGRyYWdnZWQgYW5kIGRyb3BwZWRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBldmVudFRpbWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgQ2FsZW5kYXJNb250aFZpZXdFdmVudFRpbWVzQ2hhbmdlZEV2ZW50XG4gID4oKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29sdW1uSGVhZGVyczogV2Vla0RheVtdO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB2aWV3OiBNb250aFZpZXc7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG9wZW5Sb3dJbmRleDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBvcGVuRGF5OiBNb250aFZpZXdEYXk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeVJvd09mZnNldCA9IChpbmRleDogbnVtYmVyLCBvZmZzZXQ6IG51bWJlcikgPT5cbiAgICB0aGlzLnZpZXcuZGF5c1xuICAgICAgLnNsaWNlKG9mZnNldCwgdGhpcy52aWV3LnRvdGFsRGF5c1Zpc2libGVJbldlZWspXG4gICAgICAubWFwKGRheSA9PiBkYXkuZGF0ZS50b0lTT1N0cmluZygpKVxuICAgICAgLmpvaW4oJy0nKTtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgdHJhY2tCeURhdGUgPSAoaW5kZXg6IG51bWJlciwgZGF5OiBNb250aFZpZXdEYXkpID0+IGRheS5kYXRlLnRvSVNPU3RyaW5nKCk7XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByb3RlY3RlZCB1dGlsczogQ2FsZW5kYXJVdGlscyxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcsXG4gICAgcHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlclxuICApIHtcbiAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWZyZXNoKSB7XG4gICAgICB0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24gPSB0aGlzLnJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWZyZXNoQWxsKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlZnJlc2hIZWFkZXIgPVxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fCBjaGFuZ2VzLmV4Y2x1ZGVEYXlzIHx8IGNoYW5nZXMud2Vla2VuZERheXM7XG4gICAgY29uc3QgcmVmcmVzaEJvZHkgPVxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fFxuICAgICAgY2hhbmdlcy5ldmVudHMgfHxcbiAgICAgIGNoYW5nZXMuZXhjbHVkZURheXMgfHxcbiAgICAgIGNoYW5nZXMud2Vla2VuZERheXM7XG5cbiAgICBpZiAocmVmcmVzaEhlYWRlcikge1xuICAgICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuZXZlbnRzKSB7XG4gICAgICB2YWxpZGF0ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XG4gICAgfVxuXG4gICAgaWYgKHJlZnJlc2hCb2R5KSB7XG4gICAgICB0aGlzLnJlZnJlc2hCb2R5KCk7XG4gICAgfVxuXG4gICAgaWYgKHJlZnJlc2hIZWFkZXIgfHwgcmVmcmVzaEJvZHkpIHtcbiAgICAgIHRoaXMuZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLmFjdGl2ZURheUlzT3BlbiB8fFxuICAgICAgY2hhbmdlcy52aWV3RGF0ZSB8fFxuICAgICAgY2hhbmdlcy5ldmVudHMgfHxcbiAgICAgIGNoYW5nZXMuZXhjbHVkZURheXMgfHxcbiAgICAgIGNoYW5nZXMuYWN0aXZlRGF5XG4gICAgKSB7XG4gICAgICB0aGlzLmNoZWNrQWN0aXZlRGF5SXNPcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlZnJlc2hTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMucmVmcmVzaFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICB0b2dnbGVEYXlIaWdobGlnaHQoZXZlbnQ6IENhbGVuZGFyRXZlbnQsIGlzSGlnaGxpZ2h0ZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnZpZXcuZGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICBpZiAoaXNIaWdobGlnaHRlZCAmJiBkYXkuZXZlbnRzLmluZGV4T2YoZXZlbnQpID4gLTEpIHtcbiAgICAgICAgZGF5LmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgKGV2ZW50LmNvbG9yICYmIGV2ZW50LmNvbG9yLnNlY29uZGFyeSkgfHwgJyNEMUU4RkYnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVsZXRlIGRheS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZXZlbnREcm9wcGVkKFxuICAgIGRyb3BwZWRPbjogTW9udGhWaWV3RGF5LFxuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50LFxuICAgIGRyYWdnZWRGcm9tPzogTW9udGhWaWV3RGF5XG4gICk6IHZvaWQge1xuICAgIGlmIChkcm9wcGVkT24gIT09IGRyYWdnZWRGcm9tKSB7XG4gICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB0aGlzLmRhdGVBZGFwdGVyLmdldFllYXIoZHJvcHBlZE9uLmRhdGUpO1xuICAgICAgY29uc3QgbW9udGg6IG51bWJlciA9IHRoaXMuZGF0ZUFkYXB0ZXIuZ2V0TW9udGgoZHJvcHBlZE9uLmRhdGUpO1xuICAgICAgY29uc3QgZGF0ZTogbnVtYmVyID0gdGhpcy5kYXRlQWRhcHRlci5nZXREYXRlKGRyb3BwZWRPbi5kYXRlKTtcbiAgICAgIGNvbnN0IG5ld1N0YXJ0OiBEYXRlID0gdGhpcy5kYXRlQWRhcHRlci5zZXREYXRlKFxuICAgICAgICB0aGlzLmRhdGVBZGFwdGVyLnNldE1vbnRoKFxuICAgICAgICAgIHRoaXMuZGF0ZUFkYXB0ZXIuc2V0WWVhcihldmVudC5zdGFydCwgeWVhciksXG4gICAgICAgICAgbW9udGhcbiAgICAgICAgKSxcbiAgICAgICAgZGF0ZVxuICAgICAgKTtcbiAgICAgIGxldCBuZXdFbmQ6IERhdGU7XG4gICAgICBpZiAoZXZlbnQuZW5kKSB7XG4gICAgICAgIGNvbnN0IHNlY29uZHNEaWZmOiBudW1iZXIgPSB0aGlzLmRhdGVBZGFwdGVyLmRpZmZlcmVuY2VJblNlY29uZHMoXG4gICAgICAgICAgbmV3U3RhcnQsXG4gICAgICAgICAgZXZlbnQuc3RhcnRcbiAgICAgICAgKTtcbiAgICAgICAgbmV3RW5kID0gdGhpcy5kYXRlQWRhcHRlci5hZGRTZWNvbmRzKGV2ZW50LmVuZCwgc2Vjb25kc0RpZmYpO1xuICAgICAgfVxuICAgICAgdGhpcy5ldmVudFRpbWVzQ2hhbmdlZC5lbWl0KHtcbiAgICAgICAgZXZlbnQsXG4gICAgICAgIG5ld1N0YXJ0LFxuICAgICAgICBuZXdFbmQsXG4gICAgICAgIGRheTogZHJvcHBlZE9uLFxuICAgICAgICB0eXBlOiBDYWxlbmRhckV2ZW50VGltZXNDaGFuZ2VkRXZlbnRUeXBlLkRyb3BcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZWZyZXNoSGVhZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY29sdW1uSGVhZGVycyA9IHRoaXMudXRpbHMuZ2V0V2Vla1ZpZXdIZWFkZXIoe1xuICAgICAgdmlld0RhdGU6IHRoaXMudmlld0RhdGUsXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMud2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZWQ6IHRoaXMuZXhjbHVkZURheXMsXG4gICAgICB3ZWVrZW5kRGF5czogdGhpcy53ZWVrZW5kRGF5c1xuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlZnJlc2hCb2R5KCk6IHZvaWQge1xuICAgIHRoaXMudmlldyA9IHRoaXMudXRpbHMuZ2V0TW9udGhWaWV3KHtcbiAgICAgIGV2ZW50czogdGhpcy5ldmVudHMsXG4gICAgICB2aWV3RGF0ZTogdGhpcy52aWV3RGF0ZSxcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy53ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlZDogdGhpcy5leGNsdWRlRGF5cyxcbiAgICAgIHdlZWtlbmREYXlzOiB0aGlzLndlZWtlbmREYXlzXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2hlY2tBY3RpdmVEYXlJc09wZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZlRGF5SXNPcGVuID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBhY3RpdmVEYXkgPSB0aGlzLmFjdGl2ZURheSB8fCB0aGlzLnZpZXdEYXRlO1xuICAgICAgdGhpcy5vcGVuRGF5ID0gdGhpcy52aWV3LmRheXMuZmluZChkYXkgPT5cbiAgICAgICAgdGhpcy5kYXRlQWRhcHRlci5pc1NhbWVEYXkoZGF5LmRhdGUsIGFjdGl2ZURheSlcbiAgICAgICk7XG4gICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy52aWV3LmRheXMuaW5kZXhPZih0aGlzLm9wZW5EYXkpO1xuICAgICAgdGhpcy5vcGVuUm93SW5kZXggPVxuICAgICAgICBNYXRoLmZsb29yKGluZGV4IC8gdGhpcy52aWV3LnRvdGFsRGF5c1Zpc2libGVJbldlZWspICpcbiAgICAgICAgdGhpcy52aWV3LnRvdGFsRGF5c1Zpc2libGVJbldlZWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlblJvd0luZGV4ID0gbnVsbDtcbiAgICAgIHRoaXMub3BlbkRheSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlZnJlc2hBbGwoKTogdm9pZCB7XG4gICAgdGhpcy5yZWZyZXNoSGVhZGVyKCk7XG4gICAgdGhpcy5yZWZyZXNoQm9keSgpO1xuICAgIHRoaXMuZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTtcbiAgICB0aGlzLmNoZWNrQWN0aXZlRGF5SXNPcGVuKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZW1pdEJlZm9yZVZpZXdSZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY29sdW1uSGVhZGVycyAmJiB0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMuYmVmb3JlVmlld1JlbmRlci5lbWl0KHtcbiAgICAgICAgaGVhZGVyOiB0aGlzLmNvbHVtbkhlYWRlcnMsXG4gICAgICAgIGJvZHk6IHRoaXMudmlldy5kYXlzLFxuICAgICAgICBwZXJpb2Q6IHRoaXMudmlldy5wZXJpb2RcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19