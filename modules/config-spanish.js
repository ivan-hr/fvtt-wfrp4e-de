Hooks.once("setup", async function () {

const WFRP4E = {}

CONFIG.JournalEntry.noteIcons = {
    "Marcador": "systems/wfrp4e/icons/buildings/point_of_interest.png",
    "Aldea 1": "systems/wfrp4e/icons/buildings/village1.png",
    "Aldea 2": "systems/wfrp4e/icons/buildings/village2.png",
    "Aldea 3": "systems/wfrp4e/icons/buildings/village3.png",
    "Barracones Imperiales": "systems/wfrp4e/icons/buildings/empire_barracks.png",
    "Bosque Encantado": "systems/wfrp4e/icons/buildings/haunted_wood.png",
    "Boticario": "systems/wfrp4e/icons/buildings/apothecary.png",
    "Camino": "systems/wfrp4e/icons/buildings/roads.png",
    "Campamento Orco": "systems/wfrp4e/icons/buildings/orc_city.png",
    "Cementerio": "systems/wfrp4e/icons/buildings/cemetery.png",
    "Cerveza Enana": "systems/wfrp4e/icons/buildings/dwarf_beer.png",
    "Ciudad Bretoniana 1": "systems/wfrp4e/icons/buildings/bret_city1.png",
    "Ciudad Bretoniana 2": "systems/wfrp4e/icons/buildings/bret_city2.png",
    "Ciudad Bretoniana 3": "systems/wfrp4e/icons/buildings/bret_city3.png",
    "Ciudad Imperial 1": "systems/wfrp4e/icons/buildings/empire_city1.png",
    "Ciudad Imperial 2": "systems/wfrp4e/icons/buildings/empire_city2.png",
    "Ciudad Imperial 3": "systems/wfrp4e/icons/buildings/empire_city3.png",
    "Ciudad Kislevita 1": "systems/wfrp4e/icons/buildings/kislev_city1.png",
    "Ciudad Kislevita 2": "systems/wfrp4e/icons/buildings/kislev_city2.png",
    "Ciudad Kislevita 3": "systems/wfrp4e/icons/buildings/kislev_city3.png",
    "Colina de Castillo 1": "systems/wfrp4e/icons/buildings/castle_hill1.png",
    "Colina de Castillo 2": "systems/wfrp4e/icons/buildings/castle_hill2.png",
    "Colina de Castillo 3": "systems/wfrp4e/icons/buildings/castle_hill3.png",
    "Colina de la Torre": "systems/wfrp4e/icons/buildings/tower_hill.png",
    "Colina Encantada": "systems/wfrp4e/icons/buildings/haunted_hill.png",
    "Comida": "systems/wfrp4e/icons/buildings/food.png",
    "Comida 2": "systems/wfrp4e/icons/buildings/food2.png",
    "Corte": "systems/wfrp4e/icons/buildings/court.png",
    "Cueva 1": "systems/wfrp4e/icons/buildings/cave1.png",
    "Cueva 2": "systems/wfrp4e/icons/buildings/cave2.png",
    "Cueva 3": "systems/wfrp4e/icons/buildings/cave3.png",
    "Culto Bretoniano": "systems/wfrp4e/icons/buildings/bretonnia_worship.png",
    "Culto del Caos": "systems/wfrp4e/icons/buildings/chaos_worship.png",
    "Dólmenes": "systems/wfrp4e/icons/buildings/standing_stones.png",
    "Elfos Silvanos 1": "systems/wfrp4e/icons/buildings/welves1.png",
    "Elfos Silvanos 2": "systems/wfrp4e/icons/buildings/welves2.png",
    "Elfos Silvanos 3": "systems/wfrp4e/icons/buildings/welves3.png",
    "Establos": "systems/wfrp4e/icons/buildings/stables.png",
    "Fuerte Enano 1": "systems/wfrp4e/icons/buildings/dwarf_hold1.png",
    "Fuerte Enano 2": "systems/wfrp4e/icons/buildings/dwarf_hold2.png",
    "Fuerte Enano 3": "systems/wfrp4e/icons/buildings/dwarf_hold3.png",
    "Granja": "systems/wfrp4e/icons/buildings/farms.png",
    "Herrero": "systems/wfrp4e/icons/buildings/blacksmith.png",
    "Puesto de Guardia": "systems/wfrp4e/icons/buildings/guards.png",
    "Magia": "systems/wfrp4e/icons/buildings/magic.png",
    "Metal": "systems/wfrp4e/icons/buildings/metal.png",
    "Montaña 1": "systems/wfrp4e/icons/buildings/mountains1.png",
    "Montaña 2": "systems/wfrp4e/icons/buildings/mountains2.png",
    "Muro de Castillo": "systems/wfrp4e/icons/buildings/castle_wall.png",
    "Orcos": "systems/wfrp4e/icons/buildings/orcs.png",
    "Portal del Caos": "systems/wfrp4e/icons/buildings/chaos_portal.png",
    "Posada 1": "systems/wfrp4e/icons/buildings/inn1.png",
    "Posada 2": "systems/wfrp4e/icons/buildings/inn2.png",
    "Pantano": "systems/wfrp4e/icons/buildings/swamp.png",
    "Pergamino": "systems/wfrp4e/icons/buildings/scroll.png",
    "Puerto": "systems/wfrp4e/icons/buildings/port.png",
    "Rebaño de Hombres Bestia 1": "systems/wfrp4e/icons/buildings/beastmen_camp1.png",
    "Rebaño de Hombres Bestia 2": "systems/wfrp4e/icons/buildings/beastmen_camp2.png",
    "Ruinas": "systems/wfrp4e/icons/buildings/ruins.png",
    "Serrería": "systems/wfrp4e/icons/buildings/lumber.png",
    "Sigmar": "systems/wfrp4e/icons/buildings/sigmar_worship.png",
    "Templo": "systems/wfrp4e/icons/buildings/temple.png",
    "Textil": "systems/wfrp4e/icons/buildings/textile.png",
    "Torre 1": "systems/wfrp4e/icons/buildings/tower1.png",
    "Torre 2": "systems/wfrp4e/icons/buildings/tower2.png",
    "Torre de Mago": "systems/wfrp4e/icons/buildings/wizard_tower.png",
    "Ulric": "systems/wfrp4e/icons/buildings/ulric_worship.png"
}

game.wfrp4e.config.symptomEffects = {
        "blight": {
            name: "WFRP4E.Symptom.Blight",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "symptom": true,
                    "script": `
                        let difficulty = ""
                        if (this.effect.name.includes("Moderado"))
                            difficulty = "easy"
                        else if (this.effect.name.includes("Severo"))
                            difficulty = "average"
                        else
                            difficulty = "veasy"
    
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {context : {failure : args.actor.name + " muere por el Decaimiento"}, absolute: {difficulty}, appendTitle : " - Decaimiento"}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            args.actor.addCondition("dead")
                                    })
                                })
                        }`
                }
            }
        },
        "buboes": {
            name: "WFRP4E.Symptom.Buboes",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }
            `}
            }
        },
        "convulsions": {
            name: "WFRP4E.Symptom.Convulsions",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                        let modifier = 0
                        if (this.effect.name.includes("Moderado"))
                            modifier = -20
                        else
                            modifier = -10
                        
                        let applicableCharacteristics = ["ws", "bs", "s", "ag", "t", "dex"]
                        if (args.type == "weapon")
                            args.prefillModifiers.modifier += modifier
                        else if (args.type == "characteristic")
                        {
                            if (applicableCharacteristics.includes(args.item))
                                args.prefillModifiers.modifier += modifier
                        }
                        else if (args.type == "skill")
                        {
                            if (applicableCharacteristics.includes(args.item.characteristic.key))
                                args.prefillModifiers.modifier += modifier
                        }`
                }
            }
        },
        "coughsandsneezes": {
            name: "WFRP4E.Symptom.CoughsandSneezes",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "fever": {
            name: "WFRP4E.Symptom.Fever",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                       
                    let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
    
                    if (args.type == "weapon")
                        args.prefillModifiers.modifier -= 10
                    else if (args.type == "characteristic")
                    {
                        if (applicableCharacteristics.includes(args.item))
                            args.prefillModifiers.modifier -= 10
                    }
                    else if (args.type == "skill")
                    {
                        if (applicableCharacteristics.includes(args.item.characteristic.key))
                            args.prefillModifiers.modifier -= 10
                    }`,
                    "otherEffects": ["blight", "wounded"]
                }
            }
        },
        "flux": {
            name: "WFRP4E.Symptom.Flux",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "lingering": {
            name: "WFRP4E.Symptom.Lingering",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "symptom": true
                }
            }
        },
        "gangrene": {
            name: "WFRP4E.Symptom.Gangrene",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                        if (args.type == "characteristic" && args.item == "fel")
                        {
                            if (args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }
                    `
                }
            }
        },
        "malaise": {
            name: "WFRP4E.Symptom.Malaise",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prepareData",
                    "symptom": true,
                    "script": `
                    if (game.user.isUniqueGM)
                    {
                        let fatigued = args.actor.hasCondition("fatigued")
                        if (!fatigued)
                        {
                            args.actor.addCondition("fatigued")
                            ui.notifications.notify("Añadido Fatigado a \" + args.actor.name + \" que no puede ser quitado hasta que haya desaparecido el síntoma Malestar.")
                        }
                    }
                    `
                }
            }
        },
        "nausea": {
            name: "WFRP4E.Symptom.Nausea",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "rollTest",
                    "symptom": true,
                    "script": `
                    if (this.actor.owner && args.test.result.outcome == "failure")
                    {
                        let applicableCharacteristics = ["ws", "bs", "s", "fel", "ag", "t", "dex"]
                        if (applicableCharacteristics.includes(args.test.characteristicKey))
                            this.actor.addCondition("stunned")
    
                    }
                    `
                }
            }
        },
        "pox": {
            name: "WFRP4E.Symptom.Pox",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "prefillDialog",
                    "symptom": true,
                    "script": `
                       
                        if (args.type == "characteristic" && args.item == "fel")
                                args.prefillModifiers.modifier -= 10
                        else if (args.type == "skill")
                        {
                            if (args.item.characteristic.key == "fel")
                                args.prefillModifiers.modifier -= 10
                        }`
                }
            }
        },
        "wounded": {
            name: "WFRP4E.Symptom.Wounded",
            icon: "modules/wfrp4e-core/icons/diseases/disease.png",
            transfer: true,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "symptom": true,
                    "script": `
                        if (this.actor.isOwner)
                        {
                            args.actor.setupSkill(game.i18n.localize("NAME.Endurance"), {absolute: {difficulty : "average"}}).then(setupData => {
                                args.actor.basicTest(setupData).then(test => 
                                    {
                                        if (test.result.outcome == "failure")
                                            fromUuid("Compendium.wfrp4e-core.items.kKccDTGzWzSXCBOb").then(disease => {
                                                args.actor.createEmbeddedDocuments("Item", [disease.toObject()])
                                            })
                                    })
                                })
                        }`
                }
            }
        }
    }

game.wfrp4e.config.effectTriggers = {
    "invoke" : "Invocado Manualmente",
    "oneTime" : "Inmediato",
    "addItems" : "Añadir Objetos",
    "dialogChoice" : "Elección de Diálogo",
    "prefillDialog" : "Prellenar Diálogo",
    "update" : "Al Actualizar",
    "prePrepareData" : "Pre-Preparar Datos",
    "prePrepareItems" : "Pre-Preparar Objetos de Actor",
    "prepareData" : "Preparar Datos",
    "preWoundCalc" : "Pre-Cálculo de Heridas",
    "woundCalc" : "Cálculo de Heridas",
    "calculateSize" : "Cálculo de Tamaño",
    "preAPCalc" : "Pre-Cálculo de Armadura",
    "APCalc" : "Cálculo de Armadura",
    "preApplyDamage" : "Pre-Aplicar Daño",
    "applyDamage" : "Aplicar Daño",
    "preTakeDamage" : "Pre-Recibir Daño",
    "takeDamage" : "Recibir Daño",
    "preApplyCondition" : "Pre-Aplicar Condición",
    "applyCondition" : "Aplicar Condición",
    "prePrepareItem" : "Pre-Preparar Objeto",
    "prepareItem" : "Preparar Objeto",
    "preRollTest" : "Pre-Tirar Chequeo",
    "preRollWeaponTest" : "Pre-Tirar Chequeo de Arma",
    "preRollCastTest" : "Pre-Tirar Chequeo de Lanzamiento",
    "preChannellingTest" : "Pre-Tirar Chequeo de Canalización",
    "preRollPrayerTest" : "Pre-Tirar Chequeo de Plegaria",
    "preRollTraitTest" : "Pre-Tirar Chequeo de Rasgo",
    "rollTest" : "Tirar Chequeo",
    "rollIncomeTest" : "Tirar Chequeo de Salario",
    "rollWeaponTest" : "Tirar Chequeo de Arma",
    "rollCastTest" : "Tirar Chequeo de Lanzamiento",
    "rollChannellingTest" : "Tirar Chequeo de Canalización",
    "rollPrayerTest" : "Tirar Chequeo de Plegaria",
    "rollTraitTest" : "Tirar Chequeo de Rasgo",
    "preOpposedAttacker" : "Pre-Enfrentado Atacante",
    "preOpposedDefender" : "Pre-Enfrentado Defensor",
    "opposedAttacker" : "Enfrentado Atacante",
    "opposedDefender" : "Enfrentado Defensor",
    "calculateOpposedDamage" : "Calcular Daño Enfrentado",
    "targetPrefillDialog" : "Prellenar Diálogo del Objetivo",
    "getInitiativeFormula" : "Calcular Iniciativa",
    "endTurn" : "Fin del Turno",
    "startTurn" : "Comienzo del Turno",
    "endRound" : "Fin del Asalto",
    "endCombat" : "Fin del Combate"
}

game.wfrp4e.config.effectPlaceholder = {

    "invoke" : 
    `Este efecto sólo se aplica al pulsar el botón de Invocar. Puede ser asíncrono.
    args:

    ninguno`,
    "oneTime" : 
    `Este efecto ocurre una vez, inmediatamente al aplicar. Puede ser asíncrono.
    args:

    actor : actor propietario del efecto
    `,

    "addItems" : 
    `Como los efectos Inmediatos, ocurre una vez, pero el efecto permanece. También permite al efecto borrar los objetos añadidos cuando el efecto se elimina. Puede ser asíncrono.
    args:
    
    actor : actor propietario del efecto
    `,

    "prefillDialog" : 
    `Este efecto se aplica antes de reproducir el diálogo de tirada, y debería cambiar los valores prellenados en la sección de bonos. Puede ser asíncrono.
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: el objeto del tipo mencionado usado
    options: otros detalles sobre el chequeo (options.rest u options.mutate por ejemplo)
    
    Ejemplo: 
    if (args.type == "skill" && args.item.name == "Atletismo") args.prefillModifiers.modifier += 10`,

    "update" : 
    `este efecto se ejecuta cuando un actor o documento embebido es cambiado. Puede ser asíncrono.
    args:
    item: si un objeto es modificado, se provee como un argumento
    effect: si un efecto es modificado, se provee como un argumento
    `,

    "prePrepareData" : 
    `Este efecto se aplica antes de calcular cualquier dato del actor. No puede ser asíncrono.
    args:

    actor : actor propietario del efecto
    `,

    "prePrepareItems" : 
    `Este efecto se aplica antes de que los objetos se ordenen y calculen. No puede ser asíncrono.

    actor : actor propietario del efecto
    `,

    "prepareData" : 
    `Este efecto se aplica tras calcular y procesar los datos del actor. No puede ser asíncrono.

    args:

    actor : actor propietario del efecto
    `,

    "preWoundCalc" : 
    `Este efecto se aplica justo antes del cálculo de heridas, ideal para cambiar atributos o añadir multiplicadores. No puede ser asíncrono.

    actor : actor propietario del efecto
    sb : Bonificador por Fuerza
    tb : Bonificador por Resistencia
    wpb : Bonificador por Voluntad
    multiplier : {
        sb : Multiplicador de BF
        tb : Multiplicador de BR
        wpb : Multiplicador de BVol
    }

    p.ej. para Recio: "args.multiplier.tb += 1"
    `,

    "woundCalc" : 
    `Este efecto ocurre tras el cálculo de heridas, ideal para multiplicar el resultado. No puede ser asíncrono.

    args:

    actor : actor propietario del efecto
    wounds : heridas calculadas

    p.ej. para Plaga: "wounds *= 5"
    `,

    "calculateSize" : 
    `Este efecto se aplica tras el cálculo de tamaño, que puede ser invalidado. No puede ser asíncrono.
    args:
    size : Valor del tamaño
    p.ej. para Pequeño: "args.size = 'sml'"
    `,

    "preAPCalc" : `Este efecto se aplica antes de calcular los PA. No puede ser asíncrono.
    args:
    AP : Objeto de Armadura
    e.g. args.AP.head.value += 1
    `,
    "APCalc" : `Este efecto se aplica tras calcular los PA. No puede ser asíncrono.
    args:
    AP : Objeto de Armadura
    e.g. args.AP.head.value += 1
    `,

    "preApplyDamage" : 
    `Este efecto ocurre antes de aplicar daño en un chequeo enfrentado. Puede ser asíncrono.
    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    weaponProperties : objeto de cualidades/defectos del arma atacante
    applyAP : si los PA reducen el daño
    applyTB : si la BR reduce el daño
    totalWoundLoss : Total de Heridas Perdidas ANTES DE LAS REDUCCIONES
    AP : Objeto de la PA del defensor
    `,
    
    "applyDamage" : 
    `Este efecto ocurre después calcular el daño en un chequeo enfrentado, pero antes de actualizar los datos del actor. Puede ser asíncrono.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualización de daño
    messageElements : despliegue de secuencias usadas para mostrar cómo se calculó la mitigación de daño
    extraMessages : texto aplicado al final de updateMsg
    `,

    "preTakeDamage" : 
    `Este efecto ocurre antes de recibir daño en un chequeo enfrentado. Puede ser asíncrono.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    weaponProperties : objeto de cualidades/defectos del arma atacante
    applyAP : si PA está reduciendo el daño
    applyTB : si BR está reduciendo el daño
    totalWoundLoss : Pérdida Total de Heridas ANTES DE REDUCCIONES
    AP : objeto de los PA del defensor
    `,
    
    "takeDamage" : 
    `Este efecto ocurre tras calcular el daño en un chequeo enfrentado, pero antes de actualizar los datos del actor. Puede ser asíncrono.

    args:

    actor : actor que recibe daño
    attacker : actor atacante
    opposedTest : objeto que contiene los datos del chequeo enfrentado
    damageType : tipo de daño seleccionado (ignora BR, PA, etc.)
    totalWoundLoss : Heridas perdidas tras mitigaciones
    AP : datos sobre los PA usados
    updateMsg : secuencia inicial para el mensaje de actualización de daño
    messageElements : despliegue de secuencias usadas para mostrar cómo se calculó la mitigación de daño
    extraMessages : texto aplicado al final de updateMsg
    `,

    "preApplyCondition" :  
    `Este efecto ocurre antes de aplicar los efectos de una condición. Puede ser asíncrono.

    args:

    effect : condición aplicada
    data : {
        msg : Mensaje de chat sobre la aplicación de la condición
        <otros datos, posiblemente específicos de la condición>
    }
    `,

    "applyCondition" :  
    `Este efecto ocurre tras aplicar los efectos de una condición. Puede ser asíncrono.

    args:

    effect : condición aplicada
    data : {
        msg : Mensaje de chat sobre la aplicación de la condición
        <otros datos, posiblemente específicos de la condición>
    }
    `,
    "prePrepareItem" : 
    `Este efecto se aplica antes de procesar un objeto con datos del actor. No puede ser asíncrono.

    args:

    item : objeto a procesar
    `,

    "prepareItem" : 
    `Este efecto se aplica tras procesar un objeto con datos del actor. No puede ser asíncrono.

    args:

    item : objeto procesado
    `,

    "preRollTest": 
    `Este efecto se aplica antes de calcular un chequeo. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollWeaponTest" :  
    `Este efecto se aplica antes de calcular un chequeo de arma. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollCastTest" :  
    `Este efecto se aplica antes de calcular un chequeo de lanzamiento. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preChannellingTest" :  
    `Este efecto se aplica antes de calcular un chequeo de canalización. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollPrayerTest" :  
    `Este efecto se aplica antes de calcular un chequeo de plegaria. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preRollTraitTest" :  
    `Este efecto se aplica antes de calcular un chequeo de rasgo. Puede ser asíncrono.

    args:

    testData: Todos los datos necesarios para evaluar los resultados del chequeo
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollTest" : 
    `Este efecto se aplica tras calcular un chequeo. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollIncomeTest" : 
    `Este efecto se aplica tras calcular un chequeo de salario. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollWeaponTest" : 
    `Este efecto se aplica tras calcular un chequeo de arma. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollCastTest" : 
    `Este efecto se aplica tras calcular un chequeo de lanzamiento. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollChannellingTest" : 
    `Este efecto se aplica tras calcular un chequeo de canalización. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollPrayerTest" : 
    `Este efecto se aplica tras calcular un chequeo de plegaria. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "rollTraitTest" : 
    `Este efecto se aplica tras calcular un chequeo de rasgo. Puede ser asíncrono.

    args:

    test: objeto que contiene información del chequeo y resultado
    cardOptions: Datos para la vista, título, plantilla, etc. de la tarjeta
    `,

    "preOpposedAttacker" : 
    `Este efecto se aplica antes de comenzar el cálculo del resultado de un chequeo enfrentado, como atacante. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "preOpposedDefender" : 
    `Este efecto se aplica antes de comenzar el cálculo del resultado de un chequeo enfrentado, como defensor. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "opposedAttacker" : 
    `Este efecto se aplica tras comenzar el cálculo del resultado de un chequeo enfrentado, como atacante. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "opposedDefender" : 
    `Este efecto se aplica tras comenzar el cálculo del resultado de un chequeo enfrentado, como defensor. Puede ser asíncrono.

    args:

    attackerTest: objeto de chequeo del atacante
    defenderTest: objeto de chequeo del defensor
    opposedTest: objeto del chequeo enfrentado, antes del cálculo
    `,

    "calculateOpposedDamage" : 
    `Este efecto se aplica durante el cálculo del daño de un chequeo enfrentado. Este efecto se ejecuta en el actor atacante. Puede ser asíncrono.

    args:

    damage : daño inicial antes de multiplicadores
    damageMultiplier : multiplicadores calculado en base a la diferencia de tamaño
    sizeDiff : diferencia numérica de tamaño, que será usada para añadir dañina/impactante
    opposedTest : objeto del chequeo enfrentado,
    addDamaging : si añadir la cualidad Dañina 
    addImpact : si añadir la cualidad Impactante
    `,

    "getInitiativeFormula" : 
    `Este efecto se ejecuta al determinar la iniciativa del actor. No puede ser asíncrono.

    args:

    initiative: Valor calculado de iniciativa
    `,

    "targetPrefillDialog" : 
    `Este efecto se aplica a otro actor cuando hacen objetivo a este actor, y debería cambiar los valores prellenados en la sección de bonos. Puede ser asíncrono.
    
    args:

    prefillModifiers : {modifier, difficulty, slBonus, successBonus}
    type: string, 'weapon', 'skill' 'characteristic', etc.
    item: el objeto del tipo mencionado usado
    options: otros detalles sobre el chequeo (options.rest u options.mutate por ejemplo)
    
    Ejemplo: 
    if (args.type == "skill" && args.item.name == "Athletics") args.prefillModifiers.modifier += 10`,

    "endTurn" : 
    `Este efecto se ejecuta al final del turno del actor. Puede ser asíncrono.

    args:

    combat: combate actual
    `,

    "startTurn" : 
    `Este efecto se ejecuta al comienzo del turno del actor. Puede ser asíncrono.
    
    args:
    
    combat: combate actual
    `,

    "endRound" :  
    `Este efecto se ejecuta al final del asalto. Puede ser asíncrono.

    args:

    combat: combate actual
    `,
    
    "endCombat" :  
    `Este efecto se ejecuta al terminar el combate. Puede ser asíncrono.

    args:

    combat: combate actual
    `,

    "this" : 
    `
    
    Todos los efectos tienen acceso a: 
        this.actor : actor ejecutando el efecto
        this.effect : efecto ejecutado
        this.item : objeto que posee el efecto, si el efecto proviene de un objeto
    `

}

game.wfrp4e.config.speciesSkills = {
        "human": [
            "Criar animales",
            "Carisma",
            "Frialdad",
            "Tasar",
            "Cotilleo",
            "Regatear",
            "Hablar idioma (Bretoniano)",
            "Hablar idioma (Tierras Desoladas)",
            "Mando",
            "Sabiduría académica (Reikland)",
            "Cuerpo a cuerpo (Básica)",
            "A distancia (Arco)"
        ],
        "dwarf": [
            "Consumir alcohol",
            "Frialdad",
            "Aguante",
            "Animar (Relatar)",
            "Tasar",
            "Intimidar",
            "Hablar idioma (Khazalid)",
            "Sabiduría académica (Enanos)",
            "Sabiduría académica (Geología)",
            "Sabiduría académica (Metalurgia)",
            "Cuerpo a cuerpo (Básica)",
            "Oficio (Cualquiera)"
        ],
        "halfling": [
            "Carisma",
            "Consumir alcohol",
            "Esquivar",
            "Jugar",
            "Regatear",
            "Intuición",
            "Hablar idioma (Asambleario)",
            "Sabiduría académica (Reikland)",
            "Percepción",
            "Prestidigitación",
            "Movimiento silencioso (Cualquiera)",
            "Oficio (Cocinero)"
        ],
        "helf": [
            "Frialdad",
            "Animar (Cantar)",
            "Tasar",
            "Hablar idioma (Eltharin)",
            "Mando",
            "Cuerpo a cuerpo (Básica)",
            "Orientación",
            "Percepción",
            "Tocar (Cualquiera)",
            "A distancia (Arco)",
            "Navegar",
            "Nadar"
        ],
        "welf": [
            "Atletismo",
            "Escalar",
            "Aguante",
            "Animar (Cantar)",
            "Intimidar",
            "Hablar idioma (Eltharin)",
            "Cuerpo a cuerpo (Básica)",
            "Supervivencia",
            "Percepción",
            "A distancia (Arco)",
            "Movimiento silencioso (Rural)",
            "Seguir rastros"
        ],
    }

game.wfrp4e.config.speciesTalents = {
        "human": [
            "Condenado",
            "Espabilado, Cortés",
            3
        ],
        "dwarf": [
            "Resistencia a la magia",
            "Visión nocturna",
            "Leer y escribir, Incansable",
            "Resuelto, Decidido",
            "Fornido",
            0
        ],
        "halfling": [
            "Sentidos desarrollados (Gusto)",
            "Visión nocturna",
            "Resistencia (Caos)",
            "Pequeño",
            2
        ],
        "helf": [
            "Sentidos desarrollados (Vista)",
            "Sangre fría, Espabilado",
            "Visión nocturna",
            "Clarividencia, Sexto sentido",
            "Leer y escribir",
            0
        ],
        "welf": [
            "Sentidos desarrollados (Vista)",
            "Recio, Clarividencia",
            "Visión nocturna",
            "Leer y escribir, Muy resistente",
            "Errante",
            0
        ]
    }

game.wfrp4e.config.subspecies = {
        human: {
            reiklander: {
                name: "Reiklandés",
                skills: [
                    "Criar animales",
                    "Carisma",
                    "Frialdad",
                    "Tasar",
                    "Cotilleo",
                    "Regatear",
                    "Hablar idioma (Bretoniano)",
                    "Hablar idioma (Tierras Desoladas)",
                    "Mando",
                    "Sabiduría académica (Reikland)",
                    "Cuerpo a cuerpo (Básica)",
                    "A distancia (Arco)"
                ],
                talents: [
                    "Condenado",
		    "Espabilado, Cortés",
                    3
                ]
            }
        }
    }

game.wfrp4e.config.classTrappings = {
        "Académicos": "Bandolera que contiene Material de escritura y 1d10 hojas de pergamino, Daga, Ropas, Bolsa",
        "Académico": "Bandolera que contiene Material de escritura y 1d10 hojas de pergamino, Daga, Ropas, Bolsa",
        "Burgueses": "Bandolera que contiene el almuerzo, Capa, Daga, Ropas, Bolsa, Sombrero",
        "Burgués": "Bandolera que contiene el almuerzo, Capa, Daga, Ropas, Bolsa, Sombrero",
        "Cortesanos": "Daga, Ropas de calidad, Bolsa conteniendo unas Pinzas, Limpiaorejas, Peine",
        "Cortesano": "Daga, Ropas de calidad, Bolsa conteniendo unas Pinzas, Limpiaorejas, Peine",
        "Campesinos": "Bandolera que contiene Raciones (1 día), Capa, Daga, Ropas, Bolsa",
        "Campesino": "Bandolera que contiene Raciones (1 día), Capa, Daga, Ropas, Bolsa",
        "Rurales": "Capa, Daga, Mochila que contiene un Yesquero, Ropas, Bolsa, Manta, Raciones (1 día)",
        "Rural": "Capa, Daga, Mochila que contiene un Yesquero, Ropas, Bolsa, Manta, Raciones (1 día)",
        "Ribereños": "Bandolera que contiene un Frasco de alcohol, Capa, Daga, Ropas, Bolsa",
	"Ribereño": "Bandolera que contiene un Frasco de alcohol, Capa, Daga, Ropas, Bolsa",
        "Pícaros": "Bandolera que contiene 2 Velas, 1d10 Cerillas, Capucha o Máscara, Daga, Ropas, Bolsa",
        "Pícaro": "Bandolera que contiene 2 Velas, 1d10 Cerillas, Capucha o Máscara, Daga, Ropas, Bolsa",
        "Guerreros": "Daga, Ropas, Bolsa, Un arma cuerpo a cuerpo",
        "Guerrero": "Daga, Ropas, Bolsa, Un arma cuerpo a cuerpo",
    }

game.wfrp4e.config.loreEffects = {
        "beasts": {
            name: "Saber de las Bestias",
            icon: "modules/wfrp4e-core/icons/spells/beasts.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "lore": true,
                    "script": `
                    let value = 1
                    let name = this.actor.prototypeToken.name
                    
                    if (game.user.isGM) {
                        game.user.targets.forEach(t => {
                            t.actor.applyFear(value, name)
                        })
                        game.user.updateTokenTargets([]);
                    }
                    else {
                        game.wfrp4e.utility.postFear(value, name)
                    }
                `
                }
            }
        },
        "death": {
            name: "Saber de la Muerte",
            icon: "modules/wfrp4e-core/icons/spells/death.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("fatigued")
                    }`
                }
            }
        },
        "fire": {
            name: "Saber del Fuego",
            icon: "modules/wfrp4e-core/icons/spells/fire.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("ablaze")
                    }`
                }
            }
        },
        "heavens": {
            name: "Saber de los Cielos",
            icon: "modules/wfrp4e-core/icons/spells/heavens.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                
                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }
                
                if (applyAP) {
                
                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;
                
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                    `
                }
            }
        },
        "metal": {
            name: "Saber del Metal",
            icon: "modules/wfrp4e-core/icons/spells/metal.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)

                let AP = args.AP
                let metalValue = 0;
                for (let layer of AP.layers) {
                   if (layer.metal) {
                      metalValue += layer.value
                   }
                }
                
                
                if (metalValue)
                    args.messageElements.push(\`-\${metalValue} Armadura Metálica\`)
                args.totalWoundLoss += metalValue
                
                if (applyAP) {
                
                   args.totalWoundLoss +=  metalValue
                   let newUsed = AP.used - metalValue;
                
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = newUsed + "/" + AP.value + " " + game.i18n.localize("AP")
                }
                `
                }
            }
        },
        "life": {
            name: "Saber de la Vida",
            icon: "modules/wfrp4e-core/icons/spells/life.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    fromUuid(this.effect.origin).then(caster => {
                        if (this.actor.isOwner)
                        {
                            if (!this.actor.has(game.i18n.localize("NAME.Daemonic")) && !this.actor.has(game.i18n.localize("NAME.Undead")))
                            {
                                let bleeding = this.actor.hasCondition("bleeding")
                                let fatigued = this.actor.hasCondition("fatigued")
                                if (bleeding) this.actor.removeCondition("bleeding", bleeding.flags.wfrp4e.value)
                                if (fatigued) this.actor.removeCondition("fatigued", fatigued.flags.wfrp4e.value)
                            }
                            else if (this.actor.has(game.i18n.localize("NAME.Undead")))
                                this.actor.applyBasicDamage(caster.system.characteristics.wp.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                        }
                    })`
                }
            }
        },
        "light": {
            name: "Saber de la Luz",
            icon: "modules/wfrp4e-core/icons/spells/light.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                fromUuid(this.effect.origin).then(caster => {
                    if (this.actor.isOwner)
                    {
                        let bleeding = this.actor.addCondition("blinded")
                        if (this.actor.has(game.i18n.localize("NAME.Undead")) || this.actor.has(game.i18n.localize("NAME.Daemonic")))
                            this.actor.applyBasicDamage(caster.system.characteristics.int.bonus, {damageType : game.wfrp4e.config.DAMAGE_TYPE.IGNORE_ALL});
                    }
                })`
                }
            }
        },
        "shadow": {
            name: "Saber de las Sombras",
            icon: "modules/wfrp4e-core/icons/spells/shadow.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "damage",
                    "effectTrigger": "applyDamage",
                    "lore": true,
                    "script": `
                let applyAP = (args.damageType == game.wfrp4e.config.DAMAGE_TYPE.IGNORE_TB || args.damageType == game.wfrp4e.config.DAMAGE_TYPE.NORMAL)
                
                if (applyAP) {
                   let AP = args.AP
                
                   args.totalWoundLoss += AP.used
                   let apIndex = args.messageElements.findIndex(i => i.includes(game.i18n.localize("AP")))
                   args.messageElements[apIndex] = "0/" + AP.value + " " + game.i18n.localize("AP")
                }`
                }
            }
        },
        "hedgecraft": {
            name: "Saber de la Adivinación",
            icon: "modules/wfrp4e-core/icons/spells/hedgecraft.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "actor",
                    "effectTrigger": "invoke",
                    "lore": true,
                    "script": ``
                }
            }
        },
        "witchcraft": {
            name: "Saber de la Brujería",
            icon: "modules/wfrp4e-core/icons/spells/witchcraft.png",
            transfer: false,
            flags: {
                wfrp4e: {
                    "effectApplication": "apply",
                    "effectTrigger": "oneTime",
                    "lore": true,
                    "script": `
                    if (this.actor.isOwner)
                    {
                        args.actor.addCondition("bleeding")
                    }`
                }
            }
        }
    }

});