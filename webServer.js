/**
 * Created by gal on 12/14/13.
 */

var miniExpress = require("./miniExpress");
var app = miniExpress();

app.use("/www", miniExpress.static("./www"));

app.listen(8080);


