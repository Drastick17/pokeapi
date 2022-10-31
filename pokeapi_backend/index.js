import express from "express";
import cors from "cors";
import connect from "./services/mongoose.js"
import routePokemon from "./routes/api/v1/index.js"
import Pokemon from "./models/pokemonModel.js"
import authenticated from "./midleware/apiKey.js"

connect()

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//Rellenar la base de datos
// app.post("/pokemon", function (req, res) {
//   console.log(req.body)
//   try {
//     res.send(new Promise((resolve, reject) => {
//       Pokemon.create(req.body, (err, result) => {
//         if (err) {
//           reject({ error: "Error al crear el registro" });
//         }
//         resolve(result);
//       })
//     }))
//   } catch (error) {
//     console.log(error)
//   }
// });

app.use('/api/v1/pokemon',authenticated, routePokemon)

const PORT = 3004;
app.listen(PORT,() => console.log(`http://localhost:${PORT}`))