import React from "react"
function JournalPage() {


    //eli tänne me halutaan jonkin näköinen formi mihin täyttää unta, sen alapuolelle uuden unen 
    //kirjoitusmahdollisuus. 
    //Ne eri unet vois itseasiassa olla tabien alla. uni1 ni2 uni3 jne ja kun klikkaa niin pääsee
    //jatkamaan sen tietyn unen kirjoittamista. Hmmm mitenköhän tommoinen tehdään. 
    //mihin se yksittäisen tabin alla oleva unidata tallennetaan, tuleeko se stateen, miten saadaan luotua uusi 
    //state on demand?

    //sitten tietenkin jokaisen unen kohdalle tallennuspainike
    



    return (
      <div>
        <h1>Journaling page</h1>
        <p>dreams that are written down will be saved to a database</p>
        <p>This page being open there will be possibility for writing multiple dreams<br/> 
          at the same time and saving or discarding them independently
        </p>
      </div>
    )
  }

  export default JournalPage