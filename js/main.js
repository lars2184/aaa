$(document).ready(function(){

  displayAnimals();
});

function displayAnimals(){

  var animals = initAnimals();
  var $kittenList = $('#kitten-list');
  $kittenList.html(" ");
  $.each(animals.kittens, function(index, kitten){
    $kittenList.append("<div class='panel panel-default'><div class='panel-heading'>"+kitten.name+"</div><div class='panel-body'><img class='thumbnail' src='"+kitten.imageUrl+"' alt=''>"+kitten.description+"<br>Size: "+kitten.size+"<br>Birth date: "+kitten.birthDate+"</div></div>");
  });

}

function initAnimals(){

  var animals = {

    "kittens":[
      {"name":"Simba","description":"Simba made the transition from the printed page to the television screen during the 1960s. It is very difficult to find homes for line drawings like Simba, so we hope to find that special family who will take this Japanese sweetheart into their hearts and color inside the lines.","size":"Animated","birthDate":"1950","imageUrl":"img/simba_th.jpg"},
      {"name":"Baby","description":"Baby is a leopard, imported from South America by the fictional brother of Katharine Hepburn. Though he has a reputation for eating car upholstery and trucks full of chickens, we think that he could be a wonderful housepet for  the right madcap heroine and/or paleontologist","size":"Medium","birthDate":"1938","imageUrl":"img/baby_th.gif"},
      {"name":"Tigger","description":"Originally a character in a children's book, before Disney brought him unwelcome fame and attention, Tigger is now looking for a quiet home where he can live out of the public eye and not have to leap in the air all the time. He would prefer to be the only cat, and especially would like to avoid homes with fat honey-obsessed bears","size":"Medium","birthDate":"1924","imageUrl":"img/tigger_th.png"},
      {"name":"Jespah, Gopa and Little Elsa","description":"These three siblings must be adopted together, and allowed to live free. They will grow to be as much as 500 pounds each. If you're interested in adopting this lovable trio, please be aware that each one will eat as much as 90 pounds of meat at every meal -- preferably zebra, antelope or buffalo.  So budget accordingly!","size":"Very, very large","birthDate":"1966","imageUrl":"img/bornfree_th.jpg"},
      {"name":"Grumpy Cat","description":"Grumpy Cat is a notoriously foul-tempered feline, with world-wide renown, prone to complaining about everything and everyone in his life. His new Forever Friend will need a strong sense of self-esteem and a willingness to be groused about in public.","size":"Small","birthDate":"2012","imageUrl":"img/grumpy_th.jpg"},
      {"name":"Simba 2","description":"Simba was orphaned at an early age and would like to find a new home free from family dysfunction or murderous relatives. He gets along well with other animals,especially meerkats and warthogs","size":"Mighty","birthDate":"1994","imageUrl":"img/lionking_th.jpg"}
    ]
  }

  return(animals);
}

/*


<div class="panel panel-default">
            <div class="panel-heading">Kitten 1</div>
            <div class="panel-body">Description</div>
          </div>
*/