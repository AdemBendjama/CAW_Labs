export default function exf(text, loop) {
    if (loop > 0) {
        for (let i = 0; i < loop; i++) {
            console.log(text);
        }
    }
}


exf("echo", 5);
exf("JS from server", 10);