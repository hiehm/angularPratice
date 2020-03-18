import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef
} from '@angular/core';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView
} from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { subHours } from 'date-fns/fp';
const colors: any = {
    red: {
        primary: '#ad2121',
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
    selector: 'app-calendar6-custom-week-mode',
    templateUrl: './calendar6-custom-week-mode.component.html',
    styleUrls: ['./calendar6-custom-week-mode.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Calendar6CustomWeekModeComponent implements OnInit {
    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
   
    constructor(private modal: NgbModal) { }

    ngOnInit(): void {
        //subDay 從給定天數減去指定天數 (startDay,amount)
        //startOfDay 取出指定天數的整天時間
        console.log(addHours(startOfDay(new Date()), 9).getHours());
        console.log(addHours(startOfDay(new Date()), 10).getHours());
        console.log(addHours(startOfDay(new Date()), 11).getHours());
    }

    view: CalendarView = CalendarView.Week;
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
    events: CalendarEvent[] = [
        {
            start: subDays(startOfDay(new Date()), 1),
            end: addDays(new Date(), 1),
            title: 'A 3 day event',
            color: colors.red,
            actions: this.actions,
            allDay: true, //決定是否為全天模式
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        },
        {
            start: subDays(startOfDay(new Date()), -1),
            end: addDays(new Date(), 10),
            title: 'A 3 day event 2',
            color: colors.blue,
            actions: this.actions,
            allDay: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        },
        {
            start: startOfDay(new Date()),
            end: addHours(startOfDay(new Date()),2),
            title: 'An event with no end date',
            color: colors.blue,
            actions: this.actions
        },
        {
            start: subDays(endOfMonth(new Date()), 3),
            end: addDays(endOfMonth(new Date()), 3),
            title: 'A long event that spans 2 months',
            color: colors.blue,
            allDay: true
        },
        {
            start: addHours(startOfDay(new Date()), 2),
            end: addHours(new Date(), 2),
            title: 'A draggable and resizable event',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            draggable: true
        },
        {
            title: 'Draggable event',
            color: colors.yellow,
            start: addHours(startOfDay(new Date()), 4),
            end: addHours(startOfDay(new Date()),6),
            draggable: true
        },
        {
            title: 'Draggable event',
            color: colors.red,
            start: addHours(startOfDay(new Date()), 5),
            end: addHours(startOfDay(new Date()), 7),
            draggable: true
        },

        {
            title: 'Draggable event',
            color: colors.yellow,
            start: new Date(),
            draggable: true
        },
        {
            title: 'A non draggable event',
            color: colors.blue,
            start: new Date()
        }
    ];

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
}
