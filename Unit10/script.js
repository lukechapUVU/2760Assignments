document.querySelector('header > h1').innerText = 'Hotel California';
document.querySelector('header > h2').innerText = 'Such a Lovely Place';

async function getHotelData() {
    try {
        const response = await fetch('../Unit10/hotel.json');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

let hotelData = {};
getHotelData().then(data => hotelData = data);

let hotelButtons = document.querySelectorAll('button');
hotelButtons.forEach(button => {
    button.addEventListener('click', hotelInfo)
})


function hotelInfo(event) {
    let hotelChoice = hotelData.hotel.find(hotel => {
        return event.target.id === hotel.name.toLowerCase();
    })

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    document.querySelector('#picture').src = `imgs/${hotelChoice.picture}`;
}