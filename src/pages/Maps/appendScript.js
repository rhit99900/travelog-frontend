export const appendScript = () => {
    const script = document.createElement("script");
    script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyCszEBkmpg3ja7e58yCA5MNDF1dkJ8hikA"';
    script.async = true;
    document.body.appendChild(script);
}