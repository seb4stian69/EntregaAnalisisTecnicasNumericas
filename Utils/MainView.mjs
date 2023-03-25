import {concat_rad_deg,concat_factorial,concat_bracketsLeft,concat_bracketsRight,concat_percentage,concat_ac,concat_inv,concat_sin,concat_ln,concat_seven,concat_eight,concat_nine,concat_divide,concat_pi,concat_cos,concat_log,concat_four,concat_five,concat_six,concat_multiplication,concat_euler,concat_tan,concat_sqrt,concat_three,concat_two,concat_one,concat_substract,concat_del,concat_exp,concat_pow,concat_zero,concat_dot,concat_equis,concat_add} from "./Utils.mjs";

let btnsArray = new Array();
const btns = document.getElementsByTagName('button');

for (let index = 0; index < btns.length; index++){
    btns.item(index).addEventListener('click', e => {
        eval(`concat_${e.target.className}()`)
    });
}
