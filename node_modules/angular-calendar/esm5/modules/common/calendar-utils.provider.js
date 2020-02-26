import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { getMonthView, getWeekViewHeader, getWeekView } from 'calendar-utils';
import { DateAdapter } from '../../date-adapters/date-adapter';
var CalendarUtils = /** @class */ (function () {
    function CalendarUtils(dateAdapter) {
        this.dateAdapter = dateAdapter;
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return getMonthView(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return getWeekViewHeader(this.dateAdapter, args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return getWeekView(this.dateAdapter, args);
    };
    CalendarUtils.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    CalendarUtils = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [DateAdapter])
    ], CalendarUtils);
    return CalendarUtils;
}());
export { CalendarUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdXRpbHMucHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItdXRpbHMucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQU9MLFlBQVksRUFDWixpQkFBaUIsRUFDakIsV0FBVyxFQUNaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9EO0lBQ0UsdUJBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQztJQUVsRCxvQ0FBWSxHQUFaLFVBQWEsSUFBc0I7UUFDakMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLElBQTJCO1FBQzNDLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLElBQXFCO1FBQy9CLE9BQU8sV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBWmtDLFdBQVc7O0lBRG5DLGFBQWE7UUFEekIsVUFBVSxFQUFFO2lEQUV3QixXQUFXO09BRG5DLGFBQWEsQ0FjekI7SUFBRCxvQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBHZXRNb250aFZpZXdBcmdzLFxuICBNb250aFZpZXcsXG4gIEdldFdlZWtWaWV3SGVhZGVyQXJncyxcbiAgV2Vla0RheSxcbiAgR2V0V2Vla1ZpZXdBcmdzLFxuICBXZWVrVmlldyxcbiAgZ2V0TW9udGhWaWV3LFxuICBnZXRXZWVrVmlld0hlYWRlcixcbiAgZ2V0V2Vla1ZpZXdcbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9kYXRlLWFkYXB0ZXJzL2RhdGUtYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclV0aWxzIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGRhdGVBZGFwdGVyOiBEYXRlQWRhcHRlcikge31cblxuICBnZXRNb250aFZpZXcoYXJnczogR2V0TW9udGhWaWV3QXJncyk6IE1vbnRoVmlldyB7XG4gICAgcmV0dXJuIGdldE1vbnRoVmlldyh0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxuXG4gIGdldFdlZWtWaWV3SGVhZGVyKGFyZ3M6IEdldFdlZWtWaWV3SGVhZGVyQXJncyk6IFdlZWtEYXlbXSB7XG4gICAgcmV0dXJuIGdldFdlZWtWaWV3SGVhZGVyKHRoaXMuZGF0ZUFkYXB0ZXIsIGFyZ3MpO1xuICB9XG5cbiAgZ2V0V2Vla1ZpZXcoYXJnczogR2V0V2Vla1ZpZXdBcmdzKTogV2Vla1ZpZXcge1xuICAgIHJldHVybiBnZXRXZWVrVmlldyh0aGlzLmRhdGVBZGFwdGVyLCBhcmdzKTtcbiAgfVxufVxuIl19