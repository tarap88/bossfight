const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100,
        level: 1
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50,
        level: 1
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    money: 50
}

let gold = 0
drawMonsters()

function stabMonster() {
    let stab = 0

    for (let i = 0; i < heroes.length; i++) {
        stab += heroes[i].damage
    }
    console.log('stab', stab);

    boss.health -= stab;
    console.log('monster stabbed', boss.health)
    bossDead()
}

function monsterAttack() {
    let damageBoss = boss.damage

    for (let i = 0; i < heroes.length; i++) {
        heroes[i].health -= damageBoss;

        // console.log(heroes[i].health) 
    }

}
setInterval(monsterAttack, 5000)

function bossDead() {
    if (boss.health <= 0) {
        window.alert('Boss Deaddd!')
        boss.maxHealth += 50;
        gold += boss.money;
        boss.level++
        boss.health = boss.maxHealth
    }
    console.log(boss.maxHealth, boss.health, gold, boss.level)

    drawMonsters()
}

function drawMonsters() {
    let heroHealth = heroes[0].health
    let sidekickHealth = heroes[1].health

    let heroHealthElm = document.getElementById('hero-health')
    heroHealthElm.innerHTML = `<span>Health ${heroes[0].health}</span>`

    let sidekickHealthElm = document.getElementById('sidekick-health')
}

