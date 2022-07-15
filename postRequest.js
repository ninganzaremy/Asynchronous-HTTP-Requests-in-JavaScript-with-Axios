const axios = require('axios').default;
const newPost ={
    userId: 1,
    title: 'A new Post',
    body: 'This is the body of a new post'
};
const sendPostRequest =  async () => {
    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/posts',newPost);
        console.log(resp.data);

    } catch (err) {
        console.error(err);

    }
}
sendPostRequest();