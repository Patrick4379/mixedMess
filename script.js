const adj = ['attractive', 'bald', 'calm', 'scary', 'grumpy', 'elegant', 'lazy']
const verbPast = ['lost', 'paid', 'rang', 'sold', 'stole', 'built', 'felt']
const numYear = [1988, 1233, 1969, 2044, 1000, 2456, 2023]
const regret = ['not coming to your party', 'not working harder', 'leaving you alone', 'the things I didnt do when I had the chance', 'eating so much', 'dance the other night']

let randCo = Math.floor(Math.random() * 7)
//console.log(randCo)

const randAdj = () => {
    /*for(let i=0; i<adj.length; i++) {
        console.log(adj[i])
    }*/
    return adj[randCo]
}

const randVerb = () => {
    return verbPast[randCo]
}

const randRegret = () => {
    return regret[randCo]
}

const randYear = () => {
    return numYear[randCo]
}

//console.log(randAdj() + ' ' + randVerb() + ' ' + randYear())

const randMessage = () => {
    console.log(`Youre most ${randAdj()} person I now, remember, we have met in yr${randYear()}. I hate myself for ${randRegret()}`)
}

randMessage()