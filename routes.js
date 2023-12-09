const { shortUrl, redirectUrl } = require('./controller/UrlController')

const router = require("express").Router();

router.post("/short", shortUrl)
router.get("/redirect/:urlId", redirectUrl)

module.exports = router;