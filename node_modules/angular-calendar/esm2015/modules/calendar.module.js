var CalendarModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CalendarCommonModule, CalendarEventTitleFormatter, CalendarDateFormatter, CalendarA11y } from './common/calendar-common.module';
import { CalendarMonthModule } from './month/calendar-month.module';
import { CalendarWeekModule } from './week/calendar-week.module';
import { CalendarDayModule } from './day/calendar-day.module';
import { CalendarUtils } from './common/calendar-utils.provider';
export * from './common/calendar-common.module';
export * from './month/calendar-month.module';
export * from './week/calendar-week.module';
export * from './day/calendar-day.module';
/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * @NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
let CalendarModule = CalendarModule_1 = class CalendarModule {
    static forRoot(dateAdapter, config = {}) {
        return {
            ngModule: CalendarModule_1,
            providers: [
                dateAdapter,
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || CalendarUtils,
                config.a11y || CalendarA11y
            ]
        };
    }
};
CalendarModule = CalendarModule_1 = tslib_1.__decorate([
    NgModule({
        imports: [
            CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule
        ],
        exports: [
            CalendarCommonModule,
            CalendarMonthModule,
            CalendarWeekModule,
            CalendarDayModule
        ]
    })
], CalendarModule);
export { CalendarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jYWxlbmRhci8iLCJzb3VyY2VzIjpbIm1vZHVsZXMvY2FsZW5kYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBaUMsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUNMLG9CQUFvQixFQUVwQiwyQkFBMkIsRUFDM0IscUJBQXFCLEVBQ3JCLFlBQVksRUFDYixNQUFNLGlDQUFpQyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVqRSxjQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGNBQWMsK0JBQStCLENBQUM7QUFDOUMsY0FBYyw2QkFBNkIsQ0FBQztBQUM1QyxjQUFjLDJCQUEyQixDQUFDO0FBRTFDOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBZUgsSUFBYSxjQUFjLHNCQUEzQixNQUFhLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FDWixXQUFxQixFQUNyQixTQUErQixFQUFFO1FBRWpDLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsTUFBTSxDQUFDLG1CQUFtQixJQUFJLDJCQUEyQjtnQkFDekQsTUFBTSxDQUFDLGFBQWEsSUFBSSxxQkFBcUI7Z0JBQzdDLE1BQU0sQ0FBQyxLQUFLLElBQUksYUFBYTtnQkFDN0IsTUFBTSxDQUFDLElBQUksSUFBSSxZQUFZO2FBQzVCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBaEJZLGNBQWM7SUFkMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsaUJBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsaUJBQWlCO1NBQ2xCO0tBQ0YsQ0FBQztHQUNXLGNBQWMsQ0FnQjFCO1NBaEJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICBDYWxlbmRhck1vZHVsZUNvbmZpZyxcbiAgQ2FsZW5kYXJFdmVudFRpdGxlRm9ybWF0dGVyLFxuICBDYWxlbmRhckRhdGVGb3JtYXR0ZXIsXG4gIENhbGVuZGFyQTExeVxufSBmcm9tICcuL2NvbW1vbi9jYWxlbmRhci1jb21tb24ubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyTW9udGhNb2R1bGUgfSBmcm9tICcuL21vbnRoL2NhbGVuZGFyLW1vbnRoLm1vZHVsZSc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtNb2R1bGUgfSBmcm9tICcuL3dlZWsvY2FsZW5kYXItd2Vlay5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJEYXlNb2R1bGUgfSBmcm9tICcuL2RheS9jYWxlbmRhci1kYXkubW9kdWxlJztcbmltcG9ydCB7IENhbGVuZGFyVXRpbHMgfSBmcm9tICcuL2NvbW1vbi9jYWxlbmRhci11dGlscy5wcm92aWRlcic7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tb250aC9jYWxlbmRhci1tb250aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF5L2NhbGVuZGFyLWRheS5tb2R1bGUnO1xuXG4vKipcbiAqIFRoZSBtYWluIG1vZHVsZSBvZiB0aGlzIGxpYnJhcnkuIEV4YW1wbGUgdXNhZ2U6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ2FsZW5kZXJNb2R1bGUgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbiAqXG4gKiBATmdNb2R1bGUoe1xuICogICBpbXBvcnRzOiBbXG4gKiAgICAgQ2FsZW5kZXJNb2R1bGUuZm9yUm9vdCgpXG4gKiAgIF1cbiAqIH0pXG4gKiBjbGFzcyBNeU1vZHVsZSB7fVxuICogYGBgXG4gKlxuICovXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ2FsZW5kYXJDb21tb25Nb2R1bGUsXG4gICAgQ2FsZW5kYXJNb250aE1vZHVsZSxcbiAgICBDYWxlbmRhcldlZWtNb2R1bGUsXG4gICAgQ2FsZW5kYXJEYXlNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlLFxuICAgIENhbGVuZGFyTW9udGhNb2R1bGUsXG4gICAgQ2FsZW5kYXJXZWVrTW9kdWxlLFxuICAgIENhbGVuZGFyRGF5TW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBkYXRlQWRhcHRlcjogUHJvdmlkZXIsXG4gICAgY29uZmlnOiBDYWxlbmRhck1vZHVsZUNvbmZpZyA9IHt9XG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FsZW5kYXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgZGF0ZUFkYXB0ZXIsXG4gICAgICAgIGNvbmZpZy5ldmVudFRpdGxlRm9ybWF0dGVyIHx8IENhbGVuZGFyRXZlbnRUaXRsZUZvcm1hdHRlcixcbiAgICAgICAgY29uZmlnLmRhdGVGb3JtYXR0ZXIgfHwgQ2FsZW5kYXJEYXRlRm9ybWF0dGVyLFxuICAgICAgICBjb25maWcudXRpbHMgfHwgQ2FsZW5kYXJVdGlscyxcbiAgICAgICAgY29uZmlnLmExMXkgfHwgQ2FsZW5kYXJBMTF5XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19