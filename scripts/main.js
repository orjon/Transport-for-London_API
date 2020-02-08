window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    console.log('It is working!')

    // document.getElementById('#id').addEventListener('click', buttonAction)

  }

  // const buttonAction = function(e) {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   $('#id').text('text')
  //}

  console.log('City Mapper API')
  const $lines = $('.lines')
  var lines = []

  function getLines() {
    console.log('getting specific countries')
    $.ajax({
      method: 'GET',
      url: 'https://api.tfl.gov.uk/line/mode/tube/status'
    })
      .then(response => {
        lines = response
        lines.sort()
        console.log(lines)
        displayLines()
      })
  }

  function displayLines() {
    $lines.empty()
    lines.forEach(line => {
      $lines.append(`
        <div class='card line'>
          <div class='details'>
            <h3 class='row'>${line.name}</h3>
            <div class='row'>
              <div class='labels'>
                <p>Service: </p>
              </div>
              <div class='data'>
                <p>${line.lineStatuses[0].statusSeverityDescription}</p>
              </div>
            </div>
          </div>
        </div>
        `)

    })
  }

  getLines()


})



  //
  //
  //
  // console.log(countries[0])
  //
  // function displayCountries() {
  //   $countries.empty()
  //   countries.forEach(country => {
  //
  //
  //     $countries.append(`
  //       <div class='card country'>
  //         <div class='details'>
  //           <h3 class='row'><a href='https://en.wikipedia.org/wiki/${country.name}'>${country.name}&nbsp</a>(${country.alpha2Code})</h3>
  //           <h4 class='row'>${country.nativeName}</h4>
  //           <div class='row'>
  //             <img src=${country.flag} alt="Flag of ${country.name}" />
  //           </div>
  //
  //           <div class='row'>
  //             <div class='labels'>
  //               <p>Capital</p>
  //             </div>
  //             <div class='data'>
  //               <p>${country.capita
