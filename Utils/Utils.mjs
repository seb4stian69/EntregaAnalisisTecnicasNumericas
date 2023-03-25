
const root = document.getElementById('inputDataBar');

export const concat_ac=()=>{root.value=""}

export const concat_del=()=>{

    let data = root.value;

    if(data!=null){  
        data = data.split('')
        data.splice(data.length - 1);
    }

    let result='';

    data.forEach( element => result+=element );

    root.value=result

}


export const concat_nine=()=>{root.value+=9}
export const concat_eight=()=>{root.value+=8}
export const concat_seven=()=>{root.value+=7}
export const concat_six=()=>{root.value+=6}
export const concat_five=()=>{root.value+=5}
export const concat_four=()=>{root.value+=4}
export const concat_three=()=>{root.value+=3}
export const concat_two=()=>{root.value+=2}
export const concat_one=()=>{root.value+=1}
export const concat_zero=()=>{root.value+=0}
export const concat_dot=()=>{root.value+='.'}

export const concat_equis=()=>{root.value+="x"}

export const concat_divide=()=>{root.value+="÷"}
export const concat_multiplication=()=>{root.value+="×"}

export const concat_substract=()=>{root.value+="-"}
export const concat_add=()=>{root.value+="+"}

export const concat_bracketsLeft=()=>{root.value+="("}
export const concat_bracketsRight=()=>{root.value+=")"}
export const concat_percentage=()=>{root.value+="%"}

export const concat_factorial=()=>{root.value+="!"}

export const concat_sin=()=>{root.value+="sen("}
export const concat_cos=()=>{root.value+="cos("}
export const concat_tan=()=>{root.value+="tan("}

export const concat_ln=()=>{root.value+="ln("}
export const concat_log=()=>{root.value+="log("}

export const concat_pi=()=>{root.value+="π"}
export const concat_euler=()=>{root.value+="e"}

export const concat_sqrt=()=>{root.value+="√("}
export const concat_pow=()=>{root.value+="^"}


export const concat_rad_deg=()=>{console.log("Cambia de radianes a grados y viceversa")}
export const concat_inv=()=>{console.log("Invierte las trigonometricas")}
export const concat_exp=()=>{console.log("Agrega tantos '0' requiera el usuario despues de la 'E'")}
