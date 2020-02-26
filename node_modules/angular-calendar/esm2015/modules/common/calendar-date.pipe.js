import * as tslib_1 from "tslib";
import { Pipe, LOCALE_ID, Inject } from '@angular/core';
import { CalendarDateFormatter } from './calendar-date-formatter.provider';
/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
let CalendarDatePipe = class CalendarDatePipe {
    constructor(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    transform(date, method, locale = this.locale, weekStartsOn = 0, excludeDays = [], daysInWeek) {
        if (typeof this.dateFormatter[method] === 'undefined') {
            const allowedMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(CalendarDateFormatter.prototype)).filter(iMethod => iMethod !== 'constructor');
            throw new Error(`${method} is not a valid date formatter. Can only be one of ${allowedMethods.join(', ')}`);
        }
        return this.dateFormatter[method]({
            date,
            locale,
            weekStartsOn,
            excludeDays,
            daysInWeek
        });
    }
};
CalendarDatePipe.ctorParameters = () => [
    { type: CalendarDateFormatter },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CalendarDatePipe = tslib_1.__decorate([
    Pipe({
        name: 'calendarDate'
    }),
    tslib_1.__param(1, Inject(LOCALE_ID)),
    tslib_1.__metadata("design:paramtypes", [CalendarDateFormatter, String])
], CalendarDatePipe);
export { CalendarDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NhbGVuZGFyLWRhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUzRTs7Ozs7O0dBTUc7QUFJSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUNVLGFBQW9DLEVBQ2pCLE1BQWM7UUFEakMsa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDeEMsQ0FBQztJQUVKLFNBQVMsQ0FDUCxJQUFVLEVBQ1YsTUFBYyxFQUNkLFNBQWlCLElBQUksQ0FBQyxNQUFNLEVBQzVCLGVBQXVCLENBQUMsRUFDeEIsY0FBd0IsRUFBRSxFQUMxQixVQUFtQjtRQUVuQixJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDckQsTUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUMvQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUN2RCxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxhQUFhLENBQUMsQ0FBQztZQUMvQyxNQUFNLElBQUksS0FBSyxDQUNiLEdBQUcsTUFBTSxzREFBc0QsY0FBYyxDQUFDLElBQUksQ0FDaEYsSUFBSSxDQUNMLEVBQUUsQ0FDSixDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEMsSUFBSTtZQUNKLE1BQU07WUFDTixZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7U0FDWCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUE5QjBCLHFCQUFxQjt5Q0FDM0MsTUFBTSxTQUFDLFNBQVM7O0FBSFIsZ0JBQWdCO0lBSDVCLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSxjQUFjO0tBQ3JCLENBQUM7SUFJRyxtQkFBQSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7NkNBREsscUJBQXFCO0dBRm5DLGdCQUFnQixDQWdDNUI7U0FoQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgTE9DQUxFX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIucHJvdmlkZXInO1xuXG4vKipcbiAqIFRoaXMgcGlwZSBpcyBwcmltYXJpbHkgZm9yIHJlbmRlcmluZyB0aGUgY3VycmVudCB2aWV3IHRpdGxlLiBFeGFtcGxlIHVzYWdlOlxuICogYGBgdHlwZXNjcmlwdFxuICogLy8gd2hlcmUgYHZpZXdEYXRlYCBpcyBhIGBEYXRlYCBhbmQgdmlldyBpcyBgJ21vbnRoJyB8ICd3ZWVrJyB8ICdkYXknYFxuICoge3sgdmlld0RhdGUgfCBjYWxlbmRhckRhdGU6KHZpZXcgKyAnVmlld1RpdGxlJyk6J2VuJyB9fVxuICogYGBgXG4gKi9cbkBQaXBlKHtcbiAgbmFtZTogJ2NhbGVuZGFyRGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGVGb3JtYXR0ZXI6IENhbGVuZGFyRGF0ZUZvcm1hdHRlcixcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZ1xuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGRhdGU6IERhdGUsXG4gICAgbWV0aG9kOiBzdHJpbmcsXG4gICAgbG9jYWxlOiBzdHJpbmcgPSB0aGlzLmxvY2FsZSxcbiAgICB3ZWVrU3RhcnRzT246IG51bWJlciA9IDAsXG4gICAgZXhjbHVkZURheXM6IG51bWJlcltdID0gW10sXG4gICAgZGF5c0luV2Vlaz86IG51bWJlclxuICApOiBzdHJpbmcge1xuICAgIGlmICh0eXBlb2YgdGhpcy5kYXRlRm9ybWF0dGVyW21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBhbGxvd2VkTWV0aG9kcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKFxuICAgICAgICBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLnByb3RvdHlwZSlcbiAgICAgICkuZmlsdGVyKGlNZXRob2QgPT4gaU1ldGhvZCAhPT0gJ2NvbnN0cnVjdG9yJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGAke21ldGhvZH0gaXMgbm90IGEgdmFsaWQgZGF0ZSBmb3JtYXR0ZXIuIENhbiBvbmx5IGJlIG9uZSBvZiAke2FsbG93ZWRNZXRob2RzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfWBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXJbbWV0aG9kXSh7XG4gICAgICBkYXRlLFxuICAgICAgbG9jYWxlLFxuICAgICAgd2Vla1N0YXJ0c09uLFxuICAgICAgZXhjbHVkZURheXMsXG4gICAgICBkYXlzSW5XZWVrXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==