import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {SystemService} from '../../shared/system.service';
import {Router} from '@angular/router';

const colors: any = {
  red: {
    primary: '#ff2400',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  closeResult: string;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();
  events: CalendarEvent[];
/*  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date('2020-02-01T18:30:00.000Z')),
      end: endOfDay(new Date('2020-02-01T19:30:00.000Z')),
      title: 'Au coeur de la Croix-Rouge as',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'Un événement de trois jours',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: startOfDay(new Date()),
      title: 'Un événement sans date de fin',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'Un événement de deux mois',
      color: colors.blue,
      allDay: true
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'Un événement drag and drop',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];*/

  activeDayIsOpen: boolean = true;
  public session: any;
  private emptySession = false;


  constructor(private modal: NgbModal,
              public systemService: SystemService,
              public router: Router) { }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    console.log('herr')
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    console.log(this.modalData, this.modalData.event.meta.id);
    this.systemService.getSessionById(this.modalData.event.meta.session_id).subscribe(
      res => {
        console.log(res);
        if (res.status == false){
          this.emptySession = true;
          this.session = [];
        } else {
          this.emptySession = false;
          res.map((val, key) => {
            console.log(val, key);
            if (val.training_session_id === this.modalData.event.meta.session_id){
              this.session = val;
            }
          });
        }

      }
    )
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: false,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
    console.log(this.events)
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    console.log(view)
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.getParticipants();
  }

  getParticipants(){
    this.systemService.getAllSessions().subscribe(
      res => {
        console.log(res);
        const data = res;
        const eve = [];
        data.map(
          (val, key) => {
            const startDate = new Date(val.day1);
            const endDate = new Date(val.day1)
            // console.log(val, key, startDate, endDate);
            if(val.training_id != null && val.training_id !='') {
              eve.push(
                {
                  start: startOfDay(startDate),
                  end: endOfDay(endDate),
                  title: val.name,
                  color: colors.red,
                  actions: this.actions,
                  allDay: true,
                  resizable: {
                    beforeStart: true,
                    afterEnd: true
                  },
                  meta: {
                    id: val.training_id,
                    session_id: val.training_session_id
                  },
                  draggable: false
                }
              );
            }
          }
        )
        this.events = eve;
        console.log(this.events);
        this.refresh.next();
      }
    )
    /*this.systemService.getParticipants().subscribe(
      res => {
        console.log(res);
        const data = res.data;
        const eve = [];
        data.map(
          (val, key) => {
            const startDate = new Date(val.day1);
            const endDate = new Date(val.day1)
            // console.log(val, key, startDate, endDate);
            eve.push(
              {
                start: startOfDay(startDate),
                end: endOfDay(endDate),
                title: val.name,
                color: colors.red,
                actions: this.actions,
                allDay: true,
                resizable: {
                  beforeStart: true,
                  afterEnd: true
                },
                meta: {
                  id: val.training_session_id
                },
                draggable: true
              }
            )
        }
        )
        this.events = eve;
        console.log(this.events);
        this.refresh.next();
        /!**!/
      }
    );*/
  }
  chooseSession(trainingSession: any) {
    console.log(trainingSession)
    this.systemService.selectedSession = trainingSession;
    this.router.navigateByUrl('/inscriptions');
  }

  public sliceTime(str) {
    if (str.length === 8){
      return str.substring(0, str.length - 3);
    } else {
      return str;
    }
  }
}
