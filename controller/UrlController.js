const Urls = require('../model/Url')
const shortid = require("shortid")
const utils = require("../utils")

// TODO: generate short url
const shortUrl = async (req, res) => {
    const { originalUrl } = req.body
    const shortId = shortid.generate()
    const baseUrl = `http://localhost:8000/` // Your base url here

    if (utils.validateUrl(originalUrl)) {
        try {
            let url = await Urls.findOne({ originalUrl })
            if (url) {
                res.json(url)
            } else {
                const newUrl = baseUrl + shortId;
                url = new Urls({
                    originalUrl,
                    shortUrl: newUrl,
                    urlId: shortId,
                    date: new Date()
                })
                await url.save()
                res.status(200).json(url)
            }
        } catch (error) {
            res.status(500).json({ error: "Server error"})
        }
    } else {
        res.status(400).json({ error: "Invalid Url"})
    }
}

// TODO: redirect to original url
const redirectUrl = async (req, res) => {
    try {
        const urlId = req.params.urlId
        const url = await Urls.findOne({ urlId: urlId})
        if (url) {
            url.clicks++
            url.save()
            return res.redirect(301,url.originalUrl)
        } else {
            res.status(400).json({ error: "Url not found!"})
        }
    } catch (error) {
        res.status(500).json({ error: "Server Error"})
    }
}

// TODO: list all urls

module.exports = { shortUrl, redirectUrl }