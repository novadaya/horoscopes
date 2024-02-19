type Horoscope = {
    sign: string;
    startDate: Date;
    endDate: Date;
    image: string;
  };
  
  // Horoszkóp tömb létrehozása
  const horoscopeData: Horoscope[] = [
    {
      sign: 'Kos',
      startDate: new Date(2023, 2, 21),
      endDate: new Date(2023, 3, 19),
      image: 'kos.jpg',
    },
    {
      sign: 'Bika',
      startDate: new Date(2023, 3, 20),
      endDate: new Date(2023, 4, 20),
      image: 'bika.jpg',
    },
    // További csillagjegyek hozzáadása
    // ...
  ];
  
  //horoszkóp tömb használatára
  horoscopeData.forEach((horoscope) => {
    console.log(`Csillagjegy: ${horoscope.sign}`);
    console.log(`Kezdeti dátum: ${horoscope.startDate.toDateString()}`);
    console.log(`Végső dátum: ${horoscope.endDate.toDateString()}`);
    console.log(`Kép: ${horoscope.image}`);
    console.log('---');
  });