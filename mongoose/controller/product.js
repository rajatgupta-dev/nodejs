const model = require('../model/product')
const Product = model.Product;

exports.create = async (req,res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json(req.body);   
}

exports.getAll = async (req,res) => {
    const products = await Product.find();
    res.json(products);
}

exports.getOne = async (req,res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
    res.json(product);
}

exports.update = async (req,res) => {
    try{
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});
        res.status(201).json(product);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.replace = async (req,res) => {
    try{
        const product = await Product.findOneAndReplace({_id: req.params.id}, req.body, {new:true});
        res.status(201).json(product);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

exports.delete = async (req,res) => {
    try{
        const product = await Product.findOneAndDelete({_id: req.params.id});
        res.status(201).json(product);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}

//view, locales, languages, middleware, service, response, validations, populate-?