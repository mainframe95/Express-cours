var express = require('express');
var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');
app.set('views', './views');
// { id: 1, task: 'shopping', isComplete: false }
var task = [];
const complete = [];

app.get("/", (req, res) => {
    res.render('index', { task: task, complete: complete });
});
app.get("/hello", (req, res) => {
    // res.render('index', { task: task, complete: complete });
    res.send('hello')
});

app.post('/addtask', (req, res) => {
    var newTask = req.body.newtask;
    task.push({ id: task.length, task: newTask, isComplete: false });
    res.redirect("/");
});

app.post("/removetask", (req, res) => {
    const id = parseInt(req.body.check, 10);
    console.log('id', id);
    task = task.filter(d => d.id !== id);
    console.log('task', task)
    res.redirect("/");
});

app.post("/finishedTask", (req, res, next) => {
    const id = parseInt(req.body.check, 10);
    task[id].isComplete = true;
    complete.push(task[id]);
    task = task.filter(d => d.id !== id);
    console.log('task', task);
    res.redirect("/");
})

app.listen(8080, function () {
    console.log('Running on port 8080!')
});