
const fs = require("fs");
const { uploadImage, deleteImageFromCloudinary } = require("../Utils/Cloudnary");
const dress = require("../Models/DressModel");

const createDress = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Dress image is required"
            });
        }
        else {
            const data = new dress();
            const imgurl = await uploadImage(req.file.path);
            console.log(imgurl)
            data.dressImage = imgurl;
            await data.save();
            res.status(200).json({
                success: true,
                message: "New image added to Dress successfully",
                data: data
            });
            fs.unlinkSync(req.file.path);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getDress = async (req, res) => {
    try {
        const data = await dress.find();
        if (!data || data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Dress not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Dress found",
            data: data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getSingleDress = async (req, res) => {
    try {
        const data = await dress.findOne({ _id: req.params._id });
        if (!data || data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Dress not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Dress found",
            data: data
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const updateDress = async (req, res) => {
    try {
        const data = await dress.findOne({ _id: req.params._id });
        if (!data || data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Dress not found"
            });
        }
        else {
            if (req.file) {
                if (data.dressImage) {
                    const oldImage = data.dressImage.split("/").pop().split(".")[0]
                    try {
                        await deleteImageFromCloudinary(oldImage)
                    } catch (error) { }
                }
                const imgurl = await uploadImage(req.file.path);
                data.dressImage = imgurl;
            }
            await data.save()
            fs.unlinkSync(req.file.path)
            res.status(200).json({
                success: true,
                message: "Dress Updated successfully",
                data: data
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const deleteDress = async (req, res) => {
    try {
        const data = await dress.findOne({ _id: req.params._id });
        if (!data || data.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Dress not found"
            });
        }
        else {
            if (data.dressImage) {
                const oldImage = data.dressImage.split("/").pop().split(".")[0]
                try {
                    await deleteImageFromCloudinary(oldImage)
                } catch (error) { }
            }
            await data.deleteOne()
            res.status(200).json({
                success: true,
                message: "Dress Delete successfully",
                data: data
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    createDress,
    getDress,
    getSingleDress,
    updateDress,
    deleteDress
};
