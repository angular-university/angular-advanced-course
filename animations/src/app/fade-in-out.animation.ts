import {
    trigger,
    style,
    animate,useAnimation,animation,
    transition,
} from '@angular/animations';




export const fadeIn = animation([
    style({opacity: 0}),
    animate("{{delay}}", style({opacity: 1}))
], {params: {delay: '1000ms'}});



export const fadeOut = animation([
    animate("{{delay}}", style({opacity:0}))
], {params: {delay: '1000ms'}});


export const fadeInOut = trigger('fadeInOut', [
    transition('void => *', useAnimation(fadeIn, {params: {delay:"2000ms"}})), // :enter is alias to 'void => *'
    transition('* => void', useAnimation(fadeOut,  {params: {delay:"2000ms"}} )) // :leave is alias to '* => void'
]);

