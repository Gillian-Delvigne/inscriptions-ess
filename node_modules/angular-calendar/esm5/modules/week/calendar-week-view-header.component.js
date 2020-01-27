import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { trackByWeekDayHeaderDate } from '../common/util';
var CalendarWeekViewHeaderComponent = /** @class */ (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], CalendarWeekViewHeaderComponent.prototype, "dragEnter", void 0);
    CalendarWeekViewHeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'mwl-calendar-week-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\"\n      let-trackByWeekDayHeaderDate=\"trackByWeekDayHeaderDate\"\n      let-dragEnter=\"dragEnter\"\n    >\n      <div class=\"cal-day-headers\" role=\"row\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days; trackBy: trackByWeekDayHeaderDate\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({ day: day, sourceEvent: $event })\"\n          mwlDroppable\n          dragOverClass=\"cal-drag-over\"\n          (drop)=\"\n            eventDropped.emit({\n              event: $event.dropData.event,\n              newStart: day.date\n            })\n          \"\n          (dragEnter)=\"dragEnter.emit({ date: day.date })\"\n          tabindex=\"0\"\n          role=\"columnheader\"\n        >\n          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b\n          ><br />\n          <span>{{\n            day.date | calendarDate: 'weekViewColumnSubHeader':locale\n          }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        days: days,\n        locale: locale,\n        dayHeaderClicked: dayHeaderClicked,\n        eventDropped: eventDropped,\n        dragEnter: dragEnter,\n        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate\n      }\"\n    >\n    </ng-template>\n  "
        })
    ], CalendarWeekViewHeaderComponent);
    return CalendarWeekViewHeaderComponent;
}());
export { CalendarWeekViewHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQTBEMUQ7SUF4REE7UUErRFkscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBR3pDLENBQUM7UUFFSyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUdyQyxDQUFDO1FBRUssY0FBUyxHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBRXpELDZCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQ3RELENBQUM7SUFuQlU7UUFBUixLQUFLLEVBQUU7O2lFQUFpQjtJQUVoQjtRQUFSLEtBQUssRUFBRTs7bUVBQWdCO0lBRWY7UUFBUixLQUFLLEVBQUU7MENBQWlCLFdBQVc7MkVBQU07SUFFaEM7UUFBVCxNQUFNLEVBQUU7OzZFQUdKO0lBRUs7UUFBVCxNQUFNLEVBQUU7O3lFQUdKO0lBRUs7UUFBVCxNQUFNLEVBQUU7O3NFQUFnRDtJQWpCOUMsK0JBQStCO1FBeEQzQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0JBQStCO1lBQ3pDLFFBQVEsRUFBRSw0dURBb0RUO1NBQ0YsQ0FBQztPQUNXLCtCQUErQixDQW9CM0M7SUFBRCxzQ0FBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQsIFdlZWtEYXkgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyB0cmFja0J5V2Vla0RheUhlYWRlckRhdGUgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ213bC1jYWxlbmRhci13ZWVrLXZpZXctaGVhZGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGVcbiAgICAgICNkZWZhdWx0VGVtcGxhdGVcbiAgICAgIGxldC1kYXlzPVwiZGF5c1wiXG4gICAgICBsZXQtbG9jYWxlPVwibG9jYWxlXCJcbiAgICAgIGxldC1kYXlIZWFkZXJDbGlja2VkPVwiZGF5SGVhZGVyQ2xpY2tlZFwiXG4gICAgICBsZXQtZXZlbnREcm9wcGVkPVwiZXZlbnREcm9wcGVkXCJcbiAgICAgIGxldC10cmFja0J5V2Vla0RheUhlYWRlckRhdGU9XCJ0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcIlxuICAgICAgbGV0LWRyYWdFbnRlcj1cImRyYWdFbnRlclwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1kYXktaGVhZGVyc1wiIHJvbGU9XCJyb3dcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY2FsLWhlYWRlclwiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGRheSBvZiBkYXlzOyB0cmFja0J5OiB0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtcGFzdF09XCJkYXkuaXNQYXN0XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLXRvZGF5XT1cImRheS5pc1RvZGF5XCJcbiAgICAgICAgICBbY2xhc3MuY2FsLWZ1dHVyZV09XCJkYXkuaXNGdXR1cmVcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtd2Vla2VuZF09XCJkYXkuaXNXZWVrZW5kXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJkYXkuY3NzQ2xhc3NcIlxuICAgICAgICAgIChtd2xDbGljayk9XCJkYXlIZWFkZXJDbGlja2VkLmVtaXQoeyBkYXk6IGRheSwgc291cmNlRXZlbnQ6ICRldmVudCB9KVwiXG4gICAgICAgICAgbXdsRHJvcHBhYmxlXG4gICAgICAgICAgZHJhZ092ZXJDbGFzcz1cImNhbC1kcmFnLW92ZXJcIlxuICAgICAgICAgIChkcm9wKT1cIlxuICAgICAgICAgICAgZXZlbnREcm9wcGVkLmVtaXQoe1xuICAgICAgICAgICAgICBldmVudDogJGV2ZW50LmRyb3BEYXRhLmV2ZW50LFxuICAgICAgICAgICAgICBuZXdTdGFydDogZGF5LmRhdGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXCJcbiAgICAgICAgICAoZHJhZ0VudGVyKT1cImRyYWdFbnRlci5lbWl0KHsgZGF0ZTogZGF5LmRhdGUgfSlcIlxuICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8Yj57eyBkYXkuZGF0ZSB8IGNhbGVuZGFyRGF0ZTogJ3dlZWtWaWV3Q29sdW1uSGVhZGVyJzpsb2NhbGUgfX08L2JcbiAgICAgICAgICA+PGJyIC8+XG4gICAgICAgICAgPHNwYW4+e3tcbiAgICAgICAgICAgIGRheS5kYXRlIHwgY2FsZW5kYXJEYXRlOiAnd2Vla1ZpZXdDb2x1bW5TdWJIZWFkZXInOmxvY2FsZVxuICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZGF5czogZGF5cyxcbiAgICAgICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgICAgIGRheUhlYWRlckNsaWNrZWQ6IGRheUhlYWRlckNsaWNrZWQsXG4gICAgICAgIGV2ZW50RHJvcHBlZDogZXZlbnREcm9wcGVkLFxuICAgICAgICBkcmFnRW50ZXI6IGRyYWdFbnRlcixcbiAgICAgICAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlOiB0cmFja0J5V2Vla0RheUhlYWRlckRhdGVcbiAgICAgIH1cIlxuICAgID5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyV2Vla1ZpZXdIZWFkZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBkYXlzOiBXZWVrRGF5W107XG5cbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQE91dHB1dCgpIGRheUhlYWRlckNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICBkYXk6IFdlZWtEYXk7XG4gICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQ7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpIGV2ZW50RHJvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuICAgIG5ld1N0YXJ0OiBEYXRlO1xuICB9PigpO1xuXG4gIEBPdXRwdXQoKSBkcmFnRW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZSB9PigpO1xuXG4gIHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSA9IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZTtcbn1cbiJdfQ==