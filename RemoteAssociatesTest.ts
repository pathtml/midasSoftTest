function getQuestPart(phases: string[]): string[] {
    const set1 = phases
    let temp: string = ''
    let temp2: string = ''
    let index: number = 0
    for (let i = 0; i < set1.length; i++) {

        let choice = set1[i].split('')
        let rest = set1.filter(item => set1[i] !== item)

        for (let k = 0; k < choice.length; k++) {

            if (temp2 === '' && rest.every(item => item.includes(choice[k]))) {
                temp2 += choice[k]
                index++
            } else if (rest.every(item => item.includes(temp2 + choice[k]))) {
                temp2 += choice[k]
                index++
                // console.log(temp2);
            }
            else if (rest.every(item => item.includes(choice[k]))) {
                if (index > 1) {
                    temp = temp2
                } else {
                    temp2 = choice[k]
                }
                // console.log(temp2);
            }

        }



    }
    console.log(temp);



    return phases.map(item => item.replace(temp, '').trim())
}

console.log(getQuestPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP', 'BEST FRIEND']));
console.log(getQuestPart(['BATHROOM', 'BATHSALT', 'BLOODBATH', 'BATHTUB']));


