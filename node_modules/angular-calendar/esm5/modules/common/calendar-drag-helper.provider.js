import { isInside, isWithinThreshold } from './util';
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved, transform = _a.transform;
        if (snapDraggedEvents) {
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + transform.x,
                right: this.startPosition.right + transform.x,
                top: this.startPosition.top + transform.y,
                bottom: this.startPosition.bottom + transform.y
            });
            return ((isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved) &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold({ x: x, y: y }) || dragAlreadyMoved;
        }
    };
    return CalendarDragHelper;
}());
export { CalendarDragHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUdyRDtJQUdFLDRCQUNVLG9CQUFpQyxFQUN6QyxnQkFBNkI7UUFEckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFhO1FBR3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUNoRSxDQUFDO0lBRUQseUNBQVksR0FBWixVQUFhLEVBWVo7WUFYQyxRQUFDLEVBQ0QsUUFBQyxFQUNELHdDQUFpQixFQUNqQixzQ0FBZ0IsRUFDaEIsd0JBQVM7UUFRVCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLElBQU0sT0FBTyxHQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUM3QyxHQUFHLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQzthQUNoRCxDQUFDLENBQUM7WUFFSCxPQUFPLENBQ0wsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsR0FBQSxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDakQsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUNyRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8saUJBQWlCLENBQUMsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLEdBQUEsRUFBRSxDQUFDLElBQUksZ0JBQWdCLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBdkNELElBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNJbnNpZGUsIGlzV2l0aGluVGhyZXNob2xkIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IFZhbGlkYXRlRHJhZ1BhcmFtcyB9IGZyb20gJ2FuZ3VsYXItZHJhZ2dhYmxlLWRyb3BwYWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRyYWdIZWxwZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UG9zaXRpb246IENsaWVudFJlY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkcmFnQ29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgZHJhZ2dhYmxlRWxlbWVudDogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHZhbGlkYXRlRHJhZyh7XG4gICAgeCxcbiAgICB5LFxuICAgIHNuYXBEcmFnZ2VkRXZlbnRzLFxuICAgIGRyYWdBbHJlYWR5TW92ZWQsXG4gICAgdHJhbnNmb3JtXG4gIH06IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHNuYXBEcmFnZ2VkRXZlbnRzOiBib29sZWFuO1xuICAgIGRyYWdBbHJlYWR5TW92ZWQ6IGJvb2xlYW47XG4gICAgdHJhbnNmb3JtOiBWYWxpZGF0ZURyYWdQYXJhbXNbJ3RyYW5zZm9ybSddO1xuICB9KTogYm9vbGVhbiB7XG4gICAgaWYgKHNuYXBEcmFnZ2VkRXZlbnRzKSB7XG4gICAgICBjb25zdCBuZXdSZWN0OiBDbGllbnRSZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGFydFBvc2l0aW9uLCB7XG4gICAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb3NpdGlvbi5sZWZ0ICsgdHJhbnNmb3JtLngsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnN0YXJ0UG9zaXRpb24ucmlnaHQgKyB0cmFuc2Zvcm0ueCxcbiAgICAgICAgdG9wOiB0aGlzLnN0YXJ0UG9zaXRpb24udG9wICsgdHJhbnNmb3JtLnksXG4gICAgICAgIGJvdHRvbTogdGhpcy5zdGFydFBvc2l0aW9uLmJvdHRvbSArIHRyYW5zZm9ybS55XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGlzV2l0aGluVGhyZXNob2xkKHsgeCwgeSB9KSB8fCBkcmFnQWxyZWFkeU1vdmVkKSAmJlxuICAgICAgICBpc0luc2lkZSh0aGlzLmRyYWdDb250YWluZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBuZXdSZWN0KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGlzV2l0aGluVGhyZXNob2xkKHsgeCwgeSB9KSB8fCBkcmFnQWxyZWFkeU1vdmVkO1xuICAgIH1cbiAgfVxufVxuIl19