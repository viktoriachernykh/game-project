let hero = {
  health: 10,
  heroic: true,
  inventory: [],
  weapon:
    {
      type: 'AK47',
      damage: 2,
      src: "images/gun.png"
    },
  heroObjects: [
    {
      objectName: 'Cat',
      objectAvatar: "images/cat.png",
    },
    {
      objectName: 'Dog',
      objectAvatar: "images/dog.png",
    },
    {
      objectName: 'Panda',
      objectAvatar: "images/panda.png",
    }
  ]
}

const user = document.getElementById('user')
let heroName = document.getElementById('heroname')
const heroIcon = document.getElementById('heroicon')
const heroPlay = document.getElementById('heroplayground')
const enemies = document.getElementById('enemies')

const statistic = document.createElement('p')
user.appendChild(statistic)

const changeHeroButton = document.createElement('button')
changeHeroButton.innerText = 'Change hero'
user.appendChild(changeHeroButton)
changeHeroButton.addEventListener('click', changeHero)

const changeNameButton = document.createElement('button')
changeNameButton.innerText = 'Change name'
user.appendChild(changeNameButton)
changeNameButton.addEventListener('click', changeName)

const heroes = hero.heroObjects
let counter = 0
displayHero(heroes[counter])

function changeHero() {
  counter = counter + 1
    if (counter > heroes.length - 1) {
      counter = 0
    }
  displayHero(heroes[counter])
}

function displayHero(x) {
  hero.name = x.objectName
  let avatar = x.objectAvatar
  let currentHero = document.createElement('p')
  currentHero.innerHTML = 
    `<img class="artObject" alt="Name" src="${avatar}">`
  heroIcon.innerHTML = ""
  heroIcon.appendChild(currentHero)
  displayStats()
}

function changeName() {
  let newName = prompt('Enter your name')
    if(!newName || newName === null) {
        setStandartName()
    } else {
  localStorage.setItem('name', newName)
  hero.name = newName
  displayStats()
  }
}

// rest
const home = document.createElement('img')
home.src = "images/home.png"
home.id = 'inn'
heroPlay.appendChild(home)
home.addEventListener('click', rest)

function rest(person) {
  person = hero
    if (person.health === 10) {
      window.alert("Health of the person already 10")
    } 
  person.health = 10
  displayStats(person)
  return person
}

// pickUpItem
const item = document.createElement('img')
item.src = "images/gun.png"
item.id = 'dagger'
heroPlay.appendChild(item)
item.addEventListener('click', pickUpItem)

let heroInventory
function pickUpItem(person) {
  person = hero
  let newWeapon = document.createElement('object')
  newWeapon = {
    type: 'dagger',
    damage: 2
  }
  heroInventory = person.inventory
  heroInventory.push(newWeapon)
  displayStats()
}

// equipWeapon
const weaponBag = document.createElement('img')
weaponBag.src = "images/bag.png"
weaponBag.id = 'bag'
heroPlay.appendChild(weaponBag)
weaponBag.addEventListener('click', equipWeapon)

let currentWeapon
function equipWeapon(person) {
  person = hero
  person.weapon.type = heroInventory[0].type
  person.weapon.damage = heroInventory[0].damage
  displayStats()
}

// +enemy -health
let enemy = document.createElement('img')
enemy.src = "images/enemy.png"
enemy.health = 20
let enemyFile = document.createElement('p')
enemyFile.innerHTML = `Enemy Health: ${enemy.health}`
enemies.appendChild(enemy)
enemies.appendChild(enemyFile)
enemy.addEventListener('click', healthDamage)

function healthDamage() {
  hero.health = Number(hero.health) - 1
  if (hero.inventory.length < 1) {
    window.alert("Pick some items before fighting the enemy!")
  }
  hero.inventory.length = Number(hero.inventory.length) - 1
  enemy.health = Number(enemy.health) - 1
  if (Number(enemy.health) < 1) {
    enemy.parentNode.removeChild(enemy)
    enemyFile.parentNode.removeChild(enemyFile)
    window.alert("You defeated the enemy!")
  }
  enemyFile.innerHTML = `Enemy Health: ${enemy.health}`
  displayStats()
}

function displayStats() {
  const stats =
  `
    Name: ${hero.name}<br>
    Health: ${hero.health}<br>
    Inventory: ${hero.inventory.length}<br>
    Current weapon
    type: ${hero.weapon.type}
    damage: ${hero.weapon.damage}
  `
  statistic.innerHTML = `<br>${stats}`
}

displayStats()