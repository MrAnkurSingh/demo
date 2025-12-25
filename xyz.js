
const button = document.getElementById('fetchBtn');
const container = document.getElementById('imageContainer');


async function getData(){
  try{
        container.innerHTML = 'Loading...';
    const response=await fetch('https://dog.ceo/api/breeds/image/random')
    const data= await response.json();

    const img = document.createElement('img');
    img.src = data.message;
   
    img.style.width = '400px';
    img.style.height = '400px'
    img.style.borderRadius = '10px';
    img.style.marginTop = '10px';

  
    container.innerHTML = '';
    container.appendChild(img);
  }catch(err){
console.log('error during getting data',err)
  }
  
}

button.addEventListener('click', getData)



async function postData(){
   try{
     console.log('data sending');
    const response=await fetch('https://httpbin.org/post',{
       'method':'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ name: 'Ankur Singh' }) 
    } )

    if(response.ok){
const newData=await response.json();
console.log('data sent successfully')
console.log(newData);

    }
    



   }catch(err){
    console.log('error while posting data',err)
   }
}
async function main(){
  const data=await getData();
  await postData();
}
