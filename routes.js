const { shortUrl, redirectUrl, allUrls } = require('./controller/UrlController')

const router = require("express").Router();

router.post("/short", shortUrl)
router.get("/id/:urlId", redirectUrl)
router.get("/all", allUrls)

module.exports = router;