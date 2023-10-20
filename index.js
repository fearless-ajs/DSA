const stringReverser = (string) => {
    if(typeof string === undefined || typeof string === "string"){
            // let stringArray = [...string]; // this also works
    let stringArray = string.split("")
    console.log(stringArray);

    let reverseArray = stringArray.reverse();
    let stringOfReverseArray = reverseArray.join("");


    console.log(stringOfReverseArray);
    }else{
        console.log('invalid input, expected a string')

    }

}

// stringReverser("I am joshua adurotimi");


// Another way to do this
const reverseString = (str) => 
{
    // check input
    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmm, that is not good at all';
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for(let i = totalItems; i >= 0; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);

    return backwards.join('');
}

// const reversed = reverseString('Hi my name is steve');
// console.log(reversed);

// A simpler approach
const stringReverser2 = (string) => {
    return string.split('').reverse().join('');
}

// const reversed = stringReverser2('Hi my name is steve');
// console.log(reversed);

// OR more modern
const stringReverser3 = string => string.split('').reverse().join('');
// const reversed = stringReverser3('Hi my name is steve');
// console.log(reversed);


// Another more modern(ES6)
const stringReverser4 = string => [...string].reverse().join('');

// const reversed = stringReverser4('Hi my name is steve');
// console.log(reversed);
