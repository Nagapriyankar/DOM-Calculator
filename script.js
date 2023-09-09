let containerdiv = document.getElementById('container')

/* create a dynamic div */
let dynamicDiv = document.createElement('div');
dynamicDiv.setAttribute('class','calculator')
containerdiv.appendChild(dynamicDiv)


/* creating HTML Elements using DOM */
/* create input box */
let input = document.createElement('input')
input.setAttribute("id", "inputext")
input.type = "text"
input.placeholder = "0"
dynamicDiv.append(input)

/* create buttons  - TOTAL 19 BUTTONS */
/* clear */
let button = document.createElement('button')
button.textContent = 'C'
button.setAttribute('onclick', 'clr()')
button.setAttribute('id', 'clrBtn')
dynamicDiv.append(button)
/* delete */
button = document.createElement('button')
button.textContent = '←'
button.setAttribute('onclick', 'del()')
dynamicDiv.append(button)
/* pointer */
button = document.createElement('button')
button.textContent = '.'
button.setAttribute('onclick', "calculate('.')")
dynamicDiv.append(button)
/* multiply */
button = document.createElement('button')
button.textContent = '*'
button.setAttribute('onclick', "calculate('*')")
button.setAttribute('id', 'oprBtn')
dynamicDiv.append(button)
/* number 7 */
button = document.createElement('button')
button.textContent = '7'
button.setAttribute('onclick', "calculate('7')")
dynamicDiv.append(button)
/* number 8 */
button = document.createElement('button')
button.textContent = '8'
button.setAttribute('onclick', "calculate('8')")
dynamicDiv.append(button)
/* number 9*/
button = document.createElement('button')
button.textContent = '9'
button.setAttribute('onclick', "calculate('9')")
dynamicDiv.append(button)
/* divide */
button = document.createElement('button')
button.textContent = '/'
button.setAttribute('onclick', "calculate('/')")
button.setAttribute('id', 'oprBtn')
dynamicDiv.append(button)
/* number 4 */
button = document.createElement('button')
button.textContent = '4'
button.setAttribute('onclick', "calculate('4')")
dynamicDiv.append(button)
/* number 5 */
button = document.createElement('button')
button.textContent = '5'
button.setAttribute('onclick', "calculate('5')")
dynamicDiv.append(button)
/* number 6*/
button = document.createElement('button')
button.textContent = '6'
button.setAttribute('onclick', "calculate('6')")
dynamicDiv.append(button)
/* subtraction */
button = document.createElement('button')
button.textContent = '-'
button.setAttribute('onclick', "calculate('-')")
button.setAttribute('id', 'oprBtn')
dynamicDiv.append(button)
/* number 1 */
button = document.createElement('button')
button.textContent = '1'
button.setAttribute('onclick', "calculate('1')")
dynamicDiv.append(button)
/* number 2 */
button = document.createElement('button')
button.textContent = '2'
button.setAttribute('onclick', "calculate('2')")
dynamicDiv.append(button)
/* number 3*/
button = document.createElement('button')
button.textContent = '3'
button.setAttribute('onclick', "calculate('3')")
dynamicDiv.append(button)
/* addition */
button = document.createElement('button')
button.textContent = '+'
button.setAttribute('onclick', "calculate('+')")
button.setAttribute('id', 'oprBtn')
dynamicDiv.append(button)
/* number 0 */
button = document.createElement('button')
button.textContent = '0'
button.setAttribute('onclick', "calculate('0')")
dynamicDiv.append(button)
/* number 00*/
button = document.createElement('button')
button.textContent = '00'
button.setAttribute('onclick', "calculate('00')")
dynamicDiv.append(button)
/* equal */
button = document.createElement('button')
button.textContent = '='
button.setAttribute('onclick', "compute()")
button.setAttribute('id', 'equalBtn')
button.setAttribute('class','btn btn-info')
dynamicDiv.append(button)



/* adding events to make the calculator responsive */

let result = document.getElementById('inputext')

let calculate = (number) => { 
    result.value += number
}

let compute = () => { 
    try {
        result.value = eval(result.value)
    }
    catch (err) { 
        alert('Enter a Valid Input')
        console.log(`Runtime Error: ${err}`)
    }
}

function clr() {
    result.value = null;
}

 function del() { 
    result.value = result.value.slice(0, -1);
}