solution("I am a boy", 4);

function solution(message, k) {
    // write your code in JavaScript (Node.js 8.9.4)

    if (k < 1 || !message) {
        return " ";
    }

    let rightPointer = k;

    if (message.charAt(k + 1) === ' ') {
        for (rightPointer = k; rightPointer > 0; rightPointer--) {
            if (message.charAt(rightPointer) === ' ') {
                return message.substring(0, rightPointer + 1).trim
            }
        }
    } else {
        return message.substring(0, k).trim
    }


}

solution("mary", 1)
