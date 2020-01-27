import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { formatDate, I18nPluralPipe } from '@angular/common';
/**
 * This class is responsible for adding accessibility to the calendar.
 * You may override any of its methods via angulars DI to suit your requirements.
 * For example:
 *
 * ```typescript
 * import { A11yParams, CalendarA11y } from 'angular-calendar';
 * import { formatDate, I18nPluralPipe } from '@angular/common';
 * import { Injectable } from '@angular/core';
 *
 * // adding your own a11y params
 * export interface CustomA11yParams extends A11yParams {
 *   isDrSuess?: boolean;
 * }
 *
 * @Injectable()
 * export class CustomCalendarA11y extends CalendarA11y {
 *   constructor(protected i18nPlural: I18nPluralPipe) {
 *     super(i18nPlural);
 *   }
 *
 *   // overriding a function
 *   public openDayEventsLandmark({ date, locale, isDrSuess }: CustomA11yParams): string {
 *     if (isDrSuess) {
 *       return `
 *         ${formatDate(date, 'EEEE MMMM d', locale)}
 *          Today you are you! That is truer than true! There is no one alive
 *          who is you-er than you!
 *       `;
 *     }
 *   }
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *  provide: CalendarA11y,
 *  useClass: CustomCalendarA11y
 * }]
 * ```
 */
let CalendarA11y = class CalendarA11y {
    constructor(i18nPlural) {
        this.i18nPlural = i18nPlural;
    }
    /**
     * Aria label for the badges/date of a cell
     * @example: `Saturday October 19 1 event click to expand`
     */
    monthCell({ day, locale }) {
        if (day.badgeTotal > 0) {
            return `
        ${formatDate(day.date, 'EEEE MMMM d', locale)},
        ${this.i18nPlural.transform(day.badgeTotal, {
                '=0': 'No events',
                '=1': 'One event',
                other: '# events'
            })},
         click to expand
      `;
        }
        else {
            return `${formatDate(day.date, 'EEEE MMMM d', locale)}`;
        }
    }
    /**
     * Aria label for the open day events start landmark
     * @example: `Saturday October 19 expanded view`
     */
    openDayEventsLandmark({ date, locale }) {
        return `
      Beginning of expanded view for ${formatDate(date, 'EEEE MMMM dd', locale)}
    `;
    }
    /**
     * Aria label for alert that a day in the month view was expanded
     * @example: `Saturday October 19 expanded`
     */
    openDayEventsAlert({ date, locale }) {
        return `${formatDate(date, 'EEEE MMMM dd', locale)} expanded`;
    }
    /**
     * Descriptive aria label for an event
     * @example: `Saturday October 19th, Scott's Pizza Party, from 11:00am to 5:00pm`
     */
    eventDescription({ event, locale }) {
        if (event.allDay === true) {
            return this.allDayEventDescription({ event, locale });
        }
        const aria = `
      ${formatDate(event.start, 'EEEE MMMM dd', locale)},
      ${event.title}, from ${formatDate(event.start, 'hh:mm a', locale)}
    `;
        if (event.end) {
            return aria + ` to ${formatDate(event.end, 'hh:mm a', locale)}`;
        }
        return aria;
    }
    /**
     * Descriptive aria label for an all day event
     * @example:
     * `Scott's Party, event spans multiple days: start time October 19 5:00pm, no stop time`
     */
    allDayEventDescription({ event, locale }) {
        const aria = `
      ${event.title}, event spans multiple days:
      start time ${formatDate(event.start, 'MMMM dd hh:mm a', locale)}
    `;
        if (event.end) {
            return (aria + `, stop time ${formatDate(event.end, 'MMMM d hh:mm a', locale)}`);
        }
        return aria + `, no stop time`;
    }
    /**
     * Aria label for the calendar event actions icons
     * @returns 'Edit' for fa-pencil icons, and 'Delete' for fa-times icons
     */
    actionButtonLabel({ action }) {
        return action.a11yLabel;
    }
    /**
     * @returns {number} Tab index to be given to month cells
     */
    monthCellTabIndex() {
        return 0;
    }
    /**
     * @returns true if the events inside the month cell should be aria-hidden
     */
    hideMonthCellEvents() {
        return true;
    }
    /**
     * @returns true if event titles should be aria-hidden (global)
     */
    hideEventTitle() {
        return true;
    }
    /**
     * @returns true if hour segments in the week view should be aria-hidden
     */
    hideWeekHourSegment() {
        return true;
    }
    /**
     * @returns true if hour segments in the day view should be aria-hidden
     */
    hideDayHourSegment() {
        return true;
    }
};
CalendarA11y.ctorParameters = () => [
    { type: I18nPluralPipe }
];
CalendarA11y = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [I18nPluralPipe])
], CalendarA11y);
export { CalendarA11y };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2FsZW5kYXIvIiwic291cmNlcyI6WyJtb2R1bGVzL2NvbW1vbi9jYWxlbmRhci1hMTF5LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVDRztBQUVILElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFDdkIsWUFBc0IsVUFBMEI7UUFBMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7SUFBRyxDQUFDO0lBRXBEOzs7T0FHRztJQUNJLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQWM7UUFDMUMsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPO1VBQ0gsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQztVQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUMxQyxJQUFJLEVBQUUsV0FBVztnQkFDakIsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxVQUFVO2FBQ2xCLENBQUM7O09BRUgsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0kscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFjO1FBQ3ZELE9BQU87dUNBQzRCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQztLQUMxRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBYztRQUNwRCxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFjO1FBQ25ELElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN2RDtRQUVELE1BQU0sSUFBSSxHQUFHO1FBQ1QsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQztRQUMvQyxLQUFLLENBQUMsS0FBSyxVQUFVLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUM7S0FDbEUsQ0FBQztRQUNGLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLE9BQU8sSUFBSSxHQUFHLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7U0FDakU7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksc0JBQXNCLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFjO1FBQ3pELE1BQU0sSUFBSSxHQUFHO1FBQ1QsS0FBSyxDQUFDLEtBQUs7bUJBQ0EsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDO0tBQ2hFLENBQUM7UUFDRixJQUFJLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLENBQ0wsSUFBSSxHQUFHLGVBQWUsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FDeEUsQ0FBQztTQUNIO1FBQ0QsT0FBTyxJQUFJLEdBQUcsZ0JBQWdCLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlCQUFpQixDQUFDLEVBQUUsTUFBTSxFQUFjO1FBQzdDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQkFBaUI7UUFDdEIsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxtQkFBbUI7UUFDeEIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUJBQW1CO1FBQ3hCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQWtCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7O1lBdkhtQyxjQUFjOztBQURyQyxZQUFZO0lBRHhCLFVBQVUsRUFBRTs2Q0FFdUIsY0FBYztHQURyQyxZQUFZLENBd0h4QjtTQXhIWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgSTE4blBsdXJhbFBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQTExeVBhcmFtcyB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgaXMgcmVzcG9uc2libGUgZm9yIGFkZGluZyBhY2Nlc3NpYmlsaXR5IHRvIHRoZSBjYWxlbmRhci5cbiAqIFlvdSBtYXkgb3ZlcnJpZGUgYW55IG9mIGl0cyBtZXRob2RzIHZpYSBhbmd1bGFycyBESSB0byBzdWl0IHlvdXIgcmVxdWlyZW1lbnRzLlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQTExeVBhcmFtcywgQ2FsZW5kYXJBMTF5IH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG4gKiBpbXBvcnQgeyBmb3JtYXREYXRlLCBJMThuUGx1cmFsUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG4gKiBpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogLy8gYWRkaW5nIHlvdXIgb3duIGExMXkgcGFyYW1zXG4gKiBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbUExMXlQYXJhbXMgZXh0ZW5kcyBBMTF5UGFyYW1zIHtcbiAqICAgaXNEclN1ZXNzPzogYm9vbGVhbjtcbiAqIH1cbiAqXG4gKiBASW5qZWN0YWJsZSgpXG4gKiBleHBvcnQgY2xhc3MgQ3VzdG9tQ2FsZW5kYXJBMTF5IGV4dGVuZHMgQ2FsZW5kYXJBMTF5IHtcbiAqICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGkxOG5QbHVyYWw6IEkxOG5QbHVyYWxQaXBlKSB7XG4gKiAgICAgc3VwZXIoaTE4blBsdXJhbCk7XG4gKiAgIH1cbiAqXG4gKiAgIC8vIG92ZXJyaWRpbmcgYSBmdW5jdGlvblxuICogICBwdWJsaWMgb3BlbkRheUV2ZW50c0xhbmRtYXJrKHsgZGF0ZSwgbG9jYWxlLCBpc0RyU3Vlc3MgfTogQ3VzdG9tQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gKiAgICAgaWYgKGlzRHJTdWVzcykge1xuICogICAgICAgcmV0dXJuIGBcbiAqICAgICAgICAgJHtmb3JtYXREYXRlKGRhdGUsICdFRUVFIE1NTU0gZCcsIGxvY2FsZSl9XG4gKiAgICAgICAgICBUb2RheSB5b3UgYXJlIHlvdSEgVGhhdCBpcyB0cnVlciB0aGFuIHRydWUhIFRoZXJlIGlzIG5vIG9uZSBhbGl2ZVxuICogICAgICAgICAgd2hvIGlzIHlvdS1lciB0aGFuIHlvdSFcbiAqICAgICAgIGA7XG4gKiAgICAgfVxuICogICB9XG4gKiB9XG4gKlxuICogLy8gaW4geW91ciBjb21wb25lbnQgdGhhdCB1c2VzIHRoZSBjYWxlbmRhclxuICogcHJvdmlkZXJzOiBbe1xuICogIHByb3ZpZGU6IENhbGVuZGFyQTExeSxcbiAqICB1c2VDbGFzczogQ3VzdG9tQ2FsZW5kYXJBMTF5XG4gKiB9XVxuICogYGBgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckExMXkge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaTE4blBsdXJhbDogSTE4blBsdXJhbFBpcGUpIHt9XG5cbiAgLyoqXG4gICAqIEFyaWEgbGFiZWwgZm9yIHRoZSBiYWRnZXMvZGF0ZSBvZiBhIGNlbGxcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5IDEgZXZlbnQgY2xpY2sgdG8gZXhwYW5kYFxuICAgKi9cbiAgcHVibGljIG1vbnRoQ2VsbCh7IGRheSwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIGlmIChkYXkuYmFkZ2VUb3RhbCA+IDApIHtcbiAgICAgIHJldHVybiBgXG4gICAgICAgICR7Zm9ybWF0RGF0ZShkYXkuZGF0ZSwgJ0VFRUUgTU1NTSBkJywgbG9jYWxlKX0sXG4gICAgICAgICR7dGhpcy5pMThuUGx1cmFsLnRyYW5zZm9ybShkYXkuYmFkZ2VUb3RhbCwge1xuICAgICAgICAgICc9MCc6ICdObyBldmVudHMnLFxuICAgICAgICAgICc9MSc6ICdPbmUgZXZlbnQnLFxuICAgICAgICAgIG90aGVyOiAnIyBldmVudHMnXG4gICAgICAgIH0pfSxcbiAgICAgICAgIGNsaWNrIHRvIGV4cGFuZFxuICAgICAgYDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGAke2Zvcm1hdERhdGUoZGF5LmRhdGUsICdFRUVFIE1NTU0gZCcsIGxvY2FsZSl9YDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXJpYSBsYWJlbCBmb3IgdGhlIG9wZW4gZGF5IGV2ZW50cyBzdGFydCBsYW5kbWFya1xuICAgKiBAZXhhbXBsZTogYFNhdHVyZGF5IE9jdG9iZXIgMTkgZXhwYW5kZWQgdmlld2BcbiAgICovXG4gIHB1YmxpYyBvcGVuRGF5RXZlbnRzTGFuZG1hcmsoeyBkYXRlLCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBcbiAgICAgIEJlZ2lubmluZyBvZiBleHBhbmRlZCB2aWV3IGZvciAke2Zvcm1hdERhdGUoZGF0ZSwgJ0VFRUUgTU1NTSBkZCcsIGxvY2FsZSl9XG4gICAgYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcmlhIGxhYmVsIGZvciBhbGVydCB0aGF0IGEgZGF5IGluIHRoZSBtb250aCB2aWV3IHdhcyBleHBhbmRlZFxuICAgKiBAZXhhbXBsZTogYFNhdHVyZGF5IE9jdG9iZXIgMTkgZXhwYW5kZWRgXG4gICAqL1xuICBwdWJsaWMgb3BlbkRheUV2ZW50c0FsZXJ0KHsgZGF0ZSwgbG9jYWxlIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHtmb3JtYXREYXRlKGRhdGUsICdFRUVFIE1NTU0gZGQnLCBsb2NhbGUpfSBleHBhbmRlZGA7XG4gIH1cblxuICAvKipcbiAgICogRGVzY3JpcHRpdmUgYXJpYSBsYWJlbCBmb3IgYW4gZXZlbnRcbiAgICogQGV4YW1wbGU6IGBTYXR1cmRheSBPY3RvYmVyIDE5dGgsIFNjb3R0J3MgUGl6emEgUGFydHksIGZyb20gMTE6MDBhbSB0byA1OjAwcG1gXG4gICAqL1xuICBwdWJsaWMgZXZlbnREZXNjcmlwdGlvbih7IGV2ZW50LCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgaWYgKGV2ZW50LmFsbERheSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYWxsRGF5RXZlbnREZXNjcmlwdGlvbih7IGV2ZW50LCBsb2NhbGUgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYXJpYSA9IGBcbiAgICAgICR7Zm9ybWF0RGF0ZShldmVudC5zdGFydCwgJ0VFRUUgTU1NTSBkZCcsIGxvY2FsZSl9LFxuICAgICAgJHtldmVudC50aXRsZX0sIGZyb20gJHtmb3JtYXREYXRlKGV2ZW50LnN0YXJ0LCAnaGg6bW0gYScsIGxvY2FsZSl9XG4gICAgYDtcbiAgICBpZiAoZXZlbnQuZW5kKSB7XG4gICAgICByZXR1cm4gYXJpYSArIGAgdG8gJHtmb3JtYXREYXRlKGV2ZW50LmVuZCwgJ2hoOm1tIGEnLCBsb2NhbGUpfWA7XG4gICAgfVxuICAgIHJldHVybiBhcmlhO1xuICB9XG5cbiAgLyoqXG4gICAqIERlc2NyaXB0aXZlIGFyaWEgbGFiZWwgZm9yIGFuIGFsbCBkYXkgZXZlbnRcbiAgICogQGV4YW1wbGU6XG4gICAqIGBTY290dCdzIFBhcnR5LCBldmVudCBzcGFucyBtdWx0aXBsZSBkYXlzOiBzdGFydCB0aW1lIE9jdG9iZXIgMTkgNTowMHBtLCBubyBzdG9wIHRpbWVgXG4gICAqL1xuICBwdWJsaWMgYWxsRGF5RXZlbnREZXNjcmlwdGlvbih7IGV2ZW50LCBsb2NhbGUgfTogQTExeVBhcmFtcyk6IHN0cmluZyB7XG4gICAgY29uc3QgYXJpYSA9IGBcbiAgICAgICR7ZXZlbnQudGl0bGV9LCBldmVudCBzcGFucyBtdWx0aXBsZSBkYXlzOlxuICAgICAgc3RhcnQgdGltZSAke2Zvcm1hdERhdGUoZXZlbnQuc3RhcnQsICdNTU1NIGRkIGhoOm1tIGEnLCBsb2NhbGUpfVxuICAgIGA7XG4gICAgaWYgKGV2ZW50LmVuZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgYXJpYSArIGAsIHN0b3AgdGltZSAke2Zvcm1hdERhdGUoZXZlbnQuZW5kLCAnTU1NTSBkIGhoOm1tIGEnLCBsb2NhbGUpfWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBhcmlhICsgYCwgbm8gc3RvcCB0aW1lYDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcmlhIGxhYmVsIGZvciB0aGUgY2FsZW5kYXIgZXZlbnQgYWN0aW9ucyBpY29uc1xuICAgKiBAcmV0dXJucyAnRWRpdCcgZm9yIGZhLXBlbmNpbCBpY29ucywgYW5kICdEZWxldGUnIGZvciBmYS10aW1lcyBpY29uc1xuICAgKi9cbiAgcHVibGljIGFjdGlvbkJ1dHRvbkxhYmVsKHsgYWN0aW9uIH06IEExMXlQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBhY3Rpb24uYTExeUxhYmVsO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRhYiBpbmRleCB0byBiZSBnaXZlbiB0byBtb250aCBjZWxsc1xuICAgKi9cbiAgcHVibGljIG1vbnRoQ2VsbFRhYkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiB0aGUgZXZlbnRzIGluc2lkZSB0aGUgbW9udGggY2VsbCBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICovXG4gIHB1YmxpYyBoaWRlTW9udGhDZWxsRXZlbnRzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgZXZlbnQgdGl0bGVzIHNob3VsZCBiZSBhcmlhLWhpZGRlbiAoZ2xvYmFsKVxuICAgKi9cbiAgcHVibGljIGhpZGVFdmVudFRpdGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHRydWUgaWYgaG91ciBzZWdtZW50cyBpbiB0aGUgd2VlayB2aWV3IHNob3VsZCBiZSBhcmlhLWhpZGRlblxuICAgKi9cbiAgcHVibGljIGhpZGVXZWVrSG91clNlZ21lbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBob3VyIHNlZ21lbnRzIGluIHRoZSBkYXkgdmlldyBzaG91bGQgYmUgYXJpYS1oaWRkZW5cbiAgICovXG4gIHB1YmxpYyBoaWRlRGF5SG91clNlZ21lbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiJdfQ==