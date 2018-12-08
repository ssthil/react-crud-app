/** import */
import swal from 'sweetalert';

String.prototype.capitalize = function() {
  return this.substr(0, 1).toUpperCase() + this.substr(1);
};

/** check group exist */
// export function checkGroupExist(arr, incomingArray) {
//   arr.some(obj => obj.group === incomingArray.group);
// }

/** avoid duplicate value */
export function avoidDuplicateEntry(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  } else {
    swal({
      text:'User does exist in this group already!',
      icon: 'warning',
      button: 'Try another combination',
      dangerMode: true
    });
    arr;
  }
  return arr;
}
