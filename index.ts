class Album {
    title:string
    songs: string[]
    constructor (titulo:string, canciones:string []){
        this.title = titulo
        this.songs = canciones

    }
    getTitle (){
        return this.songs
    }
}

class Banda {
    members: string[]
    albums:any []
    constructor(members: string[], albums: Album[]){
        this.members = members;
        this.albums = albums

    }

}

const verdePaisaje = new Album("Paisaje", ["Jiji", "vamos river plate", "onda onda"])
const losPiojos = new Banda (["Juan", "Luis"], [verdePaisaje])

console.log (losPiojos)
