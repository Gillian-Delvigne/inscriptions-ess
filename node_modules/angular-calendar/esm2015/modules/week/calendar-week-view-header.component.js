import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { trackByWeekDayHeaderDate } from '../common/util';
let CalendarWeekViewHeaderComponent = class CalendarWeekViewHeaderComponent {
    constructor() {
        this.dayHeaderClicked = new EventEmitter();
        this.eventDropped = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.trackByWeekDayHeaderDate = trackByWeekDayHeaderDate;
    }
};
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
        template: `
    <ng-template
      #defaultTemplate
      let-days="days"
      let-locale="locale"
      let-dayHeaderClicked="dayHeaderClicked"
      let-eventDropped="eventDropped"
      let-trackByWeekDayHeaderDate="trackByWeekDayHeaderDate"
      let-dragEnter="dragEnter"
    >
      <div class="cal-day-headers" role="row">
        <div
          class="cal-header"
          *ngFor="let day of days; trackBy: trackByWeekDayHeaderDate"
          [class.cal-past]="day.isPast"
          [class.cal-today]="day.isToday"
          [class.cal-future]="day.isFuture"
          [class.cal-weekend]="day.isWeekend"
          [ngClass]="day.cssClass"
          (mwlClick)="dayHeaderClicked.emit({ day: day, sourceEvent: $event })"
          mwlDroppable
          dragOverClass="cal-drag-over"
          (drop)="
            eventDropped.emit({
              event: $event.dropData.event,
              newStart: day.date
            })
          "
          (dragEnter)="dragEnter.emit({ date: day.date })"
          tabindex="0"
          role="columnheader"
        >
          <b>{{ day.date | calendarDate: 'weekViewColumnHeader':locale }}</b
          ><br />
          <span>{{
            day.date | calendarDate: 'weekViewColumnSubHeader':locale
          }}</span>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        days: days,
        locale: locale,
        dayHeaderClicked: dayHeaderClicked,
        eventDropped: eventDropped,
        dragEnter: dragEnter,
        trackByWeekDayHeaderDate: trackByWeekDayHeaderDate
      }"
    >
    </ng-template>
  `
    })
], CalendarWeekViewHeaderComponent);
export { CalendarWeekViewHeaderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWstdmlldy1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQTBEMUQsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUF4RDVDO1FBK0RZLHFCQUFnQixHQUFHLElBQUksWUFBWSxFQUd6QyxDQUFDO1FBRUssaUJBQVksR0FBRyxJQUFJLFlBQVksRUFHckMsQ0FBQztRQUVLLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUV6RCw2QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztJQUN0RCxDQUFDO0NBQUEsQ0FBQTtBQW5CVTtJQUFSLEtBQUssRUFBRTs7NkRBQWlCO0FBRWhCO0lBQVIsS0FBSyxFQUFFOzsrREFBZ0I7QUFFZjtJQUFSLEtBQUssRUFBRTtzQ0FBaUIsV0FBVzt1RUFBTTtBQUVoQztJQUFULE1BQU0sRUFBRTs7eUVBR0o7QUFFSztJQUFULE1BQU0sRUFBRTs7cUVBR0o7QUFFSztJQUFULE1BQU0sRUFBRTs7a0VBQWdEO0FBakI5QywrQkFBK0I7SUF4RDNDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwrQkFBK0I7UUFDekMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RUO0tBQ0YsQ0FBQztHQUNXLCtCQUErQixDQW9CM0M7U0FwQlksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCwgV2Vla0RheSB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZSB9IGZyb20gJy4uL2NvbW1vbi91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLXdlZWstdmlldy1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWRheXM9XCJkYXlzXCJcbiAgICAgIGxldC1sb2NhbGU9XCJsb2NhbGVcIlxuICAgICAgbGV0LWRheUhlYWRlckNsaWNrZWQ9XCJkYXlIZWFkZXJDbGlja2VkXCJcbiAgICAgIGxldC1ldmVudERyb3BwZWQ9XCJldmVudERyb3BwZWRcIlxuICAgICAgbGV0LXRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZT1cInRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZVwiXG4gICAgICBsZXQtZHJhZ0VudGVyPVwiZHJhZ0VudGVyXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FsLWRheS1oZWFkZXJzXCIgcm9sZT1cInJvd1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjYWwtaGVhZGVyXCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIGRheXM7IHRyYWNrQnk6IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC1wYXN0XT1cImRheS5pc1Bhc3RcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtdG9kYXldPVwiZGF5LmlzVG9kYXlcIlxuICAgICAgICAgIFtjbGFzcy5jYWwtZnV0dXJlXT1cImRheS5pc0Z1dHVyZVwiXG4gICAgICAgICAgW2NsYXNzLmNhbC13ZWVrZW5kXT1cImRheS5pc1dlZWtlbmRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImRheS5jc3NDbGFzc1wiXG4gICAgICAgICAgKG13bENsaWNrKT1cImRheUhlYWRlckNsaWNrZWQuZW1pdCh7IGRheTogZGF5LCBzb3VyY2VFdmVudDogJGV2ZW50IH0pXCJcbiAgICAgICAgICBtd2xEcm9wcGFibGVcbiAgICAgICAgICBkcmFnT3ZlckNsYXNzPVwiY2FsLWRyYWctb3ZlclwiXG4gICAgICAgICAgKGRyb3ApPVwiXG4gICAgICAgICAgICBldmVudERyb3BwZWQuZW1pdCh7XG4gICAgICAgICAgICAgIGV2ZW50OiAkZXZlbnQuZHJvcERhdGEuZXZlbnQsXG4gICAgICAgICAgICAgIG5ld1N0YXJ0OiBkYXkuZGF0ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBcIlxuICAgICAgICAgIChkcmFnRW50ZXIpPVwiZHJhZ0VudGVyLmVtaXQoeyBkYXRlOiBkYXkuZGF0ZSB9KVwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICByb2xlPVwiY29sdW1uaGVhZGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxiPnt7IGRheS5kYXRlIHwgY2FsZW5kYXJEYXRlOiAnd2Vla1ZpZXdDb2x1bW5IZWFkZXInOmxvY2FsZSB9fTwvYlxuICAgICAgICAgID48YnIgLz5cbiAgICAgICAgICA8c3Bhbj57e1xuICAgICAgICAgICAgZGF5LmRhdGUgfCBjYWxlbmRhckRhdGU6ICd3ZWVrVmlld0NvbHVtblN1YkhlYWRlcic6bG9jYWxlXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBkYXlzOiBkYXlzLFxuICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgZGF5SGVhZGVyQ2xpY2tlZDogZGF5SGVhZGVyQ2xpY2tlZCxcbiAgICAgICAgZXZlbnREcm9wcGVkOiBldmVudERyb3BwZWQsXG4gICAgICAgIGRyYWdFbnRlcjogZHJhZ0VudGVyLFxuICAgICAgICB0cmFja0J5V2Vla0RheUhlYWRlckRhdGU6IHRyYWNrQnlXZWVrRGF5SGVhZGVyRGF0ZVxuICAgICAgfVwiXG4gICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGRheXM6IFdlZWtEYXlbXTtcblxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAT3V0cHV0KCkgZGF5SGVhZGVyQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIGRheTogV2Vla0RheTtcbiAgICBzb3VyY2VFdmVudDogTW91c2VFdmVudDtcbiAgfT4oKTtcblxuICBAT3V0cHV0KCkgZXZlbnREcm9wcGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gICAgbmV3U3RhcnQ6IERhdGU7XG4gIH0+KCk7XG5cbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8eyBkYXRlOiBEYXRlIH0+KCk7XG5cbiAgdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlID0gdHJhY2tCeVdlZWtEYXlIZWFkZXJEYXRlO1xufVxuIl19