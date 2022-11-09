import React from 'react';

const AddFood = () => {
    const handleSubmit= event =>{
        event.preventDefault();
       const form = event.target;
       const title = form.title.value;
       const img = form.img.value;
       const price = form.price.value;
       const description = form.description.value;
       
       const food ={
        title,
        img,
        price,
        description
       }

       fetch('http://localhost:5000/services',{
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(food)
       })
       .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review add succssfully')
                form.reset();
            }
        })
        .catch(error => console.error(error))

    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold text-2xl my-5'>Add food</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-control grid  grid-cols-1 md:grid-cols-2 gap-4">
                
                <input type="text" name='title' placeholder="Title" className="input input-bordered  " required />
                <input type="text" name='img' placeholder="Image link" className="input input-bordered  " required/>
                <input type="text" name='price' placeholder="Price" className="input input-bordered  "required />
                <input type="text" name='description' placeholder="Description" className="input input-bordered" required/>
                
            </div>
            <input  className="btn btn-wide my-4" type="submit" value='Add ' />
            </form>
          
        </div>
    );
};

export default AddFood;