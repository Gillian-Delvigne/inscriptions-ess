import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CalendarWeekViewComponent } from './calendar-week-view.component';
import { CalendarWeekViewHeaderComponent } from './calendar-week-view-header.component';
import { CalendarWeekViewEventComponent } from './calendar-week-view-event.component';
import { CalendarCommonModule } from '../common/calendar-common.module';
import { CalendarWeekViewHourSegmentComponent } from './calendar-week-view-hour-segment.component';
import { CalendarWeekViewCurrentTimeMarkerComponent } from './calendar-week-view-current-time-marker.component';
export { CalendarWeekViewComponent } from './calendar-week-view.component';
export { getWeekViewPeriod } from '../common/util';
var CalendarWeekModule = /** @class */ (function () {
    function CalendarWeekModule() {
    }
    CalendarWeekModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                ResizableModule,
                DragAndDropModule,
                CalendarCommonModule
            ],
            declarations: [
                CalendarWeekViewComponent,
                CalendarWeekViewHeaderComponent,
                CalendarWeekViewEventComponent,
                CalendarWeekViewHourSegmentComponent,
                CalendarWeekViewCurrentTimeMarkerComponent
            ],
            exports: [
                ResizableModule,
                DragAndDropModule,
                CalendarWeekViewComponent,
                CalendarWeekViewHeaderComponent,
                CalendarWeekViewEventComponent,
                CalendarWeekViewHourSegmentComponent,
                CalendarWeekViewCurrentTimeMarkerComponent
            ]
        })
    ], CalendarWeekModule);
    return CalendarWeekModule;
}());
export { CalendarWeekModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItd2Vlay5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy93ZWVrL2NhbGVuZGFyLXdlZWsubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkcsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFFaEgsT0FBTyxFQUNMLHlCQUF5QixFQUUxQixNQUFNLGdDQUFnQyxDQUFDO0FBTXhDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBMEJuRDtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBeEI5QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsb0JBQW9CO2FBQ3JCO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHlCQUF5QjtnQkFDekIsK0JBQStCO2dCQUMvQiw4QkFBOEI7Z0JBQzlCLG9DQUFvQztnQkFDcEMsMENBQTBDO2FBQzNDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQix5QkFBeUI7Z0JBQ3pCLCtCQUErQjtnQkFDL0IsOEJBQThCO2dCQUM5QixvQ0FBb0M7Z0JBQ3BDLDBDQUEwQzthQUMzQztTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBSZXNpemFibGVNb2R1bGUgfSBmcm9tICdhbmd1bGFyLXJlc2l6YWJsZS1lbGVtZW50JztcbmltcG9ydCB7IERyYWdBbmREcm9wTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1kcmFnZ2FibGUtZHJvcHBhYmxlJztcbmltcG9ydCB7IENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXItd2Vlay12aWV3LWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0V2ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXctZXZlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tbW9uTW9kdWxlIH0gZnJvbSAnLi4vY29tbW9uL2NhbGVuZGFyLWNvbW1vbi5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FsZW5kYXJXZWVrVmlld0hvdXJTZWdtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci13ZWVrLXZpZXctaG91ci1zZWdtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhcldlZWtWaWV3Q3VycmVudFRpbWVNYXJrZXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy1jdXJyZW50LXRpbWUtbWFya2VyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB7XG4gIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXG4gIENhbGVuZGFyV2Vla1ZpZXdCZWZvcmVSZW5kZXJFdmVudFxufSBmcm9tICcuL2NhbGVuZGFyLXdlZWstdmlldy5jb21wb25lbnQnO1xuZXhwb3J0IHtcbiAgV2Vla1ZpZXdBbGxEYXlFdmVudCBhcyBDYWxlbmRhcldlZWtWaWV3QWxsRGF5RXZlbnQsXG4gIFdlZWtWaWV3QWxsRGF5RXZlbnRSb3cgYXMgQ2FsZW5kYXJXZWVrVmlld0FsbERheUV2ZW50Um93LFxuICBHZXRXZWVrVmlld0FyZ3MgYXMgQ2FsZW5kYXJHZXRXZWVrVmlld0FyZ3Ncbn0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuZXhwb3J0IHsgZ2V0V2Vla1ZpZXdQZXJpb2QgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIERyYWdBbmREcm9wTW9kdWxlLFxuICAgIENhbGVuZGFyQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3RXZlbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hvdXJTZWdtZW50Q29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdDdXJyZW50VGltZU1hcmtlckNvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUmVzaXphYmxlTW9kdWxlLFxuICAgIERyYWdBbmREcm9wTW9kdWxlLFxuICAgIENhbGVuZGFyV2Vla1ZpZXdDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hlYWRlckNvbXBvbmVudCxcbiAgICBDYWxlbmRhcldlZWtWaWV3RXZlbnRDb21wb25lbnQsXG4gICAgQ2FsZW5kYXJXZWVrVmlld0hvdXJTZWdtZW50Q29tcG9uZW50LFxuICAgIENhbGVuZGFyV2Vla1ZpZXdDdXJyZW50VGltZU1hcmtlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFyV2Vla01vZHVsZSB7fVxuIl19