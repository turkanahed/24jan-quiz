const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const { Schema } = mongoose;
const ProductShema = new Schema(
    {
        imgUrl: {
            type: String,
            required: [true, "Please enter product url!"]
        },
        name: {
            type: String,
            required: [true, "Please enter product name!"]
        },
        category: {
            type: String,
            required: [true, "Please enter product category!"]
        },
        price: {
            type: String,
            required: [true, "Please enter product price!"]
        },
    },
    { timestamps: true }
);
const Products = mongoose.model("products", ProductShema);

//get all products
app.get("/products", (req, res) => {
    Products.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err });
        }
    })
})

//get product by id
app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    Products.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs);
            } else {
                res.status(404).json({ message: "Not Found" });
            }
        } else {
            res.status(500).json({ message: err });
        }
    })
})

//add product
app.post("/products", (req, res) => {
    let product = new Products({
        imgUrl: req.body.url,
        category: req.body.category,
        name: req.body.name,
        price: req.body.price,
    });
    product.save();
    res.send({ message: "Successfully" });
});

//delete product
app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    Products.findByIdAndDelete(id, err => {
        if (!err) {
            res.send("Successfully deleted");
        } else {
            res.status(500).json({ message: err });
        }
    });
});

mongoose.set('strictQuery', false);
const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, (err) => {
    if (!err) {
        console.log("DB connected");
    }
});
app.listen(PORT, () => {
    console.log(`APP is up and running ${PORT}`);
});