/**
 * Created by Natnel G on 9/4/2017.
 */
'use strict';

const items = Array.from(document.querySelectorAll('[data-time]'));
//console.log(items);

const items_with_ecma = items.filter( (v) => v.innerText.includes("ECMA6") );
for(let k in items_with_ecma){
    console.log(items_with_ecma[k]);
}

const items_time = items.map( (v) => v.dataset.time );
console.log(items_time);

const items_sec = items.map( (v) => {
                    let temp = v.dataset.time.split(":");
                    return (parseInt(temp[0]*60)) + parseInt(temp[1]);
                    }
                );
console.log(items_sec);

const total_sec = items_sec.reduce((a,b) => a+b, 0);
console.log(total_sec);