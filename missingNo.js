const arr = []; 

for (let n = 1; n < 101; n++) { 
    while(true) { 
        let num = Math.floor(Math.random() * Math.floor(100)); 
        if (arr[num] === undefined) { 
            arr[num] = n; 
            break;  
        } 
    } 
} 

const removed = arr.pop(); 
console.log('Removed integer', removed)

for(let n = 1; n < 101; n++) { 
    if (!arr.includes(n)) { 
        console.log('Missing integer', n); 
        break; 
    } 
} 

