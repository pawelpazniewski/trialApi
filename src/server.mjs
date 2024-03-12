import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(request,response)=>{
    response.status(200).send({
        message: "successs"
    })
});

app.get('/api/users', (request,response)=>{
    response.status(200).send([{
        id:1,
        name:"Adam",
        username:"adam@test"

    },
    {
        id:2,
        name:"Mark",
        username:"mark@test"

    },
    {
        id:3,
        name:"Joe",
        username:"joe@test"

    },
    {
        id:4,
        name:"Rob",
        username:"rob@test"

    }
])
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
});
