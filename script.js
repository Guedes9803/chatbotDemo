

var chatMessages = [{
    name: "ms1",
    msg: "Lorem ipsum dolor",
    delay: 1000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms2",
    msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris nunc, commodo a tristique non, feugiat non sem.",
    delay: 6000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms3",
    msg: "Mauris vitae commodo lacus. Nullam porta ex sit amet tincidunt fringilla.",
    delay: 3000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms4",
    msg: "Pellentesque semper nibh magna, ut tristique neque tincidunt at. Phasellus malesuada sed quam sit amet tempus.",
    delay: 7000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms5",
    msg: "Etiam nec tortor et?",
    delay: 3000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms6",
    msg: "Nulla a turpis vehicula augue accumsan sollicitudin. Cras elementum, ipsum non iaculis dignissim, leo neque dictum massa, vel fringilla nisl felis et justo.",
    delay: 11000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms7",
    msg: "In hac habitasse platea dictumst. Cras viverra consequat velit, dignissim fermentum leo pellentesque ut. Vivamus eget malesuada diam. Nulla condimentum molestie nibh, et consectetur diam commodo sit amet.",
    delay: 10000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms8",
    msg: "Phasellus bibendum libero non ex vehicula, vestibulum cursus ligula blandit.",
    delay: 8000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms9",
    msg: "Pellentesque ornare feugiat magna sit amet maximus. Proin feugiat purus a odio luctus tristique. Donec elementum interdum libero eget efficitur.",
    delay: 4000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms10",
    msg: "Proin vitae enim eu mi consectetur scelerisque nec vel tellus. Etiam et porta mauris. Nam aliquet varius nibh ac elementum. Nulla sit amet purus ac orci dapibus sodales ac sodales ex. Suspendisse pellentesque tincidunt tellus, et fringilla massa sodales ac. Fusce sodales magna eget pellentesque rhoncus.",
    delay: 8000,
    align: "left",
    showTime: false,
    time: "19:58"
  },
  {
    name: "ms11",
    msg: "Maecenas a egestas purus.",
    delay: 4000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms12",
    msg: "Nec tempor nunc?",
    delay: 4000,
    align: "right",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms14",
    msg: " Donec rhoncus massa a turpis ultricies, at facilisis velit porta. Curabitur dictum nisl in odio vehicula malesuada. Aliquam feugiat lacus at sollicitudin pulvinar.",
    delay: 9000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms15",
    msg: "Quisque porta egestas turpis.",
    delay: 3000,
    align: "left",
    showTime: true,
    time: "19:58"
  },
  {
    name: "ms16",
    msg: "Donec mattis consectetur varius.",
    delay: 3000,
    align: "left",
    showTime: false,
    time: "19:58"
  }
                     ];
  var chatDelay = 0;

  var currentStep = 1;

  var currentSubStep = 0;

  var currentMessage = 1;

  var usuario = [{
    nome: "Lucas",
    data_nasc: "03/11/1998",
    cnpj: "00.000.000/0000-00",
    cpf: "000.000.000-00"
  }];
  
  function onRowAdded() {
    $('.chat-container').animate({
      scrollTop: $('.chat-container').prop('scrollHeight')
    });
  };

  function disableInputField(delay) {
    setTimeout(function(){document.getElementById("chat-input").disabled = false;},delay);
  }

  function step1call() {
    var today = new Date();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: "Ola, vou te auxiliar no seu cadastro de plano de saude!",
      delay: 2000,
      align: "left",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
      },
      {
        name: "ms" + (currentMessage+1),
        msg: "Comece informando o CNPJ da empresa em que trabalha",
        delay: 3000,
        align: "left",
        showTime: true,
        time: today.getHours() + ":" + today.getMinutes()
      }
    ]
    currentMessage+=2;
    sendMessage(stepMessages);
    $("#chat-input").mask('00.000.000/0000-00', {reverse: true});
  }

  function step2call() {
    var today = new Date();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: true,
      time: today.getHours() + ":" + today.getMinutes()
    },
    {
      name: "ms" + (currentMessage+1),
      msg: "Agora informe nessa ordem os seguintes dados: </br>Nome:</br>Data de Nascimento:</br>CPF:",
      delay: 2000,
      align: "left",
      showTime: true,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    usuario[0].cnpj = $("#chat-input").val();
    currentMessage+=2;
    sendMessage(stepMessages);
    $("#chat-input").unmask();
    $("#chat-input").val("");
  }

  function step3call(){
    var today = new Date();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    sendMessage(stepMessages);
    currentMessage++;
    usuario[0].nome = $("#chat-input").val();
    $("#chat-input").mask('00/00/0000');
    $("#chat-input").val("");
  }

  function step4call(){
    var today = new Date();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    usuario[0].data_nasc = $("#chat-input").val();
    currentMessage+=2;
    sendMessage(stepMessages);
    $("#chat-input").mask('000.000.000-00', {reverse: true})
    $("#chat-input").val("");
  }

  function step45call(){
    var today = new Date();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    },
    {
      name: "ms" + (currentMessage+1),
      msg: "Você possuie algum dependente que também precisa do plano?",
      delay: 2000,
      align: "left",
      showTime: true,
      time: today.getHours() + ":" + today.getMinutes()
    }
    ]
    usuario[0].cpf = $("#chat-input").val();
    currentMessage+=2;
    sendMessage(stepMessages);
    $("#chat-input").unmask();
    $("#chat-input").val("");
  }

  function step5call(){
    debugger;
    var today = new Date();
    usuario.push({nome: "", cnpj: "", data_nasc:"", cpf: ""});
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: "Sim",
      delay: 1000,
      align: "right",
      showTime: true,
      time: today.getHours() + ":" + today.getMinutes()
    },{
      name: "ms" + (currentMessage+1),
      msg: "O processo para cadastro será o mesmo, que antes sem a necessidade do CNPJ",
      delay: 1000,
      align: "left",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    },
    {
      name: "ms" + (currentMessage+2),
      msg: "Comece informando nessa ordem os seguintes dados: </br>Nome:</br>Data de Nascimento:</br>CPF:",
      delay: 3000,
      align: "left",
      showTime: true,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    sendMessage(stepMessages);
    $("#chat-input").unmask();
    $("#chat-input").val("");
  }


  function step6call(i){
    var today = new Date();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    usuario[i].nome = $("#chat-input").val()
    sendMessage(stepMessages);
    currentMessage++;    
    $("#chat-input").mask('00/00/0000');
    $("#chat-input").val("");
  }

  function step7call(i){
    var today = new Date();
    usuario[i].data_nasc = $("#chat-input").val();
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    sendMessage(stepMessages);
    currentMessage++;    
    $("#chat-input").mask('000.000.000-00', {reverse: true})
    $("#chat-input").val("");
  }

  function step8call(i){
    var today = new Date();
    usuario[i].cpf = $("#chat-input").val()
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: $("#chat-input").val(),
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    },

    {
      name: "ms" + currentMessage,
      msg: "Essas são as informações do dependente :</br> Nome: " + usuario[i].nome +  "</br> Data de nascimento: " + usuario[i].data_nasc + "</br>CPF: " + usuario[i].cpf,
      delay: 1000,
      align: "left",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    },
    {
      name: "ms" + currentMessage,
      msg: "Deseja  cadastrar mais alguem?",
      delay: 1000,
      align: "left",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    }
  ]
    sendMessage(stepMessages);
    currentMessage++;    
    $("#chat-input").unmask();
    $("#chat-input").val("");
  }

  function step105call(){
    var today = new Date();
    var string = "";
    if(usuario.length > 1)
    {
      string = sendAllUserInfo();
    }
    var stepMessages = [{
      name: "ms" + currentMessage,
      msg: "Não",
      delay: 1000,
      align: "right",
      showTime: false,
      time: today.getHours() + ":" + today.getMinutes()
    },
    {
      name: "ms" + (currentMessage+2),
      msg: "Essas são suas informações:</br> Nome: " + usuario[0].nome + "</br>CNPJ: " + usuario[0].cnpj + "</br> Data de nascimento: " + usuario[0].data_nasc + "</br> CPF: " + usuario[0].cpf + string,
      delay: 3000,
      align: "left",
      showTime: true,
      time: today.getHours() + ":" + today.getMinutes()
    }]
    sendMessage(stepMessages);
  }
  
  function sendAllUserInfo() {
    var i = 1;
    var string = "</br></br>Essas são as informações dos dependetes:"
    $.each(usuario, function(index, obj) {
      if(i != 1)
      {
        string+= "</br> Nome: " + obj.nome + "</br> Data de nascimento: " + obj.data_nasc + "</br> CPF:" + obj.cpf;
        console.log(obj.nome + i);
      }
      i++;
    })
    return string;
  }

  function sendMessage(messages) {
    var altChatDelay = 0;
    $.each(messages, function(index, obj) {
      altChatDelay = altChatDelay + 1000;
      altChatDelay2 = altChatDelay + obj.delay;
      altChatDelay3 = altChatDelay2 + 10;
      scrollDelay = chatDelay;
      chatTimeString = " ";
      msgname = "." + obj.name;
      msginner = ".messageinner-" + obj.name;
      spinner = ".sp-" + obj.name;
      if (obj.showTime == true) {
        chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
      }
      $(".chat-message-list-2").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
      $(msgname).delay(altChatDelay).fadeIn();
      $(spinner).delay(altChatDelay2).hide(1);
      $(msginner).delay(altChatDelay3).fadeIn();
      setTimeout(onRowAdded, altChatDelay);
      setTimeout(onRowAdded, altChatDelay3);
      altChatDelay = altChatDelay3;
    });
  }

  // $.each(chatMessages, function(index, obj) {
  //   chatDelay = chatDelay + 4000;
  //   chatDelay2 = chatDelay + obj.delay;
  //   chatDelay3 = chatDelay2 + 10;
  //   scrollDelay = chatDelay;
  //   chatTimeString = " ";
  //   msgname = "." + obj.name;
  //   msginner = ".messageinner-" + obj.name;
  //   spinner = ".sp-" + obj.name;
  //   if (obj.showTime == true) {
  //     chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
  //   }
  //   $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  //   $(msgname).delay(chatDelay).fadeIn();
  //   $(spinner).delay(chatDelay2).hide(1);
  //   $(msginner).delay(chatDelay3).fadeIn();
  //   setTimeout(onRowAdded, chatDelay);
  //   setTimeout(onRowAdded, chatDelay3);
  //   chatDelay = chatDelay3;

  // });

  $
  $("#chat-option-1").on( "click",function(index){
    switch(currentStep){
      case 6:
        currentSubStep++;
        step5call();
        $("#chat-button").hide(500);
        $("#chat-cont").show(1000);
        currentStep++;

        break;
      default:
        break;
    }
  });
  $("#chat-option-2").on( "click",function(index){
    switch(currentStep){
      case 6:
        step105call();
        $("#chat-button").hide(500);
        $("#chat-cont").show(1000);
        currentStep++;
        break;
      default:
        break;
    }
  });
  $("#chat-submit").on( "click",function(index){
    switch(currentStep)
    {
      case 1:
          step1call();
          currentStep++;
        break;
      case 2:
          if(validarCNPJ($("#chat-input").val()))
          {
            $("#chat-cont").removeClass("error");
            $("#error-field").attr('hidden', true);
            step2call();
            currentStep++;
          }
          else{
            $("#chat-cont").addClass("error");
            $("#error-field").attr('hidden', false);
            //$("#error-field").show();
          }
          
          
        break;
      case 3:
        if($("#chat-input").val() != '')
        {
          $("#chat-cont").removeClass("error");
          $("#error-field").attr('hidden', true);
          step3call();
          currentStep++;
        }
        else{
          $("#chat-cont").addClass("error");
          $("#error-field").attr('hidden', false)
          $(".error-message").html("Preencha o campo com o seu nome!");
        }
        break;
      case 4:
        if($("#chat-input").val() != '')
        {
          $("#chat-cont").removeClass("error");
          $("#error-field").attr('hidden', true);
          step4call();
          currentStep++;
          
        }
        else{
          $("#chat-cont").addClass("error");
          $("#error-field").attr('hidden', false)
          $(".error-message").html("Preencha o campo com o sua data de nascimento");
        }

        break;
      case 5:
          if(validarCPF($("#chat-input").val()))
          {
            $("#chat-cont").removeClass("error");
            $("#error-field").attr('hidden', true);
            step45call();
            $("#chat-cont").hide(500);
            $("#chat-button").show(1000);
            currentStep++;
          }else{
            $("#chat-cont").addClass("error");
            $("#error-field").attr('hidden', false)
            $(".error-message").html("CPF Invalido");
          }
          break; 
      case 7:
        if($("#chat-input").val() != '')
        {
          $("#chat-cont").removeClass("error");
          $("#error-field").attr('hidden', true);
          step6call(currentSubStep);
          currentStep++;
        }
        else{
          $("#chat-cont").addClass("error");
          $("#error-field").attr('hidden', false)
          $(".error-message").html("Preencha o campo com o nome do dependente!");
        }
        break;
      case 8:
        if($("#chat-input").val() != '')
        {
          $("#chat-cont").removeClass("error");
          $("#error-field").attr('hidden', true);
          step7call (currentSubStep);
        }
        else{
          $("#chat-cont").addClass("error");
          $("#error-field").attr('hidden', false)
          $(".error-message").html("Preencha o campo com a data de nascimento do dependente");
        }
          
          currentStep++;
          break;
      case 9:
        if(validarCPF($("#chat-input").val()))
        {
          $("#chat-cont").removeClass("error");
          $("#error-field").attr('hidden', true);
          step8call (currentSubStep);
          $("#chat-cont").hide(500);
          $("#chat-button").show(1000);
          currentStep = 6;
        }else{
          $("#chat-cont").addClass("error");
          $("#error-field").attr('hidden', false)
          $(".error-message").html("CPF Invalido");
        }
        break;
      default:
        break;
    }

    // var today = new Date();
    // obj = {
    //   name: "ms16",
    //   msg: $("#chat-input").val(),
    //   delay: 1000,
    //   align: "left",
    //   showTime: true,
    //   time: today.getHours() + ":" + today.getMinutes()
    // };
    // if(currentStep % 2 == 0){
    //   obj.align = "right";
    // }
    // $("#chat-input").val('');
    // altChatDelay = altChatDelay + 1000;
    // altChatDelay2 = altChatDelay + obj.delay;
    // altChatDelay3 = altChatDelay2 + 10;
    // chatTimeString = " ";
    // msgname = "." + obj.name;
    // msginner = ".messageinner-" + obj.name;
    // spinner = ".sp-" + obj.name;
    // if (obj.showTime == true) {
    //   chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
    // }
    // var str = "";
    // str += "<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>";
    // $(".chat-message-list-2").append(str);
    // console.log(str);
    // $(msgname).delay(altChatDelay).fadeIn();
    // $(spinner).delay(altChatDelay2).hide(1);
    // $(msginner).delay(altChatDelay3).fadeIn();
    // setTimeout(onRowAdded, altChatDelay);
    // setTimeout(onRowAdded, altChatDelay3);
    // currentStep++;
    // console.log(currentStep);
  });

  $("#chat-input").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#chat-submit").click();
    }
});

function validarCNPJ(cnpj) {
 
  cnpj = cnpj.replace(/[^\d]+/g,'');

  if(cnpj == '') return false;
   
  if (cnpj.length != 14)
      return false;

  // Elimina CNPJs invalidos conhecidos
  if (cnpj == "00000000000000" || 
      cnpj == "11111111111111" || 
      cnpj == "22222222222222" || 
      cnpj == "33333333333333" || 
      cnpj == "44444444444444" || 
      cnpj == "55555555555555" || 
      cnpj == "66666666666666" || 
      cnpj == "77777777777777" || 
      cnpj == "88888888888888" || 
      cnpj == "99999999999999")
      return false;
       
  // Valida DVs
  tamanho = cnpj.length - 2
  numeros = cnpj.substring(0,tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(0))
      return false;
       
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2)
          pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digitos.charAt(1))
        return false;
         
  return true;
  
}

function validarCPF(cpf) {
  if (typeof cpf !== "string") return false
  cpf = cpf.replace(/[\s.-]*/igm, '')
  console.log(cpf);
  if (
      !cpf ||
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999" 
  ) {
      return false
  }
  var soma = 0
  var resto
  for (var i = 1; i <= 9; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(9, 10)) ) return false
  soma = 0
  for (var i = 1; i <= 10; i++) 
      soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if ((resto == 10) || (resto == 11))  resto = 0
  if (resto != parseInt(cpf.substring(10, 11) ) ) return false
  return true
}