
import {animation, style, animate, trigger, transition, useAnimation}
    from '@angular/animations';


export const fadeIn = animation([
    style({opacity:0}),
    animate("1000ms",style({opacity:1}))
]);

export const fadeOut = animation(
    animate("1000ms", style({opacity:0}))
);

export const fadeInOut = trigger('fadeInOut', [
    transition('void => *', useAnimation(fadeIn) ),
    transition('* => void', useAnimation(fadeOut) )
]);


