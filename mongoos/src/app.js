const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ttchanell", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successfully...."))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Playlist = new mongoose.model("playlist",playlistSchema);
const createDocument = async()=>{
    try{
        const reactPlaylist = new Playlist({
            name: "Node JS",
              ctype: "Back End",
              videos: 40,
              author: "Thapa Technical",
              active: true,
             
        })
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err)
    }
    }
    

createDocument();