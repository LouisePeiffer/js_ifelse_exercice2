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
// let abon = confirm('Voulez-vous vous abonner?')
// console.log(abon);
// if (abon == true) {
//     let which = confirm('Desirez-vous la formule Luxe ou Normale?')
//     if (which == true) {
//         alert('Bravo!')
//     }
//     else if (which == false) {
//         alert('Merci pour votre abonnement')
//     }
// }


// // 7
// let quest1 = prompt("J'ai quel âge?")
// let rep1 = '22'
// let quest2 = prompt("Ma filleule s'appelle?")
// let rep2 = 'Tita'
// if (quest1 == rep1 && quest2==rep2) {
//     alert('Bv')
// }
// else if (quest1 == rep1 || quest2 == rep2) {
//     alert('Presque')
// }
// else if (quest1!=rep1 && quest2!=rep2) {
//     alert('t nul')
// }

// 8
// let cine = parseInt(prompt('Bienvenue au Kinepolis! Quel âge avez-vous?'))
// if (cine > 18) {
//     alert('Vous êtes majeur, vous pouvez réserver')
// }
// else if (cine<18) {
//     alert('T trop petit')
// }
// else if (cine==18) {
//     alert('vasy')
// }
// else if (cine < 0) {
//     alert('Reste dans le ventre de ta mams')
// }
// else if (cine > 100) {
//     alert('Degach papy')
// }

// 9 
// let riche = confirm('Êtes-vous riche?')
// let vac = confirm('Voulez-vous partir en vacances?')
// let chat = confirm('Avez-vous un chat?')

// if (vac == false) {
//     alert("shii if you don't go I will")
// }
// else if (riche==false || chat==true) {
//     alert("Tu peux pas d'façon t'as un chat")
// }
// else if (riche==true && chat==false) {
//     alert("Leggoo")
// }
// else if (riche==true && chat==false && vac==true) {
//     alert("Go ahead gurl")
// }

