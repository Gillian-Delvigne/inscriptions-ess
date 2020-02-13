import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { isWithinThreshold, trackByEventId } from '../common/util';
export const collapseAnimation = trigger('collapse', [
    state('void', style({
        height: 0,
        overflow: 'hidden',
        'padding-top': 0,
        'padding-bottom': 0
    })),
    state('*', style({
        height: '*',
        overflow: 'hidden',
        'padding-top': '*',
        'padding-bottom': '*'
    })),
    transition('* => void', animate('150ms ease-out')),
    transition('void => *', animate('150ms ease-in'))
]);
let CalendarOpenDayEventsComponent = class CalendarOpenDayEventsComponent {
    constructor() {
        this.isOpen = false;
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
        this.validateDrag = isWithinThreshold;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CalendarOpenDayEventsComponent.prototype, "locale", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], CalendarOpenDayEventsComponent.prototype, "events", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", TemplateRef)
], CalendarOpenDayEventsComponent.prototype, "eventActionsTemplate", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Date)
], CalendarOpenDayEventsComponent.prototype, "date", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
CalendarOpenDayEventsComponent = tslib_1.__decorate([
    Component({
        selector: 'mwl-calendar-open-day-events',
        template: `
    <ng-template
      #defaultTemplate
      let-events="events"
      let-eventClicked="eventClicked"
      let-isOpen="isOpen"
      let-trackByEventId="trackByEventId"
      let-validateDrag="validateDrag"
    >
      <div
        class="cal-open-day-events"
        [@collapse]
        *ngIf="isOpen"
        role="application"
      >
        <span
          tabindex="-1"
          role="alert"
          [attr.aria-label]="
            { date: date, locale: locale } | calendarA11y: 'openDayEventsAlert'
          "
        ></span>
        <span
          tabindex="0"
          role="landmark"
          [attr.aria-label]="
            { date: date, locale: locale }
              | calendarA11y: 'openDayEventsLandmark'
          "
        ></span>
        <div
          *ngFor="let event of events; trackBy: trackByEventId"
          [ngClass]="event?.cssClass"
          mwlDraggable
          [class.cal-draggable]="event.draggable"
          dragActiveClass="cal-drag-active"
          [dropData]="{ event: event }"
          [dragAxis]="{ x: event.draggable, y: event.draggable }"
          [validateDrag]="validateDrag"
        >
          <span
            class="cal-event"
            [ngStyle]="{ backgroundColor: event.color?.primary }"
          >
          </span>
          &ngsp;
          <mwl-calendar-event-title
            [event]="event"
            [customTemplate]="eventTitleTemplate"
            view="month"
            (mwlClick)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            (mwlKeydownEnter)="
              eventClicked.emit({ event: event, sourceEvent: $event })
            "
            tabindex="0"
            [attr.aria-label]="
              { event: event, locale: locale }
                | calendarA11y: 'eventDescription'
            "
          >
          </mwl-calendar-event-title>
          &ngsp;
          <mwl-calendar-event-actions
            [event]="event"
            [customTemplate]="eventActionsTemplate"
          >
          </mwl-calendar-event-actions>
        </div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        events: events,
        eventClicked: eventClicked,
        isOpen: isOpen,
        trackByEventId: trackByEventId,
        validateDrag: validateDrag
      }"
    >
    </ng-template>
  `,
        animations: [collapseAnimation]
    })
], CalendarOpenDayEventsComponent);
export { CalendarOpenDayEventsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2FsZW5kYXIvIiwic291cmNlcyI6WyJtb2R1bGVzL21vbnRoL2NhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUVSLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5FLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUE2QixPQUFPLENBQUMsVUFBVSxFQUFFO0lBQzdFLEtBQUssQ0FDSCxNQUFNLEVBQ04sS0FBSyxDQUFDO1FBQ0osTUFBTSxFQUFFLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixhQUFhLEVBQUUsQ0FBQztRQUNoQixnQkFBZ0IsRUFBRSxDQUFDO0tBQ3BCLENBQUMsQ0FDSDtJQUNELEtBQUssQ0FDSCxHQUFHLEVBQ0gsS0FBSyxDQUFDO1FBQ0osTUFBTSxFQUFFLEdBQUc7UUFDWCxRQUFRLEVBQUUsUUFBUTtRQUNsQixhQUFhLEVBQUUsR0FBRztRQUNsQixnQkFBZ0IsRUFBRSxHQUFHO0tBQ3RCLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Q0FDbEQsQ0FBQyxDQUFDO0FBMEZILElBQWEsOEJBQThCLEdBQTNDLE1BQWEsOEJBQThCO0lBeEYzQztRQTJGVyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBYWpDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBRzNCLENBQUM7UUFFTCxtQkFBYyxHQUFHLGNBQWMsQ0FBQztRQUVoQyxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO0lBQ25DLENBQUM7Q0FBQSxDQUFBO0FBdkJVO0lBQVIsS0FBSyxFQUFFOzs4REFBZ0I7QUFFZjtJQUFSLEtBQUssRUFBRTs7OERBQXlCO0FBRXhCO0lBQVIsS0FBSyxFQUFFOzs4REFBeUI7QUFFeEI7SUFBUixLQUFLLEVBQUU7c0NBQWlCLFdBQVc7c0VBQU07QUFFakM7SUFBUixLQUFLLEVBQUU7c0NBQXFCLFdBQVc7MEVBQU07QUFFckM7SUFBUixLQUFLLEVBQUU7c0NBQXVCLFdBQVc7NEVBQU07QUFFdkM7SUFBUixLQUFLLEVBQUU7c0NBQU8sSUFBSTs0REFBQztBQUdwQjtJQURDLE1BQU0sRUFBRTs7b0VBSUo7QUFuQk0sOEJBQThCO0lBeEYxQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRlQ7UUFDRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUNoQyxDQUFDO0dBQ1csOEJBQThCLENBd0IxQztTQXhCWSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgc3RhdGUsXG4gIHRyYW5zaXRpb24sXG4gIGFuaW1hdGUsXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyBpc1dpdGhpblRocmVzaG9sZCwgdHJhY2tCeUV2ZW50SWQgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignY29sbGFwc2UnLCBbXG4gIHN0YXRlKFxuICAgICd2b2lkJyxcbiAgICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAncGFkZGluZy10b3AnOiAwLFxuICAgICAgJ3BhZGRpbmctYm90dG9tJzogMFxuICAgIH0pXG4gICksXG4gIHN0YXRlKFxuICAgICcqJyxcbiAgICBzdHlsZSh7XG4gICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICdwYWRkaW5nLXRvcCc6ICcqJyxcbiAgICAgICdwYWRkaW5nLWJvdHRvbSc6ICcqJ1xuICAgIH0pXG4gICksXG4gIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzE1MG1zIGVhc2Utb3V0JykpLFxuICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBhbmltYXRlKCcxNTBtcyBlYXNlLWluJykpXG5dKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnRzPVwiZXZlbnRzXCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIlxuICAgICAgbGV0LWlzT3Blbj1cImlzT3BlblwiXG4gICAgICBsZXQtdHJhY2tCeUV2ZW50SWQ9XCJ0cmFja0J5RXZlbnRJZFwiXG4gICAgICBsZXQtdmFsaWRhdGVEcmFnPVwidmFsaWRhdGVEcmFnXCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiY2FsLW9wZW4tZGF5LWV2ZW50c1wiXG4gICAgICAgIFtAY29sbGFwc2VdXG4gICAgICAgICpuZ0lmPVwiaXNPcGVuXCJcbiAgICAgICAgcm9sZT1cImFwcGxpY2F0aW9uXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgICB7IGRhdGU6IGRhdGUsIGxvY2FsZTogbG9jYWxlIH0gfCBjYWxlbmRhckExMXk6ICdvcGVuRGF5RXZlbnRzQWxlcnQnXG4gICAgICAgICAgXCJcbiAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIHJvbGU9XCJsYW5kbWFya1wiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgIHsgZGF0ZTogZGF0ZSwgbG9jYWxlOiBsb2NhbGUgfVxuICAgICAgICAgICAgICB8IGNhbGVuZGFyQTExeTogJ29wZW5EYXlFdmVudHNMYW5kbWFyaydcbiAgICAgICAgICBcIlxuICAgICAgICA+PC9zcGFuPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGV2ZW50czsgdHJhY2tCeTogdHJhY2tCeUV2ZW50SWRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImV2ZW50Py5jc3NDbGFzc1wiXG4gICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgW2NsYXNzLmNhbC1kcmFnZ2FibGVdPVwiZXZlbnQuZHJhZ2dhYmxlXCJcbiAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgIFtkcm9wRGF0YV09XCJ7IGV2ZW50OiBldmVudCB9XCJcbiAgICAgICAgICBbZHJhZ0F4aXNdPVwieyB4OiBldmVudC5kcmFnZ2FibGUsIHk6IGV2ZW50LmRyYWdnYWJsZSB9XCJcbiAgICAgICAgICBbdmFsaWRhdGVEcmFnXT1cInZhbGlkYXRlRHJhZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJjYWwtZXZlbnRcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwieyBiYWNrZ3JvdW5kQ29sb3I6IGV2ZW50LmNvbG9yPy5wcmltYXJ5IH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgJm5nc3A7XG4gICAgICAgICAgPG13bC1jYWxlbmRhci1ldmVudC10aXRsZVxuICAgICAgICAgICAgW2V2ZW50XT1cImV2ZW50XCJcbiAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudFRpdGxlVGVtcGxhdGVcIlxuICAgICAgICAgICAgdmlldz1cIm1vbnRoXCJcbiAgICAgICAgICAgIChtd2xDbGljayk9XCJcbiAgICAgICAgICAgICAgZXZlbnRDbGlja2VkLmVtaXQoeyBldmVudDogZXZlbnQsIHNvdXJjZUV2ZW50OiAkZXZlbnQgfSlcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAobXdsS2V5ZG93bkVudGVyKT1cIlxuICAgICAgICAgICAgICBldmVudENsaWNrZWQuZW1pdCh7IGV2ZW50OiBldmVudCwgc291cmNlRXZlbnQ6ICRldmVudCB9KVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgICAgICB7IGV2ZW50OiBldmVudCwgbG9jYWxlOiBsb2NhbGUgfVxuICAgICAgICAgICAgICAgIHwgY2FsZW5kYXJBMTF5OiAnZXZlbnREZXNjcmlwdGlvbidcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLWV2ZW50LXRpdGxlPlxuICAgICAgICAgICZuZ3NwO1xuICAgICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9uc1xuICAgICAgICAgICAgW2V2ZW50XT1cImV2ZW50XCJcbiAgICAgICAgICAgIFtjdXN0b21UZW1wbGF0ZV09XCJldmVudEFjdGlvbnNUZW1wbGF0ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgIDwvbXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8bmctdGVtcGxhdGVcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xuICAgICAgICBldmVudHM6IGV2ZW50cyxcbiAgICAgICAgZXZlbnRDbGlja2VkOiBldmVudENsaWNrZWQsXG4gICAgICAgIGlzT3BlbjogaXNPcGVuLFxuICAgICAgICB0cmFja0J5RXZlbnRJZDogdHJhY2tCeUV2ZW50SWQsXG4gICAgICAgIHZhbGlkYXRlRHJhZzogdmFsaWRhdGVEcmFnXG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgYW5pbWF0aW9uczogW2NvbGxhcHNlQW5pbWF0aW9uXVxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck9wZW5EYXlFdmVudHNDb21wb25lbnQge1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcblxuICBASW5wdXQoKSBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBldmVudHM6IENhbGVuZGFyRXZlbnRbXTtcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKSBldmVudFRpdGxlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXZlbnRBY3Rpb25zVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcblxuICBAT3V0cHV0KClcbiAgZXZlbnRDbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gICAgc291cmNlRXZlbnQ6IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50O1xuICB9PigpO1xuXG4gIHRyYWNrQnlFdmVudElkID0gdHJhY2tCeUV2ZW50SWQ7XG5cbiAgdmFsaWRhdGVEcmFnID0gaXNXaXRoaW5UaHJlc2hvbGQ7XG59XG4iXX0=