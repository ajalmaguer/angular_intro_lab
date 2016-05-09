angular
  .module("kittieApp")
  .controller("KittiesController", KittiesController)

function KittiesController() {
  var vm = this

  vm.remove = remove

  vm.allKitties = [
    {
      catName: 'Karl',
      monthsOld: 5,
      gender: 'boy',
      image: "images/carl.png",
      adopted: true
    },
    {
      catName: 'Jack',
      monthsOld: 4,
      gender: 'boy',
      image: "images/jack.png",
      adopted: false
    },
    {
      catName: 'Oscar',
      monthsOld: 2,
      gender: 'boy',
      image: "images/oscar.png",
      adopted: true
    },
    {
      catName: 'Princess Mew',
      monthsOld: 3,
      gender: 'girl',
      image: "images/princessmew.png",
      adopted: false
    }
  ]

  function remove (removeCat) {
    vm.allKitties = vm.allKitties.filter(function(cat){
      return cat.catName != removeCat.catName
    })
  }
}
