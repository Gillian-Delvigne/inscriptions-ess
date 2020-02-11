import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DateAdapter } from '../../date-adapters/date-adapter';
import { getWeekViewPeriod } from './util';
/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
let CalendarNativeDateFormatter = class CalendarNativeDateFormatter {
    constructor(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    /**
     * The month view header week day labels
     */
    monthViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The month view cell day number
     */
    monthViewDayNumber({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    }
    /**
     * The month view title
     */
    monthViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    }
    /**
     * The week view header week day labels
     */
    weekViewColumnHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    }
    /**
     * The week view sub header day and month labels
     */
    weekViewColumnSubHeader({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    }
    /**
     * The week view title
     */
    weekViewTitle({ date, locale, weekStartsOn, excludeDays, daysInWeek }) {
        const { viewStart, viewEnd } = getWeekViewPeriod(this.dateAdapter, date, weekStartsOn, excludeDays, daysInWeek);
        const format = (dateToFormat, showYear) => new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short',
            year: showYear ? 'numeric' : undefined
        }).format(dateToFormat);
        return `${format(viewStart, viewStart.getUTCFullYear() !== viewEnd.getUTCFullYear())} - ${format(viewEnd, true)}`;
    }
    /**
     * The time formatting down the left hand side of the week view
     */
    weekViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The time formatting down the left hand side of the day view
     */
    dayViewHour({ date, locale }) {
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    }
    /**
     * The day view title
     */
    dayViewTitle({ date, locale }) {
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    }
};
CalendarNativeDateFormatter.ctorParameters = () => [
    { type: DateAdapter }
];
CalendarNativeDateFormatter = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [DateAdapter])
], CalendarNativeDateFormatter);
export { CalendarNativeDateFormatter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItbmF0aXZlLWRhdGUtZm9ybWF0dGVyLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY29tbW9uL2NhbGVuZGFyLW5hdGl2ZS1kYXRlLWZvcm1hdHRlci5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTNDOzs7O0dBSUc7QUFFSCxJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQUV0QyxZQUFzQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFbEQ7O09BRUc7SUFDSSxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQXVCO1FBQ2hFLE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQXVCO1FBQzdELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUF1QjtRQUN6RCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsSUFBSSxFQUFFLFNBQVM7WUFDZixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0JBQW9CLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUF1QjtRQUMvRCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOztPQUVHO0lBQ0ksdUJBQXVCLENBQUMsRUFDN0IsSUFBSSxFQUNKLE1BQU0sRUFDYztRQUNwQixPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDckMsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLLEVBQUUsT0FBTztTQUNmLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksYUFBYSxDQUFDLEVBQ25CLElBQUksRUFDSixNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxVQUFVLEVBQ1U7UUFDcEIsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxpQkFBaUIsQ0FDOUMsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxFQUNKLFlBQVksRUFDWixXQUFXLEVBQ1gsVUFBVSxDQUNYLENBQUM7UUFFRixNQUFNLE1BQU0sR0FBRyxDQUFDLFlBQWtCLEVBQUUsUUFBaUIsRUFBRSxFQUFFLENBQ3ZELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7WUFDOUIsR0FBRyxFQUFFLFNBQVM7WUFDZCxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUN2QyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFCLE9BQU8sR0FBRyxNQUFNLENBQ2QsU0FBUyxFQUNULFNBQVMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQ3hELE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNJLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQXVCO1FBQ3ZELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQ7O09BRUc7SUFDSSxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUF1QjtRQUN0RCxPQUFPLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVEOztPQUVHO0lBQ0ksWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBdUI7UUFDdkQsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFO1lBQ3JDLEdBQUcsRUFBRSxTQUFTO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixJQUFJLEVBQUUsU0FBUztZQUNmLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQztDQUNGLENBQUE7O1lBdEdvQyxXQUFXOztBQUZuQywyQkFBMkI7SUFEdkMsVUFBVSxFQUFFOzZDQUd3QixXQUFXO0dBRm5DLDJCQUEyQixDQXdHdkM7U0F4R1ksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2FsZW5kYXJEYXRlRm9ybWF0dGVySW50ZXJmYWNlLFxuICBEYXRlRm9ybWF0dGVyUGFyYW1zXG59IGZyb20gJy4vY2FsZW5kYXItZGF0ZS1mb3JtYXR0ZXIuaW50ZXJmYWNlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVBZGFwdGVyIH0gZnJvbSAnLi4vLi4vZGF0ZS1hZGFwdGVycy9kYXRlLWFkYXB0ZXInO1xuaW1wb3J0IHsgZ2V0V2Vla1ZpZXdQZXJpb2QgfSBmcm9tICcuL3V0aWwnO1xuXG4vKipcbiAqIFRoaXMgd2lsbCB1c2UgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0ludGxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5JbnRsPC9hPiBBUEkgdG8gZG8gYWxsIGRhdGUgZm9ybWF0dGluZy5cbiAqXG4gKiBZb3Ugd2lsbCBuZWVkIHRvIGluY2x1ZGUgYSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2FuZHllYXJuc2hhdy9JbnRsLmpzL1wiPnBvbHlmaWxsPC9hPiBmb3Igb2xkZXIgYnJvd3NlcnMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhck5hdGl2ZURhdGVGb3JtYXR0ZXJcbiAgaW1wbGVtZW50cyBDYWxlbmRhckRhdGVGb3JtYXR0ZXJJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZGF0ZUFkYXB0ZXI6IERhdGVBZGFwdGVyKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyBoZWFkZXIgd2VlayBkYXkgbGFiZWxzXG4gICAqL1xuICBwdWJsaWMgbW9udGhWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbW9udGggdmlldyBjZWxsIGRheSBudW1iZXJcbiAgICovXG4gIHB1YmxpYyBtb250aFZpZXdEYXlOdW1iZXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBkYXk6ICdudW1lcmljJyB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIG1vbnRoIHZpZXcgdGl0bGVcbiAgICovXG4gIHB1YmxpYyBtb250aFZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ2xvbmcnXG4gICAgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB3ZWVrIHZpZXcgaGVhZGVyIHdlZWsgZGF5IGxhYmVsc1xuICAgKi9cbiAgcHVibGljIHdlZWtWaWV3Q29sdW1uSGVhZGVyKHsgZGF0ZSwgbG9jYWxlIH06IERhdGVGb3JtYXR0ZXJQYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHsgd2Vla2RheTogJ2xvbmcnIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IHN1YiBoZWFkZXIgZGF5IGFuZCBtb250aCBsYWJlbHNcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0NvbHVtblN1YkhlYWRlcih7XG4gICAgZGF0ZSxcbiAgICBsb2NhbGVcbiAgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ3Nob3J0J1xuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgd2VlayB2aWV3IHRpdGxlXG4gICAqL1xuICBwdWJsaWMgd2Vla1ZpZXdUaXRsZSh7XG4gICAgZGF0ZSxcbiAgICBsb2NhbGUsXG4gICAgd2Vla1N0YXJ0c09uLFxuICAgIGV4Y2x1ZGVEYXlzLFxuICAgIGRheXNJbldlZWtcbiAgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgY29uc3QgeyB2aWV3U3RhcnQsIHZpZXdFbmQgfSA9IGdldFdlZWtWaWV3UGVyaW9kKFxuICAgICAgdGhpcy5kYXRlQWRhcHRlcixcbiAgICAgIGRhdGUsXG4gICAgICB3ZWVrU3RhcnRzT24sXG4gICAgICBleGNsdWRlRGF5cyxcbiAgICAgIGRheXNJbldlZWtcbiAgICApO1xuXG4gICAgY29uc3QgZm9ybWF0ID0gKGRhdGVUb0Zvcm1hdDogRGF0ZSwgc2hvd1llYXI6IGJvb2xlYW4pID0+XG4gICAgICBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICB5ZWFyOiBzaG93WWVhciA/ICdudW1lcmljJyA6IHVuZGVmaW5lZFxuICAgICAgfSkuZm9ybWF0KGRhdGVUb0Zvcm1hdCk7XG5cbiAgICByZXR1cm4gYCR7Zm9ybWF0KFxuICAgICAgdmlld1N0YXJ0LFxuICAgICAgdmlld1N0YXJ0LmdldFVUQ0Z1bGxZZWFyKCkgIT09IHZpZXdFbmQuZ2V0VVRDRnVsbFllYXIoKVxuICAgICl9IC0gJHtmb3JtYXQodmlld0VuZCwgdHJ1ZSl9YDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdGltZSBmb3JtYXR0aW5nIGRvd24gdGhlIGxlZnQgaGFuZCBzaWRlIG9mIHRoZSB3ZWVrIHZpZXdcbiAgICovXG4gIHB1YmxpYyB3ZWVrVmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBob3VyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lIGZvcm1hdHRpbmcgZG93biB0aGUgbGVmdCBoYW5kIHNpZGUgb2YgdGhlIGRheSB2aWV3XG4gICAqL1xuICBwdWJsaWMgZGF5Vmlld0hvdXIoeyBkYXRlLCBsb2NhbGUgfTogRGF0ZUZvcm1hdHRlclBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwgeyBob3VyOiAnbnVtZXJpYycgfSkuZm9ybWF0KGRhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBkYXkgdmlldyB0aXRsZVxuICAgKi9cbiAgcHVibGljIGRheVZpZXdUaXRsZSh7IGRhdGUsIGxvY2FsZSB9OiBEYXRlRm9ybWF0dGVyUGFyYW1zKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICB3ZWVrZGF5OiAnbG9uZydcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gIH1cbn1cbiJdfQ==