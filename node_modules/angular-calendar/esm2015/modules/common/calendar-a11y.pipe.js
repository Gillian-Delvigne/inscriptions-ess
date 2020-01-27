import * as tslib_1 from "tslib";
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import { CalendarA11y } from './calendar-a11y.provider';
/**
 * This pipe is primarily for rendering aria labels. Example usage:
 * ```typescript
 * // where `myEvent` is a `CalendarEvent` and myLocale is a locale identifier
 * {{ { event: myEvent, locale: myLocale } | calendarA11y: 'eventDescription' }}
 * ```
 */
let CalendarA11yPipe = class CalendarA11yPipe {
    constructor(calendarA11y, locale) {
        this.calendarA11y = calendarA11y;
        this.locale = locale;
    }
    transform(a11yParams, method) {
        a11yParams.locale = a11yParams.locale || this.locale;
        if (typeof this.calendarA11y[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarA11y.prototype)).filter(iMethod => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid a11y method. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.calendarA11y[method](a11yParams);
    }
};
CalendarA11yPipe.ctorParameters = () => [
    { type: CalendarA11y },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CalendarA11yPipe = tslib_1.__decorate([
    Pipe({
        name: 'calendarA11y'
    }),
    tslib_1.__param(1, Inject(LOCALE_ID)),
    tslib_1.__metadata("design:paramtypes", [CalendarA11y, String])
], CalendarA11yPipe);
export { CalendarA11yPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItYTExeS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWExMXkucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHeEQ7Ozs7OztHQU1HO0FBSUgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFDVSxZQUEwQixFQUNQLE1BQWM7UUFEakMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDUCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3hDLENBQUM7SUFFSixTQUFTLENBQUMsVUFBc0IsRUFBRSxNQUFjO1FBQzlDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JELElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUNwRCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQy9DLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUM5QyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksS0FBSyxDQUNiLEdBQUcsTUFBTSxtREFBbUQsY0FBYyxDQUFDLElBQUksQ0FDN0UsSUFBSSxDQUNMLEVBQUUsQ0FDSixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGLENBQUE7O1lBbEJ5QixZQUFZO3lDQUNqQyxNQUFNLFNBQUMsU0FBUzs7QUFIUixnQkFBZ0I7SUFINUIsSUFBSSxDQUFDO1FBQ0osSUFBSSxFQUFFLGNBQWM7S0FDckIsQ0FBQztJQUlHLG1CQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs2Q0FESSxZQUFZO0dBRnpCLGdCQUFnQixDQW9CNUI7U0FwQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyQTExeSB9IGZyb20gJy4vY2FsZW5kYXItYTExeS5wcm92aWRlcic7XG5pbXBvcnQgeyBBMTF5UGFyYW1zIH0gZnJvbSAnLi9jYWxlbmRhci1hMTF5LmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhpcyBwaXBlIGlzIHByaW1hcmlseSBmb3IgcmVuZGVyaW5nIGFyaWEgbGFiZWxzLiBFeGFtcGxlIHVzYWdlOlxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gd2hlcmUgYG15RXZlbnRgIGlzIGEgYENhbGVuZGFyRXZlbnRgIGFuZCBteUxvY2FsZSBpcyBhIGxvY2FsZSBpZGVudGlmaWVyXG4gKiB7eyB7IGV2ZW50OiBteUV2ZW50LCBsb2NhbGU6IG15TG9jYWxlIH0gfCBjYWxlbmRhckExMXk6ICdldmVudERlc2NyaXB0aW9uJyB9fVxuICogYGBgXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ2NhbGVuZGFyQTExeSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJBMTF5UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhbGVuZGFyQTExeTogQ2FsZW5kYXJBMTF5LFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwcml2YXRlIGxvY2FsZTogc3RyaW5nXG4gICkge31cblxuICB0cmFuc2Zvcm0oYTExeVBhcmFtczogQTExeVBhcmFtcywgbWV0aG9kOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGExMXlQYXJhbXMubG9jYWxlID0gYTExeVBhcmFtcy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmNhbGVuZGFyQTExeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgYWxsb3dlZE1ldGhvZHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhcbiAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKENhbGVuZGFyQTExeS5wcm90b3R5cGUpXG4gICAgICApLmZpbHRlcihpTWV0aG9kID0+IGlNZXRob2QgIT09ICdjb25zdHJ1Y3RvcicpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgJHttZXRob2R9IGlzIG5vdCBhIHZhbGlkIGExMXkgbWV0aG9kLiBDYW4gb25seSBiZSBvbmUgb2YgJHthbGxvd2VkTWV0aG9kcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX1gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jYWxlbmRhckExMXlbbWV0aG9kXShhMTF5UGFyYW1zKTtcbiAgfVxufVxuIl19