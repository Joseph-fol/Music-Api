const express = require('express')
const app = express()
const cors = require("cors")
const port = 2200

/*
    For a a backend to display and ejs file
    1.  Firstly set the view engine to be ejs i,e app.set("view engine", 'ejs)
    2.  Create a folder called "views", then put all the file with an extension .ejs
*/
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")

    if (req.method === "OPTIONS") {
        return res.sendStatus(204)
    }

    next()
})

app.set('view engine', "ejs")
const name = "Olawoyin Joseph"

const musicDetail = [
    {
        id: 1,
        nameOfArtist: 'Moses Bliss',
        nameOfSOng: "Too Faithful To Fail Me",
        duration: '6:11',
        image: "https://theexperiencelagos.com/2025/wp-content/uploads/2025/10/moses-bliss-prp.jpg",
        audio: "https://files.cvaultx.com/wp-content/uploads/2020/02/Moses-Bliss-Too-Faithful-_CeeNaija.com_.mp3"
    },
    {
        id: 2,
        nameOfArtist: 'Yadah',
        nameOfSOng: "Onyewere Jesus",
        duration: '3:46',
        image: "https://i.scdn.co/image/ab676161000051746ca55e00b16ebf0e5f4a6684",
        audio: "https://files.cvaultx.com/wp-
    },
    {
        id: 3,
        nameOfArtist: 'Sanmi Micheal',
        nameOfSOng: "Osuba",
        duration: '4:52',
        image: "https://www.citypeopleonline.com/wp-content/uploads/2023/06/IMG-20230607-WA0030-e1686136693343.jpg",
        audio: "https://isokovibe.com.ng/wp-content/uploads/2025/03/Sanmi-Micheal-Osuba-Live-_-iSokoVibe.mp3"
    },
    {
        id: 4,
        nameOfArtist: 'Mercy Chinwo',
        nameOfSOng: "Alone",
        duration: '3:54',
        image: "https://i1.sndcdn.com/artworks-TJHiwgim2Zvg-0-t500x500.png",
        audio: "https://files.cvaultx.com/wp-content/uploads/music/2023/04/Mercy_Chinwo_-_Wonder_CeeNaija.com_.mp3"
    },

    {
        id: 5,
        nameOfArtist: 'Sola Allyson',
        nameOfSOng: "Ipin",
        duration: '46:51',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-_iY1CPx2Isd5qDiNI-4wM2p6OaAHJpk2S28dissNlEDpEz0Zdzid6Qq-bKfwQ3HQMPaD_WAuquj0KPz3Djn9jOVMUC5cQpfkLOLbpsg&s=10",
        audio: "https://files.cvaultx.com/wp-content/uploads/music/2024/04/Sola_Allyson_-_ipin_CeeNaija.com_.mp3"
    },

    {
        id:6,
        nameOfArtist: 'Judikay',
        nameOfSOng: "Capable GOd",
        duration: '3:34',
        image: "https://yt3.googleusercontent.com/QJ4gNkHg39ng6gMcj4JsVYw5lhJr0O0ljsLVF11LKK40xctyFsDQnPtt_uWraw_yOoNZNm_jzSk=s900-c-k-c0x00ffffff-no-rj",
        audio: "https://files.cvaultx.com/wp-content/uploads/2019/11/Judikay-Capable-God-CeeNaija.com_.mp3"
    },

    {
        id: 7,
        nameOfArtist: 'BBO',
        nameOfSOng: "Amin",
        duration: '9:12',
        image: "https://i0.wp.com/spiritchant.com.ng/wp-content/uploads/2026/01/BBO-%E2%80%93-Amin.jpeg",
        audio: "https://store.cvaultx.com/wp-content/uploads/music/2026/01/BBO_-_Amin_Amen__CeeNaija.com_.mp3"
    },

    {
        id: 8,
        nameOfArtist: 'Pelumi Deborah',
        nameOfSOng: "Balogun",
        duration: '9:15',
        image: "https://i.audiomack.com/deborahpelumi/19410060-c.webp?width=456",
        audio: "https://store.cvaultx.com/wp-content/uploads/music/2025/10/Pelumi_Deborah_-_Balogun_The_Army_Commander_Ft_Ibquake_CeeNaija.com_.mp3"
    },

    {
        id: 9,
        nameOfArtist: 'Sunmisola Agbebi',
        nameOfSOng: "B'ola",
        duration: '5:24',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrl-8Ae--4aePMOEzA2rbzTEkuczBSpNBxcu0-lnLcDSn2cbBnSqAd83cU2N2gLGDMCsUBQdFElkc-xbekczfSZss6k5PoHyiAPgJ_qo&s=10",
        audio: "https://files.cvaultx.com/wp-content/uploads/music/2023/05/Sunmisola_Agbebi_-_Bola_Honour__CeeNaija.com_.mp3"
    },

    {
        id:10,
        nameOfArtist: 'Lawrence Oyor',
        nameOfSOng: "To See You",
        duration: '7:36',
        image: "https://yt3.googleusercontent.com/u6M_VlzQV3chrouoS_zIMvDWQqNjl84piwGU94gXW5TGakwj7mREJXTS_LkIbFLuQbO_jWGEo8Y=s900-c-k-c0x00ffffff-no-rj",
        audio: "https://files.cvaultx.com/wp-content/uploads/music/2024/01/Lawrence_Oyor_-_To_See_You_CeeNaija.com_.mp3"
    },

    {
        id: 11,
        nameOfArtist: 'Chinyere Udoma',
        nameOfSOng: "Eze Mmuo",
        duration: '10:48',
        image: "https://bookingagentinfo.com/wp-content/uploads/2024/02/ab67616d0000b27304bf84de67d704875a6f61c8.jpg",
        audio: "https://files.cvaultx.com/wp-content/uploads/music/2023/09/Chinyere_Udoma_-_Eze_Mmuo_CeeNaija.com_.mp3"
    },

    {
        id: 12,
        nameOfArtist: 'Peterson Okopi',
        nameOfSOng: "Osuba",
        duration: '5:23',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIkj6oloQVtqNXFfg_JRR0natY3zg6JZlXw&s",
        audio: "https://files.cvaultx.com/wp-content/uploads/music/2024/08/Peterson_Okopi_-_Osuba_Remix__CeeNaija.com_.mp3"
    },


]

app.get('/music', (req, res) => {
    res.send(musicDetail)
})

// For About Section in EJS
app.get("/about", (req, res) =>{
    res.render("about", {name:name})
})

// For a backend to display HTML File
/*
    1.  app.get('/', (req, res) =>{
            res.sendFile(__dirname + "index.html")
        })
*/


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log("Working");
    console.log("This is the backend system");  
})