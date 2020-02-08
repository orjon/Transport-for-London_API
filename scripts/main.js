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
        // displayLines()
      })
  }

  getLines()

})
