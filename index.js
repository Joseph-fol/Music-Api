const express = require('express')
const app = express()
const port = 2200

// app.get('/home', (ref, res) =>{
//     res.send("Good evening everyone")
// })
const musicDetail = [
    {
        id: 1,
        nameOfArtist: 'Moses Bliss',
        nameOfSOng: "Too Faithful",
        duration: '10 mins',
        image: "https://theexperiencelagos.com/2025/wp-content/uploads/2025/10/moses-bliss-prp.jpg"
    },
    {
        id: 2,
        nameOfArtist: 'Ruth B',
        nameOfSOng: "Lost Boy",
        duration: '4 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9qkJCGqIMBxm6b0ORI9E8qQ9jWE0f9ZCrjQ&s"
    },
    {
        id: 3,
        nameOfArtist: 'Sanmi Micheal',
        nameOfSOng: "Mokore",
        duration: '8 mins',
        image: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20290%20287'%3E%3C/svg%3E"
    },
    {
        id: 4,
        nameOfArtist: 'Alan Walker',
        nameOfSOng: "Alone",
        duration: '3 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxT9BDN_pddK7T3tJZO4WvSjG_PpFKymHzg&s"
    },

    {
        id: 5,
        nameOfArtist: 'Sola Allyson',
        nameOfSOng: "Ipin",
        duration: '12 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_iY1CPx2Isd5qDiNI-4wM2p6OaAHJpk2S28dissNlEDpEz0Zdzid6Qq-bKfwQ3HQMPaD_WAuquj0KPz3Djn9jOVMUC5cQpfkLOLbpsg&s=10"
    },

    {
        id:6,
        nameOfArtist: 'Ada Ehi',
        nameOfSOng: "Another Miracle",
        duration: '5 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGljmyfSFVpDA5QXaim_o1AG3apwHAY5zPIpCkug7FhMwUZIC7t6BLQBEM-57az7CPNWuPHcsNggO_m8OG_Z_WdRAVlnjwijoV2S4bkeM&s=10"
    },

    {
        id: 7,
        nameOfArtist: 'BBO',
        nameOfSOng: "Amin",
        duration: '9 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoZxYj9oiBx3vJQbjM1-s3sCQbtfqy3-Ffg&s"
    },

    {
        id: 8,
        nameOfArtist: 'Pelumi Deborah',
        nameOfSOng: "Balogun",
        duration: '8 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BMLtSLlZE470IjVAQTnkfEinQoVhDQCVDw&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BMLtSLlZE470IjVAQTnkfEinQoVhDQCVDw&s"
    },

    {
        id: 9,
        nameOfArtist: 'Sunmisola Agbebi',
        nameOfSOng: "B'ola",
        duration: '6 mins',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrl-8Ae--4aePMOEzA2rbzTEkuczBSpNBxcu0-lnLcDSn2cbBnSqAd83cU2N2gLGDMCsUBQdFElkc-xbekczfSZss6k5PoHyiAPgJ_qo&s=10"
    },

    {
        id:10,
        nameOfArtist: 'Lawrence Oyor',
        nameOfSOng: "Another Miracle",
        duration: '5 mins',
        image: "https://yt3.googleusercontent.com/u6M_VlzQV3chrouoS_zIMvDWQqNjl84piwGU94gXW5TGakwj7mREJXTS_LkIbFLuQbO_jWGEo8Y=s900-c-k-c0x00ffffff-no-rj"
    }
]

app.listen(port, () => {
    console.log("Working");
    console.log("This is the backend system");
    
})

app.get('/music', (ref, res) => {
    res.send(musicDetail)
})
