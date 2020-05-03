import { Component, Input } from "@angular/core";
import {  trigger, transition, state, animate, style, AnimationEvent, keyframes, group, query } from '@angular/animations';

const Open_Close_Trigger = 'openClose';
const Open = 'open';
const Closed = 'closed';
const InProgress = 'inProgress';

@Component({
    selector: 'app-open-close',
    templateUrl: './open-close.component.html',
    styleUrls:['./open-close.component.scss'] ,
    animations: [
        trigger(Open_Close_Trigger, [
            state(Open , style([{
                height:'200px',
                opacity: 1, 
                backgroundColor: 'yellow'
            }])),

            state(Closed, style([{
                height: '100px',
                opacity: 0.5,
                backgroundColor: 'green'
            }])), 
            
            state(InProgress, style([{
                height: '150px',
                opacity: 0.8,
                backgroundColor: 'red'
            }])),  

            transition(`${Open} => ${Closed}`, [
                animate('1s')
            ]),
            transition(`${Closed} => ${Open}`, [
                animate('0.5s')
            ]),
            transition('* =>' + Closed, [
                animate('1s')
            ]),
            transition('*  =>'+ Open, [
                animate('0.5s')
            ]),
            transition ('* => '+ Open, [
                animate ('1s',
                  style ({ opacity: '*' }),
                ),
            ]),
            transition('* => *', [
                 animate('1s')
            ]),
            transition(`${Open} <=> ${Closed}`, [
                animate('0.5s')
            ]),
         

          
            // keyframes([]),
            // group([]),
            // query('',[]),
        ]),
    ] ,
})

export class OpenCloseAnimationComponent {
    // Note: Some additional notes on using styles within state and transition functions.

    // Use state() to define styles that are applied at the end of each transition, they persist after the animation has completed.
    
    // Use transition() to define intermediate styles, which create the illusion of motion during the animation.
    
    // When animations are disabled, transition() styles can be skipped, but state() styles can't.
    
    // You can include multiple state pairs within the same transition() argument:
    // transition( 'on => off, off => void' ).
    isOpen = true;

    toggle() {
      this.isOpen = !this.isOpen;
    }

    @Input() logging = false;
    
    onAnimationEvent ( event: AnimationEvent ) {
        if (!this.logging) {
          return;
        }
        // openClose is trigger name in this example
        console.warn(`Animation Trigger: ${event.triggerName}`);
    
        // phaseName is start or done
        console.warn(`Phase: ${event.phaseName}`);
    
        // in our example, totalTime is 1000 or 1 second
        console.warn(`Total time: ${event.totalTime}`);
    
        // in our example, fromState is either open or closed
        console.warn(`From: ${event.fromState}`);
    
        // in our example, toState either open or closed
        console.warn(`To: ${event.toState}`);
    
        // the HTML element itself, the button in this case
        console.warn(`Element: ${event.element}`);
      }

}