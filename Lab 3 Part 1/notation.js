
function mean(array) {
    let mean = 0;
    for (let i = 0; i < array.length; i++) {
        mean += array[i]
    }

    return mean / array.length;
}

if (process.argv.length == 3) {
    const array = JSON.parse(process.argv[2]);
    if (Array.isArray(array)) {
        let avg = mean(array);
        console.log('Average is ' + avg);
    }
}


