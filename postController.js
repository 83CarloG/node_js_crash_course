const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
    {id: 4, title: 'Post Four'}
];

const getPosts = () => posts;
const getPostsLength = () => posts.length;

export {getPostsLength};

export default getPosts;