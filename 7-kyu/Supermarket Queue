/*customer values represents time take by each person
and n represents number of counters*/ 
function queueTime(customers, n) {
    let machine = Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
        let minimum = machine.indexOf(Math.min(...machine));
        machine[minimum] += customers[i];

    }
    return Math.max(...machine);
}
console.log(Queue([2,3,10],2))//output=12
