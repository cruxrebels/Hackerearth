/*
Asked in: Baker Hughes Hiring Challenge, Date: 30th Sept 2018.

Longest Prime Subarray - Solution Passed All Test Cases!

You are given an array A of N integers. Now you can remove at most one index from the array. 
Your goal is to maximize the length of the subarray that contains all the numbers prime. 
Print the largest length subarray that you can achieve by removing at most one element from the array .

Note: Subarray means contiguous elements.

Input
The first line contains an integer  as input. 
Next line contains  space separated integers denoting the elements of the array .

Output
In the output print the largest length of subarray as asked in the problem statement.

Constraints



Note: 1 is not considered to be prime.

Sample Input
7
2 8 5 7 9 5 7
Sample Output
4
Explanation
If we remove the number 9 which is at index 5 then the remaining array contains a subarray whose length is 4 which is maximum.

Note: Your code should be able to convert the sample input into the sample output. 
However, this is not enough to pass the challenge, because the code will be run on multiple test cases. 
Therefore, your code must solve this problem statement.
*/

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
    main(stdin_input);
});

function isPrime(input) {
    if (input < 2)
        return false;
        
    for (var i = 2; i*i <= input; ++i) {
        if (input%i === 0)
            return false;
    }
    return true;
}

function main(input) {
    var rows = input.split('\n');
    rows[1] = rows[1].split(' ');
    var N = rows[0];
    var A = rows[1];
    /*
        Start writing your code from here
        N and A are already taken as input
    */
    
    var count = 0, maxCount = -1, pos = 0;
    for (var i = 0; i < N; ++i) {
        var skip = 0;
        if (pos) {
            i = pos+1;
        }
        if (maxCount > N-i)
            break;
        count = 0;
        for (j = i; j < N; ++j) {
            if (isPrime(A[j]))
                ++count;
            else {
                if (!skip)
                    pos = i;
                ++skip;
            }
            
            if (skip == 2)
                break;
        }
        maxCount = maxCount > count ? maxCount : count;
        if (j == N)
            break;
    }
    console.log(maxCount);
}
