import React, { useState } from 'react';
import './App.css';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredItems = [
    { id: 1, name: 'Audi Quattro', imagePath: 'https://cdn.pixabay.com/photo/2018/03/07/23/08/race-3207399_960_720.jpg' },
    { id: 2, name: 'Lancia Integrale', imagePath: 'https://images.unsplash.com/photo-1653597415522-0b3065fbb5de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80' },
    { id: 3, name: 'Mitsubishi Lancer Evolution', imagePath: 'https://images.unsplash.com/photo-1552768140-c2b0ba26cad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80' },
    { id: 4, name: 'Ford Fiesta', imagePath: 'https://cdn.pixabay.com/photo/2017/06/20/21/26/rally-2424896_960_720.jpg' },
    { id: 5, name: 'Hyundai i20', imagePath: 'https://cdn.pixabay.com/photo/2021/03/21/08/15/rally-6111436_960_720.jpg' },
    { id: 6, name: 'Volkswagen Polo', imagePath: 'https://cdn.pixabay.com/photo/2014/07/17/13/51/rally-395516_960_720.jpg' },
    { id: 7, name: 'Subaru Impreza', imagePath: 'https://cdn.pixabay.com/photo/2017/06/19/19/10/rally-2420645_960_720.jpg' },
    { id: 8, name: 'Volkswagen Beetle', imagePath: 'https://cdn.pixabay.com/photo/2019/06/17/19/57/race-car-4280787_960_720.jpg' },
    { id: 9, name: 'Peugeot', imagePath: 'https://cdn.pixabay.com/photo/2014/07/17/22/54/racing-car-395906_960_720.jpg' },
    { id: 10, name: 'BMW 750 m3', imagePath: 'https://cdn.pixabay.com/photo/2019/12/18/09/17/bmw-4703492_960_720.jpg' },
    { id: 11, name: 'Skoda fabia', imagePath: 'https://cdn.pixabay.com/photo/2014/07/17/23/11/san-marine-395932_960_720.jpg' },
    { id: 12, name: 'Citroen', imagePath: 'https://cdn.pixabay.com/photo/2017/09/16/16/19/rally-2755939_960_720.jpg' },
  ].filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()));
  

  return (
    <div className="App">
      <header className="fixed-nav">
        <nav>
          <ul>
            <li>
              <button onClick={scrollToTop}>Home</button>
            </li>
            <li>
              <button onClick={scrollToContact}>Contact</button>
            </li>
          </ul>
        </nav>
        <h1 className="title">Webb</h1>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
          className="search-bar"
        />
      </header>

      <main>
        <div id="gallery" className="gallery-section">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img src={item.imagePath} alt={item.name} />
            </div>
          ))}
        </div>

        <div id="contact" className="contact-section">
          <h2>Contact Information</h2>
          <p>Anton Terentev</p>
          <p>grohind@gmail.com</p>
          <p>WSB Merito</p>
        </div>
      </main>
    </div>
  );
}

export default App;


