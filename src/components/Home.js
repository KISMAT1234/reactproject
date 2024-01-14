import axios from 'axios';
function Home(){
const getUser = () => {
  axios.get('http://localhost:8000/user').then((res)=>{
   console.log(res.data);
  }).catch((err)=>{
    console.error(err)
  })
}
getUser();

    return <div>
      <h1>Home Component</h1>
    </div>
};
export default Home;