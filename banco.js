<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        function banco(saldo, nconta){
            this.saldo = saldo;
            this.nconta = nconta;
            this.agencia = "banco do brasil"
            this.tipodeconta = "conta corente"
            this.mostrar = function (){
                window.alert(`você tem R$${this.saldo}`);
            }
            this.deposito = function(n){
                this.saldo += n
                window.alert(`foi deposito feito com susseso`)
            }
            this.sacar = function(n){
                if (this.saldo >= n){
                    this.saldo -= n
                    window.alert(`saque realizado com susseso`)
                }
                else{
                    window.alert(`você não tem saldo suficiente`)
                }
            }
            this.conta = function(){
                window.alert(`o numero da sua conta é ${this.nconta}`)
            }
        }
        var si = parseFloat(prompt(`digite o seu saldo inicial:`));
        var n = Math.floor(100* Math.random());
        var contadousuario = new banco(si,n);
        var sair = false
        while (sair == false){
            var op = prompt("o que deseja fazer? (1 para ver saldo, 2 para depositar, 3 para sacar, 4 para ver o numero da conta, 5 para sair)");
            switch(op){
                case '1':
                    contadousuario.mostrar();
                    break
                case "2" :
                    var dep = parseFloat(prompt(`quantos reais deseja depostar?`))
                    
                    contadousuario.deposito(dep);
                    break
                case "3":
                    var sac = parseFloat(prompt(`quantos reais deseja sacar?`))
                    contadousuario.sacar(sac)
                    break
                case "4":
                    contadousuario.conta()
                    break
                case "5":
                    window.alert(`obrigado por acessar nosso banco`)
                    sair = true
                    break
            }
        }
    </script>
</body>
</html>
