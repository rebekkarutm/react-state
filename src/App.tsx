//importing all the information about the buttons and cards
import Card from './Card'
import Button from './Button';

//importing images for the card fronts
import Bulbasaur from './bulbasaur.png';
import Charmander from './charmander.png';
import Squirtle from './squirtle.png';

// creating the "cards" to identify the card fronts
function App() {
  const cards = [
    {
      cardFront: Bulbasaur
    },
    {
      cardFront: Charmander
    },
    {
      cardFront: Squirtle
    }
  ]

  return (
    //using a map function to return all the cards
    //using display flex and justify content to align the cards
    //declaring the text and clickText
    <>
    <div style={{display: 'flex', justifyContent: 'space-around', padding: '10px'}} >
      {cards.map((card)=>{
        return (<div key={card.cardFront}>
          <Card data={card}></Card>
        </div>)
      })}
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '10px', width: '100%', minWidth: '532px'}} >
      <Button text='Catch Bulbasaur' clickText='You caught Bulbasaur!' ></Button>
      <Button text='Catch Charmander' clickText='You caught Charmander!' ></Button>
      <Button text='Catch Squirtle' clickText='You caught Squirtle!' ></Button>
    </div>
    </>
  );
}

export default App;