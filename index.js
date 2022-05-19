function mediaNotas() {
    let quantidadeNotas = Number(prompt('Digite o número de notas:'));

    if (!quantidadeNotas || quantidadeNotas <= 1) {
        alert('Digite um número maiores ou igual a dois!');
        mediaNotas();

    } else {
        lerNotas();

        function lerNotas() {
            let nota = [];

            for (let i = 0; i < quantidadeNotas; i++) {
                nota[i] = Number(prompt(`Digite a nota ${i + 1}:`));

                if (isNaN(nota[i])) {
                    alert('Digite apenas números e decimais separados pos ponto".".');
                    lerNotas();
                    break;

                } else {
                    continue;
                }
            }

            let resultadoSoma = 0;
            for (let ind = 0; ind < nota.length; ind++) {
                resultadoSoma = nota[ind] + resultadoSoma;
            }

            let resultadoMedia = Number(resultadoSoma / quantidadeNotas);
            alert(`A Média das notas ${nota.join(' - ')} é igual a: ${resultadoMedia} `);

            resultadoFinal();

            function resultadoFinal(){
                if(resultadoMedia <= 5.0){
                    alert('Reprovado!🤦‍♂️');
                    novaMedia();
                } else if(resultadoMedia <= 7.0){
                    alert('Recuperação!😒');
                    novaMedia();
                }else{
                    alert('Aprovado!😎');
                    novaMedia();
                }            
        }
    }
    }
    
    function novaMedia() {
        let opcao = Number(prompt('Gostaria de calcular uma nova média?\n1 - Sim\n2 - Não'));

        if (opcao == 1) {
            mediaNotas();
        } else if (opcao == 2) {
            alert('Obrigado! Até a próxima.🙋‍♂️');
            process.exit();
        }else{
            alert('Opção inválida!');
            novaMedia();
        }
    }
}

mediaNotas();