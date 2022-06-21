function calcularSalario(salario) {
    const Calsalario = salario * 12;

    return Calsalario;
}

function ButtonResult(){
    const InputSalary = document.getElementById("InputSalary");
    const SalaryValue = InputSalary.value;

    const Calsalario = calcularSalario(SalaryValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "tu salario en un year es: " + Calsalario;

}