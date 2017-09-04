/**
 * Created by Natnael G on 9/4/2017.
 */
// Question 2
'use strict';
var library = [
    {prof: 'Asad Saad', course:'WAP', courseID: 'cs452'},
    {prof: 'Rakesh Shresta', course:'WAA', courseID: 'cs545'},
    {prof: 'Steve Nolle', course:'SWE', courseID: 'cs542'},
];
// sort in ascending order
const sorted_by_name = library.sort( (a,b) => b.prof > a.prof );

for(let k in sorted_by_name){
    console.log(sorted_by_name[k]);
}