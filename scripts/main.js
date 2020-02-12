window.addEventListener('DOMContentLoaded', () => {

  window.onload = function (){
    console.log('Transport for London API')
    console.log('www.orjon.com')

    // document.getElementById('#id').addEventListener('click', showStops)

  }

  // const buttonAction = function(e) {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   $('#id').text('text')
  //}

  const $lines = $('.lines') //
  const $stops = $('.stops')
  var lines = []
  var stops = []


  // function showStations() {
  //
  // }

  function getLines() {
    $lines.empty()
    console.log('Getting Line information')
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
    // $lines.empty()
    lines.forEach(line => {
      var lineReason = ''
      if (line.lineStatuses[0].reason) {
        lineReason = line.lineStatuses[0].reason
        var cropIndex = lineReason.indexOf(':') + 1
        console.log(cropIndex)
        lineReason = lineReason.substring(cropIndex)
      }
      // this.addClass(line.name)
      $lines.append(`
        <div class='card line ${line.id}'>
          <div class='details'>
            <div class='row lineColor ${line.name}'></div>
            <div class='row lineName'>
              <h3 class='name'>${line.name}</h3>
              <p class='status'>${line.lineStatuses[0].statusSeverityDescription}</p>
            </div>
            <div class='row'>
              <div class='data'>
                <p>${lineReason}</p>
              </div>
            </div>
          </div>
        </div>
        `)

    })
  }

  function getStops() {
    console.log('Getting stop information')
    $.ajax({
      method: 'GET',
      url: 'https://api.tfl.gov.uk/line/victoria/StopPoints'

    })
      .then(response => {
        stops = response
        // stops.sort()
        console.log('stops:')
        console.log(stops)
        displayStops()
      })
  }

  function displayStops() {
    $stops.empty()
    stops.forEach(stop => {

      $stops.append(`
        <div class='details'>
          <div class='row'>
            <div class='data'>
              <p>${stop.commonName}</p>
            </div>
          </div>
        </div>
        `)

    })
  }

  getLines()
  getStops()



})
