import React from 'react'
import capitalize from "lodash/capitalize";


const Card = ({img, title,price , desc}) => {
  return (
    <>
    <div className='flex flex-col w-80 bg-white rounded-md'>
      <img src={img} alt="Image"  className='w-80 h-72 object-cover  rounded-t-md pb-3'/>
      <div>
        <div className='mx-auto flex flex-row items-center justify-between px-1 pb-3'>
          <h2 className='text-lg font-semibold'>{capitalize(title)}</h2>
          <h3 className='bg-orange-500 px-1 rounded-xl max-py-0 mr-1'>${price}</h3>
        </div>
        <p className='px-1 text-gray-800'>{desc}</p>
      </div>
    </div>
    </>
  )
}

export default Card

// function camelize(text) {
//     const a = text.toLowerCase()
//         .replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
//     return a.substring(0, 1).toLowerCase() + a.substring(1);
// }
// function toCamelCase(str){
//   return str.split(' ').map(function(word,index){
//     // If it is the first word make sure to lowercase all the chars.
//     if(index == 0){
//       return word.toLowerCase();
//     }
//     // If it is not the first word only upper case the first char and lowercase the rest.
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join('');
// }

