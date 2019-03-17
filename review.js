bintangAngka = (num) => {
    hasil = ''
    for (var i = 0; i< num ; i++ ){
        for (var j = 1; j <= i+1 ; j++){
            hasil += j
        }
        if(i < num-1){
            hasil += '\n'
        }
    }
    return hasil
} 

// console.log(bintangAngka(5))


lastArr = (array) => {
        if (array[array.length-1] < 10){
            return array[0]
        } else {
            return array[array.length-1]
    }
}

// console.log(lastArr([3,4,2,5]))
// console.log(lastArr([3,4,2,21]))

var param = [
    [1,4,-7,9], [2,3,9], [4,6,-9]
]
summArr = (x) => {
    newArr = []
    for(var i = 0 ; i < x.length; i++){
        hasil = 0
        for(var j = 0 ; j < x[i].length; j++){
            if (x[i][j] > 0){
                hasil += x[i][j]
            } else {
                hasil = 0
                break
            } 
        } if (hasil > 0){
            newArr.push(hasil)
        }
    } return newArr
}

console.log(summArr(param))