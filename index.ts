import * as fs from "fs";
import csv from 'csv-parser';

interface ICsvData {
    nrInst: string;
    nrAgencia: string;
    cdClient: string;
    nmClient: string;
    nrCpfCnpj: string;
    nrContrato: string;
    dtContrato: string;
    qtPrestacoes: string;
    vlTotal: string;
    cdProduto: string;
    dsProduto: string;
    cdCarteira: string;
    dsCarteira: string;
    nrProposta: string;
    nrPresta: string;
    tpPresta: string;
    nrSeqPre: string;
    dtVctPre: string;
    vlPresta: string;
    vlMora: string;
    vlMulta: string;
    vlOutAcr: string;
    vlIof: string;
    vlDescon: string;
    vlAtual: string;
    idSituac: string;
    idSitVen: string;
}

const { format: currencyFormater} = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const readCSV = () => {
    const results: ICsvData[] = [];
    console.log('running')
    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            results.map(data => {
                console.log(currencyFormater(parseFloat(data.vlAtual)))
            })
        });
}

readCSV()