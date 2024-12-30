let peopleArr = [
    { height: '56', weight: '90' },
    { height: '60', weight: '95' },
    { height: '64', weight: '120' },
    { height: '65', weight: '100' },
    { height: '68', weight: '110' },
    { height: '70', weight: '150' },
    { height: '75', weight: '190' }
]

function analayse() {
    let tempWeight = 0;
    peopleArr.forEach((people, index) => {
        console.log("Incoming Weigth",people.weight);
        if (people.weight > tempWeight) {
            tempWeight = people.weight;
            console.log(tempWeight);
        }
        else{
            console.log("skipped");
        }
    });
}

analayse();
