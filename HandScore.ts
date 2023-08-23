interface Card {
    face:string;
    suit:string;
    value:number;
}

function getHandScore(input:string):number{
    let cards:string[] = input.split(' ')
    let hand:Card[]=[]
    let score:number
    cards.forEach(element => {
        let v:number
        switch (element.substring(1)) {
            case 'J':
                v=10
                break;
            case 'Q':
                v=10
                break;
            case 'K':
                v=10
                break;
            case 'A':
                v=11
                break;    
            default:
                v=+element.substring(1)
                break;
        }
        hand.push({
            face:element.substring(1),
            suit:element.substring(0,1),
            value:v
        })
    });
    if (hand.every(({face})=>face===hand[0].face && face !== 'A')) {
        score = 32.5
    }else if (hand.every(({face})=>face==='A')){
        score = 35
    }else{
        const S:number = hand.filter(({suit})=>suit==='S').reduce((a,obj)=>{return a+obj.value},0)
        const C:number = hand.filter(({suit})=>suit==='C').reduce((a,obj)=>{return a+obj.value},0)
        const D:number = hand.filter(({suit})=>suit==='D').reduce((a,obj)=>{return a+obj.value},0)
        const H:number = hand.filter(({suit})=>suit==='H').reduce((a,obj)=>{return a+obj.value},0)
        score = Math.max(S,C,D,H)
    }
    return score
}

console.log(getHandScore('SA CA C10'));


