// // 1
// let num1 = prompt('Premier chiffre?')
// let num2 = prompt('Deuxième chiffre?')
// alert("Le nombre x et le nombre y sont-ils égaux ? : " + Boolean(num1==num2))
// if (num1 == num2) {
//     alert("Le nombre x et le nombre y sont-ils égaux ? : Vrai")
// }
// else (
//     alert("Le nombre x et le nombre y sont-ils égaux ? : Faux")
// )

// // 2
// let num3 = prompt('Premier chiffre?')
// let num4 = prompt('Deuxième chiffre?')
// alert("Le nombre x et-il plus petit que le nombre y ? : " + Boolean(num3<num4))

// 3 
// let num5 = prompt('Chiffre?')
// let num6 = prompt('Chiffre?')
// let num7 = prompt('Chiffre?')
// alert("La somme du nombre x + le nombre y est-elle plus grande que le nombre z ? : " + Boolean((num5+num6)>num7) )
// console.log(num5);

// // 4
// let phrase = prompt('Rentrez une phrase')
// let carac = parseInt(prompt('Combien de caractères pensez-vous que votre phrase contient?'))
// if (phrase.length == carac) {
//     alert(`Vous aviez en effet ${carac} caractères dans votre phrase`)
// }
// else (
//     alert(`Vous étiez à ${Math.abs(carac-phrase.length)} unités de la bonne réponse`)
// )

// // 5
// let prenom = prompt('Prénom')
// if (prenom == '') {
//     let prenom2 = prompt('Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?')
//     alert(`Bonjour ${prenom2}`)
// }
// else (
//     alert(`Bonjour ${prenom}`)
// )

// 6
let abon = confirm('Voulez-vous vous abonner?')
console.log(abon);
if (abon == true) {
    let which = confirm('Desirez-vous la formule Luxe ou Normale?')
    if (which = true) {
        alert('Bravo!')
    }
    else {
        alert('Cool!')
    }
}


