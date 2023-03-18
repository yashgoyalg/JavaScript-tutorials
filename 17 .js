let cities = ['Delhi', "mumbai", "JAIpur", "AgRa"];

for (i = 0; i < cities.length; i++) {
    let Lowercsecities = cities[i].toLowerCase();
    let FirstElement = Lowercsecities.slice(0, 1);
    Lowercsecities = Lowercsecities.replace(FirstElement, FirstElement.toUpperCase());
    console.log(Lowercsecities);
}