var salario=0;
var salarioBase = parseFloat(prompt("salario"));
var horaSemanalTrabalhada = parseFloat(prompt("horas semanais trabalhadas"));
var hora = salarioBase/160;
var horaExtra = hora*1.5;
if (horaSemanalTrabalhada >=40){
  salario = salarioBase + (horaextra*(horasemanalTrabalhada-40));
  alert ("salario bruto:" + salario + "\nsaláriolíquido:" + salario*0.975);
}
  else{
     salario = salarioBase - (horaSemanalTrabalhada*hora);
     160  //160 == 40h carga trabalhada * 4 semanas do mês (aproximado)
                  0.975 //ISS calculado 2,5%

  }