const summaryItemsContainer = document.querySelector(".summary-items")

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    const dataScore = data.map((item) => {
        const { category, score, icon, alt, itemClass, textClass } = item
        return `
        <div class="item ${itemClass}">
            <img alt="${alt}" class="icon" src=${icon}>
            <p class=${textClass}>${category}</p>
            <p class="score-items">${score}<span>  / 100</span></p>
      </div>`

    }).join('')
    console.log(dataScore)
    summaryItemsContainer.innerHTML = dataScore
  })
  .catch(error => console.error(error));
